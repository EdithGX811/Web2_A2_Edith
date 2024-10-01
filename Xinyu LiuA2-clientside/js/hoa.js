
//  active data
let list = []//Create an empty array list that will be used to store the activity data obtained from the API.

//  Get all activities
function getAllList(){

  fetch('http://localhost:3060/api/all', {  //Use the fetch function to send GET requests to the specified API endpoint（ http://localhost:3060/api/all ）.
    method: 'GET', // The default value for specifying the request method as GET is GET, so it can actually be omitted
    headers: {
      'Content-Type': 'application/json'//The data format for sending and receiving is JSON.
      // Other required request headers
    },
    // If it is a GET request, the parameters can be attached to the URL or used in the following way:
    // params: { id: '123' },
    // Assuming that params is already an object and contains all the required query parameters
    // It needs to be converted into a URL query string format and attached to the URL
  })
  
  //.then() method handles the response.
  .then(response => { 
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);//Check if responsive.ok is true, if not, throw an error.
    }
    return response.json();//If the response is normal, call response. json () to parse the response into JSON format data.
  })

  //Process parsed data
  .then(data => {
    console.log(data); //Print the obtained data for debugging purposes
    list = data;//Assign the obtained data to a list array.
    showList()//Call the function showList() to display the obtained activity list.
  })



}

getAllList()//Call this method

// Display activity list
function showList(){

let html = ''; //Create an empty string 'html' to store the generated HTML content.

//Use a for loop to iterate through each activity in the list array.
for(let i=0;i<list.length;i++){ 
 
  //Generate an HTML string containing detailed information for each activity. Insert dynamic content such as event ID, organizer, title, etc. using template string ${}.
  let temp =`<div class="active-info" id='active${i+1}'>
      <div class="left">
          <div class="left-item"><div>ID：</div><div class="line">${list[i].CATEGORY_ID}</div></div>
          <div class="left-item"><div>ORGANIZER：</div><div class="line">${list[i].ORGANIZER}</div></div>
          <div class="left-item"><div>TITTLE：</div><div class="line">${list[i].TITLE}</div></div>
          
          <div class="left-item"><div>TARGET FUNDINGS：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
          <div class="left-item"><div>CURRENT FUNDINGS：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
          <div class="left-item"><div>CITY：</div><div class="line">${list[i].CITY}</div></div>
          <div class="left-item"><div>TYPE：</div><div class="line">${list[i].NAME}</div></div>
          <div class="left-item"><div>ACTIVE STATUS：</div><div class="line">${list[i].ACTIVE}</div></div>
      </div>
    <div class="right">
      <img class="active-img"
      src="./image/1${i+1}.jpg"
      alt="">
  </div>
  
</div>`
html += temp//Append the generated HTML fragment to the HTML string.
}
//Select the element of the. list class in the webpage and set its innerHTML to the generated HTML string to render the activity list.
var ele = document.querySelector('.list')
ele.innerHTML = (html)                    
}

//   Jump to homepage
function toIndex(){
window.location.href = 'Home.html'
}
//  Jump to Search fundraisers
function toSearch(){
window.location.href = 'Search fundraisers.html'
}
//   Jump to Fundraiser
function toDetail(){
window.location.href = 'Fundraiser.html'
}

showList()
