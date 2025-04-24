"use client";
import Link from "next/link";

// styles
import styles from "@/components/module/Header.module.css";
// icons
import {RxHamburgerMenu} from "react-icons/rx";
import {FaRegUser} from "react-icons/fa";
import {IoCartOutline} from "react-icons/io5";
import {MdOutlineSearch} from "react-icons/md";
import {IoMdClose} from "react-icons/io";

// logo page
import Logo from "../../../public/logo.webp";

// image
import Image from "next/image";
import {useState} from "react";
import Menuheader from "./Menuheader";

const dataMenu = [
  {id: 1, address: "/", name: "صفحه اصلی"},
  {id: 2, address: "/phone", name: "موبایل"},
  {id: 3, address: "/laptop", name: "لپ تاپ"},
  {id: 4, address: "/smart-watch", name: "ساعت هوشمند"},
  {id: 5, address: "/headphone", name: "هدفون و هندزفری"},
  {id: 6, address: "/console-game", name: "کنسول بازی"},
  {id: 7, address: "/audio-and-video", name: "صوتی و تصویری"},
  {id: 8, address: "/accessories", name: "جانبی کامپیوتر و موبایل"},
];

const Header = () => {
  const [search, setSearch] = useState("");
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerHandler = () => {
    setBurgerMenu((prev) => !prev);
  };
  return (
    <div className={`pb-2 relative`}>
      {/* header for lower md : mobaile */}
      <div className='block md:hidden mx-auto'>
        <div className='flex flex-row justify-between items-center m-auto px-[1.5rem] py-[1.2rem] bg-header'>
          <div className='flex gap-3 content-center items-center'>
            <Link href={"/"}>
              <FaRegUser style={{width: "16px", height: "16px"}} />
            </Link>
            <Link href={"/"}>
              <IoCartOutline style={{width: "20px", height: "20px"}} />
            </Link>
          </div>
          <Link href={"/"}>
            <Image src={Logo} alt='logo' />
          </Link>

          <span
            onClick={burgerHandler}
            className='cursor-pointer'
            style={{width: "24px", height: "24px"}}>
            <RxHamburgerMenu />
          </span>
        </div>

        <div className='max-w-full mx-[1.5rem] bg-white border-solid border-[rgb(255,0,0)] rounded-2xl flex flex-row-reverse justify-center content-center items-center '>
          <input
            className='max-w-full w-full text-right px-2 h-[2.5rem] focus:outline-none'
            type='text'
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder='...جستجو در لیپک'
          />
          <MdOutlineSearch
            style={{
              marginLeft: "1rem",
              width: "17px",
              height: "17px",
              opacity: "70%",
            }}
          />
        </div>
      </div>

      {/* MENU SLIDER  */}
      <div
        className={
          burgerMenu
            ? "block lg:hidden absolute top-0 right-0 w-full h-screen z-10 bg-amber-50"
            : "hidden"
        }>
        <div className='flex items-center justify-between p-[1.5rem] border-b-4 border-b-[rgba(0,0,0,.2)]'>
          <Link href={"/"}>
            <Image src={Logo} alt='logo' />
          </Link>
          <span onClick={burgerHandler} className='cursor-pointer'>
            <IoMdClose />
          </span>
        </div>
        <Menuheader />
        <Menuheader />
        <Menuheader />
        <Menuheader />
        <Menuheader />
      </div>

      {/* HEADER FOR MD AND ABOVE */}
      <div className='hidden md:block mx-auto max-w-[1200px] mt-[1rem]'>
        <div className='flex flex-row justify-between items-center m-auto px-[1.5rem] py-[1.2rem] bg-header'>
          <div
            className={`${styles.links} flex gap-3 content-center items-center`}>
            <Link href={"/"}>
              <span>سبد خرید</span> <IoCartOutline />
            </Link>

            <Link href={"/"}>
              <span> ثبتنام / ورود</span>
              <FaRegUser />
            </Link>
          </div>

          <div className='w-full mx-[1.5rem] bg-white border-solid border-[rgb(255,0,0)] rounded-2xl flex flex-row-reverse justify-center content-center items-center '>
            <input
              className='max-w-full w-full text-right px-2 h-[2.5rem] focus:outline-none'
              type='text'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder='...جستجو در لیپک'
            />
            <MdOutlineSearch
              style={{
                marginLeft: "1rem",
                width: "17px",
                height: "17px",
                opacity: "70%",
              }}
            />
          </div>

          <Link href={"/"}>
            <Image src={Logo} alt='logo' className={styles.image} />
          </Link>
        </div>

        <div
          className={`${styles.links_menu} bg-white mx-[1.5rem] rounded-1xl py-1 px-4 flex justify-between content-center items-center flex-nowrap`}>
          <Link href={'/'}>مجله لیپک</Link>
          <div className='flex gap-4 flex-row-reverse'>
            {dataMenu.map((item, index) => (
              <Link
                className={
                  index >= 7
                    ? "hidden lg:block"
                    : index >= 4
                    ? "hidden md:block"
                    : ""
                }
                key={item.id}
                href={`/${item.address}`}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
