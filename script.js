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


// gsap.to("#loader",{
//     y:-1000,
//     duration:.5,
//     delay:4,
//     ease:"power4.Out"
// })

var tl = gsap.timeline();
