sap.ui.jsview("views.control.tileContainer", {

	createContent : function (oController) {

		// CODESNIP_START

		// create edit button
		var editButton = new sap.m.Button({
			text : "Edit",
			icon : "sap-icon://edit",
			press : function (evt) {
				var newValue = !tileContainer.getEditable();
				tileContainer.setEditable(newValue);
				evt.getSource().setText((newValue) ? "Done" : "Edit");
				evt.getSource().setIcon((newValue) ? "sap-icon://accept" : "sap-icon://edit");
			}
		});

		// create tile container
		var tileContainer = new sap.m.TileContainer({
			tileDelete : function (evt) {
				var tile = evt.getParameter("tile");
				evt.getSource().removeTile(tile);
			},
			tiles : [
				new sap.m.CustomTile({
					content : util.UiFactory.createDescription('Tile based entry pages are a modern design pattern allowing the user to quickly get an overview, understand the system status and navigate to the places where action is required', 'OnlyTop')
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://inbox",
					number : "89",
					title : "Approve Leave Requests",
					info : "Overdue",
					infoState : "Error"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://inbox",
					type : "Monitor",
					title : "Leave Request History"
				}),
				new sap.m.StandardTile({
					type : "Create",
					title : "Create Leave Request",
					info : "28 Days Left",
					infoState: "Success"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://travel-expense-report",
					number : "281,0",
					numberUnit : "euro",
					title : "Travel Reimbursement",
					info : "1 day ago"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://loan",
					number : "2380,0",
					numberUnit : "euro",
					title : "My Salary",
					info : "8 day ago"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://lab",
					number : "1",
					numberUnit : "Invention",
					title : "Test Lab Reports",
					info : "8 day ago"
				}),
				new sap.m.StandardTile({
					type : "Create",
					title : "Create Purchase Order",
					info : "890€ Open Budget",
					infoState: "Success"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://stethoscope",
					number : "3",
					title : "Yearly Health Check",
					info : "3 year overdue",
					infoState: "Error"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://meal",
					type : "Monitor",
					title : "Meal Schedule"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://cart",
					number : "787,00",
					numberUnit : "euro",
					title : "My Shopping Carts",
					info : "Waiting for Approval",
					infoState: "Warning"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://factory",
					number : "2",
					numberUnit : "Outages",
					title : "Factory Power Management",
					info : "Production On Hold",
					infoState: "Error"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://calendar",
					title : "Team Calendar"
				}),
				new sap.m.StandardTile({
					icon : "sap-icon://pie-chart",
					number : "5",
					title : "Financial Reports",
					info : "4 day ago",
					infoState: "Warning"
				})
			]
		});
		// CODESNIP_END

		return new sap.m.Page({
			showHeader: false,
			enableScrolling: false,
			content: [
				tileContainer
			],
			footer: new sap.m.Bar({
				contentMiddle : [
					editButton
				]
			})
		});
	}
});
