// const currentdate = new Date().getFullYear();
// document.querySelector('.date').innerHTML = currentyear;

const datefield = document.querySelector(".date");

const now = new Date();
const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${date}</em>`;


const options = {month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
document.querySelector('#lastupdated').innerHTML = `Last Updated ${new Date().toLocaleDateString('en-US', options)}`;

