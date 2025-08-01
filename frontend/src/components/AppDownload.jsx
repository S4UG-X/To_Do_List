import React from 'react'


const AppDownload = () => {
  return (
    <div className="m-auto pt-25 bg-red-400 text-4xl text-center text-white font-medium">
      <p>
        Better Experience Download <br /> Tracker App
      </p>
      <div className="flex justify-center gap-3 mt-10 flex-col sm:flex-row items-center">
        <img className='cursor-pointer duration-200 w-68 hover:scale-105' src="/appStore.png" alt="" />
        <img className='cursor-pointer duration-200 w-65 hover:scale-105 -mr-2' src="/googleStore.png" alt="" />
      </div>
      <hr className='mt-5 mx-4' />
    </div>
  );
}

export default AppDownload