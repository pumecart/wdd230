

const currentyear = new Date().getFullYear();
document.getElementById('year').textContent = currentyear;


// let oLastModif = new Date(document.lastModified);
// document.querySelector('#lastupdated').innerHTML = `Last Modified: ${oLastModif}`;

const options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.querySelector('#lastupdated').innerHTML = `Last Updated ${new Date().toLocaleDateString('en-US', options)}`;

