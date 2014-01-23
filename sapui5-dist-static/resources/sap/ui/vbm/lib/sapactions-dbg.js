//...........................................................................//
// Actions namespace.........................................................//

// Author: Ulrich Roegelein


//...........................................................................//
// helper functions..........................................................//

//...........................................................................//
// actions provider..........................................................//
//...........................................................................//

VBI.Actions = function()
{
	var actions = {};
   actions.m_actions = []; // array of actions

   actions.clear = function()
   {
      // clear the data type provider........................................//
      for( var nJ = 0; nJ < actions.m_actions.length; ++nJ )
      {
         actions.m_actions[nJ].clear();
      }
      
      // reset array
      actions.m_actions = [];
   };

   actions.load = function( dat, ctx )
   {
      // load the json delta data............................................//
      if( dat.Set )
      {
         // todo: process different kinds of set
         actions.clear();

         if( jQuery.type( dat.Set.Action ) == 'object' )
         {
            // todo: load when there is only one object
         }  else
         if( jQuery.type( dat.Set.Action ) == 'array' )
         {
            // load an array of actions
            for( var nJ = 0; nJ < dat.Set.Action.length; ++nJ )
            {
               var action = new VBI.Actions.Action();
               action.load( dat.Set.Action[nJ], ctx );   // load the action...//

               actions.m_actions.push( action );
            }
         }      
      }		
   };

   actions.findAction = function( evtname, scene, vo  )
   {
      // the vo can be either a string or an object..........................//
      // for map actions the vo is usually a string..........................//

      var id = null;
      if( jQuery.type( vo ) == 'object' )
         id = vo.m_ID;
      else
      if( jQuery.type( vo ) == 'string' )
         id = vo;

      // find the fitting action.............................................//
      var tmp, len = actions.m_actions.length;
      for( var nJ = 0; nJ < len; ++nJ )
      {
         tmp = actions.m_actions[ nJ ];
         if(   tmp.m_refEvent == evtname &&
               tmp.m_refScene == scene.m_ID && 
               tmp.m_refVO == id ) return tmp;
      }
      return null;
   };

   //........................................................................//
   // action implementation..................................................//

   VBI.Actions.Action = function()
   {
      var action = {};

      action.m_id = 0;
      action.m_name = null;
      action.m_refScene = null;
      action.m_refVO = null;
      action.m_refEvent = null;

      // additional properties array.........................................//
      action.m_additionalProperties = [];    

      action.clear = function()
      {
         action.m_addProperties = null;
      };

      action.load = function( dat, ctx )
      {
         // load the attributes
         action.m_id = dat.id;
         action.m_name = dat.name;
         action.m_refScene = dat.refScene;
         action.m_refVO = dat.refVO;
         action.m_refEvent = dat.refEvent;

         // check if there are additional properties requested...............//
         if( dat.AddActionProperty )
         {
            if( jQuery.type( dat.AddActionProperty ) == 'object' )
            {
               // load additional properties when it is just an object.......//
               for( var nJ = 0; nJ < dat.AddActionProperty.length; ++nJ )
                  m_additionalProperties.push( dat.AddActionProperty.name );
            }  else
            if( jQuery.type( dat.AddActionProperty ) == 'array' )
            {
               // load additional properties when specified as an array......//
               for( var nJ = 0; nJ < dat.AddActionProperty.length; ++nJ )
                  action.m_additionalProperties.push( dat.AddActionProperty[nJ].name );
            }
         }
      };

      return action;
   };

   return actions;
};
