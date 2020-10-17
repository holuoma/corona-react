import React from 'react'
import logo from "./litter-logo.png"

export default function Sidebar({ me }) {
    return (
            <div className="col-sm-4 bg-dark border-right">
                <img src={logo} />
                    <div className="list-group list-group-flush mt-3">
                        <a href="#" className="list-group-item bg-light">Home</a>
                        <a href="#" className="list-group-item bg-light">Explore</a>
                        <a href="#" className="list-group-item bg-light">Notifications</a>
                        <a href="#" className="list-group-item bg-light">Messages</a>
                        <a href="#" className="list-group-item bg-light">Bookmarks</a>
                        <a href="#" className="list-group-item bg-light">Lists</a>
                        <a href="#" className="list-group-item bg-light">Profile</a>
                        <a href="#" className="list-group-item bg-light">More</a>
                        <button type="button" className="btn btn-primary">litter...</button>
                    </div>
                    <div className="mt-3" style={{backgroundColor: "white", border: "2px solid white", borderRadius: 2}}>
                        <h6 className="mt-3">User Info</h6>
                        {me.map(el => {
                            return (
                                <>
                                <img src={el.image} />
                                <p><b>{el.name}</b></p>
                                <p>{el.email}</p>
                                </>
                            )
                        })}
                    </div>
                </div>
    )
}
