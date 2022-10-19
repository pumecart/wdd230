// header today's date
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// navigation- hamburger
function toggleMenu () {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

// banner
const banner = document.getElementById("banner");

let date = new Date();
currentDate = date.getDay();

if(currentDate == 1 || currentDate == 2){
    document.querySelector('#meeting').textContent =` "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."` ;
} else{
    document.querySelector('#meeting').style.display="none";
}

// footer- year
const currentyear = new Date().getFullYear();
// document.getElementById('year').textContent = currentyear;
document.querySelector("#year").innerHTML = `©️${currentyear}`;

// footer last updated
const options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.querySelector('#lastupdated').innerHTML = `Last Updated ${new Date().toLocaleDateString('en-US', options)}`;

