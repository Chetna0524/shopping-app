import React from "react";
import HomeCategoryBox from "./HomeCategoryBox";

const HomeCategory = () => {
  return (
    <>
      <div className="home-category-sec">
        <div className="container">
          <div className="row">
            <HomeCategoryBox
              title="Women"
              catImg="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <HomeCategoryBox
              title="Men"
              catImg="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <HomeCategoryBox
              title="Accessories"
              catImg="https://images.pexels.com/photos/247204/pexels-photo-247204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
