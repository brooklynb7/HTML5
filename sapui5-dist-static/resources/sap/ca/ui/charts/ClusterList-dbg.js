jQuery.sap.declare("sap.ca.ui.charts.ClusterList");
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.ca.ui.utils.resourcebundle");
jQuery.sap.require("sap.ui.model.json.JSONModel");
jQuery.sap.require("sap.ui.core.Element");
jQuery.sap.require("sap.ca.ui.charts.ClusterListItem");

sap.ui.core.Element.extend("sap.ca.ui.charts.ClusterList", {
    metadata: {
        publicMethods : ["getControl",
            "isEmpty",
            "reset",
            "createObject",
            "removeObject",
            "getObject",
            "hasObject",
            "count",
            "update",
            "getGroupIndexFor",
            "addGroup",
            "removeGroup",
            "getItemIndexFor",
            "addItemTo",
            "removeItemFrom",
            "getNumberOfItemsFor"]
    }
});

sap.ca.ui.charts.ClusterList.prototype.init = function() {
  var oModel = new sap.ui.model.json.JSONModel({"items": []});
    this._sModelName = this.getId()+"-Model";
    this.setModel(oModel, this._sModelName);
   var oItemTemplate = new sap.ca.ui.charts.ClusterListItem({
    title: "{title}",
    items: "{items}"
  });

  this._oList = new sap.m.List({
    inset: true
  });
  this._oList.setModel(this.getModel(this._sModelName));
  this._oList.bindAggregation("items", "/items", oItemTemplate);
};

sap.ca.ui.charts.ClusterList.prototype.getControl = function() {
  return this._oList;
};

sap.ca.ui.charts.ClusterList.prototype.isEmpty = function() {
  var oGroups = this.getModel(this._sModelName).getProperty("/items");
  return oGroups.length === 0;
};

sap.ca.ui.charts.ClusterList.prototype.reset = function() {
    this.getModel(this._sModelName).setProperty("/items", []);
};

