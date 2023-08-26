import Geocode from "react-geocode";

export const getLatLng = async (searchVal) => {
  Geocode.setApiKey(process.env.REACT_APP_MAP_API);
  Geocode.setLanguage("en");
  Geocode.setRegion("in");

  const res = await Geocode.fromAddress(searchVal);
  console.log(res);
  return res?.results[0].geometry.location;
};
