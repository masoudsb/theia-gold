import "@/style/footer.css"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="foot grid grid-cols-6 gap-x-40 w-5/6 mx-auto py-16">
            <div className="tittle-foot col-span-3 grid grid-rows-3">
                <div className="up-tittle row-span-2">
                    <h5 className="text-4xl pb-4">Title</h5>
                    <p className="text-xl pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. </p>
                </div>
                <div className="icon-foot row-span-1 h-14 flex ">
                    <Image fill className="icon-logo" src="/insta.png" alt="insta" />
                    <Image fill className="icon-logo" src="/xlogo.png" alt="xlogo" />
                    <Image fill className="icon-logo" src="/face.png" alt="face" />
                </div>
            </div>
            <div className="list-foot col-span-1">
                <h6 className="text-xl pb-8">Products</h6>
                    <p className="text-sm pb-4">Exchange</p>
                    <p className="text-sm pb-4">Academy</p>
                    <p className="text-sm pb-4">Binance Live</p>
                    <p className="text-sm pb-4">Charity</p>
                    <p className="text-sm pb-4">Card</p>
            </div>
            <div className="list-foot col-span-1">
                <h6 className="text-xl pb-8">Support</h6>
                    <p className="text-sm pb-4">Request a Feature</p>
                    <p className="text-sm pb-4">Support Center</p>
                    <p className="text-sm pb-4">APIs</p>
                    <p className="text-sm pb-4">Fees</p>
                    <p className="text-sm pb-4">Trading Rules</p>

            </div>
            <div className="list-foot col-span-1">
                <h6 className="text-xl pb-8">Learn</h6>
                    <p className="text-sm pb-4">Learn & Earn</p>
                    <p className="text-sm pb-4">Browse Crypto Prices</p>
                    <p className="text-sm pb-4">Bitcoin Prices</p>
                    <p className="text-sm pb-4">Ethereum Prices</p>
                    <p className="text-sm pb-4">Blog</p>

            </div>
        </div>
    )
}


// export default function Footer() {
//     return (
//       <footer className="text-white py-16">
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 px-4">
//           {/* Title Section */}
//           <div className="col-span-1 lg:col-span-3 space-y-4">
//             <h5 className="text-2xl lg:text-4xl font-bold">Title</h5>
//             <p className="text-sm lg:text-base">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
//               Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
//             </p>
//             <div className="flex space-x-4">
//               <img src="/insta.png" alt="Instagram" className="w-8 h-8 cursor-pointer" />
//               <img src="/xlogo.png" alt="X Logo" className="w-8 h-8 cursor-pointer" />
//               <img src="/face.png" alt="Facebook" className="w-8 h-8 cursor-pointer" />
//             </div>
//           </div>
  
//           {/* Products Section */}
//           <div className="space-y-2">
//             <h6 className="text-lg font-bold">Products</h6>
//             <ul className="space-y-1 text-sm">
//               <li>Exchange</li>
//               <li>Academy</li>
//               <li>Binance Live</li>
//               <li>Charity</li>
//               <li>Card</li>
//             </ul>
//           </div>
  
//           {/* Support Section */}
//           <div className="space-y-2">
//             <h6 className="text-lg font-bold">Support</h6>
//             <ul className="space-y-1 text-sm">
//               <li>Request a Feature</li>
//               <li>Support Center</li>
//               <li>APIs</li>
//               <li>Fees</li>
//               <li>Trading Rules</li>
//             </ul>
//           </div>
  
//           {/* Learn Section */}
//           <div className="space-y-2">
//             <h6 className="text-lg font-bold">Learn</h6>
//             <ul className="space-y-1 text-sm">
//               <li>Learn & Earn</li>
//               <li>Browse Crypto Prices</li>
//               <li>Bitcoin Prices</li>
//               <li>Ethereum Prices</li>
//               <li>Blog</li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     );
//   }
  