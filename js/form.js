const username = document.querySelector('#username')
const title = document.querySelector('#title')
const content = document.querySelector('#content')
const submit = document.querySelector('.submit');


submit.addEventListener('click', function(e){
   e.preventDefault();

   const blogPost = {
      username: username.value,
      title: title.value,
      content: content.value.trim(),
   }
 
   localStorage.setItem('blogPost', JSON.stringify(blogPost));
   console.log(blogPost)
   window.location.href = './blog.html';

})