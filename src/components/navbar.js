import React from "react";

function Navbar(props) {
  const handleClick = (e) => {
    const newPage = e.target.id;
    props.changePage(newPage);
  };

  return (
    <nav>
      <ul>
        <li>
          <a id="home" onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a id="about" onClick={handleClick}>
            About
          </a>
        </li>
        <li>
          <a id="contact" onClick={handleClick}>
            Contact
          </a>
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
