var hobbyTitles = document.getElementsById("me");
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