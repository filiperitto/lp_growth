//-== modalAbout Toggle

var lightboxInlineIframe = GLightbox({
    'selector': '.glightbox4'
});

//======================== /modalAbout Toggle


(function(){  //== https://www.w3schools.com/howto/howto_js_countdown.asp
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 27, 2020 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("counterBoy").innerHTML = days + "d " + hours + "h ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("counterBoy").innerHTML = "EXPIRED";
    }
    }, 1000);
})();


//== Slider Card
(function(){
    new Glider(document.querySelector('.cards-glider'), {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        scrollLock: false,
        dots: '#dots-cards',
        arrows: {
            prev: '.prev-cards',
            next: '.next-cards'
        },
        responsive: [{
            breakpoint: 750,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
            }
        }]
    });
})();
//======================== /Slider Card




//== Slider Card
(function(){
    new Glider(document.querySelector('.glider-reviews'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: false,
        arrows: {
            prev: '.prev-reviews',
            next: '.next-reviews'
        },
        responsive: [{
            breakpoint: 750,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
            }
        }]
    });
})();
//======================== /Slider Card




//== /Accordion Module
(function(){
    let accTitle = document.getElementsByClassName("acc-heading");
    let accContent = document.getElementsByClassName("acc-content");
    let singleMode = true;
    
    for( let j=0; j<accContent.length; j++ ){
        let realHeight = accContent[j].offsetHeight;
        accContent[j].setAttribute("data-height", realHeight + "px");
        accContent[j].style.height = 0;
    }
    
    for( let i=0; i<accTitle.length; i++ ){
        accTitle[i].onclick = function(){
            let openedAcc = this.getAttribute('href').replace('#', '');
    
            if( this.classList.contains("active") ){
                this.classList.remove("active");
                document.getElementById(openedAcc).style.height = 0;
                
                return false;
            }
            
            if( singleMode ){						
                for(let k=0; k<accTitle.length; k++) {
                    accTitle[k].classList.remove("active");
                }			
    
    
                for(let j=0; j<accContent.length; j++) {
                    accContent[j].style.height = 0;
                }		
            }
            
            this.classList.add("active");
            
            
            
            document.getElementById(openedAcc).style.height = accContent[i].getAttribute("data-height");
            
            return false;
        }
    }
})();
//======================== /Accordion Module
        



