var oContactsWithImagesData = {
    navigation: [{
        image: "demokit/images/persons/female_BaySu.jpg",
        name: "White, Helen",
        title: "Internal Sales Rep",
        phone: "+382832838238",
        email: "helen.white@sap.com"
    },
    {
        image: "demokit/images/persons/female_WangM.jpg",
        name: "Yairi Samakusha",
        title: "Very important",
        phone: "1-800-VERY",
        email: "j.samakusha@sap.com"
    },
    {
        image: "demokit/images/persons/female_RushJ.jpg",
        name: "Ilya Murometz",
        title: "Team Lead",
        phone: "1(605)-1232-123-1",
        email: "ilya.murom@sap.com"
    }]
};

var oTemplateContactsWithImagesData = new sap.m.ColumnListItem({
    type: sap.m.Inactive,
    unread: false,
    cells: [
        new sap.m.Image({src: "{image}", width: "74px", height: "74px"}),
        new sap.m.Link({text: "{name}"}),
        new sap.m.Text({text: "{title}"}),
        new sap.m.Link({text: "{phone}"}),
        new sap.m.Link({text: "{email}"})
    ]
});

var oListContactsWithImagesForm = new sap.m.List({
    threshold: 2,
    inset : false,
    showUnread : true,
    scrollToLoad : true,
    columns : [
        new sap.m.Column({
            hAlign: "Left",
            header: new sap.m.Text({text: ""})
        }),
        new sap.m.Column({
        hAlign : "Left",
        header : new sap.m.Text({text : "Name"})
        }), 
        new sap.m.Column({
            hAlign : "Left",
            header : new sap.m.Text({text : "Job Title"}),
            minScreenWidth : "Tablet",
            demandPopin : true
        }), 
        new sap.m.Column({
            hAlign : "Left",
            width : "30%",
            header : new sap.m.Text({text : "Phone"}),
            minScreenWidth : "Tablet",
            demandPopin : true
        }),
        new sap.m.Column({
            hAlign : "Left",
            width : "30%",
            header : new sap.m.Text({text : "Email"}),
            minScreenWidth : "Tablet",
            demandPopin : true
        })],
    items: {
        path : "/navigation",
        template : oTemplateContactsWithImagesData
    }
});

var oModelContactsWithImages = new sap.ui.model.json.JSONModel();
oModelContactsWithImages.setData(oContactsWithImagesData);
oListContactsWithImagesForm.setModel(oModelContactsWithImages);

var oContactsWithImagesFormGroup = new sap.suite.ui.commons.UnifiedThingGroup("contacts", {
    title: "Contacts",
    description: "4711, Marketing",
    content: oListContactsWithImagesForm,
    design: sap.suite.ui.commons.ThingGroupDesign.TopIndent
});

var image1 = new sap.m.Image({
    src: "demokit/images/persons/female_BaySu.jpg",
    width: "64px",
    height: "64px"
});
image1.addStyleClass("sapUtiImagePaddingRight");
image1.addStyleClass("sapUtiImagePaddingLeft");
var image2 = new sap.m.Image({
    src: "demokit/images/persons/female_SummerS.jpg",
    width: "64px",
    height: "64px"
});
image2.addStyleClass("sapUtiImagePaddingRight");
var image3 = new sap.m.Image({
    src: "demokit/images/persons/male_KentC.jpg",
    width: "64px",
    height: "64px"
});
image3.addStyleClass("sapUtiImagePaddingRight");
var image4 = new sap.m.Image({
    src: "demokit/images/persons/female_DwyerN.jpg",
    width: "64px",
    height: "64px"
});
image4.addStyleClass("sapUtiImagePaddingRight");
var image5 = new sap.m.Image({
    src: "demokit/images/persons/female_RushJ.jpg",
    width: "64px",
    height: "64px"
});
image5.addStyleClass("sapUtiImagePaddingLeft");

var oContactsContent = new sap.m.HBox("hbox");
oContactsContent.addItem(image1);
oContactsContent.addItem(image2);
oContactsContent.addItem(image3);

if (!isPhone) {
    oContactsContent.addItem(image4);
}

var oContactsFacet = new sap.suite.ui.commons.FacetOverview("contacts-facet", {
    title: "Contacts",
    quantity: 6,
    content: oContactsContent,
    height: isPhone ? "8rem" : "10rem", //non-standard on phone
    press: function() {
        setFacetContent("contactsImages")
    }
});