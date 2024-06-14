const database = {
  guests: [
    {
      id: 1,
      name: 'Jasmine Monroe',
      parkId: 3,
    },
    {
      id: 2,
      name: 'Leila Harrington',
      parkId: 2,
    },
    {
      id: 3,
      name: 'Xavier Sinclair',
      parkId: 6,
    },
    {
      id: 4,
      name: 'Maya Donovan',
      parkId: 1,
    },
    {
      id: 5,
      name: 'Nolan Chambers',
      parkId: 4,
    },
    {
      id: 6,
      name: 'Cameron Bennett',
      parkId: 5,
    },
    {
      id: 7,
      name: 'Autumn Whitaker',
      parkId: 6,
    },
    {
      id: 8,
      name: 'Gabriel Montgomery',
      parkId: 2,
    },
    {
      id: 9,
      name: 'Luna Fitzgerald',
      parkId: 3,
    },
    {
      id: 10,
      name: 'Elijah Sullivan',
      parkId: 1,
    },
    {
      id: 11,
      name: 'Jade Harrison',
      parkId: 4,
    },
    {
      id: 12,
      name: 'Lucas Thompson',
      parkId: 5,
    },
    {
      id: 13,
      name: 'Stella Fletcher',
      parkId: 6,
    },
    {
      id: 14,
      name: 'Asher Reynolds',
      parkId: 2,
    },
    {
      id: 15,
      name: 'Ruby Wallace',
      parkId: 3,
    },
    {
      id: 16,
      name: 'Leo Parks',
      parkId: 1,
    },
    {
      id: 17,
      name: 'Savannah Stevenson',
      parkId: 4,
    },
    {
      id: 18,
      name: 'Isaac Walsh',
      parkId: 5,
    },
    {
      id: 19,
      name: 'Harper Robbins',
      parkId: 6,
    },
    {
      id: 20,
      name: 'Owen Wilson',
      parkId: 2,
    },
  ],

  parkAreas: [
    {
      id: 1,
      name: 'Chamfort River',
      location: 'Northeast',
      serviceIds: [1, 2, 3]
    },
    {
      id: 2,
      name: 'Lost Wolf Hiking Trail',
      location: 'North',
      serviceIds: [4, 5, 6]
    },
    {
      id: 3,
      name: 'Lodge',
      location: 'Northwest',
      serviceIds: [7, 8, 5, 9]
    },
    {
      id: 4,
      name: 'Gander River',
      location: 'Southwest',
      serviceIds: [3, 4]
    },
    {
      id: 5,
      name: 'Campgrounds',
      location: 'South',
      serviceIds: [7, 8, 9]
    },
    {
      id: 6,
      name: 'Pine Bluffs Trails',
      location: 'Southeast',
      serviceIds: [4, 5, 10]
    },
  ],

  services: [
    {
      id: 1,
      name: 'rafting',
    },
    {
      id: 2,
      name: 'canoeing',
    },
    {
      id: 3,
      name: 'fishing',
    },
    {
      id: 4,
      name: 'hiking',
    },
    {
      id: 5,
      name: 'picknicking',
    },
    {
      id: 6,
      name: 'rock climbing',
    },
    {
      id: 7,
      name: 'lodging',
    },
    {
      id: 8,
      name: 'parking',
    },
    {
      id: 9,
      name: 'information',
    },
    {
      id: 10,
      name: 'zip lines',
    },
  ],
};
export const getGuests = () => {
  return database.guests.map((guest) => ({ ...guest }));
};
export const getParkAreas = () => {
  return database.parkAreas.map((parkArea) => ({ ...parkArea }));
};
export const getServices = () => {
  return database.services.map((service) => ({ ...service }));
};
