import React from "react";

const SingleData = (props) => {
  //   console.log(props.singleData);
  const { name, features, description, image, published_in } = props.singleData;
  console.log(props.singleData.features);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Features</h2>
          {features.map((feature, index) => (
            <p>
              {index + 1}. {feature}
            </p>
          ))}
          <hr className=" border-2 border-indigo-200 my-3 " />
          <h2 className="card-title">{name}</h2>
         <div className=" flex justify-between">
         <div className="flex mr-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </span>
            <p>{published_in}</p>
          </div>
          <div className="flex">
            <span className=" cursor-pointer bg-red-400 rounded-lg p-2"><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg></span>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
