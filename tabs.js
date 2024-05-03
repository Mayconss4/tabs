$(document).ready(function () {
});

$('.primary-button').click(function() {
    $('.primary-button').removeClass('activated');
    $(this).addClass('activated');

    let contentID = $(this).data('content');
    let contentE1 = $('#' + contentID);

    $('.body-screen').removeClass('activated');
    contentE1.addClass('activated');
});

// function clickMenu(){
//     if (dropdown.style.display=='flex'){
//         dropdown.style.display='none';
//         bodies.style.top='0px';
//     } else {
//         dropdown.style.display='flex';
//         bodies.style.top='-700px';
//     }
// }

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