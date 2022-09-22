// Your code goes here

document.addEventListener("DOMContentLoaded", () =>{
    console.log("The DOM has loaded")
    let p = document.querySelector('p#text')
    p.textContent = "This is really cool!"
    console.log(p)
})



//console.log("This message fires up when index.js loads before DOMContentLoaded has triggered")