const preloader = document.getElementById("loading");
function myFunction(){
  preloader.style.display = 'none';
  const logo = document.querySelector(".navbar-logo");
  const titleone = document.querySelector(".navbar-span-title-1");
  const titletwo = document.querySelector(".navbar-span-title-2");
  const menuToggle = document.querySelector(".navbar-container");
  const showcase = document.querySelector(".navbar-info-wrapper");
  const ourworkvideo = document.querySelector(".ourwork-card_content");
  const displaythecard = document.querySelector(".display-card");
  const navbarli1 = document.querySelector(".navbar-li-1");
  const navbarli2 = document.querySelector(".navbar-li-2");
  const navbarli3 = document.querySelector(".navbar-li-3");
  const scrolltop = document.querySelector("#scrolltotop");
  var myScrollFunc = function () {
      var y = window.scrollY;
      if (y >= 1700) {
        scrolltop.style.display="block";
      } else {
        scrolltop.style.display="none";
      }
  };
  
  window.addEventListener("scroll", myScrollFunc);
  const body = document.getElementsByTagName("body")[0];
  var rellax = new Rellax(".rellax");

  scrolltop.addEventListener("click", function()
  {

    // will not work on internet explorer
    window.scrollTo({
      top:0,
      left:0,
      behavior:"smooth"
    });

    // Working For all browser including internet explorer
    // $("html,body").animate({
    // scrollTop: 0 },"slow");
    // console.log("clicked");

  });

  anime({
    targets: logo,
    translateY: [-100, 0],
    duration: 1400,
  });

  titleone.innerHTML = titleone.innerText
    .split("")
    .map((char) => {
      return `<span>${char == " " ? "&nbsp;" : char}</span>`;
    })
    .join("");

  titletwo.innerHTML = titletwo.innerText
    .split("")
    .map((char) => {
      return `<span>${char == " " ? "&nbsp;" : char}</span>`;
    })
    .join("");

  var tl = anime.timeline({
    easing: "easeOutExpo",
    duration: 800,
  });

  tl.add({
    targets: ".navbar-span-title-1 span",
    opacity: [0, 1],
    translateX: [-100, 0],
    delay: (elem, index) => 1000 + index * 50,
  });

  tl.add({ 
    targets: ".navbar-span-title-2 span",
    opacity: [0, 1],
    translateX: [-100, 0],
    delay: (elem, index) =>  index * 50,
  });

  anime({
    targets: ".navbar-p",
    translateY: [100, 0],
    opacity: [0, 1],
    delay: 2500,
    easing: "easeInOutSine",
  });

  anime({
    targets: ".navbar-inner-buttons",
    duration: 450,
    delay: anime.stagger(350, { start: 3600 }),
    easing: "easeInOutSine",
    opacity: [0, 1],
    translateY: [100, 0],
  });

  anime({
    targets: ".navbar-card",
    duration: 450,
    delay: anime.stagger(450, { start: 5000 }),
    easing: "easeInOutSine",
    opacity: [0, 1],
    translateY: [100,0],
  });

  anime({
    targets: ".navbar-card-button",
    duration: 550,
    delay: anime.stagger(450, { start: 5000 }),
    easing: "easeInOutSine",
    opacity: [0, 1],
    translateX: [-100,0],
  });

    navbarli1.addEventListener("click",()=>{
      menuToggle.classList.toggle("navbar-change");
      showcase.classList.toggle("navbar-active");
      body.classList.toggle("stop-scrolling");
    })

    navbarli2.addEventListener("click",()=>{
      menuToggle.classList.toggle("navbar-change");
      showcase.classList.toggle("navbar-active");
      body.classList.toggle("stop-scrolling");
    })

    navbarli3.addEventListener("click",()=>{
      menuToggle.classList.toggle("navbar-change");
      showcase.classList.toggle("navbar-active");
      body.classList.toggle("stop-scrolling");
    })

    menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("navbar-change");
    showcase.classList.toggle("navbar-active");
    body.classList.toggle("stop-scrolling");

    anime({
      targets: ".navbar-li-1",
      duration: 450,
      delay: anime.stagger(80, { start: 600 }),
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: [-100, 0],
    });

    anime({
      targets: ".navbar-li-2",
      duration: 450,
      delay: anime.stagger(80, { start: 1500 }),
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: [-100, 0],
    });

    anime({
      targets: ".navbar-li-3",
      duration: 450,
      delay: anime.stagger(80, { start: 2400 }),
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: [-100, 0],
    });

    anime({
      targets: ".navbar-li-4",
      duration: 450,
      delay: anime.stagger(80, { start: 3300 }),
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: [-100, 0],
    });

    anime({
      targets: ".navbar-h1-1",
      delay: 150,
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: [-100, 0],
    });

    anime({
      targets: ".navbar-h1-2",
      delay: 1150,
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: [-100, 0],
    });

    anime({
      targets: ".navbar-h1-3",
      delay: 2050,
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: [-100, 0],
    });

    anime({
      targets: ".navbar-h1-4",
      delay: 2950,
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: [-100, 0],
    });

    anime({
      targets: ".fa",
      delay: anime.stagger(100, { start: 2100 }),
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateX: [-50, 0],
    });
  });

  let waypoint6 = new Waypoint({
    element: ourworkvideo,
      handler: function() {
        console.log("working-6");
        anime({
        targets:".ourwork-card_content",
        delay: anime.stagger(300, { start:300 }),
        easing: "easeInOutSine",
        opacity: [0, 1],
        translateY: [200, 0],
        })
        this.destroy();
      },
    offset: '100%',
  })

  let waypoint7 = new Waypoint({
    element: displaythecard,
      handler: function() {
        console.log("working-7");
        anime({
        targets:".display-card",
        delay: anime.stagger(200, { start:300 }),
        easing: "easeInOutSine",
        opacity: [0, 1],
        translateY: [200, 0],
        })
        this.destroy();
      },
    offset: '100%',
  })
};


