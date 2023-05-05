// Add a click listener to each portfolio item to toggle its description
var portfolioItems = document.getElementsByClassName("portfolio-item");
for (var i = 0; i < portfolioItems.length; i++) {
  var portfolioItem = portfolioItems[i];
  var description = portfolioItem.getElementsByTagName("p")[0];
  description.style.display = "none";
  
  portfolioItem.addEventListener("click", function() {
    var description = this.getElementsByTagName("p")[0];
    if (description.style.display === "none") {
      description.style.display = "block";
    } else {
      description.style.display = "none";
    }
  });
}
