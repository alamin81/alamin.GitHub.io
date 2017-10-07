$(document).ready(function(){
    
	$('.active-slider').owlCarousel({
    loop:true,
	items:1,
	smartSpeed:1500,
    nav:true,
	navText:['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})    
	$('.testimonial-active').owlCarousel({
    loop:true,
	items:1,
	smartSpeed:1500,
    nav:true,
	animateOut: 'slideOutUp',
    animateIn: 'flipInX',
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

}); 