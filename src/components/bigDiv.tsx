import "@/style/bigDiv.css";
import Image from "next/image";

export default function BigDiv() {
  const bigDivider = [
    {
      title: "User-friendly interface",
      description:
        "An easy-to-use platform that simplifies the trading process for both novice and experienced users.",
      pic: "/bigDiv.png",
    },
    {
      title: "Low trading fees",
      description:
        "Competitive trading fees that make it affordable for users to trade cryptocurrencies on your platform..",
      pic: "/bigDiv1.png",
    },
    {
      title: "Wide cryptocurrencies",
      description:
        "A diverse range of cryptocurrencies available for trading, providing users with more options to diversify their portfolio.",
      pic: "/bigDiv2.png",
    },
    {
      title: "High liquidity",
      description:
        "A liquid marketplace that ensures users can easily buy and sell cryptocurrencies at market prices without significant slippage.",
      pic: "/bigDiv3.png",
    },
    {
      title: "Secure and reliable",
      description:
        "A secure and reliable platform with robust security measures and a proven track record of uptime and reliability.",
      pic: "/bigDiv4.png",
    },
    {
      title: "Customizable trading interface",
      description:
        "A customizable trading interface that allows users to personalize their trading experience and tailor it to their specific needs and preferences.",
      pic: "/bigDiv5.png",
    },
    {
      title: "Educational resources",
      description:
        "Access to educational resources and tools to help users better understand the cryptocurrency market and make informed trading decisions.",
      pic: "/bigDiv6.png",
    },
    {
      title: "Social trading",
      description:
        "A social trading feature that allows users to follow and copy the trades of successful traders, enabling them to learn from others and potentially increase their profits.",
      pic: "/bigDiv7.png",
    },
  ];
  return (
    <div className="big-div">
      <div className="grid grid-cols-2 grid-rows-4 w-3/5 mx-auto gap-x-4 gap-y-8">
        {bigDivider.map((item) => (
          <div className="flex flex-row " key={item.title}>
            <div className="mr-6 my-4 pic-div">
              <Image fill key={item.title} src={item.pic} alt={item.title} className="self-center" />
            </div>
            <div className="par pr-4 py-2">
              <h4 className="text-base pb-2 justify-self-start">
                {item.title}
              </h4>
              <p className="text-xs text-start">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
