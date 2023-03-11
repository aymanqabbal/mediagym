import cableman from "./images/cableman.webp";
import cablewoman from "./images/cablewoman.webp";
import deadlift from "./images/deadlift.webp";
import tattowoman from "./images/tattowoman.webp";
const images = [cableman, cablewoman, deadlift, tattowoman].map((i, id) => ({
  id,
  url: i,
}));

export default images;
