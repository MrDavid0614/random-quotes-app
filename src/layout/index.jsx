import Navbar from '../components/Navbar/'

const Layout = (props) => (
    <div className="App">
        <header className="App-header">
          <Navbar onClick={ props.onClick } />
        </header>
        <main>
            { props.children }
        </main>
    </div>
)

export default Layout