// header today's date
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// footer- year
const currentyear = new Date().getFullYear();
document.getElementById('year').textContent = currentyear;

// footer last updated
const options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.querySelector('#lastupdated').innerHTML = `Last Updated ${new Date().toLocaleDateString('en-US', options)}`;

