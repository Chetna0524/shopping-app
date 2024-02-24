import React from "react";

const HomeCategoryBox = ({ title, catImg }) => {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-12 home-category-box">
        <div className="home-category-boxInn">
          <h3>{title}</h3>
          <img src={catImg} />
        </div>
      </div>
    </>
  );
};

export default HomeCategoryBox;
