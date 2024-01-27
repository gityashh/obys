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
}
sheryAnimations()