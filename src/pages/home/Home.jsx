import Posts from "../../componentes/posts/Posts"
// import "./home.scss"

function Home() {
  return (
    <div className="home" style={{ height: '1000px', width: '100%', overflowY: 'scroll' }}>

      {/* <Stories/> */}
      <Posts/>
    </div>
  )
}

export default Home
