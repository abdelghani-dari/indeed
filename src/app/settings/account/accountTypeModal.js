import React, { useState, useEffect } from 'react';

function AccountTypeModal({ label, account_type, onAccountTypeChange }) {
    const [selectedType, setSelectedType] = useState(account_type);

    useEffect(() => {
        const storedType = localStorage.getItem('accounttype');
        if (storedType) {
            setSelectedType(storedType);
        }
    }, []);

    const handleRadioChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleSave = () => {
        localStorage.setItem('accounttype', selectedType);
        onAccountTypeChange(selectedType);
        const modal = document.getElementById('account_type');
        if (modal) {
            modal.classList.remove('modal-open');
        }
    };

    return (
        <>
            <a href="#account_type" className="bg-transparent font-semibold text-[#3662a7] ring-1 hover:ring-2 hover:bg-[#eef1fe] ring-[#16418175] px-8 flex items-center rounded-md">{label}</a>

            <div className="modal" role="dialog" id="account_type">
                <div className="modal-box ring-2 text-slate-800 ring-slate-300 bg-slate-100">
                    <h3 className="text-lg font-bold">{label}</h3>

                    <form>
                        <div className="join grid space-y-3 mt-5">

                            <label className="cursor-pointer py-4 border-2 rounded-lg pe-2 ps-4 flex items-center" htmlFor='first'>
                                <input
                                style={{boxShadow:"0 0 0 4px var(--fallback-b1,rgb(255, 255, 255)) inset, 0 0 0 4px var(--fallback-b1,rgb(255, 255, 255)) inset"}}
                                    type="radio"
                                    id='first'
                                    name="account-type"
                                    value="Job Seeker"
                                    className="mr-4 radio radio-primary checked:bg-[#3461aa] border-slate-400 border-2"
                                    onChange={handleRadioChange}
                                    checked={selectedType === "Job Seeker"}
                                />
                                <span>
                                    Job seeker (looking for a job)
                                </span>
                            </label>

                            <label className="py-4 cursor-pointer border-2 rounded-lg pe-2 px-4 flex" htmlFor='second'>
                                <input
                                     style={{boxShadow:"0 0 0 4px var(--fallback-b1,rgb(255, 255, 255)) inset, 0 0 0 4px var(--fallback-b1,rgb(255, 255, 255)) inset"}}
                                    type="radio"
                                    id='second'
                                    name="account-type"
                                    value="Employer"
                                    className="mr-4 radio radio-primary checked:bg-[#3461aa] border-slate-400 border-2"
                                    onChange={handleRadioChange}
                                    checked={selectedType === "Employer"}
                                />
                                <span className='flex flex-wrap'>
                                    Employer (hiring, sourcing candidates, or advertising jobs)
                                </span>
                            </label>

                        </div>
                    </form>

                    <div className="modal-action flex gap-3">
                        <a href="#" className="px-3 py-2.5 bg-white ring-2 ring-[#3461aa] hover:bg-[#f3f4f6] rounded-lg text-[#3461aa] font-semibold">Cancel</a>
                        <a 
                          href="#" 
                          onClick={handleSave}
                          className="px-3 rounded-lg font-semibold py-2.5 bg-[#3461aa] text-white hover:bg-[#244b8f] ring-2 ring-[#092f6dc4] hover:ring-3"
                        >
                          Save
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountTypeModal;
