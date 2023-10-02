
const video = document.getElementById("video");
const playIcon = document.querySelector(".icon");

playIcon.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playIcon.style.display = "none";
    } else {
        video.pause();
        playIcon.style.display = "block";
    }
});

video.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playIcon.style.display = "none";
    } else {
        video.pause();
        playIcon.style.display = "block";
    }
});