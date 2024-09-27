
//  活动数据
let list = []
//  获取所有活动
function getAllList(){
  $.get('http://localhost:3000/api/all', function(data, status) {
       console.log(data);
       list = data;
       showList()
  });

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
$(".list").html(html)                    

}


//   滚动到指定为止
function goTo(top){
let id = top
var targetOffset = $(id).offset().top;
console.log(targetOffset)
$('html, body').animate({scrollTop: targetOffset}, 1000);
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
