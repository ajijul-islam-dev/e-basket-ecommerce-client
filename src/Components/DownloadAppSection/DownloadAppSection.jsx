import React from 'react';

const DownloadAppSection = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="text-center self-end mb-5">
                    <h1 className='text-3xl'>More Easy Shopping !!!</h1>
                    <h2 className='text-2xl text-[#f15a22]'>Download Now</h2>
                    <div className="flex items-center justify-center gap-5 mt-5">
                        <img src="/images/download/apple.jpg" alt="" />
                        <img src="/images/download/google.jpg" alt="" />
                    </div>
                </div>
                <div className=""> 
                <img src="/images/download/mobile.png" alt="" /> 
                </div>
            </div>
        </div>
    );
};

export default DownloadAppSection;