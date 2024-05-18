const SidebarItem = ({ text, active, onClick }) => (
    <li
      onClick={onClick}
      className={`
        relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
      `}
    >
      <span className={`overflow-hidden transition-all w-52 ml-3`}>
        {text}
      </span>
    </li>
  );
  
  export default SidebarItem;