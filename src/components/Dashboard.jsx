import SideBar from "./Sidebar";
import hamburgerIcon from '../assets/hamburger.png'
import { FaFilePdf, FaDownload, FaCheckCircle, FaPlus, FaRedo } from 'react-icons/fa';
import { useState } from "react";
export default function Dashboard() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const attachments = [
    { name: "Landing-page.pdf", date: "2023/10/03", size: "9 MB", status: "completed" },
    { name: "Landing-page.pdf", date: "2023/10/03", size: "9 MB", status: "completed" },
    { name: "Landing-page.pdf", date: "2023/10/03", size: "9 MB", status: "loading" },
  ];
  return (
    <div className=" min-h-screen overflow-hidden">
  <SideBar sidebarOpen={sidebarOpen} />
  <div className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? "md:ml-64 ml-40" : "ml-0"
          }`}>
      <header className="flex items-center justify-between p-2 md:p-3 space-y-3 sm:space-y-0">

        <div className="flex items-center justify-start gap-4  sm:w-auto">

        
          <img className="md:h-7 md:w-7 h-5 w-5 mx-2 md:ms-2 md:me-7  hover:cursor-pointer"  onClick={() => setSidebarOpen(!sidebarOpen)} src={hamburgerIcon}/>
          <p className="text-base sm:text-lg font-semibold text-gray-800">My Tasks</p>
        </div>

        {/* Search input */}
        <div className="">
          <input
            type="text"
            placeholder="Search Task..."
            className="w-40 md:w-72 lg:w-96 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center  space-x-3 mx-4">
          <div className="flex flex-col justify-between gap-2 items-center">
            <span className="text-sm font-bold text-gray-800">Santhosh R</span>
            <p className="text-xs text-gray-500">UI/UX Designer</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
            alt="User Profile"
            className="md:w-8 md:h-8 h-6 w-6 rounded-full"
          />
        </div>
      </header>

      {/* Main Content */}
      <main  >
     
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start justify-between mx-4 mt-5">
  <div className="p-4 border rounded-lg shadow-md max-w-lg w-full">
    <h2 className="text-md md:text-lg font-semibold mb-4">
      Task 1 : Landing page and Dashboard of M App
    </h2>

    <div className="space-y-2">
      <div className="flex items-center">
        <span className="mr-2">Status</span>
        <span className="flex items-center text-blue-600 font-medium">
          <span className="w-2.5 h-2.5 mr-1 bg-blue-600 rounded-full"></span> In Progress
        </span>
      </div>

      <div className="flex items-center">
        <span className="mr-2">Due Date</span>
        <span className="text-gray-600">28-10-2024</span>
      </div>

      <div className="flex items-center">
        <span className="mr-2">Assigned to</span>
        <div className="flex space-x-2">
          <span className="flex items-center">
            <img src="https://cdn.vox-cdn.com/thumbor/URDKfrFaZRwc13MIQjso9PmQNZw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25481462/2155658434.jpg" alt="Employee 1" className="w-6 h-6 rounded-full" />
            <span className="ml-1 text-gray-700">Employee 1</span>
          </span>
          <span className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYR2v0pwofkDwd9y1bAHyTAxA1J9DGEMzYQ&s" alt="Employee 2" className="w-6 h-6 rounded-full" />
            <span className="ml-1 text-gray-700">Employee 2</span>
          </span>
          <span className="flex items-center">
            <img src="https://hips.hearstapps.com/hmg-prod/images/Emma-Watson_GettyImages-619546914.jpg" alt="Employee 3" className="w-6 h-6 rounded-full" />
            <span className="ml-1 text-gray-700">Employee 3</span>
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <span className="mr-2">Assigned by</span>
        <span className="flex items-center">
          <img src="https://cdn.vox-cdn.com/thumbor/URDKfrFaZRwc13MIQjso9PmQNZw=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25481462/2155658434.jpg" alt="Employee 1" className="w-6 h-6 rounded-full" />
          <span className="ml-1 text-gray-700">Employee 1</span>
        </span>
      </div>
    </div>
  </div>

  <div className="max-w-lg w-full p-6 border rounded-lg shadow-md bg-white">
    <h2 className="text-xl font-medium mb-3">What is your project's status?</h2>
    <textarea
      className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Tell us, how the project's going"
      rows="3"
    />
    <div className="flex space-x-2">
      <button className="flex-1 bg-green-500 text-white font-semibold py-2 rounded-lg text-sm hover:bg-green-600">
        Assigned
      </button>
      <button className="flex-1 bg-yellow-100 text-yellow-800 font-semibold py-2 rounded-lg text-sm hover:bg-yellow-200 border border-yellow-300">
        In Progress
      </button>
      <button className="flex-1 bg-red-100 text-red-800 font-semibold py-2 rounded-lg text-sm hover:bg-red-200 border border-red-300">
        In Test
      </button>
    </div>
  </div>
</div>


        <div className="max-w-3xl mx-4 p-4">
      <label className="text-gray-500 text-sm font-medium mb-1 block">Description</label>
      <textarea
        className="w-full h-24 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your description here"
      />
    </div>

    <div className="max-w-4xl mx-4 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-600 font-medium">Attachments({attachments.length})</h2>
        <button className="text-blue-600 font-medium flex items-center hover:underline">
          Download All <FaDownload className="ml-1" />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {attachments.map((file, index) => (
          <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg w-full sm:w-60 shadow-sm">
            <FaFilePdf className="text-red-500 text-2xl mr-3" />
            <div className="flex-grow">
              <h3 className="text-sm font-semibold text-gray-800">{file.name}</h3>
              <p className="text-xs text-gray-500">{file.date}</p>
              <p className="text-xs text-gray-500">
                Size: {file.size} <a href="#" className="text-blue-600 hover:underline ml-2">Download</a>
              </p>
            </div>
            <div className="ml-3 text-green-500">
              {file.status === "completed" ? (
                <FaCheckCircle className="text-xl" />
              ) : (
                <FaRedo className="text-xl text-yellow-500 animate-spin" />
              )}
            </div>
          </div>
        ))}
        
        <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg w-full sm:w-60 shadow-sm">
          <button className="text-blue-600 flex items-center">
            <FaPlus className="text-2xl" />
          </button>
        </div>
      </div>
    </div>

    <div className="max-w-2xl mx-4 p-4">
      <h3 className="text-lg font-semibold mb-4">Comments (8)</h3>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Comments here"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Comments here"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      
      </div>

   
    </div>
      </main></div>
    </div>
  );
}
