let imnum = 0
$('.images>div').hide();
$('.images>div').eq(0).show();
const timer = setInterval(function(){
    imnum++;
    $('.images>div').fadeOut(1000);
    $('.images>div').eq(imnum%3).fadeIn(1000);
    
},5000)


$('header').on('mouseover',function(){
    $('header').addClass('hover');
})
$('header').on('mouseout',function(){
    $('header').removeClass('hover');
})


let brnum = 0;
$('.branchImg>div').eq(0).show();
$('.branchBox>div').on('mouseover',function(){
    $('.branchImg>div').stop().fadeOut(100);
    brnum = $(this).index();
    $('.branchImg>div').eq(brnum).stop().fadeIn();
})


let crnum = 0;
$('.careerImg>div').hide();
$('.careerImg>div').eq(0).show();

function slideRight(){
    $('.careerImg>div').fadeOut();
    $('.careerImg>div').eq((crnum+1)%3).fadeIn();
    crnum++
}

function slideLeft(){
    $('.careerImg>div').fadeOut();
    $('.careerImg>div').eq((crnum-1)%3).fadeIn();
    crnum--;
}

$('.careerBtn>div').on('click',function(){
    
    let index = $(this).index();
    
    if(index == 1){slideRight();}
    else{
        if(crnum>0){slideLeft(); }
        else{crnum = 3; slideLeft();}
    }
})