//text form field
const username = document.querySelector('#username')
const title = document.querySelector('#title')
const content = document.querySelector('#content')
const hiddenData = document.querySelector('#hidden-data')
const submit = document.querySelector('.submit');

//create array for blog posts
let blogPosts = [];




//pull from local storage the previous arrays and parse from string to object array
function init() {
   const storedBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));
   if (storedBlogPosts !== null) {
     blogPosts = storedBlogPosts;
   }
 }

 //store object array into local storage
 function storeBlogPosts() {
   localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
 }

//when one clicks on the submit button...
submit.addEventListener('click', function (e) {
   //allows the following steps to happen without skipping ahead
   e.preventDefault();

   //set object to what is entered in the form
   const newBlogPost = {
      username: username.value,
      title: title.value,
      content: content.value.trim(),
   }

   //if
   if (newBlogPost.username === '' || newBlogPost.title === '' || newBlogPost.content === '') {
     alert("Please fill in the form")
   } else {
    //push new blog entry to array
   blogPosts.push(newBlogPost);
   newBlogPost.value = '';
 
   //store array to local storage
   storeBlogPosts()
   //console.log(blogPosts)
   //redirect to blog posts page
   window.location.href = './blog.html';
   }

 })

 //run init function
 init();