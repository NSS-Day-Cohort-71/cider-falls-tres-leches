import { getServices } from './database.js';
import { getParkAreas } from './database.js';
import { getGuests } from './database.js';

const services = getServices();
const parkAreas = getParkAreas();

const findServicesMatch = (parkObject, servicesArray) => {
  const listOfServices = [];

  for (const service of servicesArray) {
    if (parkObject.serviceIds.includes(service.id))
      listOfServices.push(service.name);
  }

  return listOfServices;
};

export const getParkAreaServices = () => {
  let html = '';

  for (const park of parkAreas) {
    const parkService = findServicesMatch(park, services);

    html += `<h2 data-id="${park.id}" data-type="park">${park.name}</h2>`;
    html += `<ul>`;
    for (const serviceName of parkService) {
      html += `<li>${serviceName}</li>`;
    }
    html += '</ul>';
  }

  return html;
};
document.addEventListener('click', (event) => {
  const clicked = event.target;
  const clickedId = clicked.dataset.id;
  const guests = getGuests();
  let counter = 0;

  if (clicked.dataset.type === 'park') {
    for (const guest of guests) {
      if (parseInt(clickedId) === guest.parkId) {
        counter++;
      }
    }
    window.alert(`There are ${counter} guests in this area`);
  }
});
