import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const handleClick = (e) => {
    const newPage = e.target.id;
    props.changePage(newPage);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink id="home" onClick={handleClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink id="about" onClick={handleClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink id="contact" onClick={handleClick}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

// function Navbar(props)
// { const {prop} = props
//   const {
//     pages, currentpage, setCurrentPage
//   } = prop;
//   return (
//   <nav>
//     <ul class="nav-links">
//       {pages.map(Page => {
//         return(
//           <li onClick={()=> setCurrentPage(Page)}>
//           {Page.name}
//         </li>
//         )
//       })}
//     </ul>
//   </nav>
//   );
// }

// export default Navbar;
