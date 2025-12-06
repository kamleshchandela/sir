var userName = document.querySelector(".name")
var email = document.querySelector(".email")
var date = document.querySelector(".date")
var comment = document.querySelector(".comment")
var rating = document.querySelector(".rating")
var arr = [1,2];
console.log(typeof(arr))

fetch("https://dummyjson.com/products")
.then((response) => response.json())
.then((posts) => {
    console.log(posts);
    console.log(typeof(posts.products));
    arr = posts.products;

    console.log(posts.products[0].reviews[1].reviewerName);
    console.log(posts.products[0].reviews[1].reviewerEmail);

    userName.textContent = "user name" + " : " + posts.products[0].reviews[1].reviewerName;
    email.textContent = "email" + " : " + posts.products[0].reviews[1].reviewerEmail;
    date.textContent = "date" + " : " + posts.products[0].reviews[1].date;
    comment.textContent = "comment" + " : " + posts.products[0].reviews[1].comment;
    rating.textContent = "rating" + " : " + posts.products[0].reviews[1].rating;



})


























