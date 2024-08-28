import React, { useState, useEffect } from 'react';

function PhoneChangeModal({ label, account_phone, onAccountPhoneChange }) {
    const [selectedPhone, setSelectedPhone] = useState(account_phone);

    useEffect(() => {
        const storedPhone = localStorage.getItem('accountphone');
        if (storedPhone) {
            setSelectedPhone(storedPhone);
        }
    }, []);

    const handlePhoneChange = (e) => {
        setSelectedPhone(e.target.value);
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('accountphone', selectedPhone);
        onAccountPhoneChange(selectedPhone);
        window.location.hash = '#';
        const modal = document.getElementById('account_phone');
        if (modal) {
            modal.classList.remove('modal-open'); 
        }
    };

    return (
        <>
            <a href="#account_phone" className="bg-transparent font-semibold text-[#3662a7] ring-1 hover:ring-2 hover:bg-[#eef1fe] ring-[#16418175] px-8 flex items-center rounded-md">{label}</a>

            <div className="modal" role="dialog" id="account_phone">
                <div className="modal-box ring-2 text-slate-800 ring-slate-300 bg-slate-100">
                    <h3 className="text-lg font-bold">Changing phone number: {localStorage.getItem("accountphone")}</h3>

                    <form onSubmit={handleSave}>
                        <label className="input input-bordered flex mt-8 items-center gap-2 bg-white border-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                onChange={handlePhoneChange}
                                style={{ background: "white" }}
                                type="tel"
                                className="grow bg-slate-100"
                                placeholder="Email"
                                value={selectedPhone}
                            />
                        </label>

                        <div className="modal-action flex gap-3 mt-4">
                            <a href="#" className="px-3 py-2.5 bg-white ring-2 ring-[#3461aa] hover:bg-[#f3f4f6] rounded-lg text-[#3461aa] font-semibold">Cancel</a>
                            <button
                                type="submit"
                                className="px-3 rounded-lg font-semibold py-2.5 bg-[#3461aa] text-white hover:bg-[#244b8f] ring-2 ring-[#092f6dc4] hover:ring-3">
                                Save Phone
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PhoneChangeModal;
