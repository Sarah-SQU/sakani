// Constructor: each AvailableRoom object stores four properties
function AvailableRoom(building, room, freePlaces, status) {
  this.building = building;
  this.room = room;
  this.freePlaces = freePlaces;
  this.status = status;
}

// Array initialized with the information from the old Available Rooms table
var availableRooms = [
  new AvailableRoom("Building 1", "101", 1, "Available"),
  new AvailableRoom("Building 1", "204", 2, "Available"),
  new AvailableRoom("Building 2", "305", 0, "Full")
];

// Display room objects as rows in the HTML table
function displayAvailableRooms(list) {
  var body = document.getElementById("roomChangeTableBody");
  body.innerHTML = "";
  list.forEach(function (item) {
    var row = document.createElement("tr");
    row.innerHTML = "<td>" + item.building + "</td><td>" + item.room + "</td><td>" 
    + item.freePlaces + "</td><td>" + item.status + "</td>";
    body.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  displayAvailableRooms(availableRooms);

  // Create a new room object and put it in the array then refresh the table
  document.getElementById("addRoomForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var building = document.getElementById("newBuilding").value.trim();
    var room = document.getElementById("newRoomNumber").value.trim();
    var freePlaces = Number(document.getElementById("newFreePlaces").value);
    var status = document.getElementById("newRoomStatus").value;
    if (building !== "" && room !== "" && status !== "" && freePlaces >= 0) {
      availableRooms.push(new AvailableRoom(building, room, freePlaces, status));
      displayAvailableRooms(availableRooms);
      this.reset();
      document.getElementById("roomMessage").textContent = "Room added successfully.";
    }
  });

  // Search by building, room number or status
  document.getElementById("roomSearchButton").addEventListener("click", function () {
    var word = document.getElementById("roomSearch").value.toLowerCase().trim();
    var found = availableRooms.filter(function (item) {
      return item.building.toLowerCase().includes(word) ||
        item.room.toLowerCase().includes(word) || item.status.toLowerCase().includes(word);
    });
    displayAvailableRooms(found);
    document.getElementById("roomMessage").textContent = found.length + " result(s) found.";
  });

  // Display all rooms again
  document.getElementById("roomShowAll").addEventListener("click", function () {
    displayAvailableRooms(availableRooms);
    document.getElementById("roomSearch").value = "";
    document.getElementById("roomMessage").textContent = "All rooms are displayed.";
  });
});