// components
import AboutUs from "components/aboutUs";
import Hero from "components/hero";
import Members from "components/members";
import News from "components/news";
import Staff from "components/staff";

const HomeTemplate = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Members />
      <Staff />
      <News />
    </>
  );
};

export default HomeTemplate;
