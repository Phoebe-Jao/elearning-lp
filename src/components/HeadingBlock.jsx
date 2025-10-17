const HeadingBlock = ({ title, text="", type="heading" }) => {
  let hdClasses = '';
  let subTtlClasses = '';

  switch (type) {
    case 'hero':
      hdClasses = 'text-7xl mb-4';
      subTtlClasses = 'font-display text-xl font-medium mt-6 mb-12';
      break;
    case 'heading':
      hdClasses = 'text-5xl text-uppercase py-15';
      break;
    case 'info':
      hdClasses = 'text-2xl mb-2';
      subTtlClasses = 'font-display text-base';
      break;
    default:
      hdClasses = 'text-4xl';
  }

  return (
    <div>
      <h1 className={`font-heading text-right text-blue-900 ${hdClasses}`}>{ title }</h1>
      {
        text !== '' && ( <p className={`text-right ${subTtlClasses}`}>{ text }</p> )}
    </div>
  )
}

export default HeadingBlock;