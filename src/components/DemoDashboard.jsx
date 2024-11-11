import { useState } from "react"
import SideBar from "./Sidebar";
const DemoDashboard = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="dashboard overflow-auto">

                {show &&

                    <div className="z-50">
                        <SideBar className='w-fit' />
                    </div>
                }

                <div className="content">
                    <main className="main-content">

                        <header className="flex flex-col sm:flex-row items-center sm:justify-between w-full p-4 space-y-3 sm:space-y-0">
                            <div></div>
                            {/* Button and Dashboard text */}
                            <div className="flex items-center justify-start space-x-3 w-full sm:w-auto">
                                <button onClick={() => setShow(!show)} className="text-gray-700 hover:text-gray-900">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zM3 10h14a1 1 0 110 2H3a1 1 0 010-2zM3 15h14a1 1 0 110 2H3a1 1 0 010-2z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <span className="text-base sm:text-lg font-semibold text-gray-800">Dashboard</span>
                            </div>

                            {/* Search input */}
                            <div className="w-full sm:mx-4">
                                <input
                                    type="text"
                                    placeholder="Search Project..."
                                    className="w-full sm:w-64 md:w-96 p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                />
                            </div>

                            {/* Profile section */}
                            <div className="flex items-center  space-x-3 me-4">
                                <div className="flex md:flex-col justify-between gap-2 items-center">
                                    <span className="text-sm font-semibold text-gray-800">Santhosh</span>
                                    <p className="text-xs text-gray-500">UI/UX Designer</p>
                                </div>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                                    alt="User Profile"
                                    className="md:w-8 md:h-8 h-6 w-6 rounded-full"
                                />
                            </div>
                        </header>


                        <section className="flex flex-col sm:flex-row justify-between items-center p-6 bg-white space-y-4 sm:space-y-0">
                            <div className="px-4 py-2 rounded-md shadow-lg   bg-white border border-gray-300 text-center sm:text-left">
                                <p className="text-base sm:text-lg font-medium text-gray-800">Hello User,</p>
                                <p className="text-sm text-gray-600">Have a great day at work. Happy Working!!!</p>
                            </div>

                            <div className="flex justify-center sm:justify-end w-full sm:w-auto">
                                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-lg bg-white border border-gray-300 hover:bg-gray-100">
                                    <span className="text-sm font-medium text-gray-800">Start Time Tracker</span>
                                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4h2v6H9V4zM9 12h2v2H9v-2z" />
                                    </svg>
                                </button>
                            </div>
                        </section>
                    </main>




                </div>
            </div>
        </>
    )
}

export default DemoDashboard