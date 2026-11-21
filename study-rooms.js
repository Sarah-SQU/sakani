// Constructor: each StudyRoom object stores room, capacity and location
function StudyRoom(room, capacity, location) {
  this.room = room;
  this.capacity = capacity;
  this.location = location;
}

// Array initialized with information from the old Study Rooms table
var studyRooms = [
  new StudyRoom("Room A", "4 students", "Building 1"),
  new StudyRoom("Room B", "6 students", "Building 1"),
  new StudyRoom("Room C", "Unavailable", "Temporarily unavailable")
];

// Display the objects as rows in the HTML table
function displayStudyRooms(list) {
  var body = document.getElementById("studyTableBody");
  body.innerHTML = "";
  list.forEach(function (item) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + item.room + "</td><td>" + item.capacity + "</td><td>" + item.location + "</td>";
    body.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  displayStudyRooms(studyRooms);

  // Add a new object to the array and call the display function again
  document.getElementById("addStudyForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var room = document.getElementById("newStudyRoom").value.trim();
    var capacity = document.getElementById("newStudyCapacity").value;
    var location = document.getElementById("newStudyLocation").value.trim();
    if (room !== "" && capacity !== "" && location !== "") {
      studyRooms.push(new StudyRoom(room, capacity + " students", location));
      displayStudyRooms(studyRooms);
      this.reset();
      document.getElementById("studyMessage").textContent = "Study room added successfully.";
    }
  });

  // Search room name and its location
  document.getElementById("studySearchButton").addEventListener("click", function () {
    var word = document.getElementById("studySearch").value.toLowerCase().trim();
    var found = studyRooms.filter(function (item) {
      return item.room.toLowerCase().includes(word) || item.location.toLowerCase().includes(word);
    });
    displayStudyRooms(found);
    document.getElementById("studyMessage").textContent = found.length + " result(s) found.";
  });

  // Show the complete array again
  document.getElementById("studyShowAll").addEventListener("click", function () {
    displayStudyRooms(studyRooms);
    document.getElementById("studySearch").value = "";
    document.getElementById("studyMessage").textContent = "All study rooms are displayed.";
  });
});