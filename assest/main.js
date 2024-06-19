// SLIDE VERTICAL //

// CONTACT //

function openDialer() {
    window.location.href = 'tel:+2349020303674';
}

function openEmailClient() {
    window.location.href = 'mailto:gabrielajibade4@gmail.com';
} 

// SLIDE HORIZONTAL OF TWO CONTAINER

function moveLeft(container1) {
  var content = document.getElementById(container1);
  var contentWidth = content.offsetWidth;
  var currentPosition = parseInt(content.style.transform.replace('translateX(', '')) || 0;
  var newPosition = currentPosition - 150; // Change this value to adjust the movement amount
  if (newPosition < -contentWidth) {
    // If the content has reached the end, loop to the beginning
    content.style.transform = `translateX(0px)`;
  } else {
    content.style.transform = `translateX(${newPosition}px)`;
    document.querySelector(`#${container1} .arrow-left`).style.transform = `translateX(${newPosition}px)`;
    document.querySelector(`#${container1} .arrow-right`).style.transform = `translateX(${newPosition}px)`;
  }
}

function moveRight(container2) {
  var content = document.getElementById(container2);
  var contentWidth = content.offsetWidth;
  var currentPosition = parseInt(content.style.transform.replace('translateX(', '')) || 0;
  var newPosition = currentPosition + 150; // Change this value to adjust the movement amount
  if (newPosition > 0) {
    // If the content has reached the beginning, loop to the end
    content.style.transform = `translateX(-${contentWidth}px)`;
  } else {
    content.style.transform = `translateX(${newPosition}px)`;
    document.querySelector(`#${container2} .arrow-left2`).style.transform = `translateX(${newPosition}px)`;
    document.querySelector(`#${container2} .arrow-right2`).style.transform = `translateX(${newPosition}px)`;
  }
}

// HAND SWIPE HORINZONTAL 

document.addEventListener('DOMContentLoaded', (event) => {
  const scrollContainer1 = document.querySelector('.blog-section-posts-container-1');
  const scrollContainer2 = document.querySelector('.blog-section-posts-container-2');

  function setupDragScroll(scrollContainer) {
      let isDown = false;
      let startX;
      let scrollLeft;

      scrollContainer.addEventListener('mousedown', (e) => {
          isDown = true;
          scrollContainer.classList.add('active');
          startX = e.pageX - scrollContainer.offsetLeft;
          scrollLeft = scrollContainer.scrollLeft;
      });

      scrollContainer.addEventListener('mouseleave', () => {
          isDown = false;
          scrollContainer.classList.remove('active');
      });

      scrollContainer.addEventListener('mouseup', () => {
          isDown = false;
          scrollContainer.classList.remove('active');
      });

      scrollContainer.addEventListener('mousemove', (e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - scrollContainer.offsetLeft;
          const walk = (x - startX) * 2; // The * 2 is to increase the scroll speed
          scrollContainer.scrollLeft = scrollLeft - walk;
      });
  }

  setupDragScroll(scrollContainer1);
  setupDragScroll(scrollContainer2);
});



// LOGIN AND SIGN-IN JS //
  
document.addEventListener('DOMContentLoaded', function () {
  // Check if the user has an account when the page loads
  const hasAccount = checkUserAccountOnLoad();

  if (!hasAccount) {
    alert("You don't have an account. You will be redirected to the signup page.");
    window.location.href = "signup.html"; // Redirect to the signup page
  }
});

function attemptLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Assume there is a function to check if the user has an account
  if (checkUserAccount(email, password)) {
    alert("Login successful!");
    window.location.href = "landing.html"; // Redirect to the dashboard
  } else {
    alert("Invalid email or password. Please try again or sign up.");
  }
}

function attemptSignup() {
  const firstName = document.getElementById('signup-firstname').value;
  const lastName = document.getElementById('signup-lastname').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Assume there is a signup process
  saveUserInfo({ email, password }); // Store email and password for verification during login
  alert("Account created successfully! You can now log in.");
  window.location.href = "login.html"; // Redirect to the login page after signup
}

function checkUserAccount(email, password) {
  // Retrieve user info from localStorage for testing
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    return user.email === email && user.password === password;
  }
  return false;
}

function checkUserAccountOnLoad() {
  // This function checks if the user has an account when the page loads
  // For simplicity, return true here; you should replace this with your actual check logic
  return true;
}

// MENU //

