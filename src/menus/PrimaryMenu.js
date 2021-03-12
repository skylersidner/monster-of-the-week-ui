import { PRIMARY_MENU_LINKS } from '../enums';
import { PrimaryMenuLink } from './index';


function PrimaryMenu() {
  const currentItem = "Dashboard";

  return (
    <div className="ml-10 flex items-baseline space-x-4">      {Object.entries(PRIMARY_MENU_LINKS).map(([key, menuLink]) => (
      <PrimaryMenuLink menuLink={menuLink} isCurrent={menuLink.name === currentItem} key={key} />
    ))}
    </div>
  )
}

export default PrimaryMenu;