import { getServices, getParkAreas } from './database.js';

const services = getServices();
const parkAreas = getParkAreas();

const findAreasMatch = (serviceObject, parkAreasArray) => {
  const matchingParkAreas = [];

  for (const park of parkAreasArray) {
    if (park.serviceIds.includes(serviceObject.id)) {
      matchingParkAreas.push(park);
    }

    return matchingParkAreas;
  }
};

document.addEventListener('click', (theClickEvent) => {
  const itemClickedOn = theClickEvent.target;

  if (itemClickedOn.dataset.type === 'service') {
    const serviceId = parseInt(itemClickedOn.dataset.id);

    const service = services.find((s) => s.id === serviceId);
    const serviceLocation = service.name;

    const servicesAtPark = [];
    for (const park of parkAreas) {
      for (const parkId of park.serviceIds)
        if (parkId === serviceId) {
          servicesAtPark.push(park.name);
        }
    }

    let message = `${serviceLocation} is available in: `;
    if (servicesAtPark.length === 0) {
      message += 'no park areas.';
    } else {
      message += servicesAtPark.join(', ');
    }
    window.alert(message);
  }
});

export const serviceList = () => {
  const services = getServices();
  let html = '<p>Park Services: ';

  for (const service of services) {
    if (service.id === services.length) {
      html += `<span data-type="service" data-name="${service.name}" data-id="${service.id}">${service.name} </span> `;
    } else {
      html += `<span data-type="service" data-name="${service.name}" data-id="${service.id}">${service.name}, </span> `;
    }
  }
  html += `</p>`;
  return html;
};
