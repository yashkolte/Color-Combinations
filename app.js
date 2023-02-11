var loader = gsap.timeline({
  // scrollTrigger: {
  //   trigger: "#loader",
  //   start: "top top",
  //   pin: true,
  //   scrub: 1,
  //   end: "+=5000px",
  // }
})

loader.from("#loader h1", {
  duration: 3,
  x: 2000,
  ease: "power1",
}, "loader")

loader.from(".center-top .box", {
  duration: 3,
  x: 600,
  ease: "power1",
}, "loader")

loader.from(".center-middle .box", {
  duration: 3,
  x: -600,
  ease: "power1",
}, "loader")

loader.from(".center-bottom .box", {
  duration: 3,
  x: 800,
  ease: "power1",
}, "loader")

loader.from("#loader img", {
  duration: 3,
  rotate: "360deg",
  ease: "power1",
}, "loader")

loader.to("#loader .loader-full", {
  scale: 15,
})

loader.to("#loader", {
  opacity: 0,
})



// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "#home0",
//     start: "top top",
//     // pin: true,
//     scrub: 1,
//     end: "+=5000px",
//   },
// });

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home0",
    start: "top top+=100",
    scrub: 1,
    end: "+=5000px",
    // markers: true,
  }
}, "home0")

tl2.to(".intro-center img", {
  duration: 3,
  rotate: "180deg",
}, "home0")

tl2.from(".intro-center .color-strap", {
  duration: 3,
  x: 500,
  ease: "power1",
},"home0")

// ---------------------INTRO END--------------------------------

// ---------------------HOME 1 START-----------------------------
var tl03 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home01", 
    start: "center center",
    scrub: 1,
    end: "bottom bottom",
    // markers: true,
  }
})

tl03.to("#home01", {
  backgroundColor: "#4e4376",
})

// --------------------- HOME 1 END -----------------------------
// --------------------- HOME 03 START -----------------------------

var tl04 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home03",
    start: "top top",
    scrub: 1,
    pin: true,
    end: "+=5000px",
    // markers: true,
  }
})

tl04.to("#home03 .gradient", {
  duration: 5,
  x: -6000,
  ease: "power1",
},"home03")


tl04.to("#home03 .left", {
  duration: 3,
  x: 280,
  ease: "power1",
},"home03")

tl04.to("#home03 .right", {
  duration: 3,
  x: -1400,
}, "home03")

function mouseOver() {
  console.log("mouseover");

  }
// console.log("mouseover");
// document.querySelector("#demo").addEventListener("click",()=> {
//   console.log("mouseover");
// })
  // document.querySelector(".color-change").style = ("transform: scale(5);");


// --------------------- HOME 03 END -----------------------------
// --------------------- HOME START -----------------------------

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    pin: true,
    scrub: 1,
    end: "+=5000px",
  },
});

tl.from(".c-box", {
  left: "110%",
  duration: 5,
  ease: "power1",
});

tl.to(
  ".c-box p",
  {
    opacity: 0,
    ease: "power1",
  },
  "same"
);

tl.to(
  ".c-box",
  {
    scale: 0,
    duration: 5,
    ease: "power1",
  },
  "same"
);

tl.to(
  ".c-bottom img",
  {
    rotate: "-180deg",
    duration: 3,
    stagger: 0.2,
    scale: 0,
  },
  "same"
);

// tl.to("#home .bg", {
//     duration: 15,
//     scale: 1,
// })

tl.to(
  ".c-top img",
  {
    duration: 3,
    scale: 0,
  },
  "same"
);

tl.to(
  ".bottom-text h1",
  {
    duration: 2,
    y: 300,
    rotate: "10deg",
  },
  "same"
);

tl.to(
  ".center-circle",
  {
    duration: 3,
    scale: 0.6,
  },
  "same"
);

tl.from(
  ".mid-circle",
  {
    duration: 2,
    scale: 0.2,
    y: 500,
  },
  "same"
);

tl.to(".mid-circle", {
  delay: -0.5,
  opacity: 0,
});

tl.to(".center-circle", {
  duration: 3,
  scale: 0,
});

tl.to(".after-bottom-text",{
    duration: 2,
    y: -300,
  },
  "same"
);

tl.to(".overlay .left-box", {
  duration: 10,
  y: -1250,
  ease: "power1",
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home2",
    start: "top top",
    pin: true,
    scrub: 1,
    // markers: true,
    end: "+=5000px",
  },
});

tl1.from(
  ".circle1",
  {
    duration: 3,
    scale: 0,
    ease: "power1",
    y: 300,
  },
  "home2"
);

tl1.from(
  ".circle2",
  {
    duration: 3,
    scale: 0,
    delay: 0.3,
    ease: "power1",
    y: 300,
  },
  "home2"
);

tl1.to(
  ".circle1",
  {
    duration: 3,
    left: "50%",
    ease: "power1",
  },
  "same2"
);

tl1.to(
  ".circle2",
  {
    duration: 3,
    left: "54%",
    ease: "power1",
  },
  "same2"
);

tl1.to(".circle2", {
  opacity: 0,
});

tl1.to(".circle1", {
  duration: 3,
  scale: 0.6,
  ease: "power1",
});

tl1.to(".circle1", {
  duration: 5,
  scale: 10,
  ease: "power1",
},"text");

