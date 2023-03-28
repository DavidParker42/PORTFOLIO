

function Navbar(props) 
{ const {prop} = props
  const {
    pages, currentpage, setCurrentPage
  } = prop;
  return (
  <nav>
    <ul class="nav-links">
      {pages.map(Page => {
        return(
          <li onClick={()=> setCurrentPage(Page)}>
          {Page.name}
        </li>
        )
      })}
    </ul>
  </nav>
  );
}

export default Navbar;
