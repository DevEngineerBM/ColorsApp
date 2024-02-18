// Selecting Elements
let lis = document.querySelectorAll('ul li');
let experiment = document.querySelector('.experiment');

// Initialization - Check Local Storage for a stored color
if (window.localStorage.getItem('color')) {
   // [1] Set background color of the experiment div
   experiment.style.backgroundColor = window.localStorage.getItem('color');
   // [2] Remove "active" class from all list items
   lis.forEach((li) => {
      li.classList.remove('active');
   });
   // [3] Add "active" class to the list item with the stored color 
   document.querySelector(`[data-color='${window.localStorage.getItem('color')}`).classList.add('active');
}

// Event Listeners for Clicks
lis.forEach((li) => {
   li.addEventListener('click', (e) => {
      // Remove "active" class from all list items
      lis.forEach((li) => {
         li.classList.remove('active');
      });
      // Add "active" class to the clicked list item
      e.currentTarget.classList.add('active');
      // Store the clicked item's color in local storage
      window.localStorage.setItem('color', e.currentTarget.dataset.color);
      // Update the experiment div's background color
      experiment.style.backgroundColor = e.currentTarget.dataset.color;
   });
});
