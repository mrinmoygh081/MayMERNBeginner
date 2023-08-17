import React, { useState } from "react";

function Contact({ contactHandler }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        value={form?.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />
      <br />
      <label>Phone</label>
      <input
        type="text"
        name="phone"
        placeholder="enter your phone number"
        value={form?.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <br />
      <br />
      <button onClick={() => contactHandler(form)}>Submit</button>
    </div>
  );
}

export default Contact;
