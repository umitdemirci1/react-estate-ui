import SearchBar from "../../components/searchBar/searchBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Real Estate & Get Your Dream Place Find Real Estate & Get Your
            Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            consequatur quod iste tempora, quia et rerum similique, inventore
            eius amet nemo vel nihil necessitatibus, cupiditate adipisci animi
            nulla autem ut!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
