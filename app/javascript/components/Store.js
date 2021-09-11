import React from "react";

const Store = (props) => {
  // props.stores
  const { store } = props;

  return (
    <div>
      <h1>{store.name}</h1>
      <a href={`/stores/${store.id}/edit`}>Edit Store</a>
    </div>
  );
};
export default Store;
