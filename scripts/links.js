// const baseURL = "https://brinleylott.github.io/wdd230/";
// const linksURL = "https://brinleylott.github.io/wdd230/data/links.json";
// const myLinks = document.querySelector('#links-container')
// // ... Your fetch and getLinks function ...

// async function getLinks() {
//   const response = await fetch(linksURL);
//   const data = await response.json();
//   displayLinks(data.lessons);
// }
// function displayLinks(lessons) {
//     lessons.forEach((lesson) => {
//       const lesson = document.createElement('p');
//       lesson.textContent = `${lesson.lesson}`;
//       const lessonLinks = lesson.links;

//       lessonLinks.forEach((lessonLink, index)=> {
//         const link = document.createElement('a');
//         link.textContent = `${lessonLink.title}`;
//         link.setAttribute('href', lessonLink.url);
//         lesson.appendChild(link);

//         if(index !== lessonLinks.length -1){
//           const spacer = documnet.createElement('span');
//           spacer.textContent = ' | ';
//           lesson.appendChild(spacer);
//         }
//       })
//       myLinks.appendChild(lesson)
//     })
//   }
  
  // ... Continue with the rest of your code ...
  
  

  
  // getLinks();


  // const linksArray = data.links;
  
    // const linksContainer = document.getElementById('links-container');
    
    // linksArray.forEach(link => {
    //   const linkElement = document.createElement('a');
    //   linkElement.href = link.url;
    //   linkElement.textContent = link.title;
  
    //   linksContainer.appendChild(linkElement); // Append each link to the container
    // });

const baseURL = "https://brinleylott.github.io/wdd230/";
const linksURL = "https://brinleylott.github.io/wdd230/data/links.json";
const myLinks = document.querySelector('#links-container');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}

function displayLinks(lessons) {
  lessons.forEach((lessonItem) => {
    const lesson = document.createElement('p');
    lesson.textContent = `${lessonItem.lesson}: `;
    const lessonLinks = lessonItem.links;

    lessonLinks.forEach((lessonLink, index) => {
      const link = document.createElement('a');
      link.textContent = `${lessonLink.title}`;
      link.setAttribute('href', lessonLink.url);
      lesson.appendChild(link);

      if (index !== lessonLinks.length - 1) {
        const spacer = document.createElement('span');
        spacer.textContent = ' | ';
        lesson.appendChild(spacer);
      }
    });

    myLinks.appendChild(lesson);
  });
}

getLinks();
