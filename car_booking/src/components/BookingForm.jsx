import React, { useState } from "react";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";

// const animatedComponents = makeAnimated();

// const carTypeOptions = [
//   { value: "sedan", label: "SEDAN" },
//   { value: "suv", label: "SUV" },
//   { value: "traveller", label: "TRAVELLER" },
// ];

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    carType: "",
    pickup: "",
    dropoff: "",
    distance: "",
  });

  const handleBookNow = () => {
    console.log(form);
  };

  return (
    <div className="booking_design">
      <div className="booking_form">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12" style={{ zIndex: "99" }}>
              <img src={require("../assets/images/car-2.png")} alt="car" />
            </div>
            <div className="col-md-8 col-12">
              <div className="form">
                <div className="form_head">
                  <p> {"///"} online booking </p>
                  <h2>Book Your Taxi Ride</h2>
                </div>
                <div className="form_content">
                  <div className="row">
                    <div className="col-md-4 col-12">
                      <div className="form_input">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={form?.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                        />
                        <i className="fa fa-user"></i>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="form_input">
                        <input
                          type="text"
                          placeholder="Your Phone"
                          value={form?.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                        />
                        <i className="fa fa-phone"></i>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="form_input">
                        <select
                          onChange={(e) =>
                            setForm({ ...form, carType: e.target.value })
                          }
                        >
                          <option value="sedan">SEDAN</option>
                          <option value="suv">SUV</option>
                          <option value="traveller">Traveller</option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="col-md-4 col-12">
                      <div className="form_input">
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          isMulti
                          options={carTypeOptions}
                        />
                      </div>
                    </div> */}
                    <div className="col-md-4 col-12">
                      <div className="form_input">
                        <input
                          type="text"
                          placeholder="Pickup Address"
                          value={form?.pickup}
                          onChange={(e) =>
                            setForm({ ...form, pickup: e.target.value })
                          }
                        />
                        <i className="fa fa-map"></i>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="form_input">
                        <input
                          type="text"
                          placeholder="Dropoff Address"
                          value={form?.dropoff}
                          onChange={(e) =>
                            setForm({ ...form, dropoff: e.target.value })
                          }
                        />
                        <i className="fa fa-map"></i>
                      </div>
                    </div>
                    <div className="col-md-4 col-12">
                      <div className="form_input">
                        <button onClick={handleBookNow}>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
