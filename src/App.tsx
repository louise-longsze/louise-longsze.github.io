import Header from "@/components/Header";
import ProfileIcon from "./components/ProfileIcon";
import AboutMe from "./components/AboutMe";
import MyService from "./components/MyService";
import Tools from "./components/Tools";

const App = () => {
  return (
    <div className="p-8">
      <Header />
      <div className="grid grid-cols-[3fr_7fr] gap-7 p-4">
        <div>
          <ProfileIcon />
        </div>
        <div className="flex flex-col gap-8">
          <AboutMe />
          <MyService />
          <Tools />
        </div>
      </div>
    </div>
  )
};

export default App;
