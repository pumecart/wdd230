const title = 'Title';
document.getElementById('title').textContent = title;

const currentyear = new Date().getFullYear();
document.getElementById('year').textContent = currentyear;

const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
document.getElementById('lastupdated').textContent = `Last Updated: ${new Date().toLocaleDateString('en US', options)}`;



