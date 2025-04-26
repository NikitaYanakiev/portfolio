import HomeBanner from "./sections/HomeBanner/HomeBanner";
import HomeAbout from "./sections/HomeAbout/HomeAbout";
import HomeWorks from "./sections/HomeWorks/HomeWorks";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <main className="homepage">
      <HomeBanner/>
      <HomeAbout/>
      <HomeWorks/>
    </main>
  );
};

export default HomePage;
