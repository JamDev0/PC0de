let SingInButton = $('#NavItemSingIn');
SingInButton.hover(function(){
    $(this).attr('beforewidth', `50px`);
});

let SingUpButton = $('#NavItemSingUp');
SingUpButton.hover(function(){
    $(this).prepend('<span id="InnerCircle"></span>');
    let Circle = $('#InnerCircle');
    $(this).mousemove(function(Event){
        Circle.css({'top': `${(Event.pageY - Circle.height()/2) - (Circle.parent().position().top)}px`, 'left': `${(Event.pageX - Circle.width()/2) - (Circle.parent().position().left)}px`})
    });
}, function(){
    $('#InnerCircle').remove();
    $(this).unbind('mousemove');
});

let LabelForIcon = $('#LabelToIcon');
LabelForIcon.hover(()=>{
    $('#NavIconImg').css('transform', 'rotate(360deg)');
},()=>{
    $('#NavIconImg').css('transform', 'rotate(0deg)');
})