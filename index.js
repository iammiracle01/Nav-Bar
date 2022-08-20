const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


//Method 1

navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
});


// Method 2

// navToggle.addEventListener('click', function() {
//     links.classList.contains("show-links") ? links.classList.remove("show-links") : links.classList.add("show-links");
// });