$(document).ready(function(){var e=$(".modal");$(function(){modalBtn=$("[data-toggle=modal]"),modalClose=$(".modal__close"),modalBtn.on("click",function(){e.toggleClass("modal_visible")}),modalClose.on("click",function(){e.toggleClass("modal_visible")}),$(document).mouseup(function(t){e.is(t.target)&&e.toggleClass("modal_visible")}),$(document).on("keydown",function(){27==event.keyCode&&1==$(".modal_visible").length&&e.toggleClass("modal_visible")})});var t=$(".modal-thanks");$(function(){modalClose=$(".modal-thanks__close"),modalClose.on("click",function(){t.toggleClass("modal-thanks_visible")}),$(document).mouseup(function(e){t.is(e.target)&&t.toggleClass("modal-thanks_visible")}),$(document).on("keydown",function(){27==event.keyCode&&1==$(".modal-thanks_visible").length&&t.toggleClass("modal-thanks_visible")})});new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination",type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var o=$(".swiper-button-next"),n=$(".swiper-button-prev"),a=$(".swiper-pagination");o.css("left",n.width()+20+a.width()+20),a.css("left",n.width()+20),(new WOW).init(),$(function(){$(".control__form").validate({errorElement:"em",errorClass:"invalid",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:16},policyCheckbox:"required"},errorPlacement:function(e,t){if("checkbox"==t.attr("type"))return t.next("label").append(e);e.insertAfter($(t))},messages:{userName:{required:"Имя обязательно",minlength:"Имя не короче двух букв",maxlength:"Имя не больше 15 букв"},userPhone:"Телефон обязателен",policyCheckbox:"Согласитесь на обработку данных"},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(o){console.log("Ajax сработал. Ответ сервера: "+o),$(e)[0].reset(),t.toggleClass("modal-thanks_visible")}})}}),$(".footer__form").validate({errorElement:"em",errorClass:"invalid",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:16},policyCheckbox:"required",userQuestion:{required:!0,minlength:10}},errorPlacement:function(e,t){if("checkbox"==t.attr("type"))return t.next("label").append(e);e.insertAfter($(t))},messages:{userName:{required:"Имя обязательно",minlength:"Имя не короче двух букв",maxlength:"Имя не больше 15 букв"},userPhone:"Телефон обязателен",userQuestion:{required:"Задайте вопрос",minlength:"сообщение должно быть длиннее 10 символов"},policyCheckbox:"Согласитесь на обработку данных"},submitHandler:function(e){$.ajax({type:"POST",url:"send.php",data:$(e).serialize(),success:function(o){console.log("Ajax сработал. Ответ сервера: "+o),$(e)[0].reset(),t.toggleClass("modal-thanks_visible")}})}}),$(".modal__form").validate({errorElement:"em",errorClass:"invalid",rules:{userName:{required:!0,minlength:2,maxlength:15},userPhone:{required:!0,minlength:16},userEmail:{required:!0,email:!0},policyCheckboxModal:"required"},errorPlacement:function(e,t){if("checkbox"==t.attr("type"))return t.next("label").append(e);e.insertAfter($(t))},messages:{userName:{required:"Имя обязательно",minlength:"Имя не короче двух букв",maxlength:"Имя не длиннее 15 букв"},userPhone:"Телефон обязателен",userEmail:{required:"Обязательно укажите email",email:"Введите в формате name@domain.com"},policyCheckboxModal:"Согласитесь на обработку данных"},submitHandler:function(o){$.ajax({type:"POST",url:"send.php",data:$(o).serialize(),success:function(n){console.log("Ajax сработал. Ответ сервера: "+n),$(o)[0].reset(),e.removeClass("modal_visible"),t.toggleClass("modal-thanks_visible")}})}}),$("[type=tel").mask("+7(000)000-00-00")}),$(window).scroll(function(){var e=$(".scroll-up");0!=$(this).scrollTop()?e.show():e.hide()}),$(".scroll-up").click(function(){return $("body,html").animate({scrollTop:0},800),!1});var r=!1;function l(e){e.target.playVideo()}$(window).scroll(function(){var e=$(".map");if($(this).scrollTop()>e.offset().top-800){if(r)return;r=!0;var t=document.createElement("script");t.src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aff33592786caac6d4815c88a48b802b9d1fa327f2861f76882a17855760ce22e&amp;width=auto;25&amp;height=auto;lang=ru_RU&amp;scroll=false",e.append(t)}}),$(".video__play").on("click",function(){new YT.Player("player",{height:"465",width:"100%",videoId:"Mfs90HDVFfI",events:{onReady:l}})})});var $page=$("html, body");$('a[href*="#project"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},700),!1}),$('a[href*="#control"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},700),!1}),$('a[href*="#comand"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},700),!1}),$('a[href*="#customers"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},700),!1}),$('a[href*="#question"]').click(function(){return $page.animate({scrollTop:$($.attr(this,"href")).offset().top},700),!1});var isAddedMap=!1;$(window).scroll(function(){var e=$(".map");if($(this).scrollTop()>e.offset().top-800){if(isAddedMap)return;isAddedMap=!0;var t=document.createElement("script");t.src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6e1b29bfb831e6868ca0460087b9bd7b138ea93171c356178daa1ba8f18be9dd&amp;width=auto25&amp;lang=ru_RU&amp;scroll=false",e.append(t)}});