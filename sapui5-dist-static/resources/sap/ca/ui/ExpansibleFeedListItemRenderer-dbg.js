jQuery.sap.declare("sap.ca.ui.ExpansibleFeedListItemRenderer");

jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.FeedListItemRenderer");

/**
 * @class ExpansibleFeedListItem renderer. 
 * @static
 */
sap.ca.ui.ExpansibleFeedListItemRenderer = sap.ui.core.Renderer.extend(sap.m.FeedListItemRenderer);


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the render output buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */

sap.m.FeedListItemRenderer.renderLIContent = function (rm, oFeedListItem) {
    //TODO: This code should be somehow integrated in the original FeedListItem and not added in this ugly way here...
    // convenience variable
    var sMyId = oFeedListItem.getId(),
        bIsPhone = jQuery.device.is.phone;

    rm.write('<article');
    rm.writeControlData(oFeedListItem);
    rm.addClass('sapMFeedListItem');
    rm.addClass('sapCaUiExpansibleFeedListItem');

    rm.writeClasses();
    rm.write('>');

    // icon
    if (!!oFeedListItem.getShowIcon()) {
        rm.write('<figure id="' + sMyId + '-figure" class ="sapMFeedListItemFigure');
        if (!!oFeedListItem.getIcon()) {
            rm.write('">');
        } else {
            rm.write(' sapMFeedListItemIsDefaultIcon">');
        }
        if (!!oFeedListItem.getIconActive()) {
            
            rm.write('<a id="' + sMyId + '-iconRef" ');
            rm.writeAttribute('href', 'javascript:void(0);');
            rm.write('>');
        } 
        rm.renderControl(oFeedListItem._getImageControl()); 
        if (!!oFeedListItem.getIconActive()) {
            rm.write('</a>');
        }
        rm.write('</figure>');
    }

    // text (starting with sender)
    

    
    if (bIsPhone) {
        rm.write('<div class= "sapMFeedListItemHeader ');
        if (!!oFeedListItem.getShowIcon()) {
            rm.write('sapMFeedListItemHasFigure ');
        }
        if (!!oFeedListItem.getSender() && !!oFeedListItem.getTimestamp()) {
            rm.write('sapMFeedListItemFullHeight');
        }
        rm.write('" >');
            if (!!oFeedListItem.getSender()) {
                rm.write('<p id="' + sMyId + '-name" class="sapMFeedListItemTextName">');
                rm.renderControl(oFeedListItem._getLinkControl());
                rm.write('</p>');
            }
            if (!!oFeedListItem.getTimestamp()) {
                //write date
                rm.write('<p class="sapMFeedListItemTimestamp">');
                rm.writeEscaped(oFeedListItem.getTimestamp());
                rm.write('</p>');
            }
        
        rm.write('</div>');
        rm.write('<p id="' + sMyId + '-text" class="sapMFeedListItemText">');
        rm.writeEscaped(oFeedListItem.getText(), true);
        rm.write('</p>');

        if (oFeedListItem.getMaxLines() > 0) {
            sap.ca.ui.ExpansibleFeedListItemRenderer.renderSeeMoreContent(rm, oFeedListItem);
        }

        if (!!oFeedListItem.getInfo()) {
            // info
            rm.write('<p class="sapMFeedListItemFooter">');
            if (!!oFeedListItem.getInfo()) {
                rm.write('<span class="sapMFeedListItemInfo">');
                rm.writeEscaped(oFeedListItem.getInfo());
                rm.write('</span>');
            }
        }
    } else {
        rm.write('<div class= "sapMFeedListItemText ');
        if (!!oFeedListItem.getShowIcon()) {
            rm.write('sapMFeedListItemHasFigure ');
        }
        rm.write('" >');
        rm.write('<p id="' + sMyId + '-text" class="sapMFeedListItemTextText">');
        if (!!oFeedListItem.getSender()) {
            rm.write('<span id="' + sMyId + '-name" class="sapMFeedListItemTextName">');
            rm.renderControl(oFeedListItem._getLinkControl());
            rm.write(': ');
            rm.write('</span>');
        }
        rm.writeEscaped(oFeedListItem.getText(), true);
        if (oFeedListItem.getMaxLines() > 0) {
            sap.ca.ui.ExpansibleFeedListItemRenderer.renderSeeMoreContent(rm, oFeedListItem);
        }
        if (!!oFeedListItem.getInfo() || !!oFeedListItem.getTimestamp()) {
            // info and date
            rm.write('<p class="sapMFeedListItemFooter">');
            if (!!oFeedListItem.getInfo()) {
                rm.writeEscaped(oFeedListItem.getInfo());
                //Write Interpunct separator if necessary (with spaces before and after)
                if (!!oFeedListItem.getTimestamp()) {
                    rm.write("&#160&#160&#x00B7&#160&#160");
                }
            }
            if (!!oFeedListItem.getTimestamp()) {
                rm.writeEscaped(oFeedListItem.getTimestamp());
            }
        }
        rm.write('</p>');
        rm.write('</div>');
    }
    rm.write('</article>');
};

sap.ca.ui.ExpansibleFeedListItemRenderer.renderSeeMoreContent = function (rm, oFeedListItem) {
    rm.write('<div');
    rm.addClass('sapCaUiExpansibleFeedListItemSeeMoreLink');
    rm.writeClasses();
    rm.write('>');
    rm.write("<p");
    rm.addClass('sapCaUiExpansibleFeedListItemSeeMoreLinkDots');
    rm.writeClasses();
    rm.write(">...</p>");
    rm.renderControl(oFeedListItem._getSeeMoreLink());
    rm.write('</div>');
};