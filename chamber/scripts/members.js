const url = 'https://brinleylott.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.members)

    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array or handle the error
    }
}

function displayMembers(members) {
    const cardsContainer = document.querySelector('#cards');
    
    if (members.length === 0) {
        // Handle the case when there's no data
        cardsContainer.innerHTML = '<p>No members found.</p>';
        return;
    }

    members.forEach(member => {
        const card = document.createElement('section');
       
        let image = document.createElement('img');
        const fullName = document.createElement('h2');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const membershipLevel = document.createElement('p');
        
        fullName.textContent = `${member.name}`;
        
        // Extract relevant details from the address
        const { street1, street2, city, state, zip } = member.address;
        address.textContent = `${street1}, ${street2 ? street2 + ', ' : ''}${city}, ${state} ${zip}`;
        
        phone.textContent = `Phone: ${member.phone}`;
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        image.setAttribute('src', member.imageUrl);
        image.setAttribute('alt', 'company logo');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '120');
        image.setAttribute('height', '70');
        
        card.appendChild(image);
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membershipLevel);
        

        cardsContainer.appendChild(card);
    });
}

// Call the functions
getMembers().then(members => displayMembers(members));

