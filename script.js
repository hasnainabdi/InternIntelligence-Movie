// JavaScript for the Entire Website

// ================= Header Functionality =================

// JavaScript for Dropdown Menu
const userProfile = document.querySelector('.user-profile');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Show/hide dropdown on profile click
userProfile.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// Hide dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!userProfile.contains(e.target)) {
    dropdownMenu.classList.remove('active');
  }
});

function loadMore() {
    alert("Loading more content...");
    // You can add more functionality here to load additional items
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Find the target section
  
      if (targetSection) {
        // Smoothly scroll to the target section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Align to the top of the section
        });
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const contentItems = document.querySelectorAll('.content-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            const filterTag = this.getAttribute('data-tag');

            contentItems.forEach(item => {
                const itemTags = item.getAttribute('data-tags').split(' ');

                if (filterTag === 'all' || itemTags.includes(filterTag)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Offset for Fixed Header moved to style.css

// Search Bar Functionality
const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
  const query = searchBar.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
    // You can replace the alert with actual search functionality, e.g., redirecting to a search results page.
    // window.location.href = `/search?q=${query}`;
  } else {
    alert('Please enter a search term.');
  }
});

// Press Enter to Search
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const query = searchBar.value.trim();
    if (query) {
      alert(`Searching for: ${query}`);
      // You can replace the alert with actual search functionality, e.g., redirecting to a search results page.
      // window.location.href = `/search?q=${query}`;
    } else {
      alert('Please enter a search term.');
    }
  }
});

// Sign In Button Functionality
const signInButton = document.querySelector('.sign-in');

signInButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  alert('Redirecting to Sign In page...');
  // You can replace the alert with actual redirection to the sign-in page.
  // window.location.href = '/signin';
});

// ================= Hero Section Functionality =================

// Watch Free Button Functionality
const watchFreeButton = document.querySelector('.watch-free');

watchFreeButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  alert('Redirecting to free movies...');
  // You can replace the alert with actual redirection to the free movies page.
  // window.location.href = '/free-movies';
});

// ================= Coming Soon Section Functionality =================

// Get Tickets Button Functionality
document.querySelectorAll('.get-tickets').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    alert('Redirecting to ticket purchase...');
    // You can replace the alert with actual redirection to the ticket purchase page.
    // window.location.href = '/tickets';
  });
});

// ================= Top 10 on IMDb Section Functionality =================

// Watchlist Button Functionality
document.querySelectorAll('.watchlist').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    alert('Added to Watchlist!');
    // You can replace the alert with actual functionality to add the movie/show to the user's watchlist.
  });
});

// Trailer Button Functionality
document.querySelectorAll('.trailer').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    alert('Playing trailer...');
    // You can replace the alert with actual functionality to play the trailer.
  });
});

// ================= Hover Effects =================

// Add hover effects to all buttons
document.querySelectorAll('button, a').forEach(element => {
  if (element.classList.contains('watchlist') || element.classList.contains('trailer')) {
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = '#b2070a'; // Darker red on hover
    });

    element.addEventListener('mouseleave', () => {
      element.style.backgroundColor = '#e50914'; // Original red on mouse leave
    });
  } else if (element.classList.contains('sign-in') || element.classList.contains('sign-up')) {
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = '#b2070a'; // Darker red on hover
    });

    element.addEventListener('mouseleave', () => {
      element.style.backgroundColor = '#e50914'; // Original red on mouse leave
    });
  }
});

// Add hover effects to movie/show cards
document.querySelectorAll('.trailer-card, .imdb-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 0 20px rgba(229, 9, 20, 0.6)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
});

// JavaScript for Modal Functionality

// Get the modal and close button
const modal = document.getElementById('movie-modal');
const closeModalBtn = document.querySelector('.close-modal');

// Function to open the modal with movie/trailer details
function openModal(movieId) {
  const modalBody = document.querySelector('.modal-body');
  let content = '';

  // Example content based on movieId
  switch (movieId) {
    case '1':
      content = `
        <h3>WHITE LOTUS</h3>
        <p>Release Date: FEB 16 | TREX</p>
        <p>Rating: 8.0</p>
        <p>Description: A satirical look at the lives of the staff and guests at an exclusive tropical resort.</p>
        <iframe src="https://www.youtube.com/embed/example1" allowfullscreen></iframe>
      `;
      break;
    case '2':
      content = `
        <h3>Severance</h3>
        <p>Rating: 7.0</p>
        <p>Description: A psychological thriller about a man who undergoes a procedure to separate his work and personal memories.</p>
        <iframe src="https://www.youtube.com/embed/example2" allowfullscreen></iframe>
      `;
      break;
    case '3':
      content = `
        <h3>REACHER</h3>
        <p>Rating: 8.7</p>
        <p>Description: A former military police officer investigates a small town's dark secrets.</p>
        <iframe src="https://www.youtube.com/embed/example3" allowfullscreen></iframe>
      `;
      break;
    default:
      content = `<p>No details available.</p>`;
  }

  // Insert content into the modal
  modalBody.innerHTML = content;

  // Display the modal
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listeners for movie cards
document.querySelectorAll('.imdb-card').forEach(card => {
  card.addEventListener('click', () => {
    const movieId = card.getAttribute('data-movie-id');
    openModal(movieId);
  });
});

// Close modal when clicking the close button
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Initialize Slider
const slider = new Swiper('.slider', {
    slidesPerView: 1, // Number of slides visible at once
    spaceBetween: 20, // Space between slides
    loop: true, // Infinite loop
    autoplay: {
      delay: 5000, // Automatically move every 5 seconds
      disableOnInteraction: false, // Continue autoplay even when user interacts with the slider
    },
    navigation: {
      nextEl: '.slider-button-next', // Next button
      prevEl: '.slider-button-prev', // Previous button
    },
    pagination: {
      el: '.slider-pagination', // Pagination dots
      clickable: true, // Allow clicking on pagination to navigate
    },
    breakpoints: {
      // Responsive breakpoints
      768: {
        slidesPerView: 2, // 2 slides on medium screens
      },
      1024: {
        slidesPerView: 3, // 3 slides on large screens
      },
    },
  });

  const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.tag');
    const movieCards = document.querySelectorAll('.movie-card');
    const backToTopButton = document.getElementById('back-to-top');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        movieCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-tags').includes(filter)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
// JavaScript for About Page (if needed)
// You can add interactive features here if required.

// Example: Add a console log to confirm the page is loaded
console.log("About page loaded successfully!");

// JavaScript for Contact Page
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Log form data (you can replace this with an API call)
  console.log('Form Submitted:');
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Message:', message);

  // Show a success message
  alert('Your message has been sent successfully!');
});