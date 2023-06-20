import React, { useState } from "react";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    checked: false,
  });

  // const handleChange = (e) => {
  //   // name = e.target.value;
  //   setName(e.target.value);
  // };
  // console.log(data);

  // const handleChange = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;
  //   // setData({ ...data, message: e.target.value });
  // };
  // const handleInputs = (e) => {
  //   let name = e.target.name;
  //   let value = e.target.value;

  //   setData({ ...data, [name]: value });
  // };

  // console.log(data.checked);

  return (
    <>
      {/* <!-- Contact section  --> */}

      <div className="container-fluid contact-parent-container">
        <div className="row">
          <div className="col-12">
            <div>
              <div className="services-text">
                <h2>Let's Contact With Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  animi similique voluptatibus repellat explicabo velit optio
                  expedita nihil dolore ad!
                </p>
              </div>
            </div>

            <form action="">
              <div className="contact-child-container">
                <div className="row">
                  <div className="col-sm-6 col-12 ">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 ">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={data.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 ">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Subject"
                        value={data.subject}
                        onChange={(e) =>
                          setData({ ...data, subject: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12 ">
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Phone"
                        value={data.phone}
                        onChange={(e) =>
                          setData({ ...data, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-12 ">
                    <div className="input-field">
                      <textarea
                        name="Message"
                        placeholder="Meassge"
                        cols="30"
                        rows="6"
                        value={data.message}
                        onChange={(e) =>
                          setData({ ...data, message: e.target.value })
                        }
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="term-text">
                      <input
                        type="checkbox"
                        checked={data.checked}
                        onClick={() =>
                          setData({ ...data, checked: !data.checked })
                        }
                      />
                      <p> Accept Terms of Services and Privacy Policy</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contact-btn">
                      <button className="nav-btn">Send Message</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;

// GET - req -> database -> res(data)
// POST - req(data/payload) -> database -> res(data-> status, other info)
// PUT - req(data/payload/id) -> database -> res(data-> status, other info)
// put means modify existing data
// DELETE - req - delete
