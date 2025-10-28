import toast from "react-hot-toast";

const Form = () => {
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    
    try {
      toast.success("Thank you for reaching out!\nOur team will get back to you shortly.", {
        duration: 5000,
      });
    } catch (err) {
      console.log("Error in contact form", err);
      toast.error("Oops! Something went wrong.\nPlease try again later.", {
        duration: 5000,
      });
    }
  }

  return (
    <form className="flex flex-col gap-3 py-10 w-full max-w-4/5 mx-auto" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input type="text" name="Name" id="" placeholder="Name" className="form-input outline-0" required />
        <input type="email" name="Email" id="" placeholder="Email" className="form-input outline-0" required />
      </div>
      <textarea name="message" id="" placeholder="Message" className="form-input min-h-56 outline-0" required></textarea>
      <button type="submit" className="w-full bg-blue-500 shadow-xs shadow-blue-900 text-blue-900 font-bold rounded-2xl py-3 cursor-pointer">SEND MESSAGE</button>
    </form>
  )
}

export default Form;