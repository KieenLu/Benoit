//HANDLE BUTTON MOBILE
function handelButtonMobile() {
  let btnMobile = document.querySelector(".btnmobile");
  let nav = document.querySelector(".nav");
  //HANDLE NAV
  btnMobile.addEventListener("click", function () {
    btnMobile.classList.toggle("active");
  });
  btnMobile.addEventListener("click", function (element) {
    element.stopPropagation();
    nav.classList.toggle("active");
  });
  function hideNav() {
    btnMobile.classList.remove("active");
    nav.classList.remove("active");
  }
  window.addEventListener("resize", function () {
    let hideNavResize = this.window.innerWidth;
    if (hideNavResize > 1199) {
      hideNav();
    }
  });
  document.addEventListener("click", function () {
    nav.classList.remove("active");
    btnMobile.classList.remove("active");
  });
}
handelButtonMobile();

// CHANGE LANGUAGE
function handleChangeLanguage() {
  let lang = document.querySelector(".lang");
  lang.addEventListener("click", function (element) {
    element.stopPropagation();
    element.preventDefault();
    lang.classList.toggle("active");
  });
  let langItems = document.querySelectorAll(
    ".lang .lang__select .lang__select-item"
  );
  let langCurrent = document.querySelector(".lang .lang__current span");
  langItems.forEach(function (item) {
    item.addEventListener("click", function () {
      let langText = this.textContent;
      let langCurrentSpan = langCurrent.textContent;
      langCurrent.innerHTML = langText;
      this.innerHTML = langCurrentSpan;
    });
  });
  document.addEventListener("click", function () {
    lang.classList.remove("active");
  });
}
handleChangeLanguage();

//HANDLE SLIDER
function handleChangeSlider() {
  var sliderWrap = document.querySelector(".slider__item-wrap");
  var flickitySlider = new Flickity(sliderWrap, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
  });

  // CONTROL
  let nextBtn = document.querySelectorAll(".next");
  let prevBtn = document.querySelectorAll(".prev");

  nextBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      flickitySlider.next(true);
    });
  });
  prevBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      flickitySlider.previous(true);
    });
  });
}

// HANDLE SECOND SLIDER
function handleSecondSlider() {
  var secondSliderWrap = document.querySelector(".homepage .secondslider__img");

  var flickitySecondSlider = new Flickity(secondSliderWrap, {
    imagesLoaded: true,
    freeScroll: true,
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    autoPlay: true,
  });
}

// HANDLE VIDEO POPUP
function handlePopupvideo() {
  let showVideo = document.querySelector(".video__btn");
  let popupvideo = document.querySelector(".popupvideo");
  let btnClose = document.querySelector(
    ".popupvideo .popupvideo__inner .popupvideo__inner-iframe .close"
  );
  let iframeVideo = document.querySelector(
    ".popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe"
  );

  showVideo.addEventListener("click", function (element) {
    element.stopPropagation();
    popupvideo.classList.add("active");
  });
  btnClose.addEventListener("click", function () {
    popupvideo.classList.remove("active");
    iframeVideo.setAttribute(
      "src",
      "https://www.youtube.com/embed/iJFseWl8AlE"
    );
  });
  document.addEventListener("click", function () {
    popupvideo.classList.remove("active");
  });
}

//BACK TO TOP FUNCTION
let body = document.body;
heightBody = document.body.clientHeight;

let backtotop = document.querySelector(".btnbtt");

backtotop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
// FUNCTION SCROLL
function scroll() {
  window.addEventListener("scroll", function () {
    let scrollPage = window.pageYOffset;

    if (scrollPage > heightBody / 3) {
      backtotop.classList.add("active");
    } else {
      backtotop.classList.remove("active");
    }
  });
}
scroll();

if (document.getElementById("homepage")) {
  handlePopupvideo();
  handleNumberHomepage();
  window.addEventListener("load", function () {
    handleSecondSlider();
    handleChangeSlider();
  });
}

// SERVICE JS

