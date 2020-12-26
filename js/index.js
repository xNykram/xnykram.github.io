// calculating height of every section on page
let sectionList = ['mainSection', 'aboutmeSection','skillSection', 'projectsSection', "contactSection"]
let sectionOffsets = []

function getSectionOffsets(target){
    for(let i = 0; i < sectionList.length; i++){
        let targetHeight = $('#'+target[i]).height();
        if (i > 0){
            targetHeight = targetHeight + sectionOffsets[i - 1]
        }
        sectionOffsets.push(targetHeight)
    }
}

function flexMenuFunction(){
    let offset = 0
    getSectionOffsets(sectionList);
    // scroll menu 
    $(window).scroll(function () { 
        offset = $(window).scrollTop();
        if(200 > offset){
            $('.flex-menu').removeClass('active')
        }
        if(200 < offset){
            $('.flex-menu').addClass('active')
        }
        if(sectionOffsets[1] - 500 < offset){
            let delay = 100;
            for(let i = 1; i < 10; i++){
                $('.skel:nth-child('+i+')').delay(delay).animate({opacity: "1"},300);
                $('.skelt:nth-child('+i+')').delay(delay + 1500).animate({opacity: "1"},300);
                $('.skelo:nth-child('+i+')').delay(delay + 2500).animate({opacity: "1"},300);
                delay += 200;
                
            }
        }
        if(sectionOffsets[2] - 500 < offset){
            let delay = 100;
            for(let i = 1; i < 10; i++){
                $('.project-box:nth-child('+i+')').delay(delay).animate({opacity: "1"},300);
                delay += 200;
                
            }
        }
    });
    offset = $(window).scrollTop();
    if(200 > offset){
        $('.flex-menu').removeClass('active')
    }
    if(200 < offset){
        $('.flex-menu').addClass('active')
    }
    if(sectionOffsets[1] - 500 < offset){
        let delay = 100;
        for(let i = 1; i < 10; i++){
            $('.skel:nth-child('+i+')').delay(delay).animate({opacity: "1"},300);
            $('.skelt:nth-child('+i+')').delay(delay + 1500).animate({opacity: "1"},300);
            $('.skelo:nth-child('+i+')').delay(delay + 2500).animate({opacity: "1"},300);
            delay += 200;
            
        }

       
    }
    if(sectionOffsets[2] - 500 < offset){
        let delay = 100;
        for(let i = 1; i < 10; i++){
            $('.project-box:nth-child('+i+')').delay(delay).animate({opacity: "1"},300);
            delay += 200;
            
        }
    }
}

$(document).ready(function(){



    flexMenuFunction();
    $('.flex-menu li:nth-child(1)').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 400);
    });
    $('.flex-menu li:nth-child(2)').on('click', function () {
        $('html, body').animate({scrollTop: sectionOffsets[0]}, 400);
        setTimeout(function(){
            $('.flex-menu').addClass('active')
        },500);
    });
    $('.flex-menu li:nth-child(3)').on('click', function () {
        $('html, body').animate({scrollTop: sectionOffsets[1]}, 400);
        setTimeout(function(){
            $('.flex-menu').addClass('active')
        },500);
    });
    $('.flex-menu li:nth-child(4)').on('click', function () {
        $('html, body').animate({scrollTop: sectionOffsets[2]}, 400);
        setTimeout(function(){
            $('.flex-menu').addClass('active')
        },500);
    });
    $('.flex-menu li:nth-child(5)').on('click', function () {
        $('html, body').animate({scrollTop: sectionOffsets[3]}, 400);
        setTimeout(function(){
            $('.flex-menu').addClass('active')
        },500);
    });



    /** menu underline**/
    $('.flex-menu ul li').hover(function(){
        if($(this).hasClass('underline')){
            $(this).removeClass('underline');
        }
        else{
            $(this).addClass('underline');
        }
    });
    // skill item anim
    $('.skill-item').hover(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }
        else{
            $(this).addClass('active');
        }
    });
});


