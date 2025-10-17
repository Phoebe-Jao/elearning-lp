const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex">
        <input type="text" name="Name" id="" placeholder="Name" required />
        <input type="text" name="Email" id="" placeholder="Email" required />
      </div>
      <textarea name="message" id="" placeholder="Message" required></textarea>
      <button type="submit" className="">SEND MESSAGE</button>
    </form>
  )
}

export default Form;