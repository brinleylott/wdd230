// async function getMembers() {
//     const response = await fetch('data/members.json');
//     const result = await response.json();
//     console.log(result[0].name)
// }

// const members = getMembers();
// console.log(members[0].name);

async function getMembers() {
    const response = await fetch('data/members.json');
    const result = await response.json();
    console.log(result[0].name);
    return result; // Return the result to use it later
}

async function fetchData() {
    const members = await getMembers();
    console.log(members[0].name);
}

fetchData(); // Call the main function
