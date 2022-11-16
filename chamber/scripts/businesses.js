const requestFile = "scripts/data.json";
const businesses = document.querySelector('.businesses');

async function getBusinesses() {
    const response = await fetch(requestFile);
    if(response.ok) {
        const data = await response.json();
        data.prophets.forEach(business => {displayBusinesses(business)} )
    }
}

function displayBusinesses(business) {
    // prophets.forEach(prophet => {

        // Create elements to add to the document
        let card = document.createElement('section');
        card.className = "busisect";
        let businame = document.createElement('h2');
        h2.className = "busih2";
        let address = document.createElement('p');
        p.className = "busip"; 
        let phoneNumber = document.createElement('p');
        p.className = "busip";
        let weburl = document.createElement('p');
        p.className = "busip";
        let imageName = document.createElement('img');
        imageName.className = "busiportrait";
        let membershipLevel = document.createElement('p');
        p.className = "busip";
        // let birthplace = document.createElement('div');
        
        

    
        // Change the textContent property of the h2 element to contain the prophet's full name
        businame.textContent = `${business.name}`;
        address.textContent = `Address: ${business.address}`;
        phoneNumber.textContent = `Phone Number: ${business.number}`;
        weburl.textContent = `Website: ${business.weburl}`
        membershipLevel.textContent = `Membership Level: ${business.membershipLevel}`

    
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        imageName.setAttribute('src', business.imagename);
        imageName.setAttribute(
            'alt', 
            `Business icon of ${business.name}`
        );
        imageName.setAttribute('loading', 'lazy');
    
        // Add/append the section(card) with the h2 element
        card.appendChild(businame);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(weburl);
        card.appendChild(imageName);
        card.appendChild(membershipLevel);
        // card.appendChild(birthplace);
    
        // Add/append the existing HTML div with the cards class with the section(card)
        // document.querySelector('div.cards').appendChild(card);
        businesses.appendChild(card);
    // });
}

getBusinesses();
// displayProphets(data);
