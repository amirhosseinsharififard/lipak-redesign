import {e2p, sp} from "@/utils/replaceNumber";

const CardAmazingOffer = () => {
  return (
    <>
      {/* mobile first */}
      <div className='flex justify-between md:flex-col items-center border-t border-b border-[#d53129] md:border-none '>
        {/* check */}
        <div className='hidden md:flex md:flex-row md:justify-between md:items-center w-full'>
          <p>ساعت</p>
          <span className='bg-[#d53129] py-1 px-2 rounded shadow-md text-[#fff]'>
            {e2p(20)}%
          </span>
        </div>

        {/* check */}
        <div className='w-[100px] h-[100px] md:w-[274px] md:h-[274px] md:bg-red-600 md:p-1 my-auto bg-amber-50 max-md:flex-1'>
          imag
        </div>

        <div className='text-left flex-3 mt-2 md:w-full'>
          <span className='md:hidden bg-[#d53129] py-1 px-2 rounded shadow-md text-[#fff]'>
            {e2p(20)}%
          </span>

          <div className='text-right mx-3 mb-4 md:flex-col md:text-[#6f727a]'>
            <h4 className=' text-base md:text-[#2c2c54] md:font-bold'>لپتاپ مد فلان</h4>
            <div className='flex justify-between items-center md:flex-col md:items-start'>
              <div className='flex items-center'>
                <p className='text-sm'>تعداد باقیمانده:</p>
                <span className='text-xs rounded-full bg-[#d53129] w-[15px] h-[15px] items-center justify-center flex text-[#fff] mr-2'>
                  {e2p(0)}
                </span>
              </div>
              <div className='text-[#d53229] text-base md:flex md:flex-row md:justify-between md:items-center md:w-full'>
                <p className='line-through text-[rgba(0,0,0,0.5)]'>
                  {e2p(sp(1900000))}
                </p>
                <p>{e2p(sp(1900000))}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden flex justify-between items-center'>
        <div>
          <p>عجله کن</p>
          <p>پایان پیشنهاد</p>
        </div>
        <div>
          <p>ساعت</p>
        </div>
      </div>

      {/* <div className='hidden md:block  '>
        <div className='flex flex-col justify-between items-center '>
          <div className='text-left flex-3 mt-2'>
            <div className='flex justify-between'>
              <div> clock</div>
              <span className='bg-[#d53129] py-1 px-2 rounded shadow-md text-[#fff]'>
                {e2p(20)}%
              </span>
            </div>
            <div className='w-[274px] h-[274px] my-auto bg-red-600 p-1'>
              imag
            </div>
            <div className='text-right p-2 bg-amber-300'>
              <h4 className='text text-base '>لپتاپ مد فلان</h4>
              <div className='flex justify-between items-center'>
                <div className='flex  flex-col'>
                  <div className='flex items-center'>
                    <p className='text-sm text-[#6f727a]'>تعداد باقیمانده:</p>
                    <span className='text-xs rounded-full bg-[#d53129] w-[15px] h-[15px] items-center justify-center flex text-[#fff] mr-2'>
                      {e2p(0)}
                    </span>
                  </div>
                  <p className='text-sm text-[#6f727a]'>عجله کن</p>
                </div>
              </div>
              <div className='text-[#d53229] text-base flex justify-between'>
                <p className='line-through text-[rgba(0,0,0,0.5)]'>
                  {e2p(sp(1900000))}
                </p>
                <p>{e2p(sp(1900000))}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CardAmazingOffer;
