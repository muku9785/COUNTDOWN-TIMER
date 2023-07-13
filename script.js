let endDate = "22 july 2023 11:32 pm";
document.getElementById("enddate").innerText = enddate;
const inputs = document.querySelectorAll("input");

function a(){
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) {


  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}};
a();
setInterval(() => {
  a();
}, 
1000);