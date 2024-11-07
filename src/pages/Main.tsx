import contact from "@/assets/icons/contact.svg";
import profilePicuture from "@/assets/images/profile.jpg";
import SwitchMode from "@/components/ui/SwitchMode";
const Main = () => {
  return (
    <div className="main-container h-[100vh] flex flex-col gap-5 relative">
      <SwitchMode />
      <div className="basis-1/6 flex justify-between items-center line">
        <div className="flex items-center gap-5">
          <img
            className="object-cover w-[100px] h-[100px] rounded-full"
            src={profilePicuture}
            alt="ProfilePicture"
            width={30}
            height={30}
          />
          <div>
            <h3 className="title">Mamajonov Khayotbek</h3>
            <p className="text">Front-End Developer</p>
          </div>
        </div>
        <button className="primary-design w-[100px] h-[30px] flex justify-center items-center gap-2   text-xs text-headers">
          Contact <img src={contact} alt="" />
        </button>
        {/* <Line /> */}
      </div>

      <div className="basis-4/6 ">2</div>
      <div className="basis-1/6">3</div>
    </div>
  );
};

export default Main;
