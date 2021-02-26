for (i = 0; i < 16; i++){
    $('.rows').append('<div class = boxes> </div>');
}

$('.container').on('click', '.boxes', function(){
    let color = $(this);
    $(color).toggleClass('changeColor')
})