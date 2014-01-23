//...........................................................................//
// DataProvider and DataType namespace.......................................//

// Author: Ulrich Roegelein

//...........................................................................//
// bindable functions........................................................//
// these bindable functions work as templates on the this object.............//

VBI.Bindable = {};

VBI.Bindable.RemoveTypeObject = function( o )
{
   var nCount = this.length;
   for( var nJ = 0; nJ < nCount; ++nJ )
   {
      if( this[ nJ ] == o )
      {
         this[ nJ ].clear();
         this[ nJ ] = null;
         break;
      }
   }
};

//...........................................................................//
// helper functions..........................................................//

VBI.isInt = function( input )
{
   return ((input - 0) == input && input % 1==0);
};

VBI.FindElementByKey = function( elementarray, attributeindex, value )
{
   if( map )
      if( map[ value ] )
         return map[ value ];
   for( var nJ = 0; nJ < elementarray.length; ++nJ )
   {
      if( elementarray[nJ].m_dataattributes.length <= attributeindex )
         continue;

      if( elementarray[nJ].m_dataattributes[ attributeindex ] == value )
         return elementarray[nJ];
   }
   return null;
};

VBI.IndexOf = function( array, ele )
{
   // to not use indexof in an array, we do this function here...............//
   var len = array.length;
   for( var nJ = 0; nJ < len; ++nJ )
      if( ele == array[ nJ ] ) return nJ;

   return -1;
};

// data type enumerator......................................................//
VBI.Types = 
{ 
   // type enumeration.......................................................//
   st_unknown : 0, st_vector : 1, st_string : 2, st_vectorarray : 3, st_float : 4, st_color : 5, st_long : 6, st_bool : 7,

   // type conversions.......................................................//

   //........................................................................//      
   // from string conversions................................................//

   string2bool : function( a )
   {
      var tmp = a.slice(0,1);                // check first character only
      return ( tmp == 't' || tmp == '1' || tmp == 'X' ) ? true : false;
   },

   string2vector : function( a )
   {
      var array = a.split(';');
      for( var nJ = 0; nJ < array.length; ++nJ )
         array[nJ] = parseFloat( array[nJ] );
      return array;
   },      

   string2color : function( a )
   {
      // the value has to be converted to a color value...................//
      var cache;   
      if( cache = /^RGBA\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec( a ) )
      {
         cache = [+cache[1], +cache[2], +cache[3], parseFloat( +cache[4] )/255.0 ];
         return "rgba(" + cache[0] + "," + cache[1] + "," + cache[2] + "," + cache[3] + ")";
      } else
      if( cache = /^RGB\(([\d]+),([\d]+),([\d]+)\)/.exec( a ) )
      {
         cache = [+cache[1], +cache[2], +cache[3] ];
         return "rgba(" + cache[0] + "," + cache[1] + "," + cache[2] + ", 1.0 )";
      } 

      return "rgba( 255, 0, 0, 1.0 )";
   },

   string2long : function( a )
   {
      return parseInt( a, 10 );
   },

   string2float : function( a )
   {
      return parseFloat( a );
   },

   //........................................................................//      
   // to string conversions...................................................//

   vector2string : function( a )
   {
      // merge to a semicolon seperated string......................//
      tmp = "";
      for( var nJ = 0; nJ < a.length; ++nJ )
      {
         tmp += a[ nJ ];
         if( ( nJ + 1 ) < a.length )
            tmp += ";";
      }
      return tmp;
   },

   color2string : function( a )
   {
      var res;   
      if( res = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec( a ) )
      {
         res = [+res[1], +res[2], +res[3], parseInt( parseFloat( +res[4] ) * 255.0 )];
         return "RGBA(" + res[0] + "," + res[1] + "," + res[2] + "," + res[3] + ")";
      }
      return null;
   },


   long2float : function( a )
   {
      return parseFloat( a );
   },

   float2long : function( a )
   {
      return parseInt( a );
   },

 };


//...........................................................................//
// data type provider........................................................//
//...........................................................................//

