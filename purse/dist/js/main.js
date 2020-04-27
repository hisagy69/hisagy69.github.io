$(document).ready(function() {
  $(".form1").submit(function() {
    $.ajax({
      type: "POST",
      url: "rest.php",
      data: $(this).serialize()
    }).done(function() {
      alert("Спасибо за заявку!");
    });
    return false;
  });
  $(".form2").submit(function() {
    $.ajax({
      type: "POST",
      url: "rest1.php",
      data: $(this).serialize()
    }).done(function() {
      alert("Спасибо за заявку!");
    });
    return false;
  });
  $('[type=tel').mask('+7(000)000-00-00'); 
  $(function() {
    var modal = $(".modal");
    $(".button_form").on("click",(function() {
      modal.toggleClass("modal_visible");
      $(".modal__close").on("click", function() {
        modal.removeClass("modal_visible");
      });
      $(document).mouseup(function(event) {
        if (modal.is(event.target)) {
          modal.removeClass("modal_visible");
        }
      });
      $(document).on("keydown", function() {
        if (event.keyCode == 27 && $(".modal_visible").length == 1) {
          modal.removeClass("modal_visible");
        }
      });
    }));
      var modalGoodsBase = $(".modal-goods__base");
      $(".button-goods__base").on("click",(function() {
        modalGoodsBase.toggleClass("modal-goods_visible");
        $(".modal-goods__close").on("click", function() {
          modalGoodsBase.removeClass("modal-goods_visible");
        });
        $(document).mouseup(function(event) {
          if (modalGoodsBase.is(event.target)) {
            modalGoodsBase.removeClass("modal-goods_visible");
          }
        });
        $(document).on("keydown", function() {
          if (event.keyCode == 27 && $(".modal-goods_visible").length == 1) {
            modalGoodsBase.removeClass("modal-goods_visible");
          }
        });
      }));
      var modalGoodsMedium = $(".modal-goods__medium");
      $(".button-goods__medium").on("click",(function() {
        modalGoodsMedium.toggleClass("modal-goods_visible");
        $(".modal-goods__close").on("click", function() {
          modalGoodsMedium.removeClass("modal-goods_visible");
        });
        $(document).mouseup(function(event) {
          if (modalGoodsMedium.is(event.target)) {
            modalGoodsMedium.removeClass("modal-goods_visible");
          }
        });
        $(document).on("keydown", function() {
          if (event.keyCode == 27 && $(".modal-goods_visible").length == 1) {
            modalGoodsMedium.removeClass("modal-goods_visible");
          }
        });
      }));
      var modalGoodsComfort = $(".modal-goods__comfort");
      $(".button-goods__comfort").on("click",(function() {
        modalGoodsComfort.toggleClass("modal-goods_visible");
        $(".modal-goods__close").on("click", function() {
          modalGoodsComfort.removeClass("modal-goods_visible");
        });
        $(document).mouseup(function(event) {
          if (modalGoodsComfort.is(event.target)) {
            modalGoodsComfort.removeClass("modal-goods_visible");
          }
        });
        $(document).on("keydown", function() {
          if (event.keyCode == 27 && $(".modal-goods_visible").length == 1) {
            modalGoodsComfort.removeClass("modal-goods_visible");
          }
        });
      }));
      var modalGoodsTwins = $(".modal-goods__twins");
      $(".button-goods__twins").on("click",(function() {
        modalGoodsTwins.toggleClass("modal-goods_visible");
        $(".modal-goods__close").on("click", function() {
          modalGoodsTwins.removeClass("modal-goods_visible");
        });
        $(document).mouseup(function(event) {
          if (modalGoodsTwins.is(event.target)) {
            modalGoodsTwins.removeClass("modal-goods_visible");
          }
        });
        $(document).on("keydown", function() {
          if (event.keyCode == 27 && $(".modal-goods_visible").length == 1) {
            modalGoodsTwins.removeClass("modal-goods_visible");
          }
        });
      }));
    var $page = $('html, body');
    $('a[href*="#vantage"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      return false;
    });
    var btnBase = $(".button-base"),
    baseGoods = $(".base-goods");
    btnBase.on("click", function() {
      btnBase.toggleClass("button-base_visible");
      $(".button-base").text("скрыть товары");
      
      if ($(".button-medium_visible").length == 1) {
        btnMedium.removeClass("button-medium_visible");
        btnMedium.text("показать товары");
        mediumGoods.removeClass("medium-goods_visible");
      }
      else if ($(".button-comfort_visible").length == 1) {
        btnComfort.removeClass("button-comfort_visible");
        btnComfort.text("показать товары");
        comfortBase.removeClass("comfort-goods_visible");
      }
      else if ($(".button-twins_visible").length == 1) {
        btnTwins.removeClass("button-twins_visible");
        btnTwins.text("показать товары");
        twinsGoods.removeClass("twins-goods_visible");
      }
      else if ($(".button-base_visible").length != 1) {
        btnBase.text("показать товары");
      }
      baseGoods.toggleClass("base-goods_visible");
    });
    
    var btnMedium = $(".button-medium"),
    mediumGoods = $(".medium-goods");
    btnMedium.on("click", function() {
      btnMedium.toggleClass("button-medium_visible");
      $(".button-medium").text("скрыть товары");
      if ($(".button-base_visible").length == 1) {
        btnBase.removeClass("button-base_visible");
        btnBase.text("показать товары");
        baseGoods.removeClass("base-goods_visible");
      }
      else if ($(".button-comfort_visible").length == 1) {
        btnComfort.removeClass("button-comfort_visible");
        btnComfort.text("показать товары");
        comfortGoods.removeClass("comfort-goods_visible");
      }
      else if ($(".button-twins_visible").length == 1) {
        btnTwins.removeClass("button-twins_visible");
        btnTwins.text("показать товары");
        twinsGoods.removeClass("twins-goods_visible");
      }
      else if ($(".button-medium_visible").length != 1) {
        btnMedium.text("показать товары");
      }
      mediumGoods.toggleClass("medium-goods_visible");
    });

    var btnComfort = $(".button-comfort"),
    comfortGoods = $(".comfort-goods");
    btnComfort.on("click", function() {
      btnComfort.toggleClass("button-comfort_visible");
      $(".button-comfort").text("скрыть товары");
      if ($(".button-base_visible").length == 1) {
        btnBase.removeClass("button-base_visible");
        btnBase.text("показать товары");
        baseGoods.removeClass("base-goods_visible");
      }
      else if ($(".button-medium_visible").length == 1) {
        btnMedium.removeClass("button-medium_visible");
        btnMedium.text("показать товары");
        mediumGoods.removeClass("medium-goods_visible");
      }
      else if ($(".button-twins_visible").length == 1) {
        btnTwins.removeClass("button-twins_visible");
        btnTwins.text("показать товары");
        twinsGoods.removeClass("twins-goods_visible");
      }
      else if ($(".button-comfort_visible").length != 1) {
        btnComfort.text("показать товары");
      }
      comfortGoods.toggleClass("comfort-goods_visible");  
    });
    //twins
    var btnTwins = $(".button-twins"),
    twinsGoods = $(".twins-goods");
    btnTwins.on("click", function() {
      btnTwins.toggleClass("button-twins_visible");
      $(".button-twins").text("скрыть товары");
      if ($(".button-base_visible").length == 1) {
        btnBase.removeClass("button-base_visible");
        btnBase.text("показать товары");
        baseGoods.removeClass("base-goods_visible");
      }
      else if ($(".button-medium_visible").length == 1) {
        btnMedium.removeClass("button-medium_visible");
        btnMedium.text("показать товары");
        mediumGoods.removeClass("medium-goods_visible");
      }
      else if ($(".button-comfort_visible").length == 1) {
        btnComfort.removeClass("button-comfort_visible");
        btnComfort.text("показать товары");
        comfortGoods.removeClass("comfort-goods_visible");
      }
      else if ($(".button-twins_visible").length != 1) {
        btnTwins.text("показать товары");
      }
      twinsGoods.toggleClass("twins-goods_visible");  
    });
    /* var btnBase = $(".button-base"),
    baseGoods = $(".base-goods");
    btnBase.on("click", function() {
      if ($(".active").length == 1) {
        $(".goods-list").removeClass("active");
        btnBase.text("показать товары");
        baseGoods.toggleClass("active");
        btnBase.text("Скрыть товары");
      }
      else {
        baseGoods.toggleClass("active");
        btnBase.text("Скрыть товары");
      }
    });
    
    //-base
    var btnMedium = $(".button-medium"),
    mediumGoods = $(".medium-goods");
    btnMedium.on("click", function() {
      if ($(".active").length == 1) {
        $(".goods-list").removeClass("active");
        btnMedium.text("показать товары");
      }
      else {
        mediumGoods.toggleClass("active");
        btnMedium.text("Скрыть товары");
      }
    });
    //-medium
    var btnComfort = $(".button-comfort"),
    comfortGoods = $(".comfort-goods");
    btnComfort.on("click",function() {
      if ($(".active").length == 1) {
        $(".goods-list").removeClass("active");
        btnComfort.text("показать товары");
      }
      else {
        comfortGoods.toggleClass("active");
        btnComfort.text("Скрыть товары");
      }
    }); */
    //-comfort
/*     var btnTwins = $(".button-twins"),
    twinsGoods = $(".twins-goods");
    btnTwins.on("click",function() {
      if ($(".active").length == 1) {
        $(".goods-list").removeClass("active");
      }
      twinsGoods.toggleClass("active");
      btnTwins.text("Скрыть товары")
    });*/
  });
    $(".img1").hover(function() {
      $(".focus1").toggleClass("focus1_active");
    });
    $(".img2").hover(function() {
      $(".focus2").toggleClass("focus2_active");
    });
    $(".img3").hover(function() {
      $(".focus3").toggleClass("focus3_active");
    });
    $(".img4").hover(function() {
      $(".focus4").toggleClass("focus4_active");
    });
    $(".img5").hover(function() {
      $(".focus5").toggleClass("focus5_active");
    });
    $(".img6").hover(function() {
      $(".focus6").toggleClass("focus6_active");
    });
    $(".img7").hover(function() {
      $(".focus7").toggleClass("focus7_active");
    });
    $(".img8").hover(function() {
      $(".focus8").toggleClass("focus8_active");
    });
    $(".img9").hover(function() {
      $(".focus9").toggleClass("focus9_active");
    });
    $(".img10").hover(function() {
      $(".focus10").toggleClass("focus10_active");
    });
    $(".img11").hover(function() {
      $(".focus11").toggleClass("focus11_active");
    });
    $(".img12").hover(function() {
      $(".focus12").toggleClass("focus12_active");
    });
    $(".img13").hover(function() {
      $(".focus13").toggleClass("focus13_active");
    });
    $(".img14").hover(function() {
      $(".focus14").toggleClass("focus14_active");
    });
    $(".img15").hover(function() {
      $(".focus15").toggleClass("focus15_active");
    });
    $(".img16").hover(function() {
      $(".focus16").toggleClass("focus16_active");
    });
    $(".img17").hover(function() {
      $(".focus17").toggleClass("focus17_active");
    });
    $(".img18").hover(function() {
      $(".focus18").toggleClass("focus18_active");
    });
    $(".img19").hover(function() {
      $(".focus19").toggleClass("focus19_active");
    });
    $(".img20").hover(function() {
      $(".focus20").toggleClass("focus20_active");
    });
    $(".img21").hover(function() {
      $(".focus21").toggleClass("focus21_active");
    });
    $(".img22").hover(function() {
      $(".focus22").toggleClass("focus22_active");
    });

    $(".img24").hover(function() {
      $(".focus24").toggleClass("focus24_active");
    });
    $(".img25").hover(function() {
      $(".focus25").toggleClass("focus25_active");
    });
    $(".img26").hover(function() {
      $(".focus26").toggleClass("focus26_active");
    });
    $(".img27").hover(function() {
      $(".focus27").toggleClass("focus27_active");
    });
    $(".img28").hover(function() {
      $(".focus28").toggleClass("focus28_active");
    });
    $(".img29").hover(function() {
      $(".focus29").toggleClass("focus29_active");
    });
    $(".img30").hover(function() {
      $(".focus30").toggleClass("focus30_active");
    });
    $(".img31").hover(function() {
      $(".focus31").toggleClass("focus31_active");
    });
    $(".img32").hover(function() {
      $(".focus32").toggleClass("focus32_active");
    });
    $(".img33").hover(function() {
      $(".focus33").toggleClass("focus33_active");
    });
    $(".img34").hover(function() {
      $(".focus34").toggleClass("focus34_active");
    });
    $(".img35").hover(function() {
      $(".focus35").toggleClass("focus35_active");
    });
    $(".img36").hover(function() {
      $(".focus36").toggleClass("focus36_active");
    });
    $(".img37").hover(function() {
      $(".focus37").toggleClass("focus37_active");
    });
    $(".img38").hover(function() {
      $(".focus38").toggleClass("focus38_active");
    });
    $(".img39").hover(function() {
      $(".focus39").toggleClass("focus39_active");
    });
    $(".img40").hover(function() {
      $(".focus40").toggleClass("focus40_active");
    });
    $(".img41").hover(function() {
      $(".focus41").toggleClass("focus41_active");
    });
    $(".img42").hover(function() {
      $(".focus42").toggleClass("focus42_active");
    });
    $(".img43").hover(function() {
      $(".focus43").toggleClass("focus43_active");
    });
    $(".img44").hover(function() {
      $(".focus44").toggleClass("focus44_active");
    });
    $(".img45").hover(function() {
      $(".focus45").toggleClass("focus45_active");
    });
    $(".img46").hover(function() {
      $(".focus46").toggleClass("focus46_active");
    });
    $(".img47").hover(function() {
      $(".focus47").toggleClass("focus47_active");
    });
    $(".img48").hover(function() {
      $(".focus48").toggleClass("focus48_active");
    });
    $(".img23").hover(function() {
      $(".focus23").toggleClass("focus23_active");
    });
    $(".img49").hover(function() {
      $(".focus49").toggleClass("focus49_active");
    });
    $(".img50").hover(function() {
      $(".focus50").toggleClass("focus50_active");
    });
    $(".img51").hover(function() {
      $(".focus51").toggleClass("focus51_active");
    });
    $(".img52").hover(function() {
      $(".focus52").toggleClass("focus52_active");
    });

  // показать текст
    var descriptionHide = $(".description_hide"),
    further = $(".further"),
    hide = $(".hide");
    further.on("click", function() {
    further.hide();
    descriptionHide.show();
    });
    hide.on("click", function() {
      descriptionHide.hide();
      further.show();
    });
//стрелка вниз
   var iconVisibility = $(".icons_visibility"),
   linkDown = $(".link-down__text");
   iconVisibility.hide();
   linkDown.on("click", function() {
    iconVisibility.show();
   });
});