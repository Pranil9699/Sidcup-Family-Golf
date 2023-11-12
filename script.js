const scroll = new LocomotiveScroll({
    el: document.querySelector('#body'),
    smooth: true
});

const csor = document.querySelector("#cursor");
const csorB = document.querySelector("#cursor-blur");
const cards = document.querySelectorAll(".card");

document.addEventListener("mousemove", (dets) => {
  csor.style.left = dets.x + 20 + "px";
  csor.style.top = dets.y + "px";
  csor.style.transition = "0.4s ";
  csorB.style.left = dets.x - 200 + "px";
  csorB.style.transition = "0.6s ";
  //   csorB.style.transition = "0.01s";
  csorB.style.top = dets.y - 200 + "px";
  cards.forEach((card) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    const deltaX = dets.x - cardCenterX;
    const deltaY = dets.y - cardCenterY;

    // Adjust rotation based on cursor position
    const rotateX = -deltaY / 25; // Adjust the factor as needed
    const rotateY = deltaX / 25; // Adjust the factor as needed

    // Apply the rotation
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    if (
      dets.x >= cardRect.left &&
      dets.x <= cardRect.right &&
      dets.y >= cardRect.top &&
      dets.y <= cardRect.bottom
    ) {
      // Apply the hover effect class
      card.classList.add("hovered");
    } else {
      // Remove the hover effect class for cards not under the cursor
      card.classList.remove("hovered");
    }
  });
});

let h4all = document.querySelectorAll("#nav h4");
let imgall = document.querySelectorAll("#nav img");
let nav = document.querySelector("#nav");

function setCommonMouseEnterStyle() {
  csor.style.scale = 3;
  csor.style.border = "1px solid #fff";
  csor.style.cursor = "pointer";
  csor.style.backgroundColor = "transparent";
}

function setCommonMouseLeaveStyle() {
  csor.style.scale = 1;
  csor.style.border = "0px solid #95c11e";
  csor.style.cursor = "normal";
  csor.style.backgroundColor = "#95c11e";
}

imgall.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    setCommonMouseEnterStyle();
    // elem.style.height = "72px";
    elem.style.padding = "5px";
    csor.style.transition = ".4s";
  });

  elem.addEventListener("mouseleave", () => {
    setCommonMouseLeaveStyle();
    elem.style.padding = "0px";
    // elem.style.height = "75px";
  });
});

h4all.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    setCommonMouseEnterStyle();
    if (getComputedStyle(nav).backgroundColor === "rgb(0, 0, 0)") {
      console.log("black");
      elem.style.color = "#95c11e";
    } else {
      elem.style.color = "#000";
    }
  });

  elem.addEventListener("mouseleave", () => {
    setCommonMouseLeaveStyle();
    elem.style.color = "#fff";
  });
});
document.getElementById("arrow").addEventListener("mouseenter", () => {
  setCommonMouseEnterStyle();
});
document.getElementById("arrow").addEventListener("mouseleave", () => {
  setCommonMouseLeaveStyle();
});
//#page4 .elem
document.querySelectorAll("#page4 .elem").forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    setCommonMouseEnterStyle();
    // document
    //   .querySelector("#page4 h1")
    //   .style(" -webkit-text-stroke", " 1px #95c11e");
    // document
    // .querySelector("#page4 h1")
    // .style("color", "red");
    document.querySelector("#page4 h1").style.webkitTextStroke = "1px #95c11e";
  });
  elem.addEventListener("mouseleave", () => {
    setCommonMouseLeaveStyle();
    document.querySelector("#page4 h1").style.webkitTextStroke = "1px #fff";
  });
});
document
  .querySelectorAll(
    "#instaLog div img,#instaLog div #instaAndLinkedin,#f2 ul li h4,#f3 ul li h4,#f4 h4 #tel,#f4 h3"
  )
  .forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      setCommonMouseEnterStyle();
      elem.style.cursor = "pointer";
      elem.style.color = "#fff";
    });
    elem.addEventListener("mouseleave", () => {
      setCommonMouseLeaveStyle();
      elem.style.color = "#000";

      elem.style.cursor = "normal";
    });
  });
let timeline = gsap.timeline();
timeline.from("#nav img", {
  y: -100,
  scale: 0,
  duration: 0.5,
  stagger: 0.3,
});
timeline.from("#main #page1 h1",{
  x:-1500,
  duration:1,
  
})
timeline.from("#main #page1 h2,#main #page1 p",{
  scale:0,
  duration:1,
  // opacity:0.5,
})

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "95px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroll: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  // swagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  // y: 90,
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    markers: false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markser: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markser: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    markser: true,
    start: "top 100%",
    end: "top 95%",
    scrub: 3,
  },
});

// Get the div element by its id
let div = document.getElementById("page3");

// Get all the p elements inside the div
let paragraphs = div.getElementsByTagName("p");

// Set the initial index of the current paragraph
let index = 0;

// Hide all the paragraphs except the first one
for (let i = 1; i < paragraphs.length; i++) {
  paragraphs[i].style.display = "none";
}

// Define a function to show the next paragraph
function showNextParagraph() {
  // Hide the current paragraph
  paragraphs[index].style.display = "none";
  

  // Increment the index by one
  index++;

  // If the index is equal to the length of the paragraphs array, reset it to zero
  if (index == paragraphs.length) {
    index = 0;
  }

  // Show the next paragraph
  paragraphs[index].style.display = "block";
  paragraphs[index].style.transition = "4s";
}

// Set an interval to call the function every 3 seconds
setInterval(showNextParagraph, 10000);
