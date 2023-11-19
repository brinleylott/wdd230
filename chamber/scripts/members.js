const url = 'https://brinleylott.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMembers() {
    try {
        const response = await fetch(url);
        const result = await response.json();

        if (result && result.length > 0) {
            console.log(result[0].name);
            return result;
        } else {
            console.error('No data found in the API response.');
            return []; // Return an empty array or handle the case when there's no data
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array or handle the error
    }
}

// "name": "IDWEB",
//     "address": {
//       "street1": "2115 S Vista Ave",
//       "street2": "",
//       "city": "boise",
//       "state": "Idaho",
//       "zip": "83705"
//     },
//     "phone": "209-324-8765",
//     "url": "https://www.idweb.it/en/",
//     "imageUrl": "https://www.idweb.it/en/wp-content/uploads/sites/4/2020/01/logo-IdSurvey-cati-cawi-capi-research-software.png",
//     "membershipLevel": "Gold"

function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement('section');
       
        let image = document.createElement('img');
        const fullName = document.createElement('h2');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const membershipLevel = document.createElement('p');
        fullName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        membershipLevel.textContent = `${member.membershipLevel}`;

        image.setAttribute('src', member.imageUrl);
        image.setAttribute('alt', 'company logo');
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '230');
        image.setAttribute('height', '240');

        card.appendChild(fullName); // Append to the card container
        card.appendChild(image);
        cards.appendChild(card);
    })
}

// Call the functions
getMembers().then(members => displayMembers(members));
