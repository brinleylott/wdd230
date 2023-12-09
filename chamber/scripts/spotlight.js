const url = 'https://brinleylott.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#spotlight');

function getRandomMembers(members, count) {
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, count);
}

async function getSpotlightMember() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Filter members with gold or silver membership levels
        const qualifiedMembers = data.members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');

        // Randomly select 1 member from the qualified list
        const randomMember = getRandomMembers(qualifiedMembers, 1)[0];

        // Display the spotlighted member on the homepage
        displaySpotlightMember(randomMember);
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

function displaySpotlightMember(member) {
    const cardsContainer = document.querySelector('#spotlight');

    if (!member) {
        // Handle the case when there's no data
        cardsContainer.innerHTML = '<p>No members found.</p>';
        return;
    }

    const card = document.createElement('section');
    card.id = 'spotlightCard';

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
    image.setAttribute('width', '55%');

    card.appendChild(image);
    card.appendChild(fullName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(membershipLevel);

    cardsContainer.appendChild(card);
}

// Call the function
getSpotlightMember();


