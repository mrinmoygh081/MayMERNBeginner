export const getDist = async (pickup, dropoff) => {
  let resu = null;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    pickup: pickup,
    dropoff: dropoff,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch("http://localhost:4000/getDist", requestOptions)
    .then((response) => response.json())
    .then((result) => (resu = result))
    .catch((error) => console.log("error", error));

  return resu;
};
