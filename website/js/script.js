document.addEventListener("DOMContentLoaded", function() {
    let videos = document.querySelectorAll(".video-item");
    videos.forEach(video => {
        let videoId = video.getAttribute("data-video-id");
        if (videoId) {
            video.innerHTML = `<iframe width="100%" height="200" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        }
    });
});
