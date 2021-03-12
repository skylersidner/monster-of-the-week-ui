import React from 'react';
import { NavMenu, NavMenuMobile } from '../menus';

function Dashboard() {
  return (
    <div>
      <nav className="bg-indigo-600">
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <div className="md:hidden">
          <NavMenuMobile />
        </div>
      </nav>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg leading-6 font-semibold text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/*Replace with your content*/}
          <div className="px-4 py-4 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/*/End replace*/}
        </div>
      </main>
    </div>

  );
}

export default Dashboard;
