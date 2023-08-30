import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import { getLatLng } from "../utils/getLatLng";
import { getDist } from "../utils/getDist";

function Form() {
  // const [value, setValue] = useState(null);
  const [pickup, setPickup] = useState(null);
  const [dropoff, setDropoff] = useState(null);
  const [distDur, setDistDur] = useState({
    distance: "",
    duration: "",
  });
  // const [searchVal, setSearchVal] = useState(null);

  // useEffect(() => {
  //   if (value) {
  //     setSearchVal(value?.label);
  //   }
  // }, [value]);

  // useEffect(() => {
  //   if (searchVal) {
  //     async function getData() {
  //       const latLng = await getLatLng(searchVal);
  //       console.log(latLng);
  //     }
  //     getData();
  //   }
  // }, [searchVal]);

  console.log(pickup?.label, dropoff?.label);

  useEffect(() => {
    const getDistCall = async () => {
      let data = await getDist(pickup?.label, dropoff?.label);
      setDistDur({
        distance: data?.data?.distance?.value,
        duration: data?.data?.duration?.text,
      });
    };
    if (pickup && dropoff) {
      getDistCall();
    }
  }, [pickup, dropoff]);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 col-12">
          <label htmlFor="">Pickup Location</label>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyA3Fvc0bRRWw4hTtD2Sln45D4D7CV1de2I"
            selectProps={{
              pickup,
              onChange: setPickup,
            }}
          />
        </div>
        <div className="col-md-6 col-12">
          <label htmlFor="">Dropoff Location</label>
          <GooglePlacesAutocomplete
            apiKey="AIzaSyA3Fvc0bRRWw4hTtD2Sln45D4D7CV1de2I"
            selectProps={{
              dropoff,
              onChange: setDropoff,
            }}
          />
        </div>
        <div className="text-center py-5">
          {distDur && distDur.distance !== "" && distDur.duration !== "" && (
            <>
              <p>Distance: {Math.round(distDur.distance / 1000)} km</p>
              <p>Duration: {distDur.duration}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
