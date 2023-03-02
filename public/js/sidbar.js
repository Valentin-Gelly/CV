const progressbar = document.getElementById("progressbar");
const percent = document.getElementById("percent");

const totalHeight = document.body.scrollHeight - window.innerHeight;

console.log(totalHeight);

window.onscroll = function(){
  let progress = (window.pageYOffset/totalHeight) * 100;
  progressbar.style.height = Math.floor(progress) + "%";
}