tl1.to(
  ".top h1",
  {
    duration: 20,
    x: -4000,
    ease: "power1",
  },
  "same4"
);

tl1.to(
  ".circle1",
  {
    duration: 5,
    ease: "power1",
    background: `linear-gradient(to right, #d5a7b4 50%, #B4AAD5)`,
  },
  "same4"
);

tl1.to(".top .boxes", {
  duration: 5,
  ease: "power1",
  delay: -5,
  height: "100%",
  stagger: 0.2,
},"text4");

tl1.to(".top .boxes div", {
  duration: 5,
  ease: "power1",
  height: "100%",
  stagger: 0.5,
},"text1");

// tl1.to(".box1 .bt-bx1", {
//   ease: "power1",
//   height: "20%",
//   background: `linear-gradient(to right, #d5a7b4 50%, #B4AAD5)`,
// });

tl1.to("#home2 .serial .number", {
  duration: 4,
  ease: "power1",
  y: -65,
  
},"text")

tl1.to("#home2 .center-text h1:first-child", {
  duration: 2,
  ease: "power1",
  opacity: "0",
},"same4")

tl1.to("#home2 .center-text h1:last-child", {
  duration: 2,
  delay: 1,
  ease: "power1",
  opacity: "1",
},"same4")

tl1.to("#home2 .serial .number", {
  duration: 4,
  ease: "power1",
  y: -135,
  
},"text1")

tl1.to("#home2 .bottom-bar .center-bar .box:nth-child(1)", {
  duration: 6,
  width: "0%",
  ease: "power1",
  
},"text")

tl1.to("#home2 .bottom-bar .center-bar .box:nth-child(2)", {
  duration: 6,
  width: "100%",
  ease: "power1",
  
},"text")
tl1.to("#home2 .bottom-bar .center-bar .box:nth-child(2)", {
  duration: 6,
  width: "0%",
  ease: "power1",
  
},"text4")

tl1.to("#home2 .bottom-bar .center-bar .box:nth-child(3)", {
  duration: 6,
  width: "100%",
  ease: "power1",
  
},"text4")

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#home3",
    start: "top top",
    // pin: true,
    scrub: 1,
    // markers: true,
    end: "bottom",
  },
})

tl5.to("#home3 .center-img", {
  duration: 5,
  ease: "power1",
  rotate: "180deg",
},"home3")

tl5.to(".animate-bar p", {
  duration: 5,
  ease: "power1",
  x: -500,
},"home3")

tl5.to(".animation-triangle .ray .overlay-img", {
  duration: 5,
  ease: "power1",
  width: "0%",
  delay: -2,
},"home3-text")

tl5.to(".animation-triangle .text p:nth-child(1)", {
  duration: 2,
  ease: "power1",
  margin: "0",
  // delay: -1,
},"home3-text")

tl5.to(".animation-triangle .text p:nth-child(2)", {
  duration: 2,
  ease: "power1",
  margin: "0",
  // delay: -1,
},"home3-text")

tl5.to(".animation-triangle .text p:nth-child(3)", {
  duration: 2,
  ease: "power1",
  margin: "0",
  // delay: -1,
},"home3-text")

tl5.to("#main #home3 .img-gallery .center-gallery", {
  duration: 1,
  ease: "power1",
  y: -100,
  delay: 1,
},"home3-text")

tl5.to("#home3 .img-gallery >p", {
  duration: 7,
  ease: "power1",
  margin: "0",
  // delay: -1,
})

tl5.to("#main #home3 .img-gallery .right-gallery", {
  duration: 2,
  ease: "power1",
  y: -200,
  delay: 1,
},"home3-text")

tl5.to("#home3 .bottom-circle", {
  duration: 4,
  ease: "power1",
  scale:5,
  delay: 5,
},"home3-text")

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#end",
    start: "top top",
    pin: true,
    scrub: 1,
    // markers: true,
    end: "=+1000px",
  },
})

tl6.to("#end .bottom img:nth-child(1)", {
  duration: 6,
  ease: "power1",
  top: "10%",
  rotate: "10deg",
  left: "50%",
  
})
tl6.to("#end .bottom img:nth-child(2)", {
  duration: 6,
  ease: "power1",
  top: "10%",
  rotate: "-15deg",
  left: "48%",
  
})
tl6.to("#end .bottom img:nth-child(3)", {
  duration: 6,
  ease: "power1",
  top: "10%",
  rotate: "12deg",
  left: "51%",
  
})
tl6.to("#end .bottom img:nth-child(4)", {
  duration: 6,
  ease: "power1",
  top: "10%",
  rotate: "-11deg",
  left: "48%",
  
})
tl6.to("#end .bottom img:nth-child(5)", {
  duration: 6,
  ease: "power1",
  top: "10%",
  rotate: "11deg",
  left: "48%",
  
})
tl6.to("#end .bottom img:nth-child(6)", {
  duration: 6,
  ease: "power1",
  top: "10%",
  rotate: "-6deg",
  left: "49%",
  
})

var end = gsap.timeline({
  scrollTrigger: {
    trigger: "#end000",
    start: "top center",
    // pin: true,
    scrub: 1,
    // markers: true,
    end: "center center",
  },
})

end.to("#end000", {
  duration: 4,
  ease: "power1",
  opacity: 1,
}
)