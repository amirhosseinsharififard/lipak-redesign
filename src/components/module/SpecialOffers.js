import CardSpecialOffer from "./CardSpecialOffer";

const SpecialOffers = () => {
  return (
    <div className='md:bg-[#fff] bg-[#e5e5e5]'>
      <div className='max-w-[1200px] m-auto'>
        <div className='md:hidden flex justify-between items-center m-auto bg-[#ffe0d0] border border-[#d53129] p-4 rounded-lg mb-4 text-[#f4561b]'>
          <h3 className='font-bold'>پیشنهاد ویژه لیپک</h3>
          <h3>button</h3>
        </div>

        <div className='flex  gap-2 md:justify-between content-center flex-wrap m-auto md:divide-x-2 divide-[rgba(0,0,0,.1)] px-[1.5rem] max-md:justify-evenly max-md:content-center'>
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
