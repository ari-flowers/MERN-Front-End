import React, { useState, useEffect } from "react";

const NewForm = (props) => {
  const initialState = {
    name: "",
  };
}
const [input, setInput] = useState(initialState);

<div className="form-section">
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input id="name" name="name" value={input.name} onChange={handleChange} />
    <input type="submit" value="Add a critter!" />
  </form>
</div>


export default NewForm;
