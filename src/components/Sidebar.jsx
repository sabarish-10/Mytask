import { MdOutlineWorkOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GrTasks } from "react-icons/gr";
import { IoCalendarOutline, IoTimeOutline, IoSettingsOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";

const SideBar = ({sidebarOpen}) => {

    return (
      <div className="flex  overflow-hidden">
       
        <aside
          className={`fixed top-0 hover:cursor-pointer md:w-60 w-40 z-50 bg-white left-0 h-full transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        
        >
          <ul>
              <li className="flex items-center gap-2 border-e-[3px] md:ps-4 ps-3 py-3 border-teal-300 bg-teal-50 text-teal-400">
                <RxDashboard />
                <a href="#" className="flex items-center text-sm font-medium text-teal-400">
                  DASHBOARD
                </a>
              </li>
              <li className="flex items-center hover:bg-teal-100 hover:text-black md:ps-4 ps-3 py-3 gap-2">
                <MdOutlineWorkOutline />
                <a href="#" className="text-gray-500  text-sm font-medium">
                  PROJECTS
                </a>
              </li>
              <li className="flex items-center hover:bg-teal-100 hover:text-gray-700 md:ps-4 ps-3 py-3 gap-2">
                <GrTasks />
                <a href="#" className="text-gray-500 text-sm font-medium">
                  MY TASKS
                </a>
              </li>
              <li className="flex items-center hover:bg-teal-100 hover:text-gray-700 md:ps-4 ps-3 py-3 gap-2">
                <IoCalendarOutline />
                <a href="#" className="text-gray-500 text-sm font-medium">
                  CALENDAR
                </a>
              </li>
              <li className="flex items-center hover:bg-teal-100 hover:text-gray-700 md:ps-4 ps-3 py-3 gap-2">
                <IoTimeOutline />
                <a href="#" className="text-gray-500 text-sm font-medium">
                  TIME MANAGE
                </a>
              </li>
              <li className="flex items-center hover:bg-teal-100 hover:text-gray-700 md:ps-4 ps-3 py-3 gap-2">
                <FiPieChart />
                <a href="#" className="text-gray-500 text-sm font-medium">
                  STATS
                </a>
              </li>
              <li className="flex items-center hover:bg-teal-100 hover:text-gray-700 md:ps-4  ps-3 py-3 gap-2">
                <IoSettingsOutline />
                <a href="#" className="text-gray-500 text-sm font-medium">
                  SETTINGS
                </a>
              </li>
            </ul>
        </aside>
  
        {/* Main Content */}
        <div
         
        >
          {/* Toggle Button */}
          

         
        </div>
      </div>
    );
};

export default SideBar;
