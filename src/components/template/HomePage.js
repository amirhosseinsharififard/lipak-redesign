import AmazingOffers from "../module/AmazingOffers";
import Category from "../module/Category";
import SpecialOffers from "../module/SpecialOffers";

const HomePage = () => {
  return (
    <div dir='rtl' className='mx-auto bg-[#e5e5e5]  '>
      {/* <AmazingOffers /> */}
      {/* <SpecialOffers /> */}
      <div className='bg-[#fff]'>
        <Category />
      </div>
    </div>
  );
};

export default HomePage;
