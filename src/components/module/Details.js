const data = [0, 1, 2, 3, 4, 5];
const Details = () => {
  return (
    <div className='max-w-[1200px] m-auto px-[1.5rem] py-[2rem]'>
      <div className='  flex flex-row  justify-evenly max-md:gap-5 max-md:flex-wrap md:bg-[#f2f2f2] rounded-2xl '>
        {data.map((item, index) => (
          <div
            key={item}
            className='max-md:border border-[rgba(0,0,0,0.2)] rounded-2xl p-[1rem] max-md:w-[27%]  flex flex-col items-center justify-center gap-3'>
            <h3 className='text-[#f4561b] font-bold '>icon</h3>
            <p className='text-center text-l '>
              تحویل در کوتاه ترین زمان
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
