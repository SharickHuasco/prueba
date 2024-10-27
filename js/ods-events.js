document.addEventListener('DOMContentLoaded', function () {
    const eventsContainer = document.getElementById('events-container');

    // Función para cargar los eventos desde el archivo JSON
    function loadEvents() {
        fetch('../ods-events.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                return response.json();
            })
            .then(data => {
                displayEvents(data.events);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Función para mostrar los eventos en el DOM
    function displayEvents(events) {
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');

            const title = document.createElement('div');
            title.classList.add('event-title');
            title.textContent = event.title;

            const date = document.createElement('div');
            date.classList.add('event-date');
            date.textContent = `Fecha: ${event.date}`;

            const description = document.createElement('div');
            description.classList.add('event-description');
            description.textContent = event.description;

            eventElement.appendChild(title);
            eventElement.appendChild(date);
            eventElement.appendChild(description);

            eventsContainer.appendChild(eventElement);
        });
    }

    // Cargar los eventos al iniciar la página
    loadEvents();
});
