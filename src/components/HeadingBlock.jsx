const HeadingBlock = ({ title, text="", type="heading" }) => {
  let hdClasses = '';
  let subTtlClasses = '';

  switch (type) {
    case 'hero':
      hdClasses = 'text-7xl max-sm:text-6xl mb-4';
      subTtlClasses = 'font-display text-xl max-sm:text-[1rem] font-medium mt-6 mb-12 max-sm:my-4';
      break;
    case 'heading':
      hdClasses = 'text-5xl text-uppercase py-15 max-sm:py-10';
      break;
    case 'info':
      hdClasses = 'text-2xl mb-2 max-sm:text-4xl';
      subTtlClasses = 'font-display text-base max-sm:text-[0.9rem]';
      break;
    default:
      hdClasses = 'text-4xl';
  }

  return (
    <div>
      <h1 className={`font-heading text-right max-sm:text-left text-blue-900 ${hdClasses}`}>{ title }</h1>
      {
        text !== '' && ( <p className={`text-right max-sm:text-justify ${subTtlClasses}`}>{ text }</p> )}
    </div>
  )
}

export default HeadingBlock;