import React from "react";

const StoreEdit = (props) => {
  const { name, id, location } = props.store;
  const defaultName = name ? name : "";
  const defaultLocation = location ? location : "";
  return (
    <>
      <h1>Edit Store</h1>
      <form action={`/stores/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          placeholder="store name"
          type="text"
          name="store[name]"
          defaultValue={defaultName}
          className="form-control"
        />
        <br />
        <input
          placeholder="location"
          type="text"
          name="store[location]"
          defaultValue={defaultLocation}
          className="form-control"
        />
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </form>
    </>
  );
};
export default StoreEdit;
