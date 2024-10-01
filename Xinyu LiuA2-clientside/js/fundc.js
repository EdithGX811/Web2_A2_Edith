
let id = localStorage.getItem('id')//Retrieve the value named 'id' from the local storage of the browser and assign it to the variable 'id'
console.log(id)//Use console.log to output the ID for easy debugging and viewing of the obtained value.
//Activity data
let list = []//Define an empty array list to store activity data obtained from the server.

//Get all activities
//Define a function called getList that takes a parameter params.
function getList(params) {
console.log(params)
const queryString = new URLSearchParams(params).toString();//Use URLSearchParams to convert params objects into query string format for use in URLs.

//Use the fetch API to send a GET request to the specified URL. The requested URL is' http://localhost:3060/api/id? Add the previously generated query string.
    fetch('http://localhost:3060/api/id?'+queryString, {
        method: 'GET', //The default value is GET, so it can actually be omitted
        headers: {
          'Content-Type': 'application/json'
        },
        params:params,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        list = data;
        showList(list)

        document.querySelector('.active-detail').innerHTML = data[0].DESCRIPTION
        document.querySelector('.image').src  = data[0].IMAGES
     
      })


}
debugger
getList({ FUNDRAISER_ID: id })//Call the getList function and pass an object containing FUNDRAISER_ID, whose value is the previously obtained ID.
//Define the showList function, responsible for rendering activity information onto the page.
function showList() {
    let html = '';//Initialize an empty string HTML, loop through the list array, and construct the HTML structure for each activity.
    for (let i = 0; i < list.length; i++) {
        html = `
                <div class="detail">
                    <div>Activity ID: <span class="show">${list[i].FUNDRAISER_ID}</span></div>
                    <div>Activity Organizer: <span class="show">${list[i].ORGANIZER}</span></div>
                    <div>Activity Tittle: <span class="show">${list[i].TITLE}</span></div>
                    <div>Activity Target Fundings: <span class="show">${list[i].TARGET_FUNDING}</span></div>
                    <div>Activity Current Fundings: <span class="show">${list[i].CURRENT_FUNDING}</span></div>
                    <div>Activity City: <span class="show">${list[i].CITY}</span></div>
                    <div>The Number of Donations: <span class="show">${list[i].THE_NUMBER_OF_DONATIONS}</span></div>
                    <div>Most Enthusiastic Individual: <span class="show">${list[i].MOST_ENTHUSIASTIC_INDIVIDUAL}</span></div>
                    <div>Activity Type: <span class="show">${list[i].NAME}</span></div>
                    <div>Activity Start Time: <span class="show">${list[i].EVENT}</span></div>
                    <div class="left-item"><div>ACTIVE STATUS：</div><div class="line">${list[i].ACTIVE}</div></div>
                 </div>`
    }

    var ele = document.querySelector('.show-area')//Finally, insert the constructed HTML into the specified element (. show area) on the page.
ele.innerHTML = (html)  
}

// Donate
function juanzeng() {
    alert('The function is under development')
}
// Return
function back() {
   window.location.href = 'Search fundraisers.html'
}


