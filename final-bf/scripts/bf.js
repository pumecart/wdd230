// hamburgerBtn
function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
};

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

// footer last updated
const options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.querySelector('#lastupdated').innerHTML = `Last Updated ${new Date().toLocaleDateString('en-US', options)}`;

