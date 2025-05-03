import AmazingOffers from "../module/AmazingOffers";
import Category from "../module/Category";
import Details from "../module/Details";
import SpecialOffers from "../module/SpecialOffers";
import Accordion from "../module/Accordion";

const HomePage = () => {
  return (
    <div dir='rtl' className='mx-auto bg-[#e5e5e5]  '>
      <AmazingOffers />
      <SpecialOffers />
      <div className='bg-[#fff]'>
        <Category />
        <Details />
        <Accordion reverse={true} />
      </div>
    </div>
  );
};

export default HomePage;
