import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

function UserProfileMenu() {
  const [profileDropdownIsOpen, setProfileDropdownIsOpen] = useState(false);
  const toggleProfileDropdownIsOpen = () => setProfileDropdownIsOpen(!profileDropdownIsOpen);

  return (
    <div className="relative">
      <div>
        <button
          className="max-w-xs bg-indigo-600 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
          id="user-menu"
          aria-haspopup="true"
          onClick={toggleProfileDropdownIsOpen}
        >
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=pglUyYcP7n&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </button>
      </div>

      <Transition
        show={profileDropdownIsOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign Out</a>
        </div>
      </Transition>

    </div>
  )
}

export default UserProfileMenu;