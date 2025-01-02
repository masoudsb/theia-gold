import ButtonPre from "./buttonPre";
import "@/style/lastDiv.css"
export default function LastDiv() {
    return (
        <div className="bg-last-div">

        <div className="last-div mx-auto w-3/5 text-center">
            <h2 className="text-center mb-4">Subscribtion</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
                    <div className="py-16">
                <form className="flex">

                        <input type="email" placeholder="Your Email ..."/>
                        
                <ButtonPre href="" classn="self-center btnf">Subscribe</ButtonPre>
            </form>
                    </div>
        </div>
        </div>
    )
}