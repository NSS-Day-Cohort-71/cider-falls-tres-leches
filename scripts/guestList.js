// Import guest list function from database.js
import { getGuests } from "./database.js"

// Function that generates the list of guests in the park
const guests = getGuests()

export const Guests = () => {
    let html = "<ol>"

    for (const guest of guests) {
        html += `<li
                    data-type="guest"
                    >${guest.name}</li>`
    }
    html += "</ol>"

    return html
}