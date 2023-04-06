import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const handleClick = (e) => {
    const newPage = e.target.id;
    props.handlePageChange(newPage);
  };

  return (
    <nav>
      <ul>
        {/* <li>
          <NavLink id="home" to="/" onClick={() => handlePageChange("Home")}>
            Home
          </NavLink>
        </li> */}
        <li>
          <NavLink
            id="about"
            to="/aboutMe"
            onClick={() => props.handlePageChange("about")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            id="work"
            to="/work"
            onClick={() => props.handlePageChange("work")}
          >
            Work
          </NavLink>
        </li>
        <li>
          <NavLink
            id="contact"
            to="/contact"
            onClick={() => props.handlePageChange("contact")}
          >
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
