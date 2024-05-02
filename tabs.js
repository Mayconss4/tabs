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
    if ($('#dropdown').css('display') == 'flex'){
        $('#dropdown').css('display', 'none');
        $('#bodies').css('top', '0px');
    } else {
        $('#dropdown').css('display', 'flex');
        $('#bodies').css('top', '-200px');
    }
});
