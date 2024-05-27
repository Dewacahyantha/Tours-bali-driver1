
    // Function to toggle active class on menu items
    function setActiveMenuItem() {
        var menuItems = document.querySelectorAll('.menu ul li a');
        menuItems.forEach(function(item) {
            item.addEventListener('click', function() {
                menuItems.forEach(function(innerItem) {
                    innerItem.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }

    // Function to toggle active class on menu items based on scroll position
    function setActiveMenuItemOnScroll() {
        var sections = document.querySelectorAll('section');
        var navHeight = document.querySelector('nav').offsetHeight;

        window.addEventListener('scroll', function() {
            var scrollPosition = window.scrollY;

            sections.forEach(function(section) {
                var sectionId = section.getAttribute('id');
                var sectionOffset = section.offsetTop - navHeight;
                var sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionOffset && scrollPosition < (sectionOffset + sectionHeight)) {
                    var correspondingMenuItem = document.querySelector('.menu ul li a[href="#' + sectionId + '"]');
                    if (correspondingMenuItem) {
                        document.querySelectorAll('.menu ul li a').forEach(function(item) {
                            item.classList.remove('active');
                        });
                        correspondingMenuItem.classList.add('active');
                    }
                }
            });
        });
    }

    // Function to handle slideshow for the home section
    function slideShow() {
        var slideIndex = 0;
        var slides = document.querySelectorAll('.slideshow-container img');

        function showSlides() {
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
        showSlides();
    }

    // Function to handle previous and next slides
    function plusSlides(n) {
        slideIndex += n;
        showSlides();
    }

    // Call functions when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        setActiveMenuItem();
        setActiveMenuItemOnScroll();
        slideShow();
    });
