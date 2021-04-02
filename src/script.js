// 
////// aside toggle 
//
function myFunction() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.display === "none") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

// 
//////search bar
//

// var searchForm = document.querySelector('form');
// searchForm.addEventListener('submit', function(event) {
// event.preventDefault();

// var searchInput = document.querySelector('#searchInput');
// searchInput.classList.add('shrink');
// var searchName = searchInput.value;
// console.log(searchName);
// });

// var searchInput = document.querySelector('#searchInput')
// searchInput.addEventListener('click', function () {
//   searchInput.classList.remove('shrink')
// })

// END Search Bar
 
// 
//////Google Map
//

const labels = "ABCDEFGHJKLMNOPQRSTUVWXYZ";

let labelIndex = 0;


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

  const babySnakes = { lat: -37.799, lng: 144.899 };

  const grazeland = { lat: -37.829, lng: 144.893 };

  const sebastian = { lat: -37.866, lng: 144.893 };

  /* main map element */
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: blackPearl,
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

  new google.maps.Marker({
    position: babySnakes,
    map,
    title: "Baby Snakes Bar",
  });

  new google.maps.Marker({
    position: grazeland,
    map,
    title: "Grazeland",
  });

  new google.maps.Marker({
    position: sebastian,
    map,
    title: "Sebastian",
  });

  // This event listener calls addpopuplink() when the map is clicked.
  /* 
  google.maps.event.addListener(map, "click", (event) => {
    addMarker(event.latLng, map);
  }); 
  */

  // Add a marker at the center of the map.
  addMarker(blackPearl, map);
  addMarker(brunswickAces, map);
  addMarker(welcomeToThornbury, map);
  addMarker(tokyoTina, map);
  addMarker(lume, map);
  addMarker(captainBaxter, map);
  addMarker(beneathDriverLane, map);
  addMarker(madameBrussels, map);
  addMarker(whiteheartBar, map);
  addMarker(babySnakes, map);
  addMarker(grazeland, map);
  addMarker(sebastian, map);
}

  // Adds a marker to the map.
  function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
}

// END Google Map