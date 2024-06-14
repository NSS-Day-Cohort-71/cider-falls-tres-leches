// Import guestList function from database.js

// Function that generates the list of guests in the park
const guests = // guestList function from database.js

export const Guests = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li
                    data-type="guest"
                    >${guest.name}</li>`
    }
    html += "</ul>"

    return html
}