function loaderAnimations() {
    gsap.from(".load h1",{
        y:140,
        duration:.8,
        stagger:.3,
        ease: 'power4',
    })
    gsap.from(".load span",{
        y:140,
        duration:.8,
        delay:.6,
        stagger:.3,
        ease: 'power4',
    })
    gsap.from("#counter h3",{
        opacity:0,
        duration:2
    })
    gsap.from(".load h4",{
        opacity:0,
        duration:2
    })
    
    var grow = 0;
    
    var int = setInterval(function(){
        if (grow<100) {
            grow++;
            document.querySelector("#counter h3").innerHTML = grow;
        }
    },40)
    
    setTimeout(function(){
        clearInterval(int);
    },40000)
    
    var tl = gsap.timeline();
    
    setTimeout(() => {
        document.body.style.overflow = "visible"
    }, 7000);

    tl.to("#wait",{
        opacity:0,
        duration:.2,
        delay:5
    })
    tl.to(".load",{
        opacity:0,
        duration:.2,
        stagger:-.2
    })
    tl.to("#loader",{
        y:"-100%",
        duration:1.5,
        ease:"power4.inOut"
    })
    
}
loaderAnimations()

function page2Animations() {
    document.querySelector("#video-container").addEventListener("mouseenter",function () {
        gsap.to(".mousefollower",{
            opacity:0
        })
    })
    document.querySelector("#video-container").addEventListener("mouseleave",function () {
        gsap.to(".mousefollower",{
            opacity:1
        })
        gsap.to("#play-btn",{
            x:"-15%",
            y:"0%"
        })
    })

    flag = 0;
    document.querySelector("#video-container").addEventListener("click",function () {
        if (flag==0) {
            gsap.to("#play-btn",{
                scale:0.8,
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-pause-line"></i>'
            flag = 1;
            gsap.to("#video-container video",{
                opacity:1,
                duration:0.2
            })
            document.querySelector("#video-container video").play();
        } else {
            gsap.to("#play-btn",{
                scale:1,
            })
            gsap.to("#video-container video",{
                opacity:0,
                duration:0.2
            })
            document.querySelector("#play-btn").innerHTML = '<i class="ri-play-fill"></i>'
            flag = 0;
            document.querySelector("#video-container video").pause();
        }
    })

    document.querySelector("#video-container").addEventListener("mousemove",function (dets) {
        gsap.to("#play-btn",{
            x: dets.pageX - 1400,
            y: dets.pageY - 880,
        })
        console.log(dets);   
    })
}
page2Animations()

function sheryAnimations() {   
    Shery.mouseFollower()
    Shery.makeMagnet("#rightNav h5")
    Shery.imageEffect(".image-container",{
        // debug:true,
        gooey:true,
        config:{"a":{"value":0,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7729320425572702},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":2},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":2},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.48,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":6.11,"range":[0,100]}}
    })
}
sheryAnimations()

function page3Animations() {
    gsap.from("#page3title h1",{
        y:200,
        duration:1.4,
        ease:"expo.out",
        scrollTrigger: {
                trigger: "#page3",
                start: "top 80%", 
                end: "top 80%",
              }
    })
    gsap.from("#line",{
        x:"100%",
        duration:1,
        delay:0.4,
        ease:"expo.out",
        scrollTrigger: {
                trigger: "#page3",
                start: "top 90%", 
                end: "top 90%",
              }
    })
    document.querySelectorAll(".card").forEach(element => {
        element.addEventListener("mouseenter",function(){
            console.log(element.id);
            gsap.to(`#${element.id} h2`,{
                y:-50,
                duration:1.2,
                ease:"expo.out"
            })
        })
    });
    document.querySelectorAll(".card").forEach(element => {
        element.addEventListener("mouseleave",function(){
            console.log(element);
            gsap.to(`#${element.id} h2`,{
                y:0,
                delay:0,
                duration:1.2,
                ease:"expo.out"
            })
        })
    });
    gsap.from("#lineCard",{
        x:"100%",
        duration:1,
        delay:0,
        ease:"expo.out",
        scrollTrigger: {
                trigger: "#card2",
                start: "top 0%", 
                end: "top 0%",
              }
    })
    gsap.from("#lowercard",{
        opacity:0,
        duration:1,
        delay:0,
        ease:"expo.out",
        scrollTrigger: {
                trigger: "#card2",
                start: "top 0%", 
                end: "top 0%",
            }
    })
}
page3Animations()

function page6animations() {
    gsap.to(".page6mark",{
        x:"-60%",
        duration:10,
        scrollTrigger:{
            scroller:"body",
            trigger:"#page6",
            start:"top 130%",
            end:"top -130%",
            markers:true,
            scrub:1
        }
    })
    gsap.to(".page6mark2",{
        x:"-60%",
        duration:10,
        scrollTrigger:{
            scroller:"body",
            trigger:"#page6",
            start:"top 130%",
            end:"top -130%",
            markers:true,
            scrub:1
        }
    })
}
page6animations()