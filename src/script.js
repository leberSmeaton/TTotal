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

  var searchInput = document.querySelector('#searchInput');
  searchInput.classList.add('shrink');
  var searchName = searchInput.value;
  console.log(searchName);
});

var searchInput = document.querySelector('#searchInput')
searchInput.addEventListener('click', function () {
  searchInput.classList.remove('shrink')
})
// END Search Bar


// Google Map
function initMap() {
  const blackPearl = { lat: -37.797, lng: 144.978 }; 

  const brunswickAces = { lat: -37.775, lng: 144.971 };

  const welcomeToThornbury = { lat: -37.764, lng: 144.999 };

  const tokyoTina = { lat: -37.855, lng: 144.992 };

  const lume = { lat: -37.831, lng: 144.961 };

  const captainBaxter = { lat: -37.865, lng: 144.972 };

  const beneathDriverLane = { lat: -37.812, lng: 144.963 };

  const madameBrussels = { lat: -37.811, lng: 144.971 };

  const whiteheartBar = { lat: -37.812, lng: 144.961 };

  /* main map element */
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: blackPearl,
  });
  
  new google.maps.Marker({
    position: blackPearl,
    map,
    title: "Black Pearl",
  });

  new google.maps.Marker({
    position: brunswickAces,
    map,
    title: "Brunswick Aces",
  });

  new google.maps.Marker({
    position: welcomeToThornbury,
    map,
    title: "Welcome to Thornbury",
    label: `Welcome to Thornbury`,
  });

  new google.maps.Marker({
    position: tokyoTina,
    map,
    title: "Tokyo Tina",
  });

  new google.maps.Marker({
    position: lume,
    map,
    title: "Lume",
  });

  new google.maps.Marker({
    position: captainBaxter,
    map,
    title: "Captain Baxter",
  });

  new google.maps.Marker({
    position: beneathDriverLane,
    map,
    title: "Beneath Driver Lane",
  });

  new google.maps.Marker({
    position: madameBrussels,
    map,
    title: "Madame Brussels",
  });

  new google.maps.Marker({
    position: whiteheartBar,
    map,
    title: "Whiteheart Bar",
  });
}
// END Google Map