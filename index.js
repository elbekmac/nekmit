$(document).ready(function(){
    $('.head .pages').click(function(){
        $('.head .menu').slideToggle();
    });
    $('#totop').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 600)
    });
    $(window).scroll(function(){
            if ($(window).scrollTop() > 150) {
                $('#totop').css('display','block');
        }else
        {
            $('#totop').css('display','none');
        }
    });
    $('.mobile-menu').click(function(){
        $('.menu').slideToggle();
        $('.menu').css({'display': 'block'})
       
    });
});