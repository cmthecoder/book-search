import Navbar from "../Navbar/Navbar"
import SearchForm from "../SearchForm/SearchForm"
import './Header.css'

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Find your book of choice.</h2><br />
          <p className="header-text fs-18 fw-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores veritatis eveniet nemo veniam pariatur nostrum ullam provident reiciendis inventore voluptatem explicabo nisi consequuntur maiores itaque iure illo, atque exercitationem totam.
          Possimus cumque laborum tempora cupiditate quam? Suscipit fugiat aspernatur esse perferendis animi corporis voluptas at repellat incidunt vitae exercitationem enim provident rem ipsam qui iste, ex dolorem laboriosam cum dolorum.</p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header