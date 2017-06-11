let slideInShare = document.getElementById('slideInShareCard');
let slideInShareCrossBtn = document.getElementById('cross-btn');
setTimeout(()=>{
	slideInShare.className = 'visible';
},3000);
slideInShareCrossBtn.addEventListener('click',()=>{
	slideInShare.className = '';
});
