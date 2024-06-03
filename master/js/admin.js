document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');
    const eventList = document.getElementById('event-list');

    let events = [
        { id: 1, name: 'Show da Banda XYZ', date: '2024-07-10', location: 'Arena ABC' },
        { id: 2, name: 'Peça Teatral ABC', date: '2024-08-15', location: 'Teatro DEF' },
        { id: 3, name: 'Festival de Música 123', date: '2024-09-20', location: 'Parque GHI' }
    ];

    function renderEvents() {
        eventList.innerHTML = '';
        events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.innerHTML = `
                <p>${event.name}</p>
                <p>Data: ${event.date}</p>
                <p>Local: ${event.location}</p>
                <div class="event-actions">
                    <button class="edit-button" data-event-id="${event.id}">Editar</button>
                    <button class="delete-button" data-event-id="${event.id}">Excluir</button>
                </div>
            `;
            eventList.appendChild(eventItem);
        });

        document.querySelectorAll('.edit-button').forEach(button => {
            button.addEventListener('click', () => {
                const eventId = button.getAttribute('data-event-id');
                const event = events.find(e => e.id == eventId);
                document.getElementById('event-name').value = event.name;
                document.getElementById('event-date').value = event.date;
                document.getElementById('event-location').value = event.location;
                eventForm.setAttribute('data-editing-id', event.id);
            });
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', () => {
                const eventId = button.getAttribute('data-event-id');
                events = events.filter(e => e.id != eventId);
                renderEvents();
            });
        });
    }

    eventForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventLocation = document.getElementById('event-location').value;
        const editingId = eventForm.getAttribute('data-editing-id');
        
        if (editingId) {
            const eventIndex = events.findIndex(e => e.id == editingId);
            events[eventIndex] = { id: editingId, name: eventName, date: eventDate, location: eventLocation };
            eventForm.removeAttribute('data-editing-id');
        } else {
            const newEvent = {
                id: events.length + 1,
                name: eventName,
                date: eventDate,
                location: eventLocation
            };
            events.push(newEvent);
        }

        eventForm.reset();
        renderEvents();
    });

    renderEvents();
});
