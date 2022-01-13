$(function () {
  console.log('DOM is ready. Write some jQuery or whatever...')

})
// Функция для определение высоты что бы на моб. устройствах не было проблем при скрытия навигации браузера
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
console.log("window.innerHeight" + window.innerHeight)
console.log(vh)

// window.addEventListener('resize', () => {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
//   console.log(vh)
// })



document.addEventListener('DOMContentLoaded', function() {

  // Store the window width
  var innerHeight = window.innerHeight

  // Resize Event
  window.addEventListener("resize", function() {

    // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
    if (window.innerHeight != innerHeight) {

      // Update the window width for next time
      innerHeight = window.innerHeight

      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      console.log('Update js' + vh)

      // Do stuff here

    }

    // Otherwise do nothing
  })

})






let mainPage = document.querySelector(".main")



if(mainPage) {

  var swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    slidesPerView: 1.2,
    paginationClickable: true,
    mousewheel: true,
    parallax: true,
    centeredSlides:true,
    speed: 600,
    spaceBetween: 16,
    delay: 12000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' hoverable ">' + (index + 1) + "</span>";
      },
    },
    // loop:true,
    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    },
    navigation: {
      nextEl: '.bottom-item__2',
      prevEl: '',
    },

  });




  let btnForm = document.querySelector(".top__form")

  btnForm.addEventListener("click",function (){
    swiper.slideToLoop(5)
  })


  document.querySelector(".top-logo").addEventListener("click",function () {
    swiper.slideToLoop(0)
  })


  document.addEventListener('DOMContentLoaded', () => {
    const $bigBall = document.querySelector('.cursor__ball--big')
    const $hoverables = document.querySelectorAll('.hoverable')

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove)
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover)
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut)
    }

    // Move the cursor
    function onMouseMove(e) {
      TweenMax.to($bigBall, 0.1, {
        x: e.clientX - 20,
        y: e.clientY - 17
      })
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to($bigBall, 0.3, {
        scale: 0.5
      })
    }

    function onMouseHoverOut() {
      TweenMax.to($bigBall, 0.3, {
        scale: 1
      })
    }
  })

// 0 слайд
  let whales = document.querySelector("#whales")
  let whalesH = document.querySelector("#whalesMobileH")
  let whalesV = document.querySelector("#whalesMobileV")
// 1 слайд
  let sharks = document.querySelector("#sharks")
  let sharksH = document.querySelector("#sharksMobileH")
  let sharksV = document.querySelector("#sharksMobileV")
// 2 слайд
  let pengwins = document.querySelector("#pengwins")
  let pengwinsH = document.querySelector("#pengwinsMobileH")
  let pengwinsV = document.querySelector("#pengwinsMobileV")
// 3 слайд
  let flags = document.querySelector("#flags")
  let flagsH = document.querySelector("#flagsMobileH")
  let flagsV = document.querySelector("#flagsMobileV")
// 4 слайд
  let inprint = document.querySelector("#inprint")
  let inprintH = document.querySelectorAll("#inprintMobileH")
  let inprintV = document.querySelectorAll("#inprintMobileV")




  whales.addEventListener('timeupdate', function () {
    console.log("whales " + whales.currentTime)
    if (whales.ended) {
      swiper.slideNext(600)
      console.log("test")
    }
  }, false);

  whalesH.addEventListener('timeupdate', function () {
    console.log("whales " + whales.currentTime)
    if (whalesH.ended === true) {
      swiper.slideNext(600)
    }
  }, false);
  whalesV.addEventListener('timeupdate', function () {
    console.log("whales " + whalesV.currentTime)
    if (whalesV.ended === true) {
      console.log(whalesV.ended)
      swiper.slideNext(600)
    }
  }, false);

// 1 слайд

  sharks.addEventListener('timeupdate', function () {
    console.log("sharks " + sharks.currentTime)
    if (sharks.ended) {
      // swiper.slideTo(2)
      swiper.slideNext(600)

    }
  }, false);

  sharksH.addEventListener('timeupdate', function () {
    console.log("sharks " + sharksH.currentTime)
    if (sharksH.ended === true) {
      console.log(sharksH.ended)
      swiper.slideNext(600)
      // swiper.slideTo(2)
    }
  }, false);

  sharksV.addEventListener('timeupdate', function () {
    console.log("sharks " + sharksV.currentTime)
    if (sharksV.ended === true) {
      console.log(sharksH.ended)
      // swiper.slideTo(2)
      swiper.slideNext(600)
    }
  }, false);

