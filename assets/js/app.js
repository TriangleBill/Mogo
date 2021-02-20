$(function () {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffSet =  $(window).scrollTop();


    /*Fixed Header*/
    checkScroll(scrollOffSet);
    $(window).on("scroll",function () {

        scrollOffSet = $(this).scrollTop()+1;

        checkScroll(scrollOffSet);


    });

    function checkScroll(scrollOfSet) {
        if ( scrollOffSet > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")
        }
    }


    /*Smooth scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data('scroll'),
            blockOfSet = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOfSet
        }, 500);

        if (window.outerHeight < 576) {
            $("#nav_toggle").toggleClass("active");
            $("#nav").toggleClass("active");
        }
    })


    /*Menu nav toggle*/
    $("#nav_toggle").on("click",function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })

    /*Collapse*/
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data('collapse');

        $(".accordion_item").removeClass("active")
        $this.addClass("active")

    })




})