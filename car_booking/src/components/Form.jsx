import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { getLatLng } from "../utils/getLatLng";
import { getDist } from "../utils/getDist";

function Form() {
  const [value, setValue] = useState(null);
  const [searchVal, setSearchVal] = useState(null);

  useEffect(() => {
    if (value) {
      setSearchVal(value?.label);
    }
  }, [value]);

  useEffect(() => {
    if (searchVal) {
      async function getData() {
        const latLng = await getLatLng(searchVal);
        console.log(latLng);
      }
      getData();
    }
  }, [searchVal]);

  getDist();

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyA3Fvc0bRRWw4hTtD2Sln45D4D7CV1de2I"
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
}

export default Form;
