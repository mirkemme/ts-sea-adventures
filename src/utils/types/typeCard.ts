export type Port = {
    portCode: string,
    countryCode: string,
    Port: string,
};

export type Images = {
    id: number,
    author: string,
    width: number,
    height: number,
    url: string,
};

export type CardData = {
    id: number,
    code: string,
    title: string,
    departure: Port,
    arrival: Port,
    budget: {
      currencyCode: string,
      value: number,
      costType: string,
    },
    itinerary: Port[],
    numberOfDays: number,
    reservationsAvailable: number,
    reservations: number,
    reservationsType: string,
    boatType: string,
    departureDate: string,
    arrivalDate: string,
    images: Images[],
    ratings: number,
    numberOfReviews: number,
    description: string,
};
