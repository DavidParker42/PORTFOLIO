

function Navbar(props) 
{ 
  const {
    pages, currentpage, setCurrentPage
  } = props;
  return (
  <nav>
    <ul class="nav-links">
      {pages.map(Page => {
        <li onClick={()=> setCurrentPage(Page)}>
          {Page.name}
        </li>
      })}
    </ul>
  </nav>
  );
}

export default Navbar;
