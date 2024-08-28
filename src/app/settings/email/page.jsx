"use client";
import { getLoggedInStatus } from "@/components/helpers/getLoggedinStatus";
import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import Head from "next/head";

function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  useEffect(() => {
    setIsLoggedIn(getLoggedInStatus());
  }, []);
  return (
    <>
      <Head>
        <title>Email settings</title>
      </Head>
      {isLoggedIn ? (
        <div className="divide-y-2 grid space-y-6 px-8 pe-28">
          <h2 className="text-2xl font-semibold text-slate-700">
            Subscriptions
          </h2>
          <div className="account-type flex justify-between w-full pt-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-700">
                Job and company alerts
              </h3>
              <h5 className="text-sm font-[400] text-slate-500">
                Emails about new jobs matching your job searches and companies
                you follow
              </h5>
            </div>
          </div>

          <h2 className="text-2xl pt-12 font-semibold text-slate-700">
            Employer and recruiter emails
          </h2>
          <div className="account-type flex justify-between w-full pt-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-700">
                Resume contacts
              </h3>
              <h5 className="text-sm font-[400] text-slate-500">
                Messages from employers and recruiters interested in your resume
              </h5>
              <h5 className="text-sm pt-3 font-[400] text-slate-500 flex gap-2 items-center">
                <span className="scale-75 text-slate-800">
                  <Info />
                </span>
                To stop receiving these messages, adjust your{" "}
                <span className="underline text-blue-800">
                  Resume Privacy Settings
                </span>
              </h5>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-slate-800 text-xl">
          Login first to see Your
          <span className="font-bold text-slate-800"> email settings</span>
        </div>
      )}
    </>
  );
}

export default Page;
