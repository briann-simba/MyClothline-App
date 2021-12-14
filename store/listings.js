const listings = [
  {
    id: 201,
    title: "Floral dress",
    images: [{ fileName: "dress" }],
    price: 300,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Blouse in a great condition",
    images: [{ fileName: "blouse" }],
    categoryId: 2,
    price: 1200,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 1,
    title: "Fantastic white boots",
    description:
      "I'm selling my boots at a discounted price.For more info send me a DM.",
    images: [
      { fileName: "womenShoes" },
      ],
    price: 1000,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Men's cap",
    images: [{ fileName: "hat" }],
    categoryId: 4,
    price: 100,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 102,
    title: "Official shirt",
    images: [{ fileName: "shirt" }],
    price: 300,
    categoryId: 5,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 101,
    title: "Boy shorts",
    images: [{ fileName: "short" }],
    price: 350,
    categoryId: 6,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Male Trouser",
    description: "Relaxed fit.Pretty new.DM for details",
    images: [{ fileName: "maleTrouser" }],
    categoryId: 7,
    price: 950,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Ripped jeans",
    images: [{ fileName: "femtrouser" }],
    categoryId: 8,
    price: 500,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
