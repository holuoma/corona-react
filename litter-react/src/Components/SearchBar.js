import React from 'react'

export default function SearchBar() {
    return (

        <div className="col-sm-2 bg-dark border-right">
            <div className="list-group list-group-flush mt-3">
                 
            <nav className="navbar">
                <form className="form-inline">
                    <input className="form-control mr-sm-2 mb-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </nav>

            </div>
        </div>
        

        
    )
}
