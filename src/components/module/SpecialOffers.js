import CardSpecialOffer from "./CardSpecialOffer";

const SpecialOffers = () => {
  return (
    <div className='md:bg-[#fff] bg-[#e5e5e5]'>
      <div className='max-w-[1200px] m-auto'>
        <div className=' flex justify-between md:justify-center  items-center m-auto md:bg-[#ffe0d0] border border-[#d53129] md:border-none p-4 rounded-lg mb-4 text-[#f4561b]'>
          <h3 className='font-bold'>پیشنهاد ویژه لیپک</h3>
          <h3 className="md:hidden">button</h3>
        </div>

        <div className='flex  gap-2 md:justify-between content-center flex-wrap m-auto  px-[1.5rem] max-md:justify-evenly max-md:content-center'>
          <CardSpecialOffer />
          <CardSpecialOffer />
          <CardSpecialOffer />
          <CardSpecialOffer />
          <CardSpecialOffer />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
