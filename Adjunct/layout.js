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
LabelForIcon.hover(NavIconHover, NavIconHoverOut);

let NavIconImg = $('#NavIconImg');
NavIconImg.hover(NavIconHover, NavIconHoverOut);

function NavIconHover()
{
    LabelForIcon.css({'cursor': 'pointer'});

    NavIconImg.css({
        'transform': 'rotate(360deg)',
        'cursor': 'pointer'
    });
}

function NavIconHoverOut()
{
    LabelForIcon.css({'cursor': 'default'});

    NavIconImg.css({
        'transform': 'rotate(0deg)',
        'cursor': 'default'
    });
}

let ExploreButton = $('#ButtonExplore');
let SvgToButton = $('#ButtonExplore>#Svg>*');

let Arrow = $('#Arrow');
Arrow.click(()=>{
    window.scrollTo({left: 0, top: $('#SectionHowItWorks').position().top, behavior: 'smooth'})
})

anime({
    targets: '#Arrow',
    translateX: [
        {value: [0, 50], duration: 600, easin: 'cubic-bezier(0.250, 0.250, 0.750, 0.750)'},
        {value: 0, duration: 1000, easin: 'cubic-bezier(0.410, 1.260, 0.455, 0.200)'},
    ],
    loop: true
})


let SectionHowItWorks = $('#SectionHowItWorks');
let SectionCoders = $('#SectionCoders');
let SectionChunks = $('#SectionChunks');

let SHATD = false;
let SCoATD = false;
let SChATD = false;

$(window).scroll(function(Event){
    let WinTrigH = (window.scrollY + window.outerHeight*0.60);
    let WinUnTrigH = (window.scrollY + window.outerHeight*0.40);

    if(WinTrigH < SectionHowItWorks.position().top)
    {
        if(SHATD)
        {
            SHATD = false;
            HideHowItWorks();
        }
    } else{
        if(WinTrigH > SectionHowItWorks.position().top && WinUnTrigH < (SectionHowItWorks.position().top + SectionHowItWorks.outerHeight(true)))
        {
            if(!SHATD)
            {
                SHATD = true;
                anime({
                    targets: '#HowItWorks>.Paragraphs>*',
                    left: {value: ['-120%', '0%'], duration: 1300, delay: anime.stagger(150)},
                });
    
                anime({
                    targets: '#HowItWorks > .IlustrativeImgs > *:nth-child(1)',
                    right: {value: ['-100%', '0%'], duration: 500, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
                });
    
                anime({
                    targets: '#HowItWorks > .IlustrativeImgs > *:nth-child(2)',
                    right: {value: ['-50%', '0%'], duration: 650, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
                });
            }
    
    
            if(SCoATD)
            {
                SCoATD = false;
                HideCodersExplanition();
            }
            if(SChATD)
            {
                SChATD = false;
                HideChunksExplanition();
            }
        } else{
            if(WinTrigH > SectionCoders.position().top && WinUnTrigH < (SectionCoders.position().top + SectionHowItWorks.outerHeight(true))){
                if(!SCoATD)
                {
                    SCoATD = true;
                    anime({
                        targets: '#CodersExplanation>.Paragraphs>*',
                        right: {value: ['-120%', '0%'], duration: 1300, delay: anime.stagger(150)},
                    });
        
                    anime({
                        targets: '#CodersExplanation > .IlustrativeImgs > *:nth-child(1)',
                        left: {value: ['-100%', '0%'], duration: 500, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
                    });
        
                    anime({
                        targets: '#CodersExplanation > .IlustrativeImgs > *:nth-child(2)',
                        left: {value: ['-50%', '0%'], duration: 650, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
                    });
                }

                if(SChATD)
                {
                    SChATD = false;
                    HideChunksExplanition();
                }
    
                if(SHATD)
                {
                    SHATD = false;
                    HideHowItWorks();
                }
            } else{
                if(WinTrigH > SectionChunks.position().top && WinUnTrigH < (SectionChunks.position().top + SectionHowItWorks.outerHeight(true))){
                    if(!SChATD)
                    {
                        SChATD = true
                        anime({
                            targets: '#ChunksExplanation>.Paragraphs>*',
                            left: {value: ['-120%', '0%'], duration: 1300, delay: anime.stagger(150)},
                        });
            
                        anime({
                            targets: '#ChunksExplanation > .IlustrativeImgs > *:nth-child(1)',
                            right: {value: ['-100%', '0%'], duration: 500, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
                        });
            
                        anime({
                            targets: '#ChunksExplanation > .IlustrativeImgs > *:nth-child(2)',
                            right: {value: ['-50%', '0%'], duration: 650, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
                        });
                    }


                    if(SCoATD)
                    {
                        SCoATD = false;
                        HideCodersExplanition();
                    }
                    if(SHATD)
                    {
                        SHATD = false;
                        HideHowItWorks();
                    }
                }
            }
        }
    }
})


function HideHowItWorks()
{
    anime({
        targets: '#HowItWorks>.Paragraphs>*',
        left: {value: '-120%', duration: 1300, delay: anime.stagger(100)},
    });

    anime({
        targets: '#HowItWorks > .IlustrativeImgs > *:nth-child(1)',
        right: {value: '-100%', duration: 500, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
    });

    anime({
        targets: '#HowItWorks > .IlustrativeImgs > *:nth-child(2)',
        right: {value: '-50%', duration: 650, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
    });
}

function HideCodersExplanition()
{
    anime({
        targets: '#CodersExplanation>.Paragraphs>*',
        right: {value: '-120%', duration: 1300, delay: anime.stagger(150)},
    });

    anime({
        targets: '#CodersExplanation > .IlustrativeImgs > *:nth-child(1)',
        left: {value: '-80%', duration: 500, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
    });

    anime({
        targets: '#CodersExplanation > .IlustrativeImgs > *:nth-child(2)',
        left: {value: '-100%', duration: 650, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
    });
}

function HideChunksExplanition()
{
    anime({
        targets: '#ChunksExplanation>.Paragraphs>*',
        left: {value: '-120%', duration: 1300, delay: anime.stagger(100)},
    });

    anime({
        targets: '#ChunksExplanation > .IlustrativeImgs > *:nth-child(1)',
        right: {value: '-100%', duration: 500, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
    });

    anime({
        targets: '#ChunksExplanation > .IlustrativeImgs > *:nth-child(2)',
        right: {value: '-50%', duration: 650, easing: 'cubicBezier(0.025, 0.845, 0.360, 0.805)'},
    });
}