// Commented Code(Use if neeeded)

  // const imageone = document.querySelector(".image-1");
  // const imagetwo = document.querySelector(".image-2");
  // const imagethree = document.querySelector(".image-3");
  // const imagefour = document.querySelector(".image-4");
  // const imagefive = document.querySelector(".image-5");
  // console.log(ourworkvideo);
  // logo.innerHTML = logo.innerText.split("").map((char)=>
  // {
  //   return `<span>${char == " "?"&nbsp;":char}</span>`
  // }).join("");

  
  // Scroll Based Animations

  // let waypoint1 = new Waypoint({
  //   element: imageone,
  //     handler: function() {
  //       console.log("working-1");
  //       anime({
  //       targets: imageone,
  //       easing: 'easeInQuad',
  //       translateX: [-100, 0],
  //       opacity: [0, 1],
  //       delay: 100,
  //       duration: 800,
  //       })
  //       this.destroy();
  //     },
  //   offset: '90%',
  // })

  // let waypoint2 = new Waypoint({
  //   element: imagetwo,
  //     handler: function() {
  //       console.log("working");
  //       anime({
  //       targets: imagetwo,
  //       easing: 'easeInQuad',
  //       translateX: [100, 0],
  //       opacity: [0, 1],
  //       delay: 100,
  //       duration: 800,
  //       })
  //       this.destroy();
  //     },
  //   offset: '100%',
  // })

  // let waypoint3 = new Waypoint({
  //   element: imagethree,
  //     handler: function() {
  //       console.log("working");
  //       anime({
  //       targets: imagethree,
  //       easing: 'easeInQuad',
  //       translateX: [-100, 0],
  //       opacity: [0, 1],
  //       delay: 100,
  //       duration: 800,
  //       })
  //       this.destroy();
  //     },
  //   offset: '100%',
  // })

  // let waypoint4 = new Waypoint({
  //   element: imagefour,
  //     handler: function() {
  //       console.log("working");
  //       anime({
  //       targets: imagefour,
  //       easing: 'easeInQuad',
  //       translateX: [100, 0],
  //       opacity: [0, 1],
  //       delay: 100,
  //       duration: 800,
  //       })
  //       this.destroy();
  //     },
  //   offset: '100%',
  // })

  // let waypoint5 = new Waypoint({
  //   element: imagefive,
  //     handler: function() {
  //       console.log("working");
  //       anime({
  //       targets: imagefive,
  //       easing: 'linear',
  //       translateX: [-100, 0],
  //       opacity: [0, 1],
  //       delay: 100,
  //       duration:900,
  //       })
  //       this.destroy();
  //     },
  //   offset: '100%',
  // })
