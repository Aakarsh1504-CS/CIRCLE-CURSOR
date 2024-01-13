window.addEventListener("mousemove",(dets)=>{
    var r=document.getElementById("rect");
    var ls=r.getBoundingClientRect().width;
    var ts=r.getBoundingClientRect().height;
    var let=gsap.utils.mapRange(0,window.innerWidth,5+ls/2,window.innerWidth-(5+ls/2),dets.clientX);
    var to=gsap.utils.mapRange(0,window.innerHeight,5+ts/2,window.innerHeight-(5+ts/2),dets.clientY);
    
    gsap.to('#rect',{
    left:let,
    top:to,
    ease:Power3,
    })
});