function handleSliderService() {
  var serviceSliderWrap = document.querySelector(".slider__content");

  var flickityServiceSlider = new Flickity(serviceSliderWrap, {
    imagesLoaded: true,
    initialIndex: 2,
    initialIndex: ".is-initial-select",
    prevNextButtons: false,
  });
}

function handleSliderEvents() {
  var eventsSliderWrap = document.querySelector(".service__wrap-mobile");

  var flickityEventsSlider = new Flickity(eventsSliderWrap, {
    prevNextButtons: false,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
  });
}

if (document.getElementById("servicepage")) {
  handleNumberServicePage();
  handleSliderService();
}
if (document.getElementById("eventspage")) {
  handleSliderEvents();
}

function handleSliderEventsDetail() {
  var eventsDetailSliderWrap = document.querySelector(".content__wrap-slider");

  var flickityEventsDetailSlider = new Flickity(eventsDetailSliderWrap, {
    imagesLoaded: true,
    prevNextButtons: false,
    fade: true,
  });
  // CONTROL
  let nextBtn = document.querySelectorAll(".next");
  let prevBtn = document.querySelectorAll(".prev");

  nextBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      flickityEventsDetailSlider.next(true);
    });
  });
  prevBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      flickityEventsDetailSlider.previous(true);
    });
  });
}

function handleTabsLibrary() {
  let newsTabs = document.querySelectorAll(".text-library");
  let listNews = document.querySelectorAll(".library__wrap-item");
  newsTabs.forEach(function (tab_element) {
    tab_element.addEventListener("click", function () {
      newsTabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      this.classList.add("active");

      let getData = tab_element.getAttribute("data-tag");

      listNews.forEach(function (listNewsTabs) {
        listNewsTabs.classList.remove("active");
      });
      document.querySelector(".library-" + getData).classList.add("active");
    });
  });
}
if (document.getElementById("librarypage")) {
  handleTabsLibrary();
}

//HANDLE POPUPVIDEO BLOG DETAIL
function handlePopupvideoBLog() {
  let showVideoBlog = document.querySelector(".btn-play-video");
  let popupvideoBlog = document.querySelector(".popupvideo");
  let btnCloseBlog = document.querySelector(
    ".popupvideo .popupvideo__inner .popupvideo__inner-iframe .close"
  );
  let iframeVideoBlog = document.querySelector(
    ".popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe"
  );

  showVideoBlog.addEventListener("click", function (element) {
    element.stopPropagation();
    popupvideoBlog.classList.add("active");
  });
  btnCloseBlog.addEventListener("click", function () {
    popupvideoBlog.classList.remove("active");
    iframeVideoBlog.setAttribute(
      "src",
      "https://www.youtube.com/embed/J0znhempUZU"
    );
  });
  document.addEventListener("click", function () {
    popupvideoBlog.classList.remove("active");
  });
}

if (document.getElementById("eventsdetailpage")) {
  handlePopupvideoBLog();
  handleSliderEventsDetail();
}

Fancybox.bind("[data-fancybox]", {
  on: {
    load: (fancybox, slide) => {},
  },
});

AOS.init({
  duration: 1200,
});

// handle number for homepage
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj_1 = document.getElementById("value_1");
const obj_2 = document.getElementById("value_2");
const obj_3 = document.getElementById("value_3");
const obj_4 = document.getElementById("value_4");
function handleNumberHomepage() {
  let heightSectionNumberHomepage =
    document.querySelector(".scsomefacts").offsetTop;
  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll > heightSectionNumberHomepage - 100) {
      animateValue(obj_1, 0, 200, 2000);
      animateValue(obj_2, 0, 180, 2000);
    }
  });
}

//
function handleNumberServicePage() {
  let heightSectionNumberServicePage =
    document.querySelector(".scnumber").offsetTop;
  window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll > heightSectionNumberServicePage - 600) {
      animateValue(obj_1, 0, 200, 2000);
      animateValue(obj_2, 0, 180, 2000);
      animateValue(obj_3, 0, 350, 2000);
      animateValue(obj_4, 0, 250, 2000);
    }
  });
}
