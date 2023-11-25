import React from 'react'
import "./Navbar.css";


const Search = () => {
    return (
        <>
            <nav className="navbar search navbar-light bg-light mt-5">
                <div className="container">
                    <h4 className="navbar-brand">Best Offers On Mobiles</h4>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            
        </>
    )
}

export default Search