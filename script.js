

const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

gsap.from(".nleft",{
    stagger:.1,
    y:10,
    duration:1,
    ease:Power3,
    opacity:0

})
Shery.textAnimate("h1" , {
    
    style: 2,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.imageEffect(".bimg", {
    style: 4 /*OR 5 for different variant */,
    
    gooey:true
  });


document.querySelector(".ftext button")
.addEventListener("mouseover",function(){
    
    gsap.to(".future video",{
        opacity:1,
        duration:1.5,
        ease:Power4
    })
})
document.querySelector(".ftext button")
.addEventListener("mouseleave",function(){
    gsap.to(".future video",{
        opacity:0,
        duration:0.5,
        ease:Power4
    })
    
})
