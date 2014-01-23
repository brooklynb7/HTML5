$(document)
		.ready(
				function() {

					var items = document.getElementsByClassName('items');

					var imgArray=['mini_bar','mini_column','mini_dual_column','mini_dual_bar','mini_stacked_column',
					              'mini_dual_stacked_column','mini_100_stacked_column','mini_100_dual_stacked_column','mini_line','mini_dual_line',
					              'mini_combination','mini_dual_combination','mini_pie','mini_donut','mini_scatter','mini_bubble'];
					
					var titleArray=['Bar','Column','Dual Column','Dual Bar',
					                'Stacked VBar','Dual Stacked VBar','Stacked VBar(%)','Dual Stacked VBar(%)','Line',
					                'Dual Line','Combination','Dual Combination',
					                'Pie','Donut','Scatter','Bubble'];
					for ( var i = 0; i < items.length; i++) {

						var item_title_div = document.createElement('div');

						var item_title = document.createElement('div');
						var item_subtitle = document.createElement('div');
						var item_splitline_top = document.createElement('div');
						var item_img = document.createElement('div');
						

						item_title.innerHTML = '<span class="item_title_txt">'
								+ titleArray[i] + '</span>';
						item_subtitle.innerHTML = '<span class="item_subtitle_txt"> </span>';
						item_img.innerHTML = '<img class="item_img" src="images/minigraphs/'
								+ imgArray[i] + '.PNG"/>';
						item_splitline_top.innerHTML = '<div class="item_splitline"></div>';
						

						item_title_div.className = 'item_title_div';

						item_title_div.appendChild(item_title);
						item_title_div.appendChild(item_subtitle);
						item_title_div.appendChild(item_splitline_top);
						item_title_div.appendChild(item_img);
						

						items[i].innerHTML = '';
						items[i].appendChild(item_title_div);
						// console.log(items[i]+' pushed');

					}

					var title_txt = document
							.getElementsByClassName('item_title_txt');
					for ( var j = 0; j < title_txt.length; j++) {
						// if(title_txt[j].width>140){
						$(title_txt[j].parentNode).css('margin', '0 8px');
						$(title_txt[j].parentNode).css('width', '172px');
						$(title_txt[j].parentNode).css('height', '32px');
						// $(title_txt[j]).css('white-space','nowrap');
						// $(title_txt[j]).css('text-overflow','ellipsis');
						// $(title_txt[j]).css('overflow','hidden');
						//$(title_txt[j]).css('display','block');
						//title_txt[j].parentNode.css('text-overflow','ellipsis');
						//text-overflow: ellipsis;
						//}
					}

				});