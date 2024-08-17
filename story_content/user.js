window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  //create a function to add the music elements dynamically into the head of the html document
function add_line() {
var line = document.createElement("audio");
var head=document.getElementsByTagName('body')[0];
line.type = "audio/mp3";
line.src="";
line.id="bgSong" ;
line.autoplay = true;
line.loop = true;
head.appendChild(line);
}

//run the function only if the added html lines have not already been added
if(document.getElementById('bgSong')==null){
add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

}

window.Script2 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("Location");
var audio = document.getElementById('bgSong');
audio.src = Location + "1.mp3";
audio.load();
audio.play();

}

window.Script3 = function()
{
  var player = GetPlayer();
this.Location= player.GetVar("Location");
var audio = document.getElementById('bgSong');
audio.src = Location + "0.mp3";
audio.load();
audio.play();

}

window.Script4 = function()
{
  const url = "https://script.google.com/macros/s/AKfycbwVA7Z414HALh0O9XehGswWVPHlOSy5vH_cvN1EjsaMRVKlMiL7QGcCD2ULkxUOofFx/exec";
const player = GetPlayer();

// Tạo một đối tượng Date đại diện cho thời gian hiện tại
const currentDate = new Date();

// Lấy thông tin ngày, tháng, năm, giờ, phút, giây
const day = String(currentDate.getDate()).padStart(2, '0'); //Thêm số 0 phía trước nếu ngày tháng chỉ có 1 chữ số
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần cộng thêm 1
const year = currentDate.getFullYear();
const hours = String(currentDate.getHours()).padStart(2, '0'); //Thêm số 0 phía trước nếu giờ chỉ có 1 chữ số
const minutes = String(currentDate.getMinutes()).padStart(2, '0'); //Thêm số 0 phía trước nếu phút chỉ có 1 chữ số
const seconds = String(currentDate.getSeconds()).padStart(2, '0'); //Thêm số 0 phía trước nếu giây chỉ có 1 chữ số

// Tạo chuỗi đại diện cho timestamp
const timestamp = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

fetch(url, {
    method: "POST",
    mode: 'no-cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify({
        tennhanvien: player.GetVar("hovaten"),
        masonhanvien: player.GetVar("masonv"),
        nhapchucvu: player.GetVar("chucvu"),
        nhapcuahang: player.GetVar("cuahang"),
        nhaptinhthanhpho: player.GetVar("nhaptinh"),
        nhapvungmien: player.GetVar("vungmien"),
        dapanchude: player.GetVar("chude"),
        diemso: player.GetVar("diemcuaban"),
        cau1dung: player.GetVar("cau1"),
        cau2dung: player.GetVar("cau2"),
        cau3dung: player.GetVar("cau3"),
        cau4dung: player.GetVar("cau4"),
        cau5dung: player.GetVar("cau5"),
        cau6dung: player.GetVar("cau6"),
        cau7dung: player.GetVar("cau7"),
        cau8dung: player.GetVar("cau8"),
        cau9dung: player.GetVar("cau9"),
        cau10dung: player.GetVar("cau10"),
        timestamp: timestamp // Thêm timestamp vào dữ liệu gửi đi
    })
});
}

};
