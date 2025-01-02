"use client";

import { useState } from "react";

import "../../../style/mainStyle.css";
import NavDash from "@/components/navDash";
import "../../../style/globals.css";


const initNavigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Account Info", href: "#", current: false },
  { name: "Wallet", href: "#", current: false },
  { name: "Transaction", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
export default function DashLayout({
  children,
  acco,
  rep,
  trans,
  wall,
}: {
  children: React.ReactNode;
  acco: React.ReactNode;
  rep: React.ReactNode;
  trans: React.ReactNode;
  wall: React.ReactNode;
  }) {
  const [navigation, setNavigation] = useState(initNavigation)
  
  const contentMap: Record<string, React.ReactNode> = {
    Dashboard: children,
    "Account Info": acco,
    Wallet : wall,
    Transaction: trans,
    Reports: rep,
  };
  return (
    
      <body>
        <NavDash navigation={navigation} setNavigation={setNavigation} />
        <main className="text-6xl text-center pt-12">

        {navigation.map((item) => 
            item.current && contentMap[item.name] ? (
              <div key={item.name} className="block">
                {contentMap[item.name]}
              </div>
            ) : null
          )}

          
        </main>
      </body>
    
  );
}
