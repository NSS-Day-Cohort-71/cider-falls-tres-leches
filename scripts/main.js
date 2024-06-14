import { getParkAreaServices } from './parkAreaServices.js';
// import { parkAreaList } from './parkAreas.js';
import { Guests } from './guestList.js';
import { serviceList } from './serviceList.js';

const container = document.querySelector('#container');

const applicationHTML = `
    <header>
        <h1>Cider Falls Park</h1>
    </header>
    <div class ="main-container">
        <section class="park-details-content">
            <h2>Park Destinations</h2>
            <div id="park-details-section">
                ${getParkAreaServices()}
            </div>
        </section>
        <aside class="guest-list-content">
            <h2>Park Guests</h2>
            <div id="guest-list-section">
                ${Guests()}
            </div>
        </aside>
    </div>
    <footer>
        <article class="contact-info">
            <p>Phone: (123) 456-7890</p>
            <p>Email: <a href="mailto:info@ciderfallspark.com">info@ciderfallspark.com</a></p>
            <p>Address: 123 Park Lane, City, ST</p>
        </article>
    </footer>`;

container.innerHTML = applicationHTML;
