import {AVATAR_URL} from '../common/const';

export default [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: false,
      name: `Angelina`
    },
    id: 1,
    images: [`img/room.jpg`, `img/apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `apartment-01.jpg`,
    price: 120,
    rating: 95,
    title: `Beautiful & luxurious studio at great location`,
    type: `Аpartment`
  }, {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Comfortable new private room.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: `Vika`
    },
    id: 2,
    images: [`img/studio-01.jpg`, `img/apartment-01.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 7
    },
    maxAdults: 3,
    previewImage: `room.jpg`,
    price: 80,
    rating: 75,
    title: `Wood and stone place`,
    type: `Private room`
  }, {
    bedrooms: 1,
    city: {
      location: {
        latitude: 32.370216,
        longitude: 44.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Beautiful, wonderful Apartment.`,
    goods: [`Kitchen`, `Cable TV`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Ann`
    },
    id: 3,
    images: [`img/apartment-02.jpg`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 7
    },
    maxAdults: 3,
    previewImage: `apartment-02.jpg`,
    price: 132,
    rating: 80,
    title: `Canal View Prinsengracht`,
    type: `Apartment`
  }, {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `Comfortable new private room.`,
    goods: [`Heating`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: `Stepan`
    },
    id: 4,
    images: [`img/studio-01.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 7
    },
    maxAdults: 3,
    previewImage: `apartment-03.jpg`,
    price: 180,
    rating: 100,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`
  }
];
