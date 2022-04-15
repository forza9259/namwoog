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
$('.branchImg>div').hide();
$('.branchText').hide();
$('.branchImg>div').eq(0).show();
$('.branchText').eq(0).show();
$('.branchBox>div').on('mouseover',function(){
    $('.branchImg>div').stop().fadeOut(100);
    $('.branchText').stop().fadeOut(100);
    brnum = $(this).index();
    $('.branchImg>div').eq(brnum).stop().fadeIn();
    $('.branchText').eq(brnum).stop().fadeIn();
})


let crnum = 0;
$('.careerImg>div').hide();
$('.crTitle>div').hide();
$('.crName>div').hide();
$('.crTitle>div').eq(0).show();
$('.crName>div').eq(0).show();
$('.careerImg>div').eq(0).show();

function slideRight(){
    $('.careerImg>div').stop().fadeOut(300);
    $('.crTitle>div').stop().fadeOut(300);
    $('.crName>div').stop().fadeOut(300);
    $('.careerImg>div').eq((crnum+1)%4).stop().fadeIn();
    if($('.careerImg>div').eq((crnum+1)%4).hasClass('apart') === true){
        $('.crTitle>div').eq(0).stop().fadeIn();
        console.log('apart')
    }else if($('.careerImg>div').eq((crnum+1)%4).hasClass('stadium')=== true){
        $('.crTitle>div').eq(1).stop().fadeIn();
        console.log('stadium')
    }else if($('.careerImg>div').eq((crnum+1)%4).hasClass('hotel')=== true){
        $('.crTitle>div').eq(2).stop().fadeIn();
        console.log('hotel')
    }
    $('.crName>div').eq((crnum+1)%4).stop().fadeIn();
    crnum++
}

function slideLeft(){
    $('.careerImg>div').fadeOut();
    $('.careerImg>div').eq((crnum-1)%4).fadeIn();
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