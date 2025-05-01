import CardCategory from "./CardCategory";

const Category = () => {
  return (
    <div className='p-[1.5rem] md:max-w-[1200px] m-auto '>
      <div className='border rounded border-[rgba(0,0,0,0.2)] '>
        <div className='md:hidden flex justify-between items-center m-[0.5rem] pb-[1rem]  border-b border-[rgba(0,0,0,0.2)]'>
          <h1>category random</h1>
          <div>button slider</div>
        </div>
        <div className='hidden md:flex justify-between items-center m-[0.5rem] pb-[1rem]  border-b border-[rgba(0,0,0,0.2)]'>
          <h1>category random</h1>
          <ul className="flex flex-row gap-[1rem] ">
            <li>موبایل</li>
            <li>هندزفری</li>
            <li>لبتاب</li>
            <li>ساعت</li>
            <li>هارد</li>
            <li>پاور بانک</li>
          </ul>
        </div>
        <div className='flex flex-wrap justify-between items-center m-[1rem] gap-[1rem]  max-sm:justify-center max-md:justify-center '>
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </div>
      </div>
    </div>
  );
};

export default Category;
