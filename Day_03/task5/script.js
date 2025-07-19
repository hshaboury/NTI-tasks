const form = document.getElementById("eventForm");
const countdownDisplay = document.getElementById("countdown");
const searchInput = document.getElementById("search");
const eventsList = document.getElementById("eventsList");

let allEvents = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("eventName").value.trim();
  const seconds = parseInt(document.getElementById("timeRemaining").value);

  if (name === "" || isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid event name and a positive number of seconds.");
    return;
  }

  let remaining = seconds;
  const eventId = Date.now();
  const eventObj = { id: eventId, name, time: remaining };
  allEvents.push(eventObj);
  updateEventList();

  // Start countdown
  countdownDisplay.textContent = `Time Remaining: ${remaining} seconds`;

  const interval = setInterval(() => {
    remaining--;
    if (remaining > 0) {
      countdownDisplay.textContent = `Time Remaining: ${remaining} seconds`;
    } else {
      clearInterval(interval);
    }
  }, 1000);

  // Show final event message
  setTimeout(() => {
    countdownDisplay.textContent = `Event "${name}" has started!`;
  }, seconds * 1000);

  form.reset();
});

// Search filter
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = allEvents.filter(ev => ev.name.toLowerCase().includes(query));
  updateEventList(filtered);
});

function updateEventList(list = allEvents) {
  eventsList.innerHTML = "";
  list.forEach(ev => {
    const div = document.createElement("div");
    div.className = "eventItem";
    div.textContent = `${ev.name} (Time: ${ev.time}s)`;
    eventsList.appendChild(div);
  });
}
