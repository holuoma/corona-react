import React from 'react'
import logo from "./litter-logo.png"

export default function Sidebar() {
    return (
            <div class="col-sm-3 bg-dark border-right">
                <img src={logo} />
                    <div class="list-group list-group-flush mt-3">
                        <a href="#" class="list-group-item bg-light">Home</a>
                        <a href="#" class="list-group-item bg-light">Explore</a>
                        <a href="#" class="list-group-item bg-light">Notifications</a>
                        <a href="#" class="list-group-item bg-light">Messages</a>
                        <a href="#" class="list-group-item bg-light">Bookmarks</a>
                        <a href="#" class="list-group-item bg-light">Lists</a>
                        <a href="#" class="list-group-item bg-light">Profile</a>
                        <a href="#" class="list-group-item bg-light">More</a>
                        <button type="button" className="btn btn-primary">TWEET</button>
                    </div>
                    <div className="mt-3" style={{backgroundColor: "white"}}>
                        <span>USER INFO</span>
                    </div>
                </div>
    )
}