VBI.DataTypeProvider = function()
{
	var datatypeprovider = {};
   datatypeprovider.m_datatypenodes = [];
   datatypeprovider.vbiclass = "DataTypeProvider";	

   //........................................................................//
   // general purpose functions..............................................//

   datatypeprovider.isParentOf = function( oParent, oCurrent  )
   {
      // check if oParent is a parent of oCurrent
      var tmp = oCurrent;
      while( tmp = tmp.m_Parent )
      {
         if( tmp == oParent )
            return true;
      }
      return false;
   };

   //........................................................................//
   // interface functions....................................................//

   datatypeprovider.clear = function()
   {
      // clear the datatypeprovider..........................................//
      var o, nCount = this.m_datatypenodes.length;
      for( var nJ = 0; nJ < nCount; ++nJ )
         if( o = this.m_datatypenodes[nJ] )
            o.clear();
      
      // reset array
      this.m_datatypenodes = [];
   };
      
   datatypeprovider.load = function( dat, ctx )
   {
      // remove data first...................................................//
      // due sequence is not determined in our json, the sequence is always..//
      // remove then set, this can be different in the xml implementation....//
      // because the sequence is specified there.............................//

      var nCount;

      // load the json delta data............................................//
      if( dat.Set )
      {
         // debugger;
         // todo: process different kinds of set to enable delta
         this.clear();
      
         var dtn;
         if( jQuery.type( dat.Set.N ) == 'object' )
         {
            // todo: load when there is only one object
         }  else
         if( jQuery.type( dat.Set.N ) == 'array' )
         {
            // load from array
            for( var i = 0; i < dat.Set.N.length; ++i )
            {
               this.m_datatypenodes.push( dtn = new VBI.DataTypeProvider.DataTypeNode( this, this.m_datatypenodes.length ) );

               if( dat.Set.N[i].name )
                  dtn.m_Name = dat.Set.N[i].name;
               if( dat.Set.N[i].key )
                  dtn.m_Key = dat.Set.N[i].key;
                  
               // load subsequent data.......................................//
               dtn.load( dat.Set.N[i] );
            }
         }      
      }

      if( dat.Remove )
      {
         var o;
         if( jQuery.type( dat.Remove ) == 'object' )
         {
            // todo: execute remove function when only an object 
         }  else
         if( jQuery.type( dat.Remove ) == 'array' )
         {
            // load from array
            nCount = dat.Remove.length;
            for( var nJ = 0; nJ < nCount; ++nJ )
            {
               var path = dat.Remove[nJ].name.split(".");
               if( dat.Remove[nJ].type == 'A' )
               {
                  // remove an attribute
                  if( o = datatypeprovider.FindTypeAttributeFromPath( path ) )
                     (VBI.Bindable.RemoveTypeObject.bind( o.m_Parent.m_datatypeattributes ))( o );
               } else
               if( dat.Remove[nJ].type == 'N' )
               {
                  // remove a node
                  if( o = datatypeprovider.FindTypeNodeFromPath( path ) )
                     (VBI.Bindable.RemoveTypeObject.bind( o.m_Parent.m_datatypenodes ))( o );
               }
            }
         }
      }
   };

   datatypeprovider.GetTypeNode = function( name, bcreate )
   {
      // get the type node...................................................//
      // when not available, create it.......................................//

	   for( var i = 0; i < this.m_datatypenodes.length; ++i )
      {
         if( this.m_datatypenodes[i].m_Name == name )
            return this.m_datatypenodes[i];
      }

      // not found, create it................................................//
      if( !bcreate )
         return null;

      var node;
      this.m_datatypenodes.push( node = new VBI.DataTypeProvider.DataTypeNode( null, 0 ) );
      node.m_Name = name;

      return node;   
   };

   datatypeprovider.FindTypeNodeFromPath = function( path )
   {
      var nodeTemp, node = this.GetTypeNode( path[0], false );    // find node but do not create     
      for( var nJ = 1; nJ < path.length; ++nJ )
      {
         if( !( nodeTemp = node.GetTypeNode( path[nJ], false ) ) )
            continue;

         node = nodeTemp;
      }

      return node;
   };

   datatypeprovider.FindTypeAttributeFromPath = function( path )
   {
      var ntPath = [];
      for( var nJ = 0; nJ < (path.length - 1); ++nJ )
         ntPath.push( path[nJ] );
      
      var nt = this.FindTypeNodeFromPath( ntPath );   // find the nodetype
      return nt.GetTypeAttribute( path[nJ] );         // find the attribute on the nodetype
   };

   //........................................................................//
   // data type node.........................................................//      

   VBI.DataTypeProvider.DataTypeNode = function( parent, arrayindex ) 
   {
      var datatypenode = {};
      datatypenode.m_datatypenodes = [];        // a node can have other nodes or
      datatypenode.m_datatypeattributes = [];   // attributes
      datatypenode.m_nArrayIndex = arrayindex;  // node index inside parents container

      // a data node contains elements.......................................//
      datatypenode.m_Name = "";
      datatypenode.m_Key = null;
      datatypenode.m_Parent = parent;

      datatypenode.clear = function()
      {
         var o, nJ, nCount;         
         
         // clear inner data.................................................//            
         datatypenode.m_Parent = null;

         // clear the nodes..................................................//
         nCount = datatypenode.m_datatypenodes.length;
         for( nJ = 0; nJ < nCount; ++nJ )
            if( o = datatypenode.m_datatypenodes[nJ] )
               o.clear();
         datatypenode.m_datatypenodes = [];

         // clear the attributes.............................................//
         nCount = datatypenode.m_datatypeattributes.length;
         for( nJ = 0; nJ < nCount; ++nJ )
            if( o = datatypenode.m_datatypeattributes[nJ] )
               o.clear();
         datatypenode.m_datatypeattributes = [];
      };

      datatypenode.load = function( dat )
      {
         // load data type nodes attributes..................................//
         if( dat.name )
            datatypenode.m_Name = dat.name;
         if( dat.key )
            datatypenode.m_Key = dat.key;

         // load the attributes..............................................//
         if( dat.A )
         {
            var ta;
            if( jQuery.type( dat.A ) == 'array' )
            { 
               for( var i = 0; i < dat.A.length; ++i )
               {
                  datatypenode.m_datatypeattributes.push( ta = new VBI.DataTypeProvider.DataTypeAttribute( datatypenode.m_datatypeattributes.length ) );               
                  ta.m_Parent = this; // set the parent
                  
                  // load subsequent data....................................//
                  ta.load(  dat.A[i] );
               }
            } else
            if( jQuery.type( dat.A ) == 'object' )
            {
               // read the object............................................//
               datatypenode.m_datatypeattributes.push( ta = new VBI.DataTypeProvider.DataTypeAttribute( datatypenode.m_datatypeattributes.length ) );               
               ta.m_Parent = this; // set the parent
                  
               // load subsequent data.......................................//
               ta.load( dat.A );
            }
         } 
         
         // load subsequent nodes............................................//
         if( dat.N )
         {
            if( jQuery.type( dat.N ) == 'array' )
            { 
               for( var i = 0; i < dat.N.length; ++i )
               {
                  var tn;
                  datatypenode.m_datatypenodes.push( tn = new VBI.DataTypeProvider.DataTypeNode( this, datatypenode.m_datatypenodes.length ) );

                  // load subsequent data....................................//
                  tn.load( dat.N[i] );
               }
            } else
            if( jQuery.type( dat.N ) == 'object' )
            {
               var tn;
               datatypenode.m_datatypenodes.push( tn = new VBI.DataTypeProvider.DataTypeNode( this, datatypenode.m_datatypenodes.length ) );
                 
               // load subsequent data....................................//
               tn.load( dat.N );
            }
         }
      }; // end of load()

      datatypenode.GetTypeNode = function( name, bcreate )
      {
         // get the type node................................................//
         // when not available, create it....................................//

         for( var i = 0; i < datatypenode.m_datatypenodes.length; ++i )
         {
            if( datatypenode.m_datatypenodes[i].m_Name == name )
               return datatypenode.m_datatypenodes[i];
         }

         // not found, create it.............................................//
         if( !bcreate )
            return null;         
         
         var node;
         datatypenode.m_datatypenodes.push( node = new VBI.DataTypeProvider.DataTypeNode( this, datatypenode.m_datatypenodes.length ) );
         node.m_Name = name;

         return node;   
      }; // end of GetTypeNode()

      datatypenode.GetKeyTypeAttribute = function()
      {
         // always create the key type attribute when not yet in.............//
         if( datatypenode.m_Key )
            return datatypenode.GetTypeAttribute( datatypenode.m_Key, true ); 
         else
            return datatypenode.GetTypeAttribute( "VB:ix", true );
         return null;   
      }; // end of GetKeyTypeAttribute()

      datatypenode.GetPath = function()
      {
         // debugger;

         var names = [];
         var node = this;
         do
         {
            names.splice( 0, 0, node.m_Name );
         } while( ( node = node.m_Parent ) && node['m_Name'] );

         return names;
      };

      datatypenode.GetTypeAttribute = function( name, create )
      {
         // get the type node................................................//
         // when not available, create it....................................//

         for( var i = 0; i < datatypenode.m_datatypeattributes.length; ++i )
         {
            // check for alias or name.......................................//
            if( datatypenode.m_datatypeattributes[i].m_Alias == name )
               return datatypenode.m_datatypeattributes[i];
            if( datatypenode.m_datatypeattributes[i].m_Name == name )
               return datatypenode.m_datatypeattributes[i];
         }

         if( create )
         {
            // not found, create it and put in into the array...................//
            var attribute;
            datatypenode.m_datatypeattributes.push( attribute = new VBI.DataTypeProvider.DataTypeAttribute( datatypenode.m_datatypeattributes.length ) );
            attribute.m_Name = name;
            return attribute;   
         }

         return null;
      }; // end of getTypeNode()

      return datatypenode;
   };


   VBI.DataTypeProvider.DataTypeAttribute = function( arrayindex ) 
   {
      var datatypeattribute = {};

      // a data type attribute may contain nodes............................//
      datatypeattribute.m_Name = "";
      datatypeattribute.m_Alias = "";
      datatypeattribute.m_Type = VBI.Types.st_unknown;  // build in type
      datatypeattribute.m_nArrayIndex = arrayindex;                     // index where the attribute is located  
      datatypeattribute.m_Parent = null;

      datatypeattribute.clear = function( )
      {
         datatypeattribute.m_Parent = null;  // reset the parent object
      };

      datatypeattribute.load = function( dat )
      {
         // load data type attributes values.................................//
         if( dat.name )
            datatypeattribute.m_Name = dat.name;
         if( dat.alias )
            datatypeattribute.m_Alias = dat.alias;
         if( dat.type )
         {
            switch( dat.type )
            {
               case "vectorarray":
                  datatypeattribute.m_Type = VBI.Types.st_vectorarray;
                  break;
               case "vector":
                  datatypeattribute.m_Type = VBI.Types.st_vector;
                  break;
               case "long":
                  datatypeattribute.m_Type = VBI.Types.st_long;
                  break;
               case "string":
                  datatypeattribute.m_Type = VBI.Types.st_string;
                  break;
               case "color":
                  datatypeattribute.m_Type = VBI.Types.st_color;
                  break;
               case "bool":
                  datatypeattribute.m_Type = VBI.Types.st_bool;
                  break;
               case "float":
                  datatypeattribute.m_Type = VBI.Types.st_float;
                  break;
               default:
                  // unknown type, set to string.............................//
                  datatypeattribute.m_Type = VBI.Types.st_string;
                  break;
            }
         }
      };

      return datatypeattribute;
   };

   return datatypeprovider;
};

