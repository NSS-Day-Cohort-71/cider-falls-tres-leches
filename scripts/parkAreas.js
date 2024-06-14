import { getGuests, getParkAreas } from './database.js';

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
  }
  window.alert(`There are ${counter} guests in this area`);
});

export const parkAreaList = () => {
  const parkAreas = getParkAreas();
  let parkHtml = `<ul>`;

  for (const parkArea of parkAreas) {
    parkHtml += `<li data-id="${parkArea.id}" data-type="park">${parkArea.name}</li>`;
  }
  parkHtml += `</ul>`;
  return parkHtml;
};
