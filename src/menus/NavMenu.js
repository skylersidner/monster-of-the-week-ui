import { PrimaryLogo } from '../common/logos';
import { MenuWrapper, PrimaryMenu, UserProfileMenu } from './index';


function NavMenu() {

  return (
    <>
      <MenuWrapper>
        <div className="flex items-center">
          <PrimaryLogo />
          <div className="hidden md:block">
            <PrimaryMenu />
          </div>
        </div>
        {/* Hide for now */}
        {/*<div className="hidden md:block">*/}
        <div className="hidden">
          <div className="flex items-center">
            <UserProfileMenu />
          </div>
        </div>
      </MenuWrapper>
    </>
  )
}

export default NavMenu;