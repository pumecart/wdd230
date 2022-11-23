const requestFile = "scripts/data.json";
const businesses = document.querySelector('.businesses');

async function getBusinesses() {
    const response = await fetch(requestFile);
    if(response.ok) {
        const data = await response.json();
        data.businesses.forEach(business => {displayBusinesses(business)} )
    }
}

function displayBusinesses(business) {

        let card = document.createElement('section');
        card.className = "busisect";
        let businame = document.createElement('h2');
        businame.className = "busih2";
        let address = document.createElement('p');
        address.className = "busip"; 
        let phoneNumber = document.createElement('p');
        phoneNumber.className = "busip";
        let weburl = document.createElement('p');
        weburl.className = "busiwebp";
        let imageName = document.createElement('img');
        imageName.className = "busiportrait";
        let membershipLevel = document.createElement('p');
        membershipLevel.className = "busimemp";
       
        
    
        businame.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phoneNumber.textContent = `${business.number}`;
        weburl.textContent = `${business.weburl}`
        membershipLevel.textContent = `Membership Level: ${business.membershipLevel}`

    
        imageName.setAttribute('src', business.imagename);
        imageName.setAttribute(
            'alt', 
            `Business icon of ${business.name}`
        );
        imageName.setAttribute('loading', 'lazy');
    
        card.appendChild(businame);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(weburl);
        card.appendChild(imageName);
        card.appendChild(membershipLevel);
      
        businesses.appendChild(card);
  
}

getBusinesses();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


