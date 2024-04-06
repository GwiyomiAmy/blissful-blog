//reference to toggle button
const toggle = document.querySelector('#theme');

//set default mode to light
let mode = "light";
//let mode = localStorage.getItem('mode');
console.log(mode)

//add function to toggle when clicked to switch between the dark and light class style elements
toggle.addEventListener('click', function(e){
   //check that button is working
   //console.log("button pressed")
   if (mode === "dark") {
      mode = "light";
      page.setAttribute('class', 'light');
      localStorage.setItem('mode', mode);
      //console.log("it is light")
   } else {
      mode = "dark"
      page.setAttribute('class', 'dark');
      localStorage.setItem('mode', mode);
      //console.log("it is dark")
   }
})


