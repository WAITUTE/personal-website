// Add a click listener to each testimonial to toggle its display
var testimonials = document.getElementsByClassName("testimonial");
for (var i = 0; i < testimonials.length; i++) {
  var testimonial = testimonials[i];
  var blockquote = testimonial.getElementsByTagName("blockquote")[0];
  blockquote.style.display = "none";
  
  testimonial.addEventListener("click", function() {
    var blockquote = this.getElementsByTagName("blockquote")[0];
    if (blockquote.style.display === "none") {
      blockquote.style.display = "block";
    } else {
      blockquote.style.display = "none";
    }
  });
}
