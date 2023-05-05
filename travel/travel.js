// Add a click listener to each travel destination to log its name to the console
var destinations = document.getElementsByClassName("travel-destination");
for (var i = 0; i < destinations.length; i++) {
  var destination = destinations[i];
  
  destination.addEventListener("click", function() {
    var destinationName = this.getElementsByTagName("h3")[0].textContent;
    console.log(destinationName);
  });
}
