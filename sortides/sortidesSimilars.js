
// Function to load Gallery section
function loadEventGallery(currentEventId) {
  fetch('../../sortides.json')
    .then(response => response.json())
    .then(events => {
      // Find the current event and extract its tags
      const currentEvent = events.find(event => event.id === currentEventId);

      if (!currentEvent) {
        console.error("Current event \""+ currentEventId +"\" not found.");
        return;
      }

      const galleryContainer = document.getElementById('event-gallery');
      galleryContainer.innerHTML = currentEvent.gallery.map(img => `
          <a href="${img.link}">
              <img src="${img.image}" alt="${img.alt}">
          </a>
      `).join('');
    })
    .catch(error => console.error("Error loading gallery:", error));
}

// Function to load and display related events
function loadSimilarEvents(currentEventId) {
  fetch('../../sortides.json')
    .then(response => response.json())
    .then(events => {
      // Find the current event and extract its tags
      const currentEvent = events.find(event => event.id === currentEventId);

      if (!currentEvent) {
        console.error("Current event \""+ currentEventId +"\" not found.");
        return;
      }

      const currentEventTags = currentEvent.tags;

      // Filter out the current event from the list and find related events based on tags
      const relatedEvents = events.filter(event =>
        event.id !== currentEventId &&
        event.tags.some(tag => currentEventTags.includes(tag))
      );

      const relatedDiv = document.getElementById("related-events");

      // Clear previous events if any
      relatedDiv.innerHTML = '';

      // Loop through filtered related events and display them
      relatedEvents.forEach(event => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("event");
        eventItem.innerHTML = `
          <a href="../${event.folder}${event.page}">
            <img src="../${event.folder}${event.image}" alt="${event.title}">
            <footer>${event.title}</footer>
          </a>
        <!--
          <div>
            <h3><a href="../${event.folder}${event.page}">${event.title}</a></h3>
          </div>-->
        `;
        relatedDiv.appendChild(eventItem);
      });
    })
    .catch(error => console.error("Error loading events:", error));
}
