function landinPageAnam() {
    var t1 = gsap.timeline()
    t1.from(".firstDiv",{
        opacity:0,
        duration:0.2,
        delay: 0.2
    })
    t1.from(".firstDiv",{
        transform: "scaleX(0.5) scaleY(0.4) translateY(90%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
}


function navAnimationFunc() {
    const bottomDiv = document.querySelector("nav");

    bottomDiv.addEventListener("mouseenter" , function () {
    let t1 = gsap.timeline()

    t1.to(".bottomNav",{
        opacity: 1,
        height: '25vh',
        bottom: 0,
        top: '100%',
        
    },)
    t1.to(".bottomNav .btDiv",{
        opacity: 1
    })
    t1.to(".bottomNav .btDiv a span",{
        y: 0,
        stagger:{
            amount:0.6 
        },
        
        
    },)
    
} )

    bottomDiv.addEventListener("mouseleave" , function () {
    let t1 = gsap.timeline()
    t1.to(".bottomNav .btDiv a span",{
        y: 20,
        stagger:{
            amount:0.6 
        }      
    },)
    
    t1.to(".bottomNav",{
        height:0,
        duration:0.2
    })
    
} )

}

function circleAnimtion() {
    var rightDiv = document.querySelectorAll(".div1")
    
    rightDiv.forEach(function (elem) {
        elem.addEventListener("mouseenter", function (dets) {
            // console.log(elem.getBoundingClientRect().y)
            gsap.to(elem.childNodes[3],{
                opacity: 1,
                scale:1,
            }) 
        })
        elem.addEventListener("mouseleave", function (dets) {
            gsap.to(elem.childNodes[3],{
                opacity: 0,
                scale:0
            })    
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3],{
                x:dets.x- elem.getBoundingClientRect().x-50,
                y:dets.y- elem.getBoundingClientRect().y-130
            })
        })
    })
    
}

function page3VideoAnimation() {
    var page3Center = document.querySelector(".vdohover")
    var video = document.querySelector(".vdoDiv video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })

    var sections = document.querySelectorAll(".cardvideo")
    
    sections.forEach(function (elem) {
        
        elem.addEventListener("mouseenter", function () {
            
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}

function bottomCardsAnimation() {
    const card = document.querySelector(".svideodiv")
    const card2 = document.querySelector(".svideodivs")
    
    card.addEventListener("mouseenter", function (e) {
        const paragraph= card.childNodes[1]
        paragraph.style.opacity=0;


        const vid =card.childNodes[5]
        vid.play()
        
        gsap.to(vid,{
            opacity:1,
            duration:1,
            ease:"power2.inOut"

        })
        
    })
    card.addEventListener("mouseleave", function (e) {
        const paragraph= card.childNodes[1]
        paragraph.style.opacity=1;


        const vid =card.childNodes[5]
        vid.load();
        gsap.to(vid,{
            opacity:0,
            duration:1.2,
            ease:"power2.inOut"
        })

        
    })
    card2.addEventListener("mouseenter", function (e) {
        const paragraph= card2.childNodes[1]
        paragraph.style.opacity=0;


        const vid =card2.childNodes[5]
        vid.play()
        
        gsap.to(vid,{
            opacity:1,
            duration:1,
            ease:"power2.inOut"

        })
        
    })
    card2.addEventListener("mouseleave", function (e) {
        
        const paragraph= card2.childNodes[1]
        paragraph.style.opacity=1;


        const vid =card2.childNodes[5]
        vid.load();
        gsap.to(vid,{
            opacity:0,
            duration:1.2,
            ease:"power2.inOut"
        })
    
    })
    
}

function h4Animation() {
    gsap.from(".btmmdivelem h4",{
        x:0,
        scrollTrigger:{
            trigger:".btmmdivelem",
            scroller:"body",
            start:"top 80%",
            end:"top 10%",
            scrub:true,  
        }
    })  
}

function inputFieldtextAnam() {
    const inputField = document.getElementById('inputField');
    const label = document.querySelector('label[for="inputField"]');
    
    inputField.addEventListener('focus', () => {
      label.classList.add('text-sm', '-mt-4', 'text-white');
    });
    
    inputField.addEventListener('blur', () => {
      if (inputField.value === '') {
        label.classList.remove('text-sm', '-mt-4', 'text-white');
      }
    });
}

landinPageAnam();
navAnimationFunc();
circleAnimtion();
page3VideoAnimation();
bottomCardsAnimation();
h4Animation();
inputFieldtextAnam();


