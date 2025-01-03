//badge, to-top
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY>500){
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션)
        //badgeEl.style.display = 'none';
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        });
    }else{
        //배지 보이기
        //badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));
//_.throttle(함수, 시간)
//시간 300 -> 0.3초
//스크롤 시 핸들러(함수)를 실행하고, 0.3초 단위로 부화를 줌


//to-top click
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


//visual fade
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});


//Swiper
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
//new Swiper(요소, 옵션);

//promotion
new Swiper('.promotion .swiper-container', {
    //direction: 'horizontal',  -> 기본값
    slidesPerView: 3,    //한번에 보여줄 슬라이드 개수
    spaceBetween: 10,    //슬라이드 사이 여백
    centeredSlides: true,    //1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000    //5초
    },
    pagination: {
        el: '.promotion .swiper-pagination',    //페이지 번호 요소 선택자
        clickable: true    //사용자의 페이지 번호 요소 제어 기능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

//awards
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});



//promotion ToggleBtn
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function (){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        //숨김 처리
        promotionEl.classList.add('hide');
    }else{
        //보임 처리
        promotionEl.classList.remove('hide');
    }
});


//youtube animaion

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션);
    gsap.to(
        selector,    //선택자
        random(1.5, 2.5),     //애니메이션 동작 시간
        {    //옵션
            y: size,
            repeat: -1,    //무한반복
            yoyo: true,   //재생된 애니메이션 뒤로 재생해서 반복
            ease: Power1.easeInOut,
            delay: random(0, delay)    //지연시간
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,    //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8   //화면의 80% 지점에서 보여짐 여부 감시
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});