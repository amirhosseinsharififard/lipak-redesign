import {e2p, sp} from "@/utils/replaceNumber";
import Link from "next/link";

const CardSpecialOffer = () => {
  return (
    <Link href={'/'} className='bg-[#fff] p-2 rounded w-[175px] md:w-[230px]'>
      <div className='flex flex-row-reverse'>
        <span className='bg-[#f4561b] py-1 px-2 rounded text-[#fff] text-xs'>
          {e2p(8)}%
        </span>
      </div>

      <div className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-[red] m-auto'>image</div>

      <div className="my-2 md:flex md:justify-between md:items-center">
        <p className='text-left line-through text-[rgba(0,0,0,0.5)] text-xs'>
          {e2p(sp(1920000))}
        </p>
        <p className='text-left text-base font-bold text-[#f4561b]'>
          <span>{e2p(sp(1920000))}</span> تومان
        </p>
      </div>

      <div className=''>
        <p className=" line-clamp-2 text-[#6f757a]">
          پایه نگهدارنده گوشی موبایل هوشمند با قابلیت ردیابی چهره یوسمز مدل
          USAMS US-ZB239
        </p>
      </div>
    </Link>
  );
};

export default CardSpecialOffer;
