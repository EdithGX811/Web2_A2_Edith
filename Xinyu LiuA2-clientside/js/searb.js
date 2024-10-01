//  active data
var list = []
//  Get all activities and define a function called getList that accepts a parameter params containing the query criteria.
function getList(params){
  const queryString = new URLSearchParams(params).toString();//Convert params objects to query string format using URLSearchParams

  //Send a request to a specified URL using the fetch API, with a query string attached to the URL.
    fetch('http://localhost:3060/api/search?'+queryString, {
        method: 'GET', // The default value is GET, so it can actually be omitted

        //Set the request header to indicate that the data format for sending and receiving is JSON.
        headers: {
          'Content-Type': 'application/json'
        },
      })

      //Process the response to the fetch request and return a Promise object.
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();//Parse the response body into JSON format and return it.
      })
      //Process the parsed data and continue to return a Promise.
      .then(data => {
        console.log(data); //Output the obtained data to the console
        list = data;//Assign the obtained data to the global variable list.
        showList(list)//Call the showList function to display the list data on the webpage.
      })

}
//  Display activity list 
function showList(list){
    let html = '';
    if(list.length == 0){
        let list = document.querySelector('.list')//Get the element with the class name 'list' on the page and prepare to insert content.
        list.innerHTML = ` <div class="tips red">No relevant information found</div>`//If the list is empty, display the prompt message 'No relevant information'.
        return
    }

    for(let i=0;i<list.length;i++){
      //Create an HTML structure containing activity information and assign a unique ID to each activity.
    let temp =`<div class="active-info" id='active${i+1}'>
    <div class="left">
        <div class="left-item"><div>ID：</div><div class="line">${list[i].FUNDRAISER_ID}</div></div>
        <div class="left-item"><div>ORGANIZER：</div><a  onclick='toDetail(${list[i].FUNDRAISER_ID})'  href='./Fundraiser.html' class="line">${list[i].ORGANIZER}</a></div>
        <div class="left-item"><div>TITTLE：</div><div class="line">${list[i].TITLE}</div></div>
        
        <div class="left-item"><div>TARGET FUNDINGS：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
        <div class="left-item"><div>CURRENT FUNDINGS：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
        <div class="left-item"><div>CITY：</div><div class="line">${list[i].CITY}</div></div>
        <div class="left-item"><div>TYPE：</div><div class="line">${list[i].NAME}</div></div>
        <div class="left-item"><div>ACTIVE STATUS：</div><div class="line">${list[i].ACTIVE}</div></div>
    </div>
    <div class="right">
        <img class="active-img"
        src="${list[i].IMAGES}"
        alt="">
    </div>
    </div>`
    html += temp//Add the information of each activity to the HTML string.
    }
    //Insert the final generated HTML content into the list element of the page
    let ele = document.querySelector('.list')
    ele.innerHTML = html
    }
//   Jump to the details page
//Define a function called toDetail that takes a parameter ID (the ID of the activity)
function toDetail(id) {
localStorage.setItem('id',id)//Store the activity ID in the browser's local storage for easy access on the details page.
}
//  search button
function search() {
    
var CITY = document.querySelector('.CITY').value;//Retrieve the value of the city in the input box.
var ORGANIZER = document.querySelector('.ORGANIZER').value;//Get the value of the organizer in the input box
var CATEGORY_ID =document.querySelector('.CATEGORY_ID').value;
//Check if all input boxes are empty
if (!ORGANIZER && !CITY && !CATEGORY_ID) {
return    alert('Enter at least one condition')//If it is empty, a warning will pop up prompting the user to enter at least one condition and end the function execution.
}
//Create an object params to organize user input conditions into key value pairs.
let params = {
ORGANIZER:ORGANIZER,
CITY:CITY,
CATEGORY_ID:CATEGORY_ID
}
getList(params)//Call the getList function and pass the condition as a parameter to obtain the activity list.

}
//  Clear dropdown data
function clearChechboxes() {
    document.querySelector('.CATEGORY_ID').value = '';
    document.querySelector('.CITY').value = '';
    document.querySelector('.ORGANIZER').value = '';
}     


//   Jump to homepage
function toIndex() {
window.location.href = 'Home.html'
}
//   Jump to the search page
function toSearch() {
window.location.href = 'Search fundraisers.html'
}
