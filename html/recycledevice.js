
    function redirectToB2B() {
      // Add the URL of your B2B Marketplace
      window.location.href = "https://www.yourb2bmarketplace.com";
    }

    // You can show/hide sections based on user interaction or any other event
    // For example, show "SELL OLD MOBILES" section
    document.getElementById("sellMobiles").style.display = "block";

   
    
    document.addEventListener('DOMContentLoaded', function () {
        let slides = document.querySelectorAll('.slider .slide');
        let index = 0;
      
        function showSlide(n) {
          slides[index].classList.remove('active');
          index = (n + slides.length) % slides.length;
          slides[index].classList.add('active');
        }
      
        function next() {
          showSlide(index + 1);
        }
      
        function prev() {
          showSlide(index - 1);
        }
      
        setInterval(next, 5000); // Change 5000 to your desired interval in milliseconds
      });
      
      document.querySelectorAll('.slider .slide').forEach((slide, index) => {
        slide.addEventListener('mouseenter', () => {
          document.querySelectorAll('.slider .slide').forEach(s => s.classList.remove('active'));
          slide.classList.add('active');
        });
      });
      

    // Add this script to your existing JavaScript or create a new one
    // Your existing JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const dropdownContainer = document.getElementById('sellDropdown');
  const sheet = document.querySelector('.sheet');

  dropdownContainer.addEventListener('click', function () {
    sheet.classList.toggle('active');
  });

  // Close the dropdown when clicking outside
  document.addEventListener('click', function (event) {
    if (!dropdownContainer.contains(event.target) && !sheet.contains(event.target)) {
      sheet.classList.remove('active');
    }
  });
});
// Your existing JavaScript

     
    
    
