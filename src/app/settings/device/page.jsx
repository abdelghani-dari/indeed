'use client'
import { getLoggedInStatus } from "@/components/helpers/getLoggedinStatus";
import { useEffect, useState } from "react";

function page() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    setIsLoggedIn(getLoggedInStatus());
  }, [isLoggedIn]);
  const sessions = [
    { device: 'Firefox Windows', date: 'August 27, 2024', ip: '196.118.152.83', location: 'Casablanca', current: true },
    { device: 'Firefox Windows', date: 'August 27, 2024', ip: '196.118.152.83', location: 'Casablanca', current: false },
    { device: 'Firefox Windows', date: 'August 27, 2024', ip: '196.118.152.83', location: 'Casablanca', current: false },
    { device: 'Firefox Windows', date: 'August 27, 2024', ip: '196.118.152.83', location: 'Casablanca', current: false },
    { device: 'Firefox Windows', date: 'August 21, 2024', ip: '196.118.152.83', location: 'Casablanca', current: false },
    { device: 'Firefox Windows', date: 'August 16, 2024', ip: '41.249.162.44', location: 'Settat', current: false },
    { device: 'Chrome Mobile Android', date: 'August 6, 2024', ip: '196.118.152.83', location: 'Casablanca', current: false },
    { device: 'Firefox Windows', date: 'July 23, 2024', ip: '160.179.193.70', location: 'Berrechid', current: false },
];
  return (
    <>
    {isLoggedIn ? <div className="divide-y-2 grid space-y-6 px-8 pe-28">
    <h2 className="text-2xl font-semibold text-slate-700">
    Device management
    </h2>
    <div className="account-type flex justify-between w-full pt-4">
    <div className='space-y-1'>
        {/* <h3 className="text-lg font-semibold text-slate-700">
          Account type:
        </h3> */}
        <h5 className="text-sm font-[400] text-slate-500">
        You are currently signed into your Indeed account on these devices.
        </h5>
      </div>

    </div>
    <div className="overflow-x-auto mt-8">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 text-left font-semibold text-gray-600">Device</th>
                        <th className="py-2 px-4 text-left font-semibold text-gray-600">Date Logged In</th>
                        <th className="py-2 px-4 text-left font-semibold text-gray-600">IP Address</th>
                        <th className="py-2 px-4 text-left font-semibold text-gray-600">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map((session, index) => (
                        <tr key={index} className="border-t border-gray-200">
                            <td className="py-3 px-4">
                                {session.device}
                            </td>
                            <td className="py-3 px-4">
                                {session.date}
                            </td>
                            <td className="py-3 px-4">
                                {session.ip}
                                <span className="block text-gray-500">{session.location}</span>
                            </td>
                            <td className="py-3 px-4">
                                {session.current ? (
                                    <span className="text-sm text-gray-500">This device</span>
                                ) : (
                                    <button className="text-blue-600 hover:text-blue-800">Sign out</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div> : (<div className="text-slate-800 text-xl">
  Login first to see Your
  <span className="font-bold text-slate-800"> Device Management</span>
</div>)
}
</> )
}

export default page