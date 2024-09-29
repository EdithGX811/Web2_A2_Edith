//  活动数据
var list = []
//  获取所有活动
function getList(params){
  const queryString = new URLSearchParams(params).toString();
    fetch('http://localhost:3000/api/search?'+queryString, {
        method: 'GET', // 默认值就是 GET，所以其实可以省略
        headers: {
          'Content-Type': 'application/json'
        },
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
      })

}
//  展示活动列表 Fundraiser.html
function showList(list){
    let html = '';
    if(list.length == 0){
        let list = document.querySelector('.list')
        list.innerHTML = ` <div class="tips red">No relevant information found</div>`
        return
    }
    for(let i=0;i<list.length;i++){
    let temp =`<div class="active-info" id='active${i+1}'>
    <div class="left">
        <div class="left-item"><div>ID：</div><div class="line">${list[i].FUNDRAISER_ID}</div></div>
        <div class="left-item"><div>ORGANIZER：</div><a  onclick='toDetail(${list[i].FUNDRAISER_ID})'  href='./Fundraiser.html' class="line">${list[i].ORGANIZER}</a></div>
        <div class="left-item"><div>TITTLE：</div><div class="line">${list[i].TITLE}</div></div>
        
        <div class="left-item"><div>TARGET FUNDINGS：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
        <div class="left-item"><div>CURRENT FUNDINGS：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
        <div class="left-item"><div>CITY：</div><div class="line">${list[i].CITY}</div></div>
        <div class="left-item"><div>TYPE：</div><div class="line">${list[i].NAME}</div></div>
    </div>
    <div class="right">
        <img class="active-img"
        src="${list[i].IMAGES}"
        alt="">
    </div>
    </div>`
    html += temp
    }
    let ele = document.querySelector('.list')
    ele.innerHTML = html
    }
//   跳转到详情页面
function toDetail(id) {
localStorage.setItem('id',id)
}
//  搜索按钮
function search() {
    
var CITY = document.querySelector('.CITY').value;
var ORGANIZER = document.querySelector('.ORGANIZER').value;
var CATEGORY_ID =document.querySelector('.CATEGORY_ID').value;
if (!ORGANIZER && !CITY && !CATEGORY_ID) {
return    alert('Enter at least one condition')
}
let params = {
ORGANIZER:ORGANIZER,
CITY:CITY,
CATEGORY_ID:CATEGORY_ID
}
getList(params)

}
//  清楚下拉框数据
function clearChechboxes() {
    document.querySelector('.CATEGORY_ID').value = '';
    document.querySelector('.CITY').value = '';
    document.querySelector('.ORGANIZER').value = '';
}     


//   跳转到首页
function toIndex() {
window.location.href = 'Home.html'
}
//   跳转到搜索页面
function toSearch() {
window.location.href = 'Search fundraisers.html'
}
