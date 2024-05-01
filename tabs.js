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