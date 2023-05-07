
//All js and json was created with the help of Wilhelm and ChatGPT

function dynamicGeneration(data){
  console.log(data)
  const src = data.image 
  const name = data.name
  const description = data.description
  const charMain = document.getElementById("charMain")
  charMain.innerHTML = `<div id='placeholder'><img src='${src}' class='imageCharacter charMargin' ><div><p>${name}</p><p>${description}</p></div></div>`
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
        console.log(id[2])
        dynamicGeneration(data.characters[id[0]][id[2]])
  
        
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    
    }
    let sessionData = sessionStorage.getItem("id");
    console.log(sessionData)
    fetchData(sessionData)
  
  