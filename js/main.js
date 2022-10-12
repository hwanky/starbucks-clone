// 검색창 요소(.search) 찾기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 페이지 스크롤에 영향을 받는 요소들을 검색
const badgeEl = document.querySelector("header .badges");

// 페이지에 스크롤 이벤트를 추가
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
// lodash.js libraries & gsap libraries
// _.throttle(함수, 시간) gsap.to(요소, 지속시간, 옵션)
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      // 배지 숨기기
      // badgeEl.style.display = "none";
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // 배지 보이기
      // badgeEl.style.display = "block";
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300)
);

// 나타날 요소들(.fade-in) 찾기
const fadeEls = document.querySelectorAll(".visual .fade-in");

// 나타날 요소들을 하나씩 반복해서 처리
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// 슬라이드 요소 관리
// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});
