
//"<div id="placeholder"><img src="" class="imageCharacter" alt=""><div><p></p><p></p></div></div>"

function dynamicGeneration(data){
  const src = data.image 
  const name = data.name
  const description = data.description
  const charMain = document.getElementById("charMain")
  charMain.innerHTML = `<div id='placeholder'><img src='${src}' class='imageCharacter' ><div><p>${name}</p><p>${description}</p></div></div>`
}




async function fetchData(id) {
      try {
        // Fetch the JSON file
        const response = await fetch('characters.json');
    
        // Check if the request was successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Parse the JSON data
        const data = await response.json();
        dynamicGeneration(data.characters[id])
  
        
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    
    }
 //  let char1 = document.getElementById("character1")
// char1.addEventListener('click',fetchData(0));
  