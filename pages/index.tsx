import type { NextPage } from "next";
import BookOne from "../Components/BookOne";
import BookTwo from "../Components/BookTwo";
import BookThree from "../Components/BookThree";
import BookFour from "../Components/BookFour";
import CustomTitle from "../Components/CustomTitle";

const Home: NextPage = () => {
  return (
    <>
      <CustomTitle></CustomTitle>
      <div className="the-bookshelf">
        <div>
          <h1>
            Cu <br /> si <br /> despre carti
          </h1>
          <span style={{ fontSize: "20px", fontWeight: 800 }}>by Malin & Google</span>
        </div>

        <div className="bookshelf-wrap">
          <div className="bookshelf">
            <BookOne />
            <BookTwo />
            <BookThree />
            <BookFour />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
