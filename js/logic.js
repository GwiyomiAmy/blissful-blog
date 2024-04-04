const toggle = document.querySelector('#theme');

let mode = "light"

toggle.addEventListener('click', function(){
   //console.log("button pressed")
   if (mode === "dark") {
      mode = "light";
      page.setAttribute('class', 'light');
      //console.log("it is light")
   } else {
      mode = "dark"
      page.setAttribute('class', 'dark');
      //console.log("it is dark")
   }
})


