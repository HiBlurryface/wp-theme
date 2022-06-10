// burger
$(document).ready(function () {
    $('.interaction__burger').click(function (event) {
        $('.interaction__menu,.interaction__burger').toggleClass('active');
        $('body').toggleClass('lock');
    })
})