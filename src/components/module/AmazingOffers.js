import CardAmazingOffer from "./CardAmazingOffer";

const AmazingOffers = () => {
  return (
    <>
      <div className=' max-md:border border-[#d53129] p-[1.5rem] my-2 m-auto max-w-[1200px]'>
        <div className=' flex justify-between  items-center md:justify-center pb-[.5rem]'>
          <h3>پیشنهاد ویژه لیپک</h3>
          <h3 className='md:hidden'>button</h3>
        </div>
        <div className='md:flex md:flex-row md:justify-between md:items-center gap-5'>
          <CardAmazingOffer />
          <CardAmazingOffer />
          <CardAmazingOffer />
          <CardAmazingOffer />
        </div>
      </div>
    </>
  );
};

export default AmazingOffers;
