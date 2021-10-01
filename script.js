$(document).ready(function() {

    console.log($(".list .list_item "));
    $(".list .list_item a").on('click', function() {
        //color to links of nav bar
        $(this).addClass("orngword").parent().siblings().
        find("a").removeClass("orngword");
        //go to->navbar
        var id = $(this).attr("id");
        var className = $("." + id);
        var navHeight = $('.navbar').innerHeight();
        console.log(id);
        $("body,html").animate({
            scrollTop: className.offset().top - navHeight
        }, 2000)
    });

    /*menu*/
    var menu = document.querySelector(".menu");
    var links = document.querySelector(".list");
    console.log(menu, links);
    /* $('.menu').toggle(function() {
         console.log("Hi");
         //$('.links').fadeIn(1000);
     }); $('.menu')*/
    menu.onclick = function() {
        //if (($('.links').style.display) == "none") {}
        links.classList.toggle("hide");
        //else { $('.links').fadeOut(1000); }

    };



    /*scroll to top*/
    //*click it*/
    $(".arrow").on("click", function() {
        $("body,html").animate({
            scrollTop: 0
        }, 3000)
    });
    /*->apear it*/
    $(window).scroll(function() {
        var screenTop = $(this).scrollTop();
        if (screenTop > 200) {
            $('.arrow').show();
        } else { $('.arrow').hide(); }
    });
    /*navbar*/
    console.log($('.navbar'));
    $(window).scroll(function() {
        var screenTop = $(this).scrollTop();
        if (screenTop > 10) {
            $('.navbar').addClass("navstyle");
            $('.brand a').addClass("black");
            $('.list_item a').addClass("black");
            $('.menu span').addClass("blackback");

        } else {
            $('.navbar').removeClass("navstyle");
            $('.brand a').removeClass("black");
            $('.list_item a').removeClass("black");
            $('.menu span').removeClass("blackback");

        }
    });

});