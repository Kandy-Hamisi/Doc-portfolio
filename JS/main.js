// $(document).ready(function(){

//     // Calling the function particles
//     $('.canvas').particles();

//     //configuring the particles system

//     $('.canvas').particles({
//         maxParticles: 100,
//         size: 3,
//         speed: 0.5,
//         color: '#000',
//         minDist: 140,
//         connectParticles: false
//     });
// });

$(document).ready(function(){

     // Initializing the rotator
     $("#typer").typer({
        strings:[
            "A Medical Consultant",
            "A 10+ years experienced surgeon ",
            "A Professional Doctor"
        ],
        useCursor: false,
        typeSpeed: 100,
        backspaceSpeed: 60,
        backspaceDelay: 800,
        repeatDelay: 1000,
        repeat: true,
        autoStart: true,
        startDelay: 100,
    });


    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
                $('nav').addClass('change fixed-top');
                // $('nav').addClass('change');
                // $('hr').addClass('convert');
        }
    
        else {
                $('nav').removeClass('change fixed-top');
                
                // $('nav').removeClass('change');
        }
    });

});