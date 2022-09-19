

const currentyear = new Date().getFullYear();
document.getElementById('year').textContent = currentyear;

// const options = {month: 'numeric', day: 'numeric', year: 'numeric'};
// document.getElementById('lastupdated').innerHTML = `Last Updated: ${new Date().toLocaleDateString('en US', options)}`;

let oLastModif = new Date(document.lastModified);
document.getElementById('lastupdated').innerHTML = oLastModif;



