document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll(".d-lazy > *"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
        //   lazyImage.srcset = lazyImage.dataset.srcset;
        console.log("src: " + lazyImage.dataset.src);
        //   lazyImage.classList.remove("d-normal");
        //   lazyImage.classList.add("d-loaded");
          lazyImage.parentElement.classList.add("d-loaded");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});