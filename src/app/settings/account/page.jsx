"use client";
import React, { useEffect, useState } from "react";
import AccountTypeModal from "./accountTypeModal";
import EmailChangeModal from "./emailChangeModal";
import PhoneChangeModal from "./phoneChangeModal";
import CloseAccountModal from "./closeAccountModal";
import { getLoggedInStatus } from "@/components/helpers/getLoggedinStatus";
import Head from "next/head";

function Page() {
  const user = {
    accountType: "Job Seeker",
    email: "abdelghaani@dari.com",
    password: "12345678",
    phone: "06123456789",
  };

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [accountType, setAccountType] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [accountPhone, setAccountPhone] = useState("");

  useEffect(() => {
    // accounttype
    setIsLoggedIn(getLoggedInStatus());

    const storedType = localStorage.getItem("accounttype");
    if (storedType) {
      setAccountType(storedType);
    } else if (!storedType) {
      localStorage.setItem("accounttype", user.accountType);
    }
    // email
    const storedEmail = localStorage.getItem("accountemail");
    if (storedEmail) {
      setAccountEmail(storedEmail);
    } else if (!storedEmail) {
      localStorage.setItem("accountemail", user.email);
    }
    // email
    const storedPhone = localStorage.getItem("accountphone");
    if (storedPhone) {
      setAccountPhone(storedPhone);
    } else if (!storedPhone) {
      localStorage.setItem("accountphone", user.phone);
    }
  }, []);

  const handleAccountTypeChange = (newType) => {
    setAccountType(newType);
  };
  const handleAccountEmailChange = (newEmail) => {
    setAccountEmail(newEmail);
  };
  const handleAccountPhoneChange = (newPhone) => {
    setAccountPhone(newPhone);
  };
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    localStorage.setItem("loggedin", !getLoggedInStatus());
    window.location.reload();
  };
  return (
    <>
      <Head>
        <title>Account settings</title>
      </Head>
      {isLoggedIn ? (
        <div className="divide-y-2 grid space-y-6 px-8 pe-28">
          <h2 className="text-2xl font-semibold text-slate-700">
            Account settings
          </h2>
          <div className="account-type flex justify-between w-full pt-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-700">
                Account type:
              </h3>
              <h5 className="text-sm font-[400] text-slate-500">
                {accountType === "Job Seeker"
                  ? "Job seeker (looking for a job)"
                  : accountType === "Employer"
                  ? "Employer (hiring, sourcing candidates, or advertising jobs)"
                  : "..."}
              </h5>
            </div>
            <AccountTypeModal
              label="Select Account Type"
              account_type={accountType}
              onAccountTypeChange={handleAccountTypeChange}
            />
          </div>
          {/* email */}
          <div className="account-type flex justify-between w-full pt-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-700">Email:</h3>
              <h5 className="text-sm font-[400] text-slate-500">
                {accountEmail ? accountEmail : "..."}
              </h5>
            </div>
            <EmailChangeModal
              label={"Changing email address for "}
              account_email={accountEmail}
              onAccountEmailChange={handleAccountEmailChange}
            />
          </div>
          {/* phone */}
          <div className="account-type flex justify-between w-full pt-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-700">
                Phone number:
              </h3>
              <h5 className="text-sm font-[400] text-slate-500">
                {accountPhone ? accountPhone : "..."}
              </h5>
            </div>
            <PhoneChangeModal
              label="Account Phone"
              account_phone={accountPhone}
              onAccountPhoneChange={handleAccountPhoneChange}
            />
          </div>
          {/* thirdd party apps */}
          <div className="account-type flex justify-between w-full pt-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-700">
                Third-party applications
              </h3>
              <h5 className="text-sm font-[400] text-slate-500">
                No third-party applications have access to your account
              </h5>
            </div>
          </div>

          {/* sign out */}
          <div className="account-type flex justify-between w-full pt-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-700">
                Current Email:
              </h3>
              <h5 className="text-sm font-[400] text-slate-500">
                {accountEmail ? accountEmail : "..."}
              </h5>
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="bg-transparent font-semibold text-[#3662a7] ring-1 hover:ring-2 hover:bg-[#eef1fe] ring-[#16418175] px-8 flex items-center rounded-md"
            >
              Sign out
            </button>
          </div>
          {/* close account */}
          <CloseAccountModal label={"Close my account"} />
        </div>
      ) : (
        <div className="text-slate-800 text-xl">
          Login first to see Your
          <span className="font-bold text-slate-800"> account settings</span>
        </div>
      )}
    </>
  );
}

export default Page;
