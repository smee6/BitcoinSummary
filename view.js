// 화면이동,메뉴 이동 등

const titleSec = document.querySelector(".logo");
const content1 = document.querySelector("#title1");
const content2 = document.querySelector("#title2");
const content3 = document.querySelector("#title3");
const floatbutton = document.querySelector(".floating");
const button = document.querySelectorAll(".menu-button");

button[0].addEventListener('click', function() {
    content1.scrollIntoView(true);
});
button[1].addEventListener('click', function() {
    content2.scrollIntoView(true);
});
button[2].addEventListener('click', function() {
    content3.scrollIntoView(true);
});
floatbutton.addEventListener('click', function() {
    scrollTo(0, 0);
});

setTimeout(function() { location.reload(); }, 15000); //새로고침 => 나중에 웹소켓 써보자