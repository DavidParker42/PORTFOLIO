function Work(props) {
  return (
  <div>
<section class="work-title">
      <aside>
        <h3>Work</h3>
      </aside>
    </section>
    
    <div class="picsContainer" id="work-pics"> 
      
      <div class="image1"><a href="https://booksearch92.herokuapp.com/"><img src={require('../images/bookSearch.png')} class="gridPics" alt="" /></a><h4>Book Search Engine</h4></div>

      <div class="image2"><a href="https://thelemmonade.github.io/project-whatch/"><img src="./images/project-whatch.png" class="gridPics" alt="" /></a><h4>Interactive Front End Site</h4></div>

      
      <div class="image3"><a href="https://techblog92.herokuapp.com"><img src="./images/techBlog.png" class="gridPics" alt="" /></a><h4>Tech Blog</h4></div>

      
      <div class="image4"><a href="https://intense-brook-34675.herokuapp.com/"><img src="./images/textEditor.png" class="gridPics" alt="" /></a><h4 class="editor" >Text Editor</h4></div>

      
      <div class="image5"><a href="https://parker92-module-11-challenge.herokuapp.com/"><img src="./images/noteTaker.png" class="gridPics" alt="" /></a><h4>Note Taker</h4></div>
      </div>
    
  </div>
  )
}

export default Work;
