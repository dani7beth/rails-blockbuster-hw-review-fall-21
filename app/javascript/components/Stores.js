import React from "react";

const Stores = (props) => {
  // props.stores
  // console.log(props);
  const { stores } = props;

  const renderStores = () => {
    return stores.map((store) => {
      return (
        <>
          <p>{store.name}</p>
          <a href={`/stores/${store.id}`}>{store.id}</a>
        </>
      );
    });
  };

  return (
    <div>
      <h1>Stores</h1>
      <a href="/stores/new">Add a store</a>
      {renderStores()}
    </div>
  );
};
export default Stores;
