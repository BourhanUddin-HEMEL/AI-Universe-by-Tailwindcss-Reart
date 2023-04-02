import React, { useEffect, useState } from "react";
import Button from "../Buttoon/Button";
import Modal from "../Modal/Modal";
import SingleData from "../SingleData/SingleData";

const Cart = () => {
  const [data, SetData] = useState([]);
  const [singleModalData, setSingleModalData] = useState({});
  const [showAll, setShowALl] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);
//    console.log(uniqueId);
  const handleShowAll = () => {
    setShowALl(true);
  };
//for modal single data api
  useState(() => {
    // console.log('value from use effect ');
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleModalData(data.data));
  }, [uniqueId]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        " https://openapi.programming-hero.com/api/ai/tools"
      );
      const value = await res.json();
      SetData(value.data.tools);
      // console.log(value.data.tools);
    };
    loadData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-10 my-8 mx-2 lg:mx-4">
        {
          data.slice(0, showAll ? 12 : 6).map((singleData) => (
            <SingleData
              key={singleData.id}
              singleData={singleData}
              setUniqueId={setUniqueId}
            ></SingleData>
          ))
          //multiline?
          // data.map((singleData) => {
          //   // console.log(singleData);
          //   return (
          //     <SingleData
          //       key={singleData.id}
          //       singleData={singleData}
          //     ></SingleData>
          //   );
          // })
        }
      </div>
      <p onClick={handleShowAll}>
        <Button>See more</Button>
      </p>
      <Modal singleModalData = {singleModalData}></Modal>
    </>
  );
};

export default Cart;
