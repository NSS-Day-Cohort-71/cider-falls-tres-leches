import { getServices } from "./database.js"
import { getParkAreas } from "./database.js";

const services = getServices();
const parkAreas = getParkAreas();

const findServicesMatch = (parkObject, servicesArray) => {

    const listOfServices = []

    for (const service of servicesArray) {
        if (parkObject.serviceIds.includes(service.id))
            listOfServices.push(service.name)
    }

    return listOfServices;
}

export const getParkAreaServices = () => {
    let html = "<ul>"

    for (const park of parkAreas) {
        const parkService = findServicesMatch(park, services)

        html+= `<ul>`
        for (const serviceName of parkService) {
            html+= `<li>${serviceName}</li>`
        }
    }

    html += "</ul>"

    return html
}