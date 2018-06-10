$(function() {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 70) {
            $(".navigation").addClass("navigation-background");
            $(".logo").addClass("bigger-logo");
        } else {
            $(".navigation").removeClass("navigation-background");
            $(".logo").removeClass("bigger-logo");
        }
    });
});
