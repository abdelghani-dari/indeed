import React, { useState, useEffect } from 'react';

function CloseAccountModal({label}) {
    const handleSave = (e) => {
        e.preventDefault();
        window.location.hash = '#';
   
    };
 
    return (
        <>
           <a href="#close_account" className="font-semibold text-red-800 pt-7"> {label}</a>
            <div className="modal" role="dialog" id="close_account">
                <div className="modal-box ring-2 text-slate-800 ring-slate-300 bg-slate-100">
                    <h3 className="text-lg font-bold">Are you sure to close your account: {localStorage.getItem("accountemail")}</h3>

                    <form onSubmit={handleSave}>
    
                        <div className="modal-action flex gap-3 mt-4">
                            <button
                                type="submit"
                                className="px-3 rounded-lg font-semibold py-2.5 bg-red-700 text-white hover:opacity-75 ring-2 ring-[#831919c4] hover:ring-3"
                            >
                                Yes
                            </button>
                            <a href="#" className="px-3 py-2.5 bg-white ring-2 ring-red-700 hover:bg-[#f3f4f6] rounded-lg text-red-700 font-semibold">No</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CloseAccountModal;
