const savedUsername = document.querySelector('#saved-username')
const savedTitle = document.querySelector('#saved-title')
const savedContent = document.querySelector('#saved-content')


function renderBlogEntries() {
   const blogPost = JSON.parse(localStorage.getItem('blogPost'));
   if (blogPost !== null) {
      document.getElementById('saved-username').innerHTML = blogPost.username;
      document.getElementById('saved-title').innerHTML = blogPost.title;
      document.getElementById('saved-content').innerHTML = blogPost.content;
   }
   }
   
   
   function init() {
   renderBlogEntries();
   }
   init(); 
   