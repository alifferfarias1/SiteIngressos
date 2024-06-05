const eventForm = document.getElementById('event-form');
        const eventList = document.getElementById('event-list');

        document.addEventListener('DOMContentLoaded', loadEvents);

        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('event-id').value;
            const name = document.getElementById('event-name').value;
            const date = document.getElementById('event-date').value;
            const location = document.getElementById('event-location').value;
            const event = { id: id || new Date().getTime().toString(), name, date, location };
            saveEvent(event);
            eventForm.reset();
        });

        function saveEvent(event) {
            let events = JSON.parse(localStorage.getItem('events')) || [];
            const eventIndex = events.findIndex(e => e.id === event.id);
            if (eventIndex > -1) {
                events[eventIndex] = event;
            } else {
                events.push(event);
            }
            localStorage.setItem('events', JSON.stringify(events));
            loadEvents();
        }

        function loadEvents() {
            const events = JSON.parse(localStorage.getItem('events')) || [];
            eventList.innerHTML = events.map(event => `
                <li>
                    ${event.name} - ${event.date} - ${event.location}
                    <button onclick="editEvent('${event.id}')">Editar</button>
                    <button onclick="deleteEvent('${event.id}')">Excluir</button>
                </li>
            `).join('');
        }

        window.editEvent = function(id) {
            const events = JSON.parse(localStorage.getItem('events')) || [];
            const event = events.find(e => e.id === id);
            document.getElementById('event-id').value = event.id;
            document.getElementById('event-name').value = event.name;
            document.getElementById('event-date').value = event.date;
            document.getElementById('event-location').value = event.location;
        }

        window.deleteEvent = function(id) {
            let events = JSON.parse(localStorage.getItem('events')) || [];
            events = events.filter(e => e.id !== id);
            localStorage.setItem('events', JSON.stringify(events));
            loadEvents();
        }