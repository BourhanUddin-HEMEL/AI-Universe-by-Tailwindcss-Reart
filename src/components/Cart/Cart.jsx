import React, { useEffect, useState } from "react";
import SingleData from "../SingleData/SingleData";

const Cart = () => {
  const [data, SetData] = useState([]);
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
            data.map((singleData)=><SingleData 
            key = {singleData.id}
            singleData = {singleData}
            ></SingleData>)
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
    </>
  );
};

export default Cart;
