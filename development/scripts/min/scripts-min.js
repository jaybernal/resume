$(function(){var a=36,e=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:"onLeave"}});$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top-a},1e3),!1}}),$(window).scroll(function(){var e=$(window).scrollTop()+a;$("nav li a").removeClass("active"),e>$("#about-page").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#about-page"]').addClass("active")),e>$("#experiences-page").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#experiences-page"]').addClass("active")),e>$("#education-page").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#education-page"]').addClass("active")),e>$("#abilities-page").offset().top&&($("nav li a").removeClass("active"),$('a[href$="#abilities-page"]').addClass("active"))}),$(".chart").easyPieChart({scaleColor:!1,lineWidth:20,lineCap:"butt",barColor:"#1abc9c",trackColor:"#ecf0f1",size:150,animate:600});var t=new ScrollMagic.Scene({triggerElement:"#nav"}).setPin("#nav").addTo(e)});