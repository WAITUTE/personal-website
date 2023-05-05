
var blogPostList = document.querySelector(".blog-posts");

blogPostList.addEventListener("click", function(event) {
  t
  if (event.target.classList.contains("blog-post")) {
   
    var postId = event.target.dataset.postId;


    window.location.href = "blog-post.html?id=" + postId;
  }
});
