import Image from "next/image";
import Link from "next/link";

// image 
import mobileImage from '../../../public/2025-01-29_4150592e-41da-45f9-80e4-5b8251149122_خرید و قیمت موبایل_SIZE_120_120.webp'
const Menuheader = () => {
  return (
    <Link href={"/"} className='flex justify-between m-[1rem] items-center '>
      <Image className='w-[60px] h-[60px]' src={mobileImage} alt='mobail' />
      <p>موبایل</p>
    </Link>
  );
};

export default Menuheader;
