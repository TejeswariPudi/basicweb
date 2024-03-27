document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.dropdown');

  dropdown.addEventListener('mouseenter', function () {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.classList.add('show');
  });

  dropdown.addEventListener('mouseleave', function () {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.classList.remove('show');
  });
});
