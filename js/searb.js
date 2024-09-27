//  活动数据
let list = []
//  获取所有活动
function getList(params){
$.get('http://localhost:3000/api/search',params, function(data, status) {
 console.log(data);
 list = data;
 showList()
});

}

//   跳转到详情页面
function toDetail(id) {
localStorage.setItem('id',id)
}
//  搜索按钮
function search() {
var CITY = $(".CITY").val();
var ORGANIZER = $(".ORGANIZER").val();
var CATEGORY_ID = $(".CATEGORY_ID").val();
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
$(".CATEGORY_ID").val('')
$(".CITY").val('')
$(".ORGANIZER").val('')
}     
//  展示活动列表 Fundraiser.html
function showList(){
let html = '';
if(list.length == 0){
 return   $(".list").html(` <div class="tips red">No relevant information found</div>`)
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
    src="./image/1${i+1}.jpg"
    alt="">
</div>
</div>`
html += temp
}
$(".list").html(html)
}

//   跳转到首页
function toIndex() {
window.location.href = 'Home.html'
}
//   跳转到搜索页面
function toSearch() {
window.location.href = 'Search fundraiser.html'
}
