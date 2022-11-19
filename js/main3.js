// alert("javascript error")

const hamburger = document.querySelector(".hamburger");
const close_btn = document.querySelector(".close-btn");
const wrapper = document.querySelector(".wrapper");
const backdrop = document.querySelector(".backdrop");

hamburger.addEventListener("click", () => {
    // alert("hamburger");
    wrapper.classList.add("active");
});

close_btn.addEventListener("click", () => {
    wrapper.classList.remove("active");
});