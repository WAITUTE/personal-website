// Add a click listener to each hobby title to toggle its description
var hobbyTitles = document.getElementsByTagName("h2");
for (var i = 0; i < hobbyTitles.length; i++) {
hobbyTitles[i].addEventListener("click", function() {
var description = this.nextElementSibling;
if (description.classList.contains("show")) {
description.classList.remove("show");
} else {
hideDescriptions();
description.classList.add("show");
}
});
}

// Add a function to hide all hobby descriptions
function hideDescriptions() {
var descriptions = document.getElementsByClassName("description");
for (var i = 0; i < descriptions.length; i++) {
descriptions[i].classList.remove("show");
}
}

// Add a click listener to the document to hide all hobby descriptions
document.addEventListener("click", function(event) {
var target = event.target;
if (!target.matches("h2")) {
hideDescriptions();
}
});