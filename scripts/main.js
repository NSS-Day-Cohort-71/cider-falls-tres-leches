import { getParkAreaServices } from './parkAreaServices.js';
import { Guests } from './guestList.js';
import { serviceList } from './serviceList.js';

const container = document.querySelector('#container');

const applicationHTML = `
    <header>
        <img src="styles/Logo.png" alt="logo" class="logo">
        <h1>Cider Falls Park</h1>
    </header>
    <article class="main-content">
        <section class="park-details-content">
            <div id="service-list"
                ${serviceList()}
            </div>
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
    </article>
    <footer>
        <article class="contact-info">
            <p>Phone: (123) 456-7890</p>
            <p>Email: <a href="mailto:info@ciderfallspark.com">info@ciderfallspark.com</a></p>
            <p>Address: 123 Park Lane, City, ST</p>
        </article>
    </footer>`;

container.innerHTML = applicationHTML;
