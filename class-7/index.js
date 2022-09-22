// ** Variables ** 
let mosquitoContainer = document.getElementById("mosquito-container");

// ** Functions ** 

// Start the game by appending images to the webpage every 1 second 
function gameStart(){
  console.log("test")
  // Execution lines 
  setInterval(()=>{
    // Append a mosquito somewhere in the webpage

    // Step 1: We need an element container to put these images

    // Step 2: Create mosquito element 
    let newMosquito = createMosquito();
    mosquitoContainer.appendChild(newMosquito);

  }, 1000)
}

// Return an element that has a mosquito image
function createMosquito(){
  // Step 1. Create an element 
  let mosquitoElem = document.createElement("img");

  // Step 2. Set the src to the image 
  mosquitoElem.src =`
  https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F3DK17N9XkrDXCefWQ7HN9T%2Ff2e7d1360c0b5b891fbdc0d42a0c0ea6%2FMosquito_Khaki_1280x720.jpg&w=1080&q=75
  ` 

  // Step 3. Adjust image size
  mosquitoElem.style.width = "50px";
  mosquitoElem.style.height = "50px"

  // Step 4. Add a class to mosquito Elements 
  mosquitoElem.className = 'mosquito';

  // Step 5. Adjust the top and left randomly 
  let containerWidth = mosquitoContainer.clientWidth; 
  let containerHeight = mosquitoContainer.clientHeight; 

  // Gives a number between 0 and container height
  mosquitoElem.style.top = `${Math.random() * containerHeight}px`;
  // Gives a number between 0 and container width
  mosquitoElem.style.left = `${Math.random() * containerWidth}px`;

  // Step 6. Return element
  return mosquitoElem; 
}