
//  活动数据
let list = []
//  获取所有活动
function getAllList(){

  fetch('http://localhost:3000/api/all', {
    method: 'GET', // 默认值就是 GET，所以其实可以省略
    headers: {
      'Content-Type': 'application/json'
      // 其他需要的请求头
    },
    // 如果是 GET 请求，参数可以附加在 URL 上，或者使用下面的方式：
    // params: { id: '123' },
    // 这里假设 params 已经是一个对象，并且包含了所有需要的查询参数
    // 需要将其转换成 URL 查询字符串形式，并附加到 URL 上
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
    showList()
  })



}

getAllList()
//  展示活动列表
function showList(){
let html = '';

for(let i=0;i<list.length;i++){ 
 

  let temp =`<div class="active-info" id='active${i+1}'>
      <div class="left">
          <div class="left-item"><div>ID：</div><div class="line">${list[i].CATEGORY_ID}</div></div>
          <div class="left-item"><div>ORGANIZER：</div><div class="line">${list[i].ORGANIZER}</div></div>
          <div class="left-item"><div>TITTLE：</div><div class="line">${list[i].TITLE}</div></div>
          
          <div class="left-item"><div>TARGET FUNDINGS：</div><div class="line">${list[i].TARGET_FUNDING}</div></div>
          <div class="left-item"><div>CURRENT FUNDINGS：</div><div class="line">${list[i].CURRENT_FUNDING}</div></div>
          <div class="left-item"><div>CITY：</div><div class="line">${list[i].CITY}</div></div>
          <div class="left-item"><div>TYPE：</div><div class="line">${list[i].NAME}</div></div>
      </div>
    <div class="right">
      <img class="active-img"
      src="./image/1${i+1}.jpg"
      alt="">
  </div>
  
</div>`
html += temp
}
var ele = document.querySelector('.list')
ele.innerHTML = (html)                    
}

//   跳转到首页
function toIndex(){
window.location.href = 'Home.html'
}
//   跳转到搜索页面
function toSearch(){
window.location.href = 'Search fundraisers.html'
}
//   跳转到详情页面
function toDetail(){
window.location.href = 'Fundraiser.html'
}

showList()
