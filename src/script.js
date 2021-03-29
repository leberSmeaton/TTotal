// aside toggle
function myFunction() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

// search bar
var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var searchInput = document.querySelector('#movie');
  searchInput.classList.add('shrink');
  var searchName = searchInput.value;
  console.log(searchName);
});

var searchInput = document.querySelector('#movie')
searchInput.addEventListener('click', function () {
  searchInput.classList.remove('shrink')
})
// END Search Bar


// Google Map

// END Google Map