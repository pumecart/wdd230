const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if (!src){
        return;
    }

    img.src = src;
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }

    })
},
    imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})

// document.addEventListener("DOMContentLoaded", function() {
//     var lazyImages = document.querySelectorAll(".lazy");    
//     var lazyTimeout;
    
//     function lazyload () {
//       if(lazyTimeout) {
//         clearTimeout(lazyTimeout);
//       }    
      
//       lazyTimeout = setTimeout(function() {
//           var scroll = window.pageYOffset;
//           lazyImages.forEach(function(img) {
//               if(img.offsetTop < (window.innerHeight + scroll)) {
//                 img.src = img.dataset.src;
//                 img.classList.remove('lazy');
//               }
//           });
//           if(lazyImages.length == 0) { 
//             document.removeEventListener("scroll", lazyload);
//             window.removeEventListener("resize", lazyload);
//             window.removeEventListener("orientationChange", lazyload);
//           }
//       }, 20);
//     }
    
//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   });