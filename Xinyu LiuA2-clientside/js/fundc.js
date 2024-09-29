
let id = localStorage.getItem('id')
console.log(id)
//  活动数据
let list = []
//  获取所有活动
function getList(params) {
console.log(params)
const queryString = new URLSearchParams(params).toString();
    fetch('http://localhost:3000/api/id?'+queryString, {
        method: 'GET', // 默认值就是 GET，所以其实可以省略
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
getList({ FUNDRAISER_ID: id })
function showList() {
    let html = '';
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
                 </div>`
    }

    var ele = document.querySelector('.show-area')
ele.innerHTML = (html)  
}

// 捐赠
function juanzeng() {
    alert('The function is under development')
}
// 捐赠
function back() {
   window.location.href = 'Search fundraisers.html'
}


