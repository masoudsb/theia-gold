import "@/style/lastHero.css"

export default function LastHero() {
    return (
        <div className="last-h w-4/5 mx-auto grid grid-cols-5 my-36">
            <div className="gold-bar col-span-3">
                <img src="/goldBar.jpg" alt="goldBar" />
            </div>
            <div className="text-bar col-span-2 m-6 p-6 py-18 content-center dis">
                <h3 className="text-3xl mb-4 ">Social trading</h3>
                <p className="text-xl">A social trading feature that allows users to follow and copy the trades of successful traders, enabling them to learn from others and potentially increase their profits.</p>
            </div>
        </div>
    )
}