// 2 слайд

  pengwins.addEventListener('timeupdate', function () {
    console.log( "pengwins " + pengwins.currentTime)
    if (pengwins.ended === true) {
      // swiper.slideTo(3)
      swiper.slideNext(600)
    }
  }, false);
  pengwinsV.addEventListener('timeupdate', function () {
    console.log( "pengwins " + pengwinsV.currentTime)
    if (pengwinsV.ended === true) {
      // swiper.slideTo(3)
      swiper.slideNext(600)
    }
  }, false);
  pengwinsH.addEventListener('timeupdate', function () {
    console.log( "pengwins " + pengwinsH.currentTime)
    if (pengwinsH.ended === true) {
      // swiper.slideTo(3)
      swiper.slideNext(600)
    }
  }, false);

// 3 слайд

  flags.addEventListener('timeupdate', function () {
    console.log("flags " + flags.currentTime)
    if (flags.ended === true) {
      // swiper.slideTo(4)
      swiper.slideNext(600)
    }
  }, false);
  flagsH.addEventListener('timeupdate', function () {
    console.log("flags " + flagsH.currentTime)
    if (flagsH.ended === true) {
      // swiper.slideTo(4)
      swiper.slideNext(600)
    }
  }, false);
  flagsV.addEventListener('timeupdate', function () {
    console.log("flags " + flagsV.currentTime)
    if (flagsV.ended === true) {
      // swiper.slideTo(4)
      swiper.slideNext(600)
    }
  }, false);

// 4 слайд

  inprint.addEventListener('timeupdate', function () {
    console.log("inprint " + inprint.currentTime)
    if (inprint.ended === true) {
      // swiper.slideTo(5)
      swiper.slideNext(600)
    }
  }, false);


  inprintV.forEach((item)=> {
    item.addEventListener('timeupdate', function (){
      console.log("inprint " + item.currentTime)
        if (item.ended === true) {
          // swiper.slideTo(5)
          swiper.slideNext(600)
        }
    })
  })

  inprintH.forEach((item)=> {
    item.addEventListener('timeupdate', function (){
      console.log("inprint " + item.currentTime)
        if (item.ended === true) {
          // swiper.slideTo(5)
          swiper.slideNext(600)
        }
    })
  })



// старый код
//

  swiper.on('slideChangeTransitionEnd', function () {
    let allVideo = document.querySelectorAll(".video")
    let slideForm = document.querySelectorAll(".slide-form")
    allVideo.forEach((item) => {

      if(item.classList.contains("swiper-slide-active")){
        item.querySelectorAll("video").forEach((videoItem)=> {
          if( window.getComputedStyle(videoItem, null).display !== "none") {
            videoItem.currentTime="0"
            videoItem.play()
          }
        })
      }

      if(!item.classList.contains("swiper-slide-active")){
        item.querySelectorAll("video").forEach((videoItem)=> {
          if( window.getComputedStyle(videoItem, null).display !== "none") {
            videoItem.pause()
            videoItem.currentTime="0"
          }
        })
      }

      slideForm.forEach((item) => {
        if(item.classList.contains("swiper-slide-active")){
          swiper.autoplay.start()
        }
        if(!item.classList.contains("swiper-slide-active")){
          swiper.autoplay.stop()
        }
      })
    })
  });

