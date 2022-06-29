import type { NextPage } from "next";
import BookOne from "../Components/BookOne";
import BookTwo from "../Components/BookTwo";
import BookThree from "../Components/BookThree";

const Home: NextPage = () => {
  return (
    <>
      <h1>Cu si despre carti</h1>
      <div className="the-bookshelf">
        <div className="bookshelf-wrap">
          <div className="bookshelf">
            <BookOne />
            <BookTwo />
            <BookThree />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
