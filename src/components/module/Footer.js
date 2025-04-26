import Link from "next/link";
import Accordion from "./Accordion";
import ContactUs from "./ContactUs";

import eNamed from "public/images/logo.png";
import samanDehi from "public/images/National-registration-mark-of-digital-media-site.svg";
import consumerSupport from "public/images/Image-statue-of-consumer-support.svg";
import Image from "next/image";

import {FaPhoneVolume} from "react-icons/fa6";
import {MdOutlineLocationOn} from "react-icons/md";
import {FaRegClock} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";
import {FaHeadphonesAlt} from "react-icons/fa";

import {IoLogoLinkedin} from "react-icons/io5";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

import {FaRegArrowAltCircleUp} from "react-icons/fa";
import {e2p} from "@/utils/replaceNumber";
const footerLink = {
  specialLink: [
    {id: 1, address: "/", title: "صفحه اصلی"},
    {id: 2, address: "/", title: "مجله خبری لیپک"},
    {id: 3, address: "/", title: "تماس با ما"},
    {id: 4, address: "/", title: "درباره ما"},
  ],
  buyHelper: [
    {id: 1, address: "/", title: "سوالات متداول"},
    {id: 2, address: "/", title: "راهنمای پرداخت و ارسال سفارش"},
    {id: 3, address: "/", title: "راهنمای لغو و مرجوعی سفارش"},
  ],
  rules: [
    {id: 1, address: "/", title: "قوانین و مقررات خرید از لیپک"},
    {id: 2, address: "/", title: "حریم خصوصی"},
    {id: 3, address: "/", title: "گارانتی لیپک"},
  ],
};