// конец старога код





  if( window.getComputedStyle(whales, null).display !== "none") {
    whales.addEventListener('loadeddata', function() {
      // if(whales.readyState >= 4) {
      //   function preloadMinTime() {
      //     let mainStart = document.querySelector(".main")
      //     if(mainStart.classList.contains("main__start")) {
      //       mainStart.classList.remove("main__start")
      //     }
      //
      //     document.querySelector(".preload").style.display = "none"
      //
      //     let animaTop = document.querySelectorAll(".top-item")
      //     animaTop.forEach((item) => {
      //       TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
      //     })
      //
      //     let animaBottom = document.querySelectorAll(".bottom-item")
      //     animaBottom.forEach((item) => {
      //       TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
      //     })
      //     console.log("preloadMinTime")
      //   }
      //   setTimeout(preloadMinTime, 2000);
      //   console.log("GO")
      // }

      whales.oncanplaythrough=function(event){
        function preloadMinTime() {
          let mainStart = document.querySelector(".main")
          if(mainStart.classList.contains("main__start")) {
            mainStart.classList.remove("main__start")
          }

          document.querySelector(".preload").style.display = "none"

          let animaTop = document.querySelectorAll(".top-item")
          animaTop.forEach((item) => {
            TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
          })

          let animaBottom = document.querySelectorAll(".bottom-item")
          animaBottom.forEach((item) => {
            TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
          })
          console.log("preloadMinTime")
        }
        setTimeout(preloadMinTime, 2000);
        console.log("GO")
      };
    });

  }

  if( window.getComputedStyle(whalesH, null).display !== "none") {
    whalesH.addEventListener('loadeddata', function() {
      whalesH.oncanplaythrough=function(event){
        function preloadMinTime() {
          let mainStart = document.querySelector(".main")
          if(mainStart.classList.contains("main__start")) {
            mainStart.classList.remove("main__start")
          }

          document.querySelector(".preload").style.display = "none"

          let animaTop = document.querySelectorAll(".top-item")
          animaTop.forEach((item) => {
            TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
          })

          let animaBottom = document.querySelectorAll(".bottom-item")
          animaBottom.forEach((item) => {
            TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
          })
          console.log("preloadMinTime")
        }
        setTimeout(preloadMinTime, 2000);
        console.log("GO H")
      };
    });
  }

  if( window.getComputedStyle(whalesV, null).display !== "none") {
    whalesV.addEventListener('loadeddata', function() {
      whalesV.oncanplaythrough=function(event){
        function preloadMinTime() {
          let mainStart = document.querySelector(".main")
          if(mainStart.classList.contains("main__start")) {
            mainStart.classList.remove("main__start")
          }

          document.querySelector(".preload").style.display = "none"

          let animaTop = document.querySelectorAll(".top-item")
          animaTop.forEach((item) => {
            TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
          })

          let animaBottom = document.querySelectorAll(".bottom-item")
          animaBottom.forEach((item) => {
            TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
          })
          console.log("preloadMinTime")
        }
        setTimeout(preloadMinTime, 2000);
        console.log("GO V")
      };
    });
  }




  // whales.addEventListener('canplaythrough', function () {
  //
  //   function preloadMinTime() {
  //     let mainStart = document.querySelector(".main")
  //     if(mainStart.classList.contains("main__start")) {
  //       mainStart.classList.remove("main__start")
  //     }
  //
  //     document.querySelector(".preload").style.display = "none"
  //
  //     let animaTop = document.querySelectorAll(".top-item")
  //     animaTop.forEach((item) => {
  //       TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
  //     })
  //
  //     let animaBottom = document.querySelectorAll(".bottom-item")
  //     animaBottom.forEach((item) => {
  //       TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
  //     })
  //   }
  //
  //   setTimeout(preloadMinTime, 2000);
  //   console.log("GO")
  // }, false);

  // whalesH.addEventListener('canplaythrough', function () {
  //
  //   function preloadMinTime() {
  //     let mainStart = document.querySelector(".main")
  //     if(mainStart.classList.contains("main__start")) {
  //       mainStart.classList.remove("main__start")
  //     }
  //     document.querySelector(".preload").style.display = "none"
  //
  //     let animaTop = document.querySelectorAll(".top-item")
  //     animaTop.forEach((item) => {
  //       TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
  //     })
  //
  //     let animaBottom = document.querySelectorAll(".bottom-item")
  //     animaBottom.forEach((item) => {
  //       TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
  //     })
  //
  //   }
  //
  //   setTimeout(preloadMinTime, 2000);
  //
  //
  //   console.log("GO")
  //
  // }, false);

  // whalesV.addEventListener('canplaythrough', function () {
  //
  //
  //   function preloadMinTime() {
  //     let mainStart = document.querySelector(".main")
  //     if(mainStart.classList.contains("main__start")) {
  //       mainStart.classList.remove("main__start")
  //     }
  //     document.querySelector(".preload").style.display = "none"
  //
  //     let animaTop = document.querySelectorAll(".top-item")
  //     animaTop.forEach((item) => {
  //       TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
  //     })
  //
  //     let animaBottom = document.querySelectorAll(".bottom-item")
  //     animaBottom.forEach((item) => {
  //       TweenMax.to(item, 0.5, {opacity:"1", y:"0",delay:0.3});
  //     })
  //
  //   }
  //
  //   setTimeout(preloadMinTime, 2000);
  //
  //
  //   console.log("GO")
  //
  // }, false);



  let formEl = document.querySelectorAll(".form-element")

  formEl.forEach((item) => {
    item.addEventListener("click", function () {
      swiper.autoplay.stop()
    })
  })

  if( window.innerWidth <= 992 ){
    $(".form-element__input").on('focus', () => {
      $(".bottom").hide()
      $(".top").hide()
      document.querySelector(".swiper-container").style.overflow = "hidden"
    });
    $(".form-element__input").on('blur', () => {
      $(".bottom").css('display', "flex")
      $(".top").css('display', "flex")
      document.querySelector(".swiper-container").style.overflow = "visible"
    });
  }

}

let dataPage = document.querySelector(".data")
if(dataPage) {
  document.querySelector(".demo2").addEventListener("click", function () {
    $(".text-container").printThis({
      // debug: true,
      base: "https://jasonday.github.io/printThis/",
      importCSS: true,
      importStyle: true,
    });
  })
}

window.addEventListener("orientationchange", function() {
  // Выводим числовое значение ориентации
  location.reload();
}, false);
