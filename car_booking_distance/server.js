const express = require("express");
const app = express();
const axios = require("axios");

const port = 4000;

// settings
app.use(express.json());

app.post("/getdist", (req, res) => {
  const { pickup, dropoff } = req.body;
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://maps.googleapis.com/maps/api/directions/json?destination=${pickup}&origin=${dropoff}&key=AIzaSyA3Fvc0bRRWw4hTtD2Sln45D4D7CV1de2I`,
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.routes[0].legs[0].distance));
      console.log(JSON.stringify(response.data.routes[0].legs[0].duration));
    })
    .catch((error) => {
      console.log(error);
    });

  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