/* function showSidebar(){
  const sidebar = document.querySelector('.header_navigation')
  sidebar.style.display = 'flex'
}
function hideSidebar() {
  const sidebar = document.querySelector('.header_navigation')
  sidebar.style.display = 'none'
} */

  function showSidebar() {
    const sidebar = document.querySelector('.header_navigation')
    const showButton = document.querySelector('.fa-bars')
    const closeIcon = document.querySelector('.fa-times')
    sidebar.style.display = 'flex'
    closeIcon.style.display = 'block'
    showButton.style.display = 'none'
  }

  function hideSidebar() {
    const sidebar = document.querySelector('.header_navigation')
    const showButton = document.querySelector('.fa-bars')
    const closeIcon = document.querySelector('.fa-times')
    sidebar.style.display = 'none'
    closeIcon.style.display = 'none'
    showButton.style.display = 'block'
  }


// SHRINKING DOWNLOAD IMAGE ICON


// PROFILE DASHBOARD


// SCROLL ANIMATION

/* document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animate__animated');

  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      elements.forEach(el => {
          if (isElementInViewport(el)) {
              el.classList.add('animate__slideInUp','animate__zoomIn');
              el.classList.remove('hidden');
          }
      });
  }

  // Run on scroll
  window.addEventListener('scroll', handleScroll);

  // Run initially to check if any elements are in the viewport
  handleScroll();
});
 */

/* document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.animate__animated');

  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleScroll() {
      elements.forEach(el => {
          if (isElementInViewport(el)) {
              el.classList.add('');
              el.classList.remove('hidden');
          }
      });
  }

  function debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function() {
          const context = this, args = arguments;
          const later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  }

  // Run on scroll with debouncing
  window.addEventListener('scroll', debounce(handleScroll));

  // Run initially to check if any elements are in the viewport
  handleScroll();
}); */

/* document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.blog_section_frame1, .blog_section_frame2, .blog_section_frame3, .blog_section_frame4, .blog_section_frame5'); // Select all sections with class 'animated-section'

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('animate'); // Add 'animate' class when in viewport
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check in case sections are already in viewport on load
}); */

/* document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.blog_section_frame1, .blog_section_frame2, .blog_section_frame3, .blog_section_frame4, .blog_section_frame5'); // Select all sections with class 'animated-section'

  // Adjust the height threshold before the animation is triggered
  const isInViewport = (element, threshold = 0) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -threshold &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight + threshold || document.documentElement.clientHeight + threshold) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    sections.forEach(section => {
      if (isInViewport(section, -50)) { // Change 200 to the desired threshold in pixels
        section.classList.add('animate'); // Add 'animate' class when in viewport
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check in case sections are already in viewport on load
}); */

/* document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.blog_section_frame1, .blog_section_frame2, .blog_section_frame3, .blog_section_frame4, .blog_section_frame5, .blog_section_h2, .blog_section_p, .a, .b, .c, .d, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .o, .p, .q, .r, .s, .t, .u, .v, .z1, .blog_section_p2, .blog_section_h2_2, .blog_section_2_frame1, .blog_section_2_frame2, .blog_section_2_frame3, .blog_section_2_frame4, .blog_section_2_frame5, .features-section-p-1, .features-section-h4, .feature-section-p-2, .z, .y, .x, .w, .vector, .label, .cta-section-h2, .cta-section-Supporting'); // Select all sections with class 'animated-section'

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add('animate'); // Add 'animate' class when in viewport
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check in case sections are already in viewport on load
}); */

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.blog_section_frame1, .blog_section_frame2, .blog_section_frame3, .blog_section_frame4, .blog_section_frame5, .blog_section_h2, .blog_section_p, .a, .b, .c, .d, .e, .f, .g, .h, .i, .j, .k, .l, .m, .n, .o, .p, .q, .r, .s, .t, .u, .v, .z1, .blog_section_p2, .blog_section_h2_2, .blog_section_2_frame1, .blog_section_2_frame2, .blog_section_2_frame3, .blog_section_2_frame4, .blog_section_2_frame5, .features-section-p-1, .features-section-h4, .feature-section-p-2, .z, .y, .x, .w, .vector, .label, .cta-section-h2, .cta-section-Supporting');

  const isInViewportY = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleScroll = () => {
    sections.forEach(section => {
      if (!section.classList.contains('animated') && isInViewportY(section)) {
        section.classList.add('animate', 'animated'); // Add 'animate' and 'animated' classes
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll); // Handle window resize
  handleScroll(); // Initial check in case sections are already in viewport on load
});

// header altered

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.style.boxShadow = '0px 1px 5px rgba(0, 0, 0, 0.2)';
  } else {
      header.style.backgroundColor = 'white';
      header.style.boxShadow = '0px 0 0 rgba(0, 0, 0, 0.1)';
  }
});


// LANDING PADE PROFILE

let subProfile = document.getElementById ("subProfile");

function toggleProfile(){
  subProfile.classList.toggle("open-profile")
}