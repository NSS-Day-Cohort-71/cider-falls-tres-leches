import { getParkAreas } from './database.js';

export const parkAreaList = () => {
  const parkAreas = getParkAreas();
  let parkHtml = `<ul>`;

  for (const parkArea of parkAreas) {
    parkHtml += `<li>${parkArea.name}</li>`;
  }
  parkHtml += `</ul>`;
  return parkHtml;
};
