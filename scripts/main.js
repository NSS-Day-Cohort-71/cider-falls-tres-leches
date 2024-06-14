
import { parkAreaList } from './parkAreas.js';
import { Guests } from './guestList.js';

const container = document.querySelector('#container');

const applicationHTML = `
    <header>
        <h1>Cider Falls Park</h1>
    </header>
    <article class="main-content">
        <section class="park_details_content">
            <h2>Park Destinations</h2>
            ${parkAreaList()}
        </section>
        <section class="guest_list_content">
            <h2>Park Guests</h2>
            ${Guests()}
        </section>
    <article>
    <footer>
        <article class="contact-info">
            <p>Phone: (123) 456-7890</p>
            <p>Email: <a href="mailto:info@ciderfallspark.com">info@ciderfallspark.com</a></p>
            <p>Address: 123 Park Lane, City, ST</p>
        </article>
    </footer>`
        

container.innerHTML = applicationHTML

