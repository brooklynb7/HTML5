/////////////////////////////////////////
//   Testing Part: OverviewTile   //
/////////////////////////////////////////

module("OverviewTile - Object Create");

test("Object Creation with Id", function () {
    var oOverviewTile = new sap.ca.ui.OverviewTile("id", {icon : "",
        contact:"Chuck Norris Hotel Particulier Chatillon Paris France",
        title : "Flower Power incorporated that will rock Flower Power incorporated that will rock Flower Power incorporated that will rock",
        address:"Magasin de Luxe, 158 rue Foubourg Saint Honorine, 8e arrondissement de Paris  75008 Paris , France",
        rating:"Diamond",
        opportunities:"Tons of money",
        revenue:"Millions of Millions of Millions of Millions of dollars",
        lastContact:"13 May. 2013",
        nextContact:"24 Oct. 2013",
        press:"onTileTap",
        contactPress:"showContact"});
    strictEqual(oOverviewTile.getId(), "id", "OverviewTile has ID 'id'");
});

