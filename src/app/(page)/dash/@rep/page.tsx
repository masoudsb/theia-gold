import ButtonReg from "@/components/buttonReg";
import "@/style/repStyle.css"

export default function RepPage() {
  return (
    <>
      <h1 className="text-5xl text-gray-100 rep-h">You Can Report Us Obstacle</h1>
      <form className="mx-auto">
       
        <textarea
          id="about"
          name="about"
          rows={3}
          className="rep-area my-16 mx-auto block w-2/5 rounded-md bg-transparent px-3 py-1.5 text-base text-gray-300 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          placeholder="Please Type And Send Any Problem ..."
        />
        <ButtonReg type="submit" classN="text-gray-100">Send</ButtonReg>
       
      </form>
    </>
  );
}
