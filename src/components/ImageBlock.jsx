const ImageBlock = ({ text, image, imageAlt }) => {
  return (
    <div className="py-25">
      <div className="w-full max-w-4/5 mx-auto">
        <p dangerouslySetInnerHTML={{__html: text}} className="font-display text-[1.2rem] leading-6 mb-6"></p>
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  )
}

export default ImageBlock;