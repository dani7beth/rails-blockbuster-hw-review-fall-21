import React from "react";

const Stores = (props) => {
  // props.stores
  const { stores } = props;

  const renderStores = () => {
    return stores.map((store) => {
      return (
        <>
          <p>{store.name}</p>
          <p>{store.location}</p>
        </>
      );
    });
  };
  //   array.map((x) => {

  //  })
  return (
    <div>
      <h1>Stores</h1>
      {renderStores()}
    </div>
  );
};
export default Stores;
