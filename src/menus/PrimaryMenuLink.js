
// TODO: make link a button
function PrimaryMenuLink({ menuLink, isCurrent = false }) {
  const defaultClasses = "text-white hover:bg-indigo-500 hover:bg-opacity-75";
  const currentClasses = "bg-indigo-700 text-white";
  const classes = "block px-3 py-2 rounded-md text-sm font-medium " + (isCurrent ? currentClasses : defaultClasses)
  return (
    <a href={menuLink.link} className={classes}>{menuLink.name}</a>
  )
}

export default PrimaryMenuLink;