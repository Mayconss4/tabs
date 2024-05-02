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

function clickMenu(){
    if (dropdown.style.display=='flex'){
        dropdown.style.display='none';
        bodies.style.top='0px';
    } else {
        dropdown.style.display='flex';
        bodies.style.top='-700px';
    }
}