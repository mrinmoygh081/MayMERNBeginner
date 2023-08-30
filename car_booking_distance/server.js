const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const port = 4000;

// settings
app.use(express.json());
app.use(cors("*"));

app.post("/getdist", (req, res) => {
  const { pickup, dropoff } = req.body;
  console.log(pickup, dropoff);
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: `https://maps.googleapis.com/maps/api/directions/json?destination=${pickup}&origin=${dropoff}&key=AIzaSyA3Fvc0bRRWw4hTtD2Sln45D4D7CV1de2I`,
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response?.data);
      // console.log(JSON.stringify(response.data.routes[0].legs[0].distance));
      // console.log(JSON.stringify(response.data.routes[0].legs[0].duration));
      let data = {
        distance: response?.data?.routes[0]?.legs[0]?.distance,
        duration: response?.data?.routes[0]?.legs[0]?.duration,
      };
      console.log(data);
      res.status(200).json({ status: true, data: data });
    })
    .catch((error) => {
      console.log(error);
      res.status(200).json({ status: false, data: null });
    });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
