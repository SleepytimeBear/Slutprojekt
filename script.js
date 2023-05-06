

let currentMonthNumber = 0
let globalData;

function changeMonthRight(){
    
    console.log(currentMonthNumber)
    
    currentMonthNumber ++;
    if (currentMonthNumber == 12){
        currentMonthNumber = 0
    }
    createBlogPosts(globalData,currentMonthNumber);
}   
function changeMonthLeft(){
   
    currentMonthNumber -= 1;
    if (currentMonthNumber < 0){
        currentMonthNumber = 11;
    }
    createBlogPosts(globalData,currentMonthNumber);

}

function createBlogPosts(data,month){
    const monthData = data.blogData[month]
    console.log(monthData);
    const blogText = document.getElementById("blogtext");

    blogText.innerHTML = ""
    for (let i = 0; i < monthData.length; i++){
        console.log(i);
        const blogpost = document.createElement("div");
        blogpost.classList.add("blogpost")
        const date = document.createElement("p");
        date.innerText = monthData[i].date;
        blogpost.appendChild(date);
        
        const description = document.createElement("p");
        description.innerText = monthData[i].description;
        blogpost.appendChild(description);

        
        blogText.appendChild(blogpost)
    }
}


async function fetchData() {
      try {
        // Fetch the JSON file
        const response = await fetch('list.json');
    
        // Check if the request was successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Parse the JSON data
        const data = await response.json();
        globalData = data
        createBlogPosts(data,currentMonthNumber);
        
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    }
    fetchData()
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    console.log(right);
    right.addEventListener('click',changeMonthRight);
    left.addEventListener('click',changeMonthLeft);