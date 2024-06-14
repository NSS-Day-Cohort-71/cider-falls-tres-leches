import { parkAreaList } from './parkAreas.js';

const parkList = parkAreaList();
const container = document.querySelector('#container');
container.innerHTML = parkList;
