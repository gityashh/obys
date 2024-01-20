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