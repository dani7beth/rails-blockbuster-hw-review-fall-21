import React from "react";

const Store = (props) => {
  // props.stores
  const { store } = props;

  return (
    <div>
      <h1>{store.name}</h1>
      <a href={`/stores/${store.id}/edit`}>Edit Store</a>
      <br />
      <a href={`/stores/${store.id}`} data-method="delete">
        delete me
      </a>
      {/* <button data-method="delete">delete</button> */}
    </div>
  );
};
export default Store;
