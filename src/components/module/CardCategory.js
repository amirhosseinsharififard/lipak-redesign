import {e2p, sp} from "@/utils/replaceNumber";

const CardCategory = ({color = "red"}) => {
  return (
    <div
      className='flex 
    justify-center items-center  
    border border-[rgba(0,0,0,0.2)] rounded p-[1rem] gap-1.5'>
      <div className='w-[100px] h-[100px] flex justify-center items-center'>image</div>
      <div className='max-w-[210px] gap-1.5 flex-col '>
        <h3 className='break-words line-clamp-2'>
          گوشی موبایل داریا مدل Bond II 5G با ظرفیت 512GB و رم 12GB
        </h3>
        <div className={`w-[15px] h-[15px] bg-[${color}] rounded-4xl`} />
        <p className='text-left text-[#f4561b] font-bold text-base'>
          {e2p(sp(200000))} تومان
        </p>
      </div>
    </div>
  );
};

export default CardCategory;
