"use client";

import {IoIosArrowDown} from "react-icons/io";
import {MdOutlineKeyboardArrowUp} from "react-icons/md";

import {useState} from "react";

const Accordion = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className='w-auto bg-[#fff] rounded-lg '>
      <div
        onClick={() => setIsShow((prev) => !prev)}
        className='flex justify-between items-center text-sm p-4 rounded-t-lg cursor-pointer'>
        <span className="text-2xl">
          {isShow ? <MdOutlineKeyboardArrowUp /> : <IoIosArrowDown />}
        </span>
        <h3> درباره لیپک</h3>
      </div>

      {/* {IsShow ? ( */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isShow ? " opacity-100" : "max-h-0 opacity-0"
        }`}>
        <p className={`text-sm text-[#36405a] text-justify text-right p-4`}>
          لیپک از سال 1399 فعالیت خود را به صورت تخصصی در زمینه لوازم دیجیتال
          شروع کرد. شعار لیپک یک قدم جلوتر است، به این معنا که لیپک تلاش می‌کند
          تا خدمات خود را نسبت به رقبا با کیفیت بهتری ارائه کند. ارائه کالای اصل
          با گارانتی معتبر، قیمت منصفانه، پردازش و ارسال سریع سفارش، بسته‌بندی
          حرفه‌ای و همراهی با مشتریان در تمام مراحل خرید از طریق پشتیبانی پاسخگو
          و مشتری‌مدار، ارزش‌هایی است که لیپک روی آنها بنا شده است. با لیپک
          تجربه‌ی متفاوتی از خرید اینترنتی در ایران را تجربه کنید.
        </p>
      </div>
      {/* ) : (
        ""
      )} */}
    </div>
  );
};

export default Accordion;
