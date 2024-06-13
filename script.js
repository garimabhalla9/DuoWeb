function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})

 var cursor = document.querySelector(".cursor")
 var main = document.querySelector(".main")
 document.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.x+ 20 + "px";
    cursor.style.top = dets.y+ 20 + "px";
 })

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})

//start: screen k konse hisse se animation start hoga
//end: screen k konse hisse tak animation rahega
//timeline is like ki ek sequence bana rahe hai animations k lie to avoid mismatch of animations

tl.to(".page1 h1",{
    x:-100,
},"anim")//anim is a random name which acts like a class, if yeh aur b variable me hoga toh dono ka animation saath me chalega

tl.to(".page1 h2",{
    x:100,
},"anim")

tl.to(".page1 video",{
    width:"90%"
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start:"top -115%",//for mobile -60%
        end:"top -120%",
        scrub:3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        markers:false,
        start:"top -380%",
        end:"top -400%",
        scrub:3
    }
})

tl3.to(".main",{
    backgroundColor:"#0f0d0d"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        var att = e.getAttribute("data-image")
        cursor.style.width = "300px"
        cursor.style.height = "250px"
        cursor.style.borderRadius = "0"
        cursor.style.backgroundImage = `url(${att})`
        cursor.style.backgroundSize = "cover"
        cursor.style.backgroundPosition = "center"
        cursor.style.mixBlendMode = "normal"

    })
    e.addEventListener("mouseleave",()=>{
        cursor.style.width = "20px"
        cursor.style.height = "20px"
        cursor.style.borderRadius = "50%"
        cursor.style.backgroundImage = "none"
        cursor.style.mixBlendMode = "difference"
    })
})

var menuHover = document.querySelector(".menuHover")
var menuItem = document.querySelectorAll(".nav p")
var h4 = document.querySelectorAll(".scroller-in h4")
menuItem.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        console.log(e);
        h4.forEach((elem)=>{
            elem.innerHTML = `${e.innerText}&nbsp;`
        })
        menuHover.style.visibility = "visible"
    })

    e.addEventListener("mouseleave",()=>{
        console.log(e);
        menuHover.style.visibility = "hidden"
    })
})


var hoverBtn = document.querySelector(".getintouch p")
hoverBtn.addEventListener("mouseenter",()=>{
    hoverBtn.style.padding = "12vh 7vh"
})

hoverBtn.addEventListener("mouseleave",()=>{
    hoverBtn.style.padding = "10vh 5vh"
})