//...........................................................................//
// data provider.............................................................//
//...........................................................................//


VBI.DataProvider = function()
{
   var dataprovider = {};
   
   dataprovider.vbiclass = "DataProvider";
   dataprovider.m_datanodes = [];
   dataprovider.m_dtp = null;
   
   //........................................................................//
   // dataprovider methods...................................................//

   dataprovider.clear = function()
   {
      // clear the datatypeprovider..........................................//
      var o, nCount = this.m_datanodes.length;
      for( var nJ = 0; nJ < nCount; ++nJ )
         if( o = this.m_datanodes[nJ] )
            o.clear();
      
      // reset array
      this.m_datanodes = [];
   };

   dataprovider.set = function ( dat, ctx )
   {
      // the 'dat' should be now always an set object........................//
      // debugger;

      // get the dataprovider from the context...............................//
      var dtp = ctx.m_DataTypeProvider;

      if( !dtp )
      {         
         VBI.m_bTrace && VBI.Trace( "Error: data types are not available" );
         return;   
      }

      if( dat.type && dat.name  )
      {
         if( ( dat.type == "N" ) ) 
         {
            if( jQuery.type( dat.N ) == 'object' )
            {  // set a node type............................................//
               var destnode;
               var path = dat.name.split(".");
               if( destnode = this.FindNodeFromPath( path ) )
               {
                  if( dat.name != dat.N.name )
                  {
                     VBI.m_bTrace && VBI.Trace( "Error: node loading delta operation failed");
                     return;
                  }
                  destnode.load( dat.N, dtp.FindTypeNodeFromPath( path ) );
                  return;
               }
            } else
            if( jQuery.type( dat.N ) == 'array' )
            {  // set a node type............................................//
               // todo: set multiple nodes explicitly
            }
         } else
         if( ( dat.type == "E" ) ) 
         {
            // todo: do delta handling for elements
         }
      } else
      {
         // data context should be set.......................................//
         this.clear();
      }
        
      if( dat.N )
      {
         var dtn, node, name;
         if( jQuery.type( dat.N ) == 'object' )
         {
            // ensure that node is in type section
            dtn = dtp.GetTypeNode( name = dat.N.name, true );
            this.m_datanodes[ dtn.m_nArrayIndex ] = ( node = new VBI.DataProvider.DataNode() );
            node.m_Parent = this;
            node.m_Name = name;
                
            // load subsequent data..........................................//
            node.load( dat.N, dtn );
         }  else
         if( jQuery.type( dat.N ) == 'array' )
         {
            for( var i = 0; i < dat.N.length; ++i )
            {
               // ensure that node is in type section
               dtn = dtp.GetTypeNode( name = dat.N[i].name, true );
               this.m_datanodes[ dtn.m_nArrayIndex ] = ( node = new VBI.DataProvider.DataNode() );
               node.m_Parent = this;
               node.m_Name = name;
                
               // load subsequent data.......................................//
               node.load( dat.N[i], dtn );
            }
         }
      }
   };

   dataprovider.load = function( dat, ctx )  // load data in the dataprovider
   {
      // get the dataprovider from the context...............................//
      var dtp = ctx.m_DataTypeProvider;

      // store the datatypeprovider..........................................//
      this.m_dtp = dtp;

      // delta handling......................................................//
      // first execute the remove command....................................//
      if( dat.Remove )
      {
         var name;
         if(  jQuery.type( dat.Remove ) == 'object' )
         {
            // todo: single object remove
         } else
         if(  jQuery.type( dat.Remove ) == 'array' )
         {
            // remove a set of objects.......................................//
            var destnode;
            for( var nJ = 0; nJ < dat.Remove.length; ++nJ )
            {
               // remove nodes...............................................//
               if( dat.Remove[nJ].type == "N" && ( name = dat.Remove[nJ].name ) )
               {
                  if( destnode = this.FindNodeFromPath( name.split(".") ) )
                  {
                     destnode.m_Parent.RemoveNode( destnode );
                  }
               } else 
               // remove elements............................................//
               if( dat.Remove[nJ].type == "E" && ( name = dat.Remove[nJ].name ) )
               {
                  if( destnode = this.FindNodeFromPath( name.split(".") ) )
                  {
                     // debugger;
                     // all the elements specified in the node should be.....//
                     // removed..............................................//
                     destnode.RemoveElements( dat.Remove[nJ].N );
                  }
               }
            }
         }
      }

      // after the remove the set is executed................................//
      // load the json delta data............................................//
      if( dat.Set )
      {
         if( jQuery.type( dat.Set ) == 'object' )
         {
            dataprovider.set( dat.Set, ctx );
         } else
         if( jQuery.type( dat.Set ) == 'array' )
         {
            for( var i = 0; i < dat.Set.length; ++i )   
               dataprovider.set( dat.Set[i], ctx );
         }
      }
   };

   dataprovider.store = function( dat )
   {
      if( this.IsModified() )
      {
         // check if dataprovider is modified
         dat.Data = {};
         dat.Data.Merge = {};
         dat.Data.Merge.Node = [];

         // the dataprovider is modofoed when one of its nodes is modified...//
         var tmp;
         for( var nJ = 0; nJ < this.m_datanodes.length; ++nJ )
         {
            if( ( tmp = this.m_datanodes[nJ] ) && tmp.IsModified() )
            {
               // create a node object and push..............................//
               var node = {};
               dat.Data.Merge.Node.push( node ); 

               // call storing of nodes......................................//
               tmp.store( node );
            }
         }
      }
   };

   // determine if something in the datacontext is modified and needs to be..//
   // serialized.............................................................//
   dataprovider.IsModified = function()
   {
      // the dataprovider is modofoed when one of its nodes is modified......//
      var tmp;
      for( var nJ = 0; nJ < this.m_datanodes.length; ++nJ )
      {
         if( ( tmp = this.m_datanodes[nJ] ) && tmp.IsModified() )
            return true;
      }
      return false;
   };

   dataprovider.RemoveNode = function( node )
   {
      var aix = node.m_dtn.m_nArrayIndex;
      this.m_datanodes[ aix ].clear();
      this.m_datanodes[ aix ] = null;      // set the node to a null
   };

   dataprovider.FindNodeFromPath = function( parts )  
   {
      if( !this.m_dtp )
         return null;      // no datatypes specified.........................//

      // get the first node from the dataprovider............................//
      var curNodeType = this.m_dtp.GetTypeNode( parts[0], false );
      
      var curElement = null;
      var curNode = this.m_datanodes[ curNodeType.m_nArrayIndex ];
      var bParseElement = true;  // we start element parsing

      for( var nJ = 1; nJ < parts.length; ++nJ )
      {
         if( bParseElement )
         {
            if( curNodeType.m_Key )
            {
               // expect element specified as a key
               var attrib;
               if( attrib = curNodeType.GetTypeAttribute( curNodeType.m_Key ) )
                  curElement = VBI.FindElementByKey( curNode.m_dataelements, attrib.m_nArrayIndex, parts[ nJ ] );

               bParseElement = false;                 
               continue;                  // element parsed
            } else
            if( VBI.isInt( parts[ nJ ] ) )
            {
               // element specified as an index
               parseInt( parts[ nJ ] );
               curElement = curNode.m_dataelements[ parseInt( parts[ nJ ] ) ]; 

               bParseElement = false;     // element parsed
               continue;
            } else
            {
               // no element specified, so we use the lead selection and.....//
               // continue with node parsing.................................//
               // when there is no lead selection, we us the first element...//
               // in the array...............................................//
               if( (curElement = curNode.GetLeadSelectedElement()) === null )
                  if( curNode.m_dataelements.length )
                     curElement = curNode.m_dataelements[0];

               if( !curElement )
               {
                  VBI.m_bTrace && VBI.Trace( "Error: invalid lead selected element" );
               }
            }
         } 

         // get the node type information
         curNodeType = curNodeType.GetTypeNode( parts[ nJ ], true );
         curNode = curElement.m_datanodes[ curNodeType.m_nArrayIndex ];

         // next is an element that should be parsed..........................//               
         bParseElement = true;
      }

      return curNode;
   };
  
   VBI.DataProvider.DataNode = function()
   {
      var datanode = {};

      // a datanode contains elements........................................//
      datanode.m_Name = "";
      datanode.m_sLeadSelection = null;      // string either key or index to led selected element//       
      datanode.m_dataelements = [];
      datanode.m_Parent = null;              // parent of the datanode 
      datanode.m_dtn = null;                 // typeinfo for node  
      datanode.m_bModified = false;          // modified flag, usually selection

      datanode.clear = function()
      {
         // reset type information...........................................//
         datanode.m_dtn = null;         

         // clear the elements...............................................//
         for( var nJ = 0; nJ < datanode.m_dataelements.length; ++nJ )
         {
            datanode.m_dataelements[nJ].clear();
            datanode.m_dataelements[nJ].m_Parent = null;
         }

         // clear the array..................................................//
         datanode.m_dataelements = [];
         datanode.m_Parent = null;
      };

      datanode.IsModifiedSelection = function()
      {
         return datanode.m_bModified ? true : false; 
      };

      datanode.IsModifiedElements = function()
      {
         // the dataprovider is modofoed when one of its nodes is modified...//
         var aElements = datanode.m_dataelements;
         for( var nJ = 0; nJ < aElements.length; ++nJ )
         {
            if( aElements[nJ].IsModified() )
               return true;
         }
         return false;
      };

      datanode.IsModified = function()
      {
         // either datanode is modified or elements are modified.............// 
         if( datanode.IsModifiedSelection() || datanode.IsModifiedElements() )
            return true;

         return false;
      };

      datanode.store = function( dat )
      {
         // store the node itself............................................//
         dat.name = datanode.m_dtn.m_Name;    // set node name...............//

         if( ( this.m_sLeadSelection !== null ) && datanode.IsModifiedSelection() )
            dat["VB:s"] = this.m_sLeadSelection;

         // store the modified elements......................................//
         if( datanode.IsModifiedElements() )
         {
            dat.E = [];

            for( var nJ = 0; nJ < datanode.m_dataelements.length; ++nJ )
            {
               // store only modified elements...............................//
               if( datanode.m_dataelements[nJ].IsModified() )
               {
                  // create the element object push it and call its store....//
                  var ele = {};
                  dat.E.push( ele );
                  datanode.m_dataelements[nJ].store( ele );
               }
            }
         }
      };

      //.....................................................................//
      // node removers.......................................................//

      datanode.RemoveNode = function( node )
      {
         var aix = node.m_dtn.m_nArrayIndex;
         datanode.m_datanodes[ aix ].clear();
         datanode.m_datanodes[ aix ] = null;      // set the node to a null
      };

      datanode.RemoveElements = function( dat )
      {
         // remove the elements specified in the node........................//
         // create a temporary keymap........................................//
         var kta = datanode.m_dtn.GetKeyTypeAttribute();
         var keymap = datanode.GetElementKeyMap( kta );

         // load the elements................................................//
         if( dat.E )
         {
            if( jQuery.type( dat.E ) == 'object' )
            {
               // find the element and remove it............................//
               datanode.InternalFindAndRemoveExistingElement( dat.E, 0, kta, keymap );
            }  else
            if( jQuery.type( dat.E ) == 'array' )
            {
               for( var i = 0; i < dat.E.length; ++i )
                  datanode.InternalFindAndRemoveExistingElement( dat.E[i], i, kta, keymap );
            }
         }
      };

      //.....................................................................//
      // element finders.....................................................//

      datanode.GetElementKeyMap = function( kta )
      {
         // create an element keymap.........................................//
         var tmp, keymap = [];
         ktattribute = kta ? kta : datanode.m_dtn.GetKeyTypeAttribute();
         
         for( var nJ = 0; nJ < datanode.m_dataelements.length; ++nJ )
            keymap[ (tmp = datanode.m_dataelements[ nJ ]).m_dataattributes[ ktattribute.m_nArrayIndex ].m_Value ] = tmp;

         return keymap;
      };

      datanode.FindElementByKey = function( key, kta, keymap )
      {
         // use the provided map.............................................//
         var tmp;
         if( keymap )
            return (tmp = keymap[ key ]) ? tmp : null;

         // do sequential search.............................................//
         ktattribute = kta ? kta : datanode.m_dtn.GetKeyTypeAttribute();

         var ele, aElements = datanode.m_dataelements;
         for( var nJ = 0; nJ < aElements.length; ++nJ )
         {
            if( ele = aElements[ nJ ] )
            {               
               if( ele.m_dataattributes[ ktattribute.m_nArrayIndex ].m_Value == key )
                  return ele;
            }
         }
         return null;
      };

      datanode.FindElementByIndex = function( index )
      {
         return datanode.m_dataelements[ index ];
      };

      datanode.InternalFindAndRemoveExistingElement = function( dat, idx, kta, keymap )
      {
         var key = null, ele = null;
         if( kta.m_Alias && ( key = dat[ kta.m_Alias ] ) )
            ele = datanode.FindElementByKey( key, kta, keymap );
         else
         if( kta.m_Name && ( key = dat[ kta.m_Name ] ) )
            ele = datanode.FindElementByKey( key, kta, keymap );
         else         
            ele = datanode.FindElementByKey( key = idx, kta, keymap );

         if( ele )
         {
            // remove the element from the array.............................//
            datanode.m_dataelements.splice( VBI.IndexOf( datanode.m_dataelements, ele ), 1 );

            // correct the key map...........................................//
            if( keymap )
               keymap.splice( key, 1 );

            // clear the element.............................................//
            ele.clear();
         }
      };

      datanode.InternalFindOrCreateExistingElement = function( dat, idx, kta, keymap )
      {
         var key = null, ele = null;
         if( kta.m_Alias && ( key = dat[ kta.m_Alias ] ) )
            ele = datanode.FindElementByKey( key, kta, keymap );
         else
         if( kta.m_Name && ( key = dat[ kta.m_Name ] ) )
            ele = datanode.FindElementByKey( key, kta, keymap );
         else         
            ele = datanode.FindElementByKey( key = idx, kta, keymap );

         if( ele )
         {
            return ele;    // return the found element.......................//
         } else
         {
            // create the new element........................................//
            ele =  new VBI.DataProvider.DataElement();   
            
            // push the element to the array.................................//
            datanode.m_dataelements.push( ele );

            // add the element to the keymap.................................//               
            if( keymap )
               keymap[ key ] = ele;
         }

         return ele;
      };

      datanode.load = function( dat, dtn )
      {
         datanode.m_dtn = dtn;   // store type info for node.................//

         // set the lead selected element....................................//
         datanode.m_sLeadSelection = dat["VB:s"] ;

         // create a temporary keymap........................................//
         var kta = datanode.m_dtn.GetKeyTypeAttribute();
         var keymap = datanode.GetElementKeyMap( kta );

         // load the elements................................................//
         if( dat.E )
         {
            
            if( jQuery.type( dat.E ) == 'object' )
            {
               // todo: load element when it is submitted as single object...//
               var de = datanode.InternalFindOrCreateExistingElement( dat.E, 0, kta, keymap );
               de.m_Parent = datanode;

               // load subsequent data.......................................//
               de.load( dat.E, dtn );

               // ensure that the index attribute is available...............//
               // when not available, create it now..........................//
               if( de.m_dataattributes[ kta.m_nArrayIndex ] == null )
               {
                  da = new  VBI.DataProvider.DataAttribute( kta, null, de );
                  da.m_Value = 0;
                  de.m_dataattributes[ kta.m_nArrayIndex ] = da;
               }
            }  else
            if( jQuery.type( dat.E ) == 'array' )
            {
               var de;
               for( var i = 0; i < dat.E.length; ++i )
               {
                  de = datanode.InternalFindOrCreateExistingElement( dat.E[i], i, kta, keymap );
                  de.m_Parent = datanode;

                  // load subsequent data....................................//
                  de.load( dat.E[i], dtn );

                  // ensure that the index attribute is available............//
                  // when not available, create it now.......................//
                  if( de.m_dataattributes[ kta.m_nArrayIndex ] == null )
                  {
                     da = new  VBI.DataProvider.DataAttribute( kta, null, de );
                     da.m_Value = i;
                     de.m_dataattributes[ kta.m_nArrayIndex ] = da;
                  }
               }
            }
         }
      };

      datanode.GetName = function()
      {
         // todo: we can use the type for storing the name
         return this.m_Name;
      };

      datanode.GetPath = function()
      {
         return this.m_dtn.GetPath();
      };

      datanode.SetLeadSelection = function( sKey )
      {
         if( this.m_sLeadSelection != sKey )
         {
            this.m_sLeadSelection = sKey;
            this.m_bModified = true;   // set modified flag..................//
         }
      };

      datanode.GetLeadSelectedElement = function()
      {     
         // determine the lead selected element..............................//
         if( this.m_sLeadSelection !== null )
         {     
            var idx;
            if( m_dtn.m_Key )
            {
               // the lead selection is specified as a key
               idx =  m_dtn.GetTypeAttribute( m_dtn.m_Key ).m_nArrayIndex;
               return VBI.FindElementByKey( this.m_dataelements, idx, m_dtn.m_Key );
            } else
            {
               // the lead selection is specified as an index................//
               // todo: should not happen, an index should be mandatory......//
               idx = parseInt( this.m_sLeadSelection );
               if( idx <= this.m_dataelements.length && idx >= 0 )
               {
                  return this.m_dataelements[ idx ];
               } else 
               {
                  VBI.m_bTrace && VBI.Trace( "Error: lead selection index out of range" );
               }
            }
         }
         return null;
      };
      
      return datanode; 
   };

   //........................................................................//
   // DataElement............................................................//

   VBI.DataProvider.DataElement = function()
   {
      // a dataelement contains attributes or subsequent nodes...............//
      this.m_dataattributes = [];
      this.m_datanodes = [];
      this.m_Parent = null;         // the parent should be always a node....//
      this.m_bModifiedSelection = false;
   };

   VBI.DataProvider.DataElement.prototype = 
   {
      // a dataelement contains attributes or subsequent nodes..............//
      m_dataattributes : null,
      m_datanodes : null,
      m_Parent : null,           // the parent should be always a node......//
      m_bModifiedSelection : null,

      clear : function()
      {
         // clear the nodes..................................................//
         var nJ, tmp;
         for( nJ = 0; nJ < this.m_datanodes.length; ++nJ )
         {
            if( tmp = this.m_datanodes[nJ] )
            {
               tmp.clear();
               tmp.m_Parent = null; 
            }
         }
         this.m_datanodes = [];

         // clear the attributes.............................................//
         for( nJ = 0; nJ < this.m_dataattributes.length; ++nJ )
         {
            if( tmp = this.m_dataattributes[nJ] )
            {
               tmp.clear();
               tmp.m_Parent = null;
            }
         }

         this.m_dataattributes = [];
      },

      load : function( dat, dtn )
      {
         // add the attributes and put them into an array....................//
         for( var a in dat ) 
         {
            if( !dat.hasOwnProperty( a ) )
               continue;

            if( a == "N" && ( jQuery.type( dat[a] ) == 'object'  ) )
            {
               // this is interpreted as a node..............................//
               var node;

               // determine the datatype node for the inner node.............//
               var ldtn = dtn.GetTypeNode( dat.N.name, true );

               // place the node at its indexed position.....................//
               this.m_datanodes[ ldtn.m_nArrayIndex ] = ( node = new VBI.DataProvider.DataNode() );
               node.m_Parent = this;
               node.m_Name = dat.N.name;

               node.load( dat[a], ldtn );
            } else
            {
               // this is interpreted as an attribute........................//

               // determine the datatype attribute...........................//
               var dta = dtn.GetTypeAttribute( a, true );

               // place the attribute at the indexed position................//
               this.m_dataattributes[ dta.m_nArrayIndex ] =  new VBI.DataProvider.DataAttribute( dta, dat[a], this );
            }
         }
      },

      IsModified : function( dat )
      {
         // when dataelement is modified itself, return immediately
         if( this.m_bModifiedSelection ) 
            return true;

         // check if there are attributes that are modified...............//
         var nJ, tmp;
         for( nJ = 0; nJ < this.m_dataattributes.length; ++nJ )
         {
            if( ( tmp = this.m_dataattributes[nJ] ) && tmp.IsModified() )
               return true;         
         }
         return false;
      },

      store : function( dat )
      {
         // todo: write the element information

         // write the key attribute..........................................//
         var kta = this.m_Parent.m_dtn.GetKeyTypeAttribute();
         var ktaname = kta.m_Alias ? kta.m_Alias : kta.m_Name;
         dat[ ktaname ] = this.m_dataattributes[ kta.m_nArrayIndex ].GetStringValue();

         // store the element................................................//
         if( this.m_bModifiedSelection ) 
         {
            // store the selection information
         }

         // iterate through attributes and save the new values...............//
         var nJ, tmp;
         for( nJ = 0; nJ < this.m_dataattributes.length; ++nJ )
         {
            if( ( tmp = this.m_dataattributes[nJ] ) && tmp.IsModified() )
            {
               var taname = tmp.m_dta.m_Alias ? tmp.m_dta.m_Alias : tmp.m_dta.m_Name;               
               dat[ taname ] = tmp.GetStringValue();
            }
         }
      },

      // determine the elements path.........................................// 
      GetKeyValue : function()
      {
         var kta;
         if( this.m_Parent && ( kta = this.m_Parent.m_dtn.GetKeyTypeAttribute() ) )
            return this.m_dataattributes[ kta.m_nArrayIndex ].m_Value;

         return null;
      },

      // determine the explicit path of an element, this is usually needed in//
      // events that identify the clicked instance...........................//
      GetPath : function()  
      {
         var path = null;
         var cur = this;
         while( cur )
         {
            // prepend key...................................................//
            var key = cur.GetKeyValue();
            if( path )
               path =  key + "." + path;
            else
               path = key;

            // prepend node name.............................................//
            var n;
            if( n = this.m_Parent )
               path = this.m_Parent.m_dtn.m_Name + "." + path;
            else
               break;
            
            // go up one level...............................................//
            if( n.m_Parent && n.m_Parent.m_Parent ) // this is noe the dataprovider
               cur = n.m_Parent ? n.m_Parent : null;
            else
               break;
         }

         return path;
      },

      Select : function( bSelect )  
      {
         // select or unselect an element....................................//
         var kta = this.m_Parent.m_dtn.GetTypeAttribute( "VB:s", true );
         kta.m_Type = VBI.Types.st_bool;  // the type must be a boolean type.//

         // when the key is not yet created, create it now...................//
         var idx = kta.m_nArrayIndex;
         if( this.m_dataattributes[ idx ] == null )
            this.m_dataattributes[ idx ] = new  VBI.DataProvider.DataAttribute( kta, null, this );

         // set the selection state..........................................//
         // and mark it as modified..........................................//
         this.m_dataattributes[ idx ].m_Value = bSelect ? true : false;
         this.m_dataattributes[ idx ].m_bModified = true;

         // additionally set the lead selection..............................//
         if( bSelect && this.m_Parent )
            this.m_Parent.SetLeadSelection( this.GetKeyValue() );
      },

      FindNodeFromPathArray : function( patharray )
      {
         var dn = null, de = this;

         var bParseKey = false; 
         for( var nJ = 0; nJ < patharray.length; ++nJ )
         {
            if( bParseKey )
            {
               if( dn.m_dtn.m_Key && ( tmp = de.FindElementByKey( patharray[ nJ] ) ) )
               {
                  // element found
                  bParseKey = false;
                  continue;
               }  else   
               if( VBI.isInt( patharray[nJ] ) )
               {
                  // index found
                  de = dn.m_dataelements[ parseInt( patharray[nJ] ) ];
                  bParseKey = false;
                  continue;
               }
            }

            // this is a node
            var nIndex = de.m_Parent.m_dtn.GetTypeNode( patharray[nJ], false ).m_nArrayIndex;
            dn = de.m_datanodes[ nIndex ];
            bParseKey = true;
         }

         return dn;
      },

      FindAttributeFromPathArray : function( patharray )
      { 
         // todo: refine getting attributes and checking ranges

         if( patharray.length == 1 )
         { 
            var ta;
            if( ta = this.m_Parent.m_dtn.GetTypeAttribute( patharray[0], false ) )
               return this.m_dataattributes[ ta.m_nArrayIndex ];
         }
         return null;
      }
   };

   //........................................................................//
   // DataAttribute..........................................................//

   VBI.DataProvider.DataAttribute = function( dta, value, parent )
   {
      this.m_dta = dta;          // the attributes name is stored in the dta.//
      this.m_Parent = parent;

      // data type enumerator................................................//
      // this.TypeEnum = { st_unknown : 0, st_vector : 1, st_string : 2, st_vectorarray : 3, st_float : 4, st_color : 5, st_long : 6 };

      // in this case the attributes value will not be assigned from a string//    
      if( value === null ) 
         return;        

      if( dta.m_Type == VBI.Types.st_vectorarray || 
            dta.m_Type == VBI.Types.st_vector )
         this.m_Value = VBI.Types.string2vector( value );
      else
      if( dta.m_Type == VBI.Types.st_long ) 
         this.m_Value = VBI.Types.string2long( value );
      else
      if( dta.m_Type == VBI.Types.st_float ) 
         this.m_Value = VBI.Types.string2float( value );
      else
      if( dta.m_Type == VBI.Types.st_bool ) 
         this.m_Value = VBI.Types.string2bool( value );
      else
      if( dta.m_Type == VBI.Types.st_color ) 
         this.m_Value = VBI.Types.string2color( value );
      else
      if( dta.m_Type == VBI.Types.st_string ) 
         this.m_Value = value;            
      else
      
      // todo: support other datatypes
      this.m_Value = value;   
   };

   VBI.DataProvider.DataAttribute.prototype = 
   {
      m_dta : null,           // attributes type, containing name/alias......//
      m_Value : null,         // attribute value, type depends on m_dta......//
      m_Parent : null,        // attributes parent element...................//
      m_bModified : false,    // modified state of attribute.................//

      clear : function()
      {
         this.m_Parent = null;   // reset parent     
         this.m_dta = null;      // reset type relationship
      },

      store : function( dat )
      {
         // todo: write the attribute to the object..........................//
      },

      set : function( val )
      {
         // set the attribute................................................//
         if( val != this.mValue )
             this.m_bModified = true;

         this.m_Value = val;
      },

      //.....................................................................//
      // helper functions....................................................//

      IsModified : function()
      {
         return this.m_bModified;
      },

      GetStringValue : function( )
      {
         var tmp = "";
      
         // todo: dependent on datatype we have to convert the value to a....//
         switch( this.m_dta.m_Type )
         {
            case VBI.Types.st_vectorarray:
            case VBI.Types.st_vector:
               return vector2string( this.m_Value );
            case VBI.Types.st_long:
               tmp += this.m_Value;
               return tmp;
            case VBI.Types.st_float:
               tmp += this.m_Value;
               return tmp;
            case VBI.Types.st_string:
               return this.m_Value;
            case VBI.Types.st_bool:
               return this.m_Value ? "true" : "false";
            case VBI.Types.st_color:
               // convert the color back from rgba( 255,255,255, 0.1 ).......//
               // RGBA( ....)
               var cache;   
               if( cache = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec( this.m_Value ) )
               {
                  cache = [+cache[1], +cache[2], +cache[3], parseInt( parseFloat( +cache[4] ) * 255.0 )];
                  return "RGBA(" + cache[0] + "," + cache[1] + "," + cache[2] + "," + cache[3] + ")";
               }
               break;
         }

         // assume this is a string..........................................//
         return this.m_Value;
      },
   };
  
   return dataprovider;
};   
