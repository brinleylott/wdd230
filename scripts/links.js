const baseURL = "https://brinleylott.github.io/wdd230/";
const linksURL = "https://brinleylott.github.io/wdd230/data/links.json";

// ... Your fetch and getLinks function ...

function displayLinks(data) {
    const linksArray = data.links;
  
    const linksContainer = document.getElementById('links-container');
    
    linksArray.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.textContent = link.title;
  
      linksContainer.appendChild(linkElement); // Append each link to the container
    });
  }
  
  // ... Continue with the rest of your code ...
  
  
async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}
  
  getLinks();