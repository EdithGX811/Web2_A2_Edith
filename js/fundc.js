
let id = localStorage.getItem('id')
console.log(id)
//  活动数据
let list = []
//  获取所有活动
function getList(params) {
    $.get('http://localhost:3000/api/id', params, function (data, status) {
        console.log(data);
        list = data;
        showList()
        $(".active-detail").html(data[0].DESCRIPTION)
        $(".image").attr('src',data[0].IMAGES)
    });

}
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

    $(".show-area").html(html)
}

// 捐赠
function juanzeng() {
    alert('The function is under development')
}
// 捐赠
function back() {
    location.href = 'Search fundraisers.html'
}


