$(document).ready(function () {
});

$('.primary-button').click(function() {
    let contentID = $(this).data('content');
    let contentE1 = $('#' + contentID);

    $('.body-screen').removeClass('activated');
    contentE1.addClass('activated');
});

$('#tabs-burguer').click(function(){
    if ($('#tabs-dropdown').css('display') == 'flex'){
        $('#tabs-dropdown').css('display', 'none');
        $('#tabs-bodies').css('top', '0px');
    } else {
        $('#tabs-dropdown').css('display', 'flex');
        $('#tabs-bodies').css('top', '-200px');
    }
});

$('#close-menu').click(function(){
    $('#tabs-dropdown').css('display', 'none');
    $('#tabs-bodies').css('top', '0px');    
});