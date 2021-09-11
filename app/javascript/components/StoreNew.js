import React from "react";

const StoreNew = (props) => {
  // props.store.name
  const { name, location } = props.store;
  // condition ? value : value
  // if condition is true ? value : (else) value
  const defaultName = name ? name : "";
  const defaultLocation = location ? location : "";

  return (
    <>
      <h1>New Store</h1>
      <form action="/stores" method="post">
        <input
          placeholder="store name"
          type="text"
          name="store[name]"
          defaultValue={defaultName}
          className="form-control"
        />
        <input
          placeholder="location"
          type="text"
          name="store[location]"
          defaultValue={defaultLocation}
        />
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </form>
    </>
  );
};
export default StoreNew;
