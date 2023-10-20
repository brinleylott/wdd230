let lastVisit = localStorage.getItem("lastVisit");
let currentDate = new Date();

if (!lastVisit) {
  document.querySelector("#welcome").innerText =
    "Welcome! Let us know if you have any questions.";
} else {
  let timeDiff = currentDate - new Date(lastVisit);
  let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 1) {
    document.querySelector("#welcome").innerText = "Back so soon? Awesome!";
  } else {
    let message = `You last visited ${daysDiff} ${
      daysDiff === 1 ? "day" : "days"
    } ago.`;
    document.getElementById("sidebar").innerText = message;
  }
}
localStorage.setItem("lastVisit", currentDate);