sap.ca.ui.charts.ClusterList.prototype.destroy = function(bSuppressInvalidate) {
    sap.ui.core.Element.prototype.destroy.apply(this, bSuppressInvalidate);
    this.reset();
    if (this._oList){
        this._oList.destroy(bSuppressInvalidate);
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////
//
// NEW API
//
//////////////////////////////////////////////////////////////////////////////////////////////

sap.ca.ui.charts.ClusterList.prototype.createObject = function(sPath) {
  if (typeof sPath === "undefined") {
    throw new Error("The 'path' is undefined!");
  }

  var oObject = undefined;
  var oItems =  this.getModel(this._sModelName).getProperty("/items");
  sPath.split(".").forEach(function(sKey, nIndex, oArray) {
    var bFound = false;
    $.each(oItems, function(nIndex, oItem) {
      if (oItem["key"] === sKey) {
        oObject = oItem;
        oItems = oItem["items"];
        bFound = true;
        return false;
      }
    });
    if (!bFound) {
      oObject = {
        key: sKey,
        items: []
      }
      oItems.push(oObject);
      oItems = oObject["items"];
    }
  });

  return oObject;
};

sap.ca.ui.charts.ClusterList.prototype.removeObject = function(sPath) {
  if (typeof sPath === "undefined") {
    throw new Error("The 'path' is undefined!");
  }

  var oItems =  this.getModel(this._sModelName).getProperty("/items");
  var nObjectIndex = -1;
  sPath.split(".").forEach(function(sKey, nIndex, oArray) {
    $.each(oItems, function(nItemIndex, oItem) {
      if (oItem["key"] === sKey) {
        if (nIndex < oArray.length - 1) {
          oItems = oItem["items"];

        } else {
          nObjectIndex = nItemIndex;
        }
        return false;
      }
    });
  });

  if (nObjectIndex !== -1) {
    oItems.splice(nObjectIndex, 1);
  }
};

sap.ca.ui.charts.ClusterList.prototype.getObject = function(sPath) {
  if (typeof sPath === "undefined") {
    throw new Error("The 'path' is undefined!");
  }

  var oResult = undefined;

  var oItems = this.getModel(this._sModelName).getProperty("/items");
  sPath.split(".").forEach(function(sKey, nIndex, oArray) {
    if (typeof oItems === "undefined") {
      return true;
    }
    var bFound = false;
    $.each(oItems, function(nIndex, oItem) {
      if (oItem["key"] === sKey) {
        oItems = oItem["items"];
        bFound = true;
        return false;
      }
    });
    if (bFound) {
      oResult = oItems;
    } else {
      oResult = undefined;
      return false;
    }
  });

  return oResult;
};


sap.ca.ui.charts.ClusterList.prototype.hasObject = function(sPath) {
  if (typeof sPath === "undefined") {
    throw new Error("The 'path' is undefined!");
  }

  if (sPath.indexOf(".") === -1) {
    return typeof this.getObject(sPath) !== "undefined";
  }

  var oItems = this.getObject(sPath.substring(0, sPath.lastIndexOf(".")));
  if (typeof oItems === "undefined") {
    return false;
  }

  var sKey = sPath.substring(sPath.lastIndexOf(".") + 1);

  var bResult = false;
  $.each(oItems, function(nIndex, oItem) {
    if (oItem["key"] === sKey) {
      bResult = true;
      return false;
    }
  });
  return bResult;
};

sap.ca.ui.charts.ClusterList.prototype.count = function(sPath) {
  if (typeof sPath === "undefined") {
    throw new Error("The 'path' is undefined!");
  }

  var oObject = this.getObject(sPath);
  if (typeof oObject === "undefined") {
    return 0;
  }
  return oObject.length;
};

sap.ca.ui.charts.ClusterList.prototype.update = function() {
   this.getModel(this._sModelName).updateBindings(true);
};

sap.ca.ui.charts.ClusterList.prototype.getGroupIndexFor = function(aGroupKey) {
  if (typeof aGroupKey === "undefined" || !Array.isArray(aGroupKey) || aGroupKey.length === 0) {
    throw new Error("The group 'key' is undefined!");
  }
  var nResult = -1;
  var oGroups =  this.getModel(this._sModelName).getProperty("/items");
  $.each(oGroups, function(nIndex, oGroup) {
    if (oGroup["key"].toString() === aGroupKey.toString()) {
      nResult = nIndex;
      return false;
    }
  });

  return nResult;
};

sap.ca.ui.charts.ClusterList.prototype.addGroup = function(oData) {
  if (Array.isArray(oData)) {
    for (var nIndex in oData) {
      this._addGroup(oData[nIndex]);
    }
  } else {
    this._addGroup(oData);
  }
};

sap.ca.ui.charts.ClusterList.prototype._addGroup = function(oData) {
  var aKey = oData["key"];
  if (typeof aKey === "undefined"   || !Array.isArray(aKey) || aKey.length === 0) {
    throw new Error("The group 'key' is undefined!");
  }

    if (this.getGroupIndexFor(aKey) !== -1) {
        throw new Error("Group already exist with '" + aKey.toString() + "' key!");
    }

  var oGroups =  this.getModel(this._sModelName).getProperty("/items");
  if (!oData.hasOwnProperty("items")) {
    oData["items"] = [];
  }
  oData["key"] = aKey.toString();

  if(!oData.hasOwnProperty("subgroups")) {
      //create the array of sub groups
      oData["subgroups"] = [];
  }
   //manage multiple dimensions
   if (aKey.length > 1) {
      //clone the array aKey
      var aParentKey = aKey.slice(0);
       // get the key of the parent group
       aParentKey.splice(aKey.length - 1, 1);
       // get the index of the parent group
      var nParentIndex = this.getGroupIndexFor(aParentKey);
      if (nParentIndex === -1) {
          throw new Error("Group does not exist for '" + aParentKey.toString() + "' key!");
      }
     // get the parent group
      var oParentGroup = oGroups[nParentIndex];
      //get the array of groups in the parent group
      var aSubgroups = oParentGroup["subgroups"];
      if (typeof aSubgroups === "undefined" || !Array.isArray(aSubgroups)) {
          throw new Error("The group 'subgroups' is undefined!");
      }
       //save the group key in the parent group
       aSubgroups.push(aKey.toString());
  }
  oGroups.push(oData);
  this.getModel(this._sModelName).setProperty("/items", oGroups);
};

sap.ca.ui.charts.ClusterList.prototype.removeGroup = function(aGroupKey) {
    if (typeof aGroupKey === "undefined" || !Array.isArray(aGroupKey) || aGroupKey.length === 0) {
        throw new Error("The group 'key' is undefined!");
    }

  var nIndex = this.getGroupIndexFor(aGroupKey);
  if (nIndex === -1) {
    throw new Error("Group does not exist for '" + aGroupKey.toString() + "' key!");
  }

  var oGroups =  this.getModel(this._sModelName).getProperty("/items");
   oGroups.splice(nIndex, 1);
    if (aGroupKey.length > 1) {
        //clone the array aGroupKey
        var aParentKey = aGroupKey.slice(0);
        for(var i = aGroupKey.length - 1; i >0; i--){
            var sCurrentGroupKey = aParentKey.toString();
            //get the  key of the parent group
            aParentKey.splice(i, 1);
            // get index of the parent group
            var nParentIndex = this.getGroupIndexFor(aParentKey);
            if (nParentIndex !== -1) {
                // get the parent group
                var oParentGroup = oGroups[nParentIndex];
                //get the array of groups in the parent group
                var aSubGroups = oParentGroup["subgroups"];
                var nSubGroupIndex = -1;
                $.each(aSubGroups, function(nIndex, sSubGroup) {
                    //search the current group key in the parent group
                    if (sSubGroup === sCurrentGroupKey) {
                        nSubGroupIndex = nIndex;
                    }
                });
                if (nSubGroupIndex !== -1) {
                    //remove the group key in the parent group
                    aSubGroups.splice(nSubGroupIndex, 1);
                    //check if parent group does not contain any group
                    if (aSubGroups.length === 0)  {
                        //remove the parent group
                        oGroups.splice(nParentIndex, 1);
                    }
                }
            }
        }
    }
    this.getModel(this._sModelName).setProperty("/items", oGroups);
};

sap.ca.ui.charts.ClusterList.prototype.getItemIndexFor = function(aGroupKey, sItemKey) {
  if (typeof aGroupKey === "undefined" || !Array.isArray(aGroupKey) || aGroupKey.length === 0) {
    throw new Error("The group 'key' is undefined!");
  }

  if (typeof sItemKey === "undefined") {
    throw new Error("The item 'key' is undefined!");
  }

  var nGroupIndex = this.getGroupIndexFor(aGroupKey);
  if (nGroupIndex === -1) {
    throw new Error("Group does not exist for '" + aGroupKey.toString() + "' key!");
  }

  var oGroups =  this.getModel(this._sModelName).getProperty("/items");
  var oGroup = oGroups[nGroupIndex];

  var nResult = -1;
  var oItems = oGroup["items"];
  $.each(oItems, function(nIndex, oItem) {
    if (oItem["key"] === sItemKey) {
      nResult = nIndex;
      return false;
    }
  });

  return nResult;
};

sap.ca.ui.charts.ClusterList.prototype.addItemTo = function(aGroupKey, oData) {
  if (Array.isArray(oData)) {
    for (var nIndex in oData) {
      this._addItemTo(aGroupKey, oData[nIndex]);
    }
  } else {
    this._addItemTo(aGroupKey, oData);
  }
   this.getModel(this._sModelName).updateBindings(true);
};

sap.ca.ui.charts.ClusterList.prototype._addItemTo = function(aGroupKey, oData) {
    if (typeof aGroupKey === "undefined" || !Array.isArray(aGroupKey) || aGroupKey.length === 0) {
        throw new Error("The group 'key' is undefined!");
    }

  if (this.getItemIndexFor(aGroupKey, oData["key"]) !== -1) {
    throw new Error("Item already exist with '" + oData["key"] + "' key!");
  }

  var nIndex = this.getGroupIndexFor(aGroupKey);
  var oGroups =  this.getModel(this._sModelName).getProperty("/items");
  var oGroup = oGroups[nIndex];
  oGroup["items"].push(oData);
  oGroups[nIndex] = oGroup;
   this.getModel(this._sModelName).setProperty("/items", oGroups);
};

sap.ca.ui.charts.ClusterList.prototype.removeItemFrom = function(aGroupKey, sItemKey) {
    if (typeof aGroupKey === "undefined" || !Array.isArray(aGroupKey) || aGroupKey.length === 0) {
        throw new Error("The group 'key' is undefined!");
    }

  if (typeof sItemKey === "undefined") {
    throw new Error("The item 'key' is undefined!");
  }

  var nGroupIndex = this.getGroupIndexFor(aGroupKey);
  if (nGroupIndex === -1) {
    throw new Error("Group does not exist for '" + aGroupKey.toString() + "' key!");
  }

  var nItemIndex = this.getItemIndexFor(aGroupKey, sItemKey);
  if (nItemIndex === -1) {
    throw new Error("Item does not exist for '" + sItemKey + "' key!");
  }

  var oGroups =  this.getModel(this._sModelName).getProperty("/items");
  var oGroup = oGroups[nGroupIndex];
  var oItems = oGroup["items"];
  oItems.splice(nItemIndex, 1);
  oGroup["items"] = oItems;
  oGroups[nGroupIndex] = oGroup;
   this.getModel(this._sModelName).setProperty("/items", oGroups);
   this.getModel(this._sModelName).updateBindings(true);
};

sap.ca.ui.charts.ClusterList.prototype.getNumberOfItemsFor = function(aGroupKey) {
  if (typeof aGroupKey === "undefined" || !Array.isArray(aGroupKey) || aGroupKey.length === 0) {
    throw new Error("The group 'key' is undefined!");
  }

  var nGroupIndex = this.getGroupIndexFor(aGroupKey);
  if (nGroupIndex === -1) {
    throw new Error("Group does not exist for '" + aGroupKey.toString() + "' key!");
  }

  var oGroups =  this.getModel(this._sModelName).getProperty("/items");
  var oGroup = oGroups[nGroupIndex];
  var oItems = oGroup["items"];
  return oItems.length;
};