import Dash from "./dash";

interface NavDashProps{
  navigation: { name: string; href: string; current: boolean }[];
  setNavigation: React.Dispatch<React.SetStateAction<{ name: string; href: string; current: boolean }[]>>;
}


export default function NavDash({navigation,setNavigation}:NavDashProps) {
  return (
    <header className="header">
      <div className="dash">
      <Dash navigation={navigation} setNavigation={setNavigation}/>
      </div>
    </header>
  );
}
