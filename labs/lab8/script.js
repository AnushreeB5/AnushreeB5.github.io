function toggleTheme(){
    //Identify the <body> element of the page
    //Toggle .dark-mode css class on <body>
   let bodyElement = document.querySelector("body"); 
   bodyElement.classList.toggle("dark-mode"); 
}

// Use JS to get the toggle button element, and store it in a variable with a reasonable name.






let buttonVariable = document.getElementById("toggleButton"); 

//document.getElementById("toggle-button").onclick = toggleSongs;


//Once you've done that, add the following line of code, which tells the browser: when the button is clicked on, call the toggleTheme function.
buttonVariable.onclick = toggleTheme;

