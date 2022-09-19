const title = 'Title';
document.getElementById('title').textContent = title;
document.getElementById('title1').textContent = title;
document.getElementById('title2').textContent = title;
document.getElementById('title3').textContent = title;
document.getElementById('title4').textContent = title;
document.getElementById('title5').textContent = title;
document.getElementById('title6').textContent = title;
document.getElementById('title7').textContent = title;
document.getElementById('title8').textContent = title;
document.getElementById('title9').textContent = title;

const currentyear = new Date().getFullYear();
document.getElementById('year').textContent = currentyear;

const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
document.getElementById('lastupdated').textContent = `Last Updated: ${new Date().toLocaleDateString('en US', options)}`;



