import React, { useState } from 'react';

import { PrimaryLogo } from '../common/logos';
import { MenuWrapper, PrimaryMenuMobile, UserProfileMenuMobile } from './index';

function NavMenuMobile() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const toggleMobileMenuIsOpen = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

  return (
    <>
      <MenuWrapper>
        <div className="flex items-center">
          <PrimaryLogo />
        </div>
        <div className="-mr-2 flex md:hidden">
          {/*Mobile menu button*/}
          <button
            type="button"
            className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-500 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={toggleMobileMenuIsOpen}
          >
            <span className="sr-only">Open main menu</span>

            {/* Open */}
            {/*Heroicon name: outline/menu*/}
            <svg className={'h-6 w-6 ' + (mobileMenuIsOpen ? 'hidden' : 'block')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Closed */}
            {/*Heroicon name: outline/x*/}
            <svg className={'h-6 w-6 ' + (mobileMenuIsOpen ? 'block' : 'hidden')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        </div>
      </MenuWrapper>

      <div className={'md:hidden ' + (mobileMenuIsOpen ? '' : 'hidden')} id="mobile-menu">
        <PrimaryMenuMobile />
        {/* Profile menu, hidden for now */}
        <div className="hidden">
          <UserProfileMenuMobile />
        </div>
      </div>
    </>
  )
}

export default NavMenuMobile;