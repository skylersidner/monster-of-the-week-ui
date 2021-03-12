import { PRIMARY_MENU_LINKS } from '../enums';
import { PrimaryMenuMobileLink } from './index';

function PrimaryMenuMobile() {
  const currentItem = "Dashboard";

  return (
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {Object.entries(PRIMARY_MENU_LINKS).map(([key, menuLink]) => (
        <PrimaryMenuMobileLink menuLink={menuLink} isCurrent={menuLink.name === currentItem} key={key} />
      ))}
    </div>
  )
}

export default PrimaryMenuMobile;