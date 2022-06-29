import type { NextPage } from "next";
import BookOne from "../Components/BookOne";
import BookTwo from "../Components/BookTwo";
import BookThree from "../Components/BookThree";
import BookFour from "../Components/BookFour";

const Home: NextPage = () => {
  return (
    <>
      <div className="the-bookshelf">
        <h1>
          Cu <br /> si <br /> despre carti
        </h1>
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
