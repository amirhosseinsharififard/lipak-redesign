const ContactUs = ({title, icon, content}) => {
  const isArray = Array.isArray(content);
  return (
    <div className='mb-3 '>
      <h3 className='font-bold text-base mb-2 flex items-center gap-2'>
        <span>{icon}</span> {title}:
      </h3>
      {isArray ? (
        content.map((item, i) => (
          <p className='text-xs mb-2' key={i}>
            {item}
          </p>
        ))
      ) : (
        <p className={`${title == "ایمیل" && "text-[#36405a]"} text-xs`}>
          {content}
        </p>
      )}
    </div>
  );
};

export default ContactUs;
