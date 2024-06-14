import { getServices } from './database.js';

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
