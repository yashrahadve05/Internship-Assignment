import React from 'react'

function Navbar() {
  return (
    <div className='mb-5' >
      <header className="bg-blue-500 py-4">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div className="w-16 font-bold text-black text-2xl md:text-3xl">
            Navbar
          </div>
          <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <a className="hover:text-gray-500 font-medium text-lg" href="#">Home</a>
              </li>
              <li>
                <a className="hover:text-gray-500 font-medium text-lg" href="#">About</a>
              </li>
              <li>
                <a className="hover:text-gray-500 font-medium text-lg" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <ion-icon onclick="onToggleMenu(this)"
              name="menu" className="text-3xl cursor-pointer md:hidden text-white">
            </ion-icon>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar