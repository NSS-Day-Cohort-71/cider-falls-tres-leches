import { getParkAreaServices } from "./services.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Test</h1>
    <article class="details">
        <section">
            <h2>Things</h2>
            ${getParkAreaServices()}
        </section>
    </article>
`

mainContainer.innerHTML = applicationHTML