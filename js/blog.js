const page2 = document.querySelector('#page2')
const entry = document.querySelector('.card')
const storedBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));

let blogPosts = [];

//pull from local storage the previous arrays and parse from string to object array
function init() {
  if (storedBlogPosts !== null) {
    blogPosts = storedBlogPosts;
  }
}
   //add the data from local storage to the page
   function renderBlogPosts() {
      page2.innerHTML = '';
   
      for (let i = 0; i < blogPosts.length; i++) {
         const blogPost = blogPosts[i];
     
         const div = document.createElement('div');
         const h3 = document.createElement('h3');
         const h6 = document.createElement('h6');
         const par = document.createElement('p');
         h3.textContent = blogPost.title;
         div.appendChild(h3);
         h6.textContent = blogPost.username;
         div.appendChild(h6);
         par.textContent = blogPost.content;
         div.appendChild(par);
         div.setAttribute('data-index', i);
         page2.appendChild(div);
       }
   }
   
   

    //run init function
    init();
    renderBlogPosts()

    console.log(storedBlogPosts);