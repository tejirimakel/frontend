import Woman from "./assets/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import Logo from "./assets/img/TestLogo.png";
import setting from "./assets/img/settings.png";
import vbar from "./assets/img/vbar.svg";
import home from "./assets/img/home.svg";
import group from "./assets/img/group.svg";
import calendar from "./assets/img/calendar.svg";
import msg from "./assets/img/chat.svg";
import card from "./assets/img/card.svg";

function Nav() {
  return (
    <>
      <nav className="menubar">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <img className="h-8 w-auto" src={Logo} alt="logo" />
          </div>

          <div className="nav hidden md:flex space-x-14">
            <div className="flex items-center space-x-2">
              <img className="icon" src={home} alt="home" />
              <a href="#" className="text-dark hover:text-blue-800">
                Overview
              </a>
            </div>
            <button className="iconBtn px-4" type="button">
              <div className="flex items-center space-x-2">
                <img className="icon" src={group} alt="group" />
                <a href="#" className="text-dark hover:text-gray-100">
                  Patients
                </a>
              </div>
            </button>
            <div className="flex items-center space-x-2">
              <img className="icon" src={calendar} alt="group" />
              <a href="#" className="text-dark hover:text-blue-800">
                Schedule
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img className="icon" src={msg} alt="group" />
              <a href="#" className="text-dark hover:text-blue-800">
                Message
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <img className="icon" src={card} alt="group" />
              <a href="#" className="text-dark hover:text-blue-800">
                Transactions
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id=""
                aria-expanded="false"
              >
                <span className="sr-only">Profile</span>
                <img className="h-8 w-8 rounded-full" src={Woman} alt="" />
              </button>
            </div>
            <div className="">
              <p className="Nm">Dr. Jose Simmons</p>
              <p className="po">General Practitioner</p>
            </div>
            <div className="vertical-border"></div>
            <div className="settings">
              <img className="" src={setting} alt="" />
            </div>
            <div className="settings">
              <img className="" src={vbar} alt="" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