const Footer = () => {
  return (
    <div className='  bg-[#e5e5e5]'>
      {/* responsive Footer (mobile first) */}
      <div className='hidden max-md:flex flex-col items-center justify-center  py-4 '>
        <p className='bg-[#fff] w-full p-5 mx-auto  flex justify-center items-center text-[#f4561b] font-bold text-base cursor-pointer'>
          <span> بازگشت به بالا </span>
          <FaRegArrowAltCircleUp />
        </p>

        <div className='bg-[#059BF2] w-full flex justify-center gap-2 p-1 text-[#f4561b]'>
          <ul className='flex flex-row justify-center items-center gap-2'>
            <li className='bg-[#fff] p-2 rounded-full m-1'>
              <Link href={"/"}>
                <IoLogoLinkedin />
              </Link>
            </li>
            <li className='bg-[#fff] p-2 rounded-full m-1'>
              <Link href={"/"}>
                <FaTwitter />
              </Link>
            </li>
            <li className='bg-[#fff] p-2 rounded-full m-1'>
              <Link href={"/"}>
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>

        {/* done */}
        <div className='flex flex-col w-full'>
          <p className='text-center text-base font-bold'>راه ارتباطی با لیپک</p>
          <div dir='rtl' className='text-right  p-3'>
            <ContactUs
              icon={<MdOutlineLocationOn />}
              title={"ادرس"}
              content={
                "تهران - خیابان ولی‌عصر - بالاتر از میدان ولی‌عصر -کوچه شهید شهامتی - پلاک 21"
              }
            />
            <ContactUs
              icon={<FaRegClock />}
              title={" ساعت کاری"}
              content={
                "شنبه تا چهارشنبه از ساعت 9 صبح الی 17 ، پنجشنبه ها 9 صبح الی 13"
              }
            />
            <ContactUs
              icon={<MdOutlineMail />}
              title={"ایمیل"}
              content={"info@lipak.com"}
            />

            <ContactUs
              icon={<FaHeadphonesAlt />}
              title={"ساعت پاسخ گویی پشتیبانی"}
              content={[
                "شنبه تا چهارشنبه 9 الی 24",
                "پنج شنبه و جمعه 9 الی 24",
                "تعطیلات رسمی 9 صبح الی 24",
              ]}
            />
          </div>
        </div>

        <div className='w-full px-3 text-[#f4561b] '>
          <span className='w-full border border-[#f4561b] rounded p-2 flex flex-row justify-center items-center gap-2'>
            <FaPhoneVolume />
            {e2p("021-58256000")}
          </span>
          <span></span>
        </div>
        <div dir='rtl' className='flex flex-col px-3 justify-start  w-full'>
          <div className='flex flex-col my-4'>
            <h3 className='font-bold text-base block'>لینک های مهم</h3>
            <ul className='flex flex-col gap-2'>
              {footerLink.specialLink.map((item) => (
                <li key={item.id}>
                  <Link href={item.address} className='text-xs text-[#6f727a]'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col my-4'>
            <h3 className='font-bold text-base block'>راهنمای خرید</h3>
            <ul className='flex flex-col gap-2'>
              {footerLink.buyHelper.map((item) => (
                <li key={item.id}>
                  <Link href={item.address} className='text-xs text-[#6f727a]'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col my-4'>
            <h3 className='font-bold text-base block'>قوانین و مقررات</h3>
            <ul className='flex flex-col gap-2'>
              {footerLink.rules.map((item) => (
                <li key={item.id}>
                  <Link href={item.address} className='text-xs text-[#6f727a]'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='w-full px-3'>
          <Accordion />
        </div>

        <div className='w-full flex flex-col items-center p-3 m-[1rem]'>
          <h3 className='text-xl font-bold text-[#2c2c54] '>
            با اطمینان از لیپک خرید کنید
          </h3>
          <div className='bg-[#fff] w-full flex flex-row justify-center items-center content-center rounded p-3 mt-[1rem] gap-2'>
            <Link href={"/"}>
              <Image className='w-9 h-10' src={eNamed} alt='eNamed' />
            </Link>
            <Link href={"/"}>
              <Image className='w-9 h-10' src={samanDehi} alt='samanDehi' />
            </Link>
            <Link href={"/"}>
              <Image
                className='w-9 h-10'
                src={consumerSupport}
                alt='consumerSupport'
              />
            </Link>
          </div>
        </div>

        <p className='text-sm mb-[1rem]'>
          کلیه حقوق متعلق به
          <span className='text-[#f4561b] '>فروشگاه اینترنتی لیپک</span>
          می‌باشد.
        </p>
      </div>

      {/* desktop web */}
      <div className='max-md:hidden bg-[#059BF2]'>
        <div className='max-w-[1200px] mx-auto flex flex-row-reverse justify-between items-center px-[1.5rem]'>
          <p className=' p-5   flex justify-center items-center text-[#fff] font-bold text-base cursor-pointer gap-3 whitespace-nowrap'>
            <span> بازگشت به بالا </span>
            <FaRegArrowAltCircleUp />
          </p>

          <div className='flex flex-row my-4'>
            <ul className='flex flex-row-reverse justify-center items-center gap-2'>
              {footerLink.specialLink.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.address}
                    className='text-xs text-[#fff] whitespace-nowrap'>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=' flex justify-center gap-2 p-1 text-[#f4561b]'>
            <ul className='flex flex-row justify-center items-center gap-2'>
              <li className='bg-[#fff] p-2 rounded-full m-1'>
                <Link href={"/"}>
                  <IoLogoLinkedin />
                </Link>
              </li>
              <li className='bg-[#fff] p-2 rounded-full m-1'>
                <Link href={"/"}>
                  <FaTwitter />
                </Link>
              </li>
              <li className='bg-[#fff] p-2 rounded-full m-1'>
                <Link href={"/"}>
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='max-md:hidden flex flex-row-reverse justify-between  items-center max-w-[1200px] mx-auto px-[1.5rem]'>
        <div className='flex flex-col flex-[1] '>
          <p className='text-right text-base font-bold'>راه ارتباطی با لیپک</p>
          <div dir='rtl' className='text-right  py-3'>
            <ContactUs
              icon={<MdOutlineLocationOn />}
              title={"ادرس"}
              content={
                "تهران - خیابان ولی‌عصر - بالاتر از میدان ولی‌عصر -کوچه شهید شهامتی - پلاک 21"
              }
            />
            <ContactUs
              icon={<FaRegClock />}
              title={" ساعت کاری"}
              content={
                "شنبه تا چهارشنبه از ساعت 9 صبح الی 17 ، پنجشنبه ها 9 صبح الی 13"
              }
            />
            <ContactUs
              icon={<MdOutlineMail />}
              title={"ایمیل"}
              content={"info@lipak.com"}
            />

            <ContactUs
              icon={<FaHeadphonesAlt />}
              title={"ساعت پاسخ گویی پشتیبانی"}
              content={[
                "شنبه تا چهارشنبه 9 الی 24",
                "پنج شنبه و جمعه 9 الی 24",
                "تعطیلات رسمی 9 صبح الی 24",
              ]}
            />
          </div>
          <div className=' px-3 text-[#f4561b] '>
            <span className='w-full border border-[#f4561b] rounded p-2 flex flex-row justify-center items-center gap-2'>
              <FaPhoneVolume />
              {e2p("021-58256000")}
            </span>
          </div>
        </div>
        <div className='flex flex-[2] flex-row-reverse gap-6'>
          <div dir='rtl' className='flex  px-3 gap-3  flex-[1]'>
            <div className='flex flex-col '>
              <h3 className='font-bold text-base block'>راهنمای خرید</h3>
              <ul className='flex flex-col gap-2'>
                {footerLink.buyHelper.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.address}
                      className='text-xs text-[#6f727a]'>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex flex-col  '>
              <h3 className='font-bold text-base block'>قوانین و مقررات</h3>
              <ul className='flex flex-col gap-2'>
                {footerLink.rules.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.address}
                      className='text-xs text-[#6f727a]'>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=' px-3  text-right  flex-[1]'>
            <h3 className='font-bold text-base'>درباره لیپک</h3>
            <p className={`text-xs text-[#36405a] text-justify text-right `}>
              لیپک از سال 1399 فعالیت خود را به صورت تخصصی در زمینه لوازم
              دیجیتال شروع کرد. شعار لیپک یک قدم جلوتر است، به این معنا که لیپک
              تلاش می‌کند تا خدمات خود را نسبت به رقبا با کیفیت بهتری ارائه کند.
              ارائه کالای اصل با گارانتی معتبر، قیمت منصفانه، پردازش و ارسال
              سریع سفارش، بسته‌بندی حرفه‌ای و همراهی با مشتریان در تمام مراحل
              خرید از طریق پشتیبانی پاسخگو و مشتری‌مدار، ارزش‌هایی است که لیپک
              روی آنها بنا شده است. با لیپک تجربه‌ی متفاوتی از خرید اینترنتی در
              ایران را تجربه کنید.
            </p>
          </div>
        </div>
      </div>
      <div className='max-md:hidden w-full flex flex-col items-center p-3 '>
        <h3 className='text-xl font-bold text-[#2c2c54] '>
          با اطمینان از لیپک خرید کنید
        </h3>
        <div className='bg-[#fff] w-full flex flex-row justify-center items-center content-center rounded p-3 mt-[1rem] gap-2'>
          <Link href={"/"}>
            <Image className='w-9 h-10' src={eNamed} alt='eNamed' />
          </Link>
          <Link href={"/"}>
            <Image className='w-9 h-10' src={samanDehi} alt='samanDehi' />
          </Link>
          <Link href={"/"}>
            <Image
              className='w-9 h-10'
              src={consumerSupport}
              alt='consumerSupport'
            />
          </Link>
        </div>
        <p className='text-sm m-[1rem] gap-1'>
  کلیه حقوق متعلق به <span className='text-[#f4561b]'>فروشگاه اینترنتی لیپک</span> می‌باشد.
</p>
      </div>
    </div>
  );
};

export default Footer;
