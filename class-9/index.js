console.log("John")
// Send a request to an API
fetch('https://dog.ceo/api/breeds/image/random').then((response)=>{
  return response.json();
}).then((data)=>{
// Do something with the response
  // Step 1: get image element 
    let imageElement = document.getElementById("random-dog-image")
  // Step 2: Set the src to the data we receive 
    imageElement.src = data.message;
    // console.log(data);
    console.log("amy")
})

console.log("James")


