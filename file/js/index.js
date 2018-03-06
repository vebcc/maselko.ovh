     var cosiekts = 0;
					var cosiekmc = 0;
					var cosiekmc2 = 0;
					var cosiekserwer4 = 0;
					var hide1 = 0;
					var hide2 = 0;
					var hide3 = 0;
					var hide4 = 0;
					var hide5 = 0;
					var hide6 = 0;
					var hide7 = 0;
					sessionStorage.setItem('listts', '0');
					sessionStorage.setItem('listmc', '0');
					sessionStorage.setItem('listmc2', '0');
					sessionStorage.setItem('listserwer4', '0');
					sessionStorage.setItem('hide1', '0');
					sessionStorage.setItem('hide2', '0');
					sessionStorage.setItem('hide3', '0');
					sessionStorage.setItem('hide4', '0');
					sessionStorage.setItem('hide5', '0');
					sessionStorage.setItem('hide6', '0');
					sessionStorage.setItem('hide7', '0');
					sessionStorage.setItem('aktualny', '0');
					var allinone = ['#home', '#listts', '#listmc', '#listmc2', '#listserwer4', '#hide1', '#hide2', '#hide3', '#hide4', '#hide5', '#hide6', '#hide7'];

					function rest(){
						$('.rbt').css("color", "#ffffff");
						$('.rbt').css("background", "#000000");
						$('.btt').css("color", "#ffffff");
						sessionStorage.setItem('listts', '0');
						sessionStorage.setItem('listmc', '0');
						sessionStorage.setItem('listmc2', '0');
						sessionStorage.setItem('listserwer4', '0');
						sessionStorage.setItem('hide1', '0');
						sessionStorage.setItem('hide2', '0');
						sessionStorage.setItem('hide3', '0');
						sessionStorage.setItem('hide4', '0');
						sessionStorage.setItem('hide5', '0');
						sessionStorage.setItem('hide6', '0');
						sessionStorage.setItem('hide7', '0');
					}

					function buttonon(klasa){
						$(klasa).css("color", "#000000");
						$(klasa).css("background-color", "#ff4000");
						$(klasa).css("text-decoration", "none");
					}

					function buttonoff(klasa){
						$(klasa).css("color", "#ffffff");
						$(klasa).css("background", "#000000");
					}

					function lbuttonon(lklasa){
						$(lklasa).css("color", "#000000");
					}

					function lbuttonoff(lklasa){
						$(lklasa).css("color", "#ffffff");
					}

			$(document).ready(function(){
				$("#ww > div > div.col-md-5 > div > div > div > div:nth-child(2)").hover(function(){
					var cosiekts = sessionStorage.getItem('listts')
					if(cosiekts==0){
						$("#listts").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.lbt1');
						lbuttonon('.tlbt1');
					}
				}, function(){
					var cosiekts = sessionStorage.getItem('listts')
					if(cosiekts==0){
						$("#listts").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.lbt1');
						lbuttonoff('.tlbt1');
					}
				});
			});

			$(document).ready(function(){
				$("#ww > div > div.col-md-5 > div > div > div > div:nth-child(3)").hover(function(){
					var cosiekmc = sessionStorage.getItem('listmc')
					if(cosiekmc==0){
						$("#listmc").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.lbt2');
						lbuttonon('.tlbt2');
					}
				}, function(){
					var cosiekmc = sessionStorage.getItem('listmc')
					if(cosiekmc==0){
						$("#listmc").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.lbt2');
						lbuttonoff('.tlbt2');
					}
				});
			});

			$(document).ready(function(){
				$("#ww > div > div.col-md-5 > div > div > div > div:nth-child(4)").hover(function(){
					var cosiekmc2 = sessionStorage.getItem('listmc2')
					if(cosiekmc2==0){
						$("#listmc2").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.lbt3');
						lbuttonon('.tlbt3');
					}
				}, function(){
					var cosiekmc2 = sessionStorage.getItem('listmc2')
					if(cosiekmc2==0){
						$("#listmc2").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.lbt3');
						lbuttonoff('.tlbt3');
					}
				});
			});

			$(document).ready(function(){
				$("#ww > div > div.col-md-5 > div > div > div > div:nth-child(5)").hover(function(){
					var cosiekserwer4 = sessionStorage.getItem('listserwer4')
					if(cosiekserwer4==0){
						$("#listserwer4").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.lbt4');
						lbuttonon('.tlbt4');
					}
				}, function(){
					var cosiekserwer4 = sessionStorage.getItem('listserwer4')
					if(cosiekserwer4==0){
						$("#listserwer4").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.lbt4');
						lbuttonoff('.tlbt4');
					}
				});
			});

			$(document).ready(function(){
				$("#menupoziome > div.buttons > a:nth-child(3)").hover(function(){
					var cosiekhide1 = sessionStorage.getItem('hide1')
					if(cosiekhide1==0){
						$("#hide1").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");4
						buttonon('.bt3');
					}
				}, function(){
					var cosiekhide1 = sessionStorage.getItem('hide1')
					if(cosiekhide1==0){
						$("#hide1").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.bt3');
					}
				});
			});

			$(document).ready(function(){
				$("#menupoziome > div.buttons > a:nth-child(6)").hover(function(){
					var cosiekhide2 = sessionStorage.getItem('hide2')
					if(cosiekhide2==0){
						$("#hide2").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.bt6');
					}
				}, function(){
					var cosiekhide2 = sessionStorage.getItem('hide2')
					if(cosiekhide2==0){
						$("#hide2").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.bt6');
					}
				});
			});

			$(document).ready(function(){
				$("#menupoziome > div.buttons > a:nth-child(7)").hover(function(){
					var cosiekhide3 = sessionStorage.getItem('hide3')
					if(cosiekhide3==0){
						$("#hide3").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.bt7');
					}
				}, function(){
					var cosiekhide3 = sessionStorage.getItem('hide3')
					if(cosiekhide3==0){
						$("#hide3").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.bt7');
					}
				});
			});

			$(document).ready(function(){
				$("#menupoziome > div.buttons > a:nth-child(5)").hover(function(){
					var cosiekhide4 = sessionStorage.getItem('hide4')
					if(cosiekhide4==0){
						$("#hide4").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.bt5');
					}
				}, function(){
					var cosiekhide4 = sessionStorage.getItem('hide4')
					if(cosiekhide4==0){
						$("#hide4").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.bt5');
					}
				});
			});

			$(document).ready(function(){
				$("#menupoziome > div.buttons > a:nth-child(4)").hover(function(){
					var cosiekhide5 = sessionStorage.getItem('hide5')
					if(cosiekhide5==0){
						$("#hide5").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.bt4');
					}
				}, function(){
					var cosiekhide5 = sessionStorage.getItem('hide5')
					if(cosiekhide5==0){
						$("#hide5").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.bt4');
					}
				});
			});

			$(document).ready(function(){
				$("#menupoziome > div.buttons > a:nth-child(2)").hover(function(){
					var cosiekhide6 = sessionStorage.getItem('hide6')
					if(cosiekhide6==0){
						$("#hide6").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.bt2');
					}
				}, function(){
					var cosiekhide6 = sessionStorage.getItem('hide6')
					if(cosiekhide6==0){
						$("#hide6").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.bt2');
					}
				});
			});

			$(document).ready(function(){
				$("#menupoziome > div.buttons > a:nth-child(1)").hover(function(){
					var cosiekhide7 = sessionStorage.getItem('hide7')
					if(cosiekhide7==0){
						$("#hide7").css("display", "block");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "none");
						buttonon('.bt1');
					}
				}, function(){
					var cosiekhide7 = sessionStorage.getItem('hide7')
					if(cosiekhide7==0){
						$("#hide7").css("display", "none");
						$(allinone[sessionStorage.getItem('aktualny')]).css("display", "block");
						buttonoff('.bt1');
					}
				});
			});

			function lista(nr){
				switch(nr){
					case 0:
							var coteraz = sessionStorage.getItem('hide7');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('hide7', '1');
								sessionStorage.setItem('aktualny', '0');
								$("#home").css("display", "block");
								buttonon('.bt1');
							}else{
								sessionStorage.setItem('hide7', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#hide7").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.bt1');
							}
							break;
					case 1:
							var coteraz = sessionStorage.getItem('listts');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('listts', '1');
								sessionStorage.setItem('aktualny', '1');
								$("#listts").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.lbt1');
								lbuttonon('.tlbt1');
							}else{
								sessionStorage.setItem('listts', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#listts").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.lbt1');
								lbuttonoff('.tlbt1');
							}
							break;
					case 2:
							var coteraz = sessionStorage.getItem('listmc');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('listmc', '1');
								sessionStorage.setItem('aktualny', '2');
								$("#listmc").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.lbt2');
								lbuttonon('.tlbt2');
							}else{
								sessionStorage.setItem('listmc', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#listmc").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.lbt2');
								lbuttonoff('.tlbt2');
							}
							break;
					case 3:
							var coteraz = sessionStorage.getItem('listmc2');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('listmc2', '1');
								sessionStorage.setItem('aktualny', '3');
								$("#listmc2").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.lbt3');
								lbuttonon('.tlbt3');
							}else{
								sessionStorage.setItem('listmc2', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#listmc2").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.lbt3');
								lbuttonoff('.tlbt3');
							}
							break;
					case 4:
							var coteraz = sessionStorage.getItem('listserwer4');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('listserwer4', '1');
								sessionStorage.setItem('aktualny', '4');
								$("#listserwer4").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.lbt4');
								lbuttonon('.tlbt4');
							}else{
								sessionStorage.setItem('listserwer4', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#listserwer4").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.lbt4');
								lbuttonoff('.tlbt4');
							}
							break;
					case 5:
							var coteraz = sessionStorage.getItem('hide1');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('hide1', '1');
								sessionStorage.setItem('aktualny', '5');
								$("#hide1").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.bt3');
							}else{
								sessionStorage.setItem('hide1', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#hide1").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.bt3');
							}
							break;
					case 6:
							var coteraz = sessionStorage.getItem('hide2');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('hide2', '1');
								sessionStorage.setItem('aktualny', '6');
								$("#hide2").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.bt6');
							}else{
								sessionStorage.setItem('hide2', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#hide2").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.bt6');
							}
							break;
					case 7:
							var coteraz = sessionStorage.getItem('hide3');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('hide3', '1');
								sessionStorage.setItem('aktualny', '7');
								$("#hide3").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.bt7');
							}else{
								sessionStorage.setItem('hide3', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#hide3").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.bt7');
							}
							break;
					case 8:
							var coteraz = sessionStorage.getItem('hide4');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('hide4', '1');
								sessionStorage.setItem('aktualny', '8');
								$("#hide4").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.bt5');
							}else{
								sessionStorage.setItem('hide4', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#hide4").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.bt5');
							}
							break;
					case 9:
							var coteraz = sessionStorage.getItem('hide5');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('hide5', '1');
								sessionStorage.setItem('aktualny', '9');
								$("#hide5").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.bt4');
							}else{
								sessionStorage.setItem('hide5', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#hide5").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.bt4');
							}
							break;
					case 10:
							var coteraz = sessionStorage.getItem('hide6');
							if(coteraz==0){
								rest();
								sessionStorage.setItem('hide6', '1');
								sessionStorage.setItem('aktualny', '10');
								$("#hide6").css("display", "block");
								$("#home").css("display", "none");
								buttonon('.bt2');
							}else{
								sessionStorage.setItem('hide6', '0');
								sessionStorage.setItem('aktualny', '0');
								$("#hide6").css("display", "none");
								$("#home").css("display", "block");
								buttonoff('.bt2');
							}
							break;
				}
			}
