import React from 'react';

function UserProfileMenuMobile() {

  const profile = {
    name: 'John Doe',
    email: 'a@b.com'
  }
  return (
    <div className="pt-4 pb-3 border-t border-indigo-700">
      <div className="flex items-center px-5">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=pglUyYcP7n&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">{profile.fullName}</div>
          <div className="text-sm font-medium text-indigo-300">{profile.email}</div>
        </div>
      </div>
      <div className="mt-3 px-2 space-y-1">
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Your Profile</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Settings</a>

        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 hover:bg-opacity-75">Sign out</a>
      </div>
    </div>
  )
}

export default UserProfileMenuMobile;