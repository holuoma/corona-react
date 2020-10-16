import React from 'react'
import logo from "./litter-logo.png"

export default function Sidebar() {
    return (
            <div class="col-sm-3 bg-dark border-right">
                <img src={logo} />
                    <div class="list-group list-group-flush">
                        <a href="#" class="list-group-item bg-light">Home</a>
                        <a href="#" class="list-group-item bg-light">Explore</a>
                        <a href="#" class="list-group-item bg-light">Notifications</a>
                        <a href="#" class="list-group-item bg-light">Messages</a>
                        <a href="#" class="list-group-item bg-light">Bookmarks</a>
                        <a href="#" class="list-group-item bg-light">Lists</a>
                        <a href="#" class="list-group-item bg-light">Profile</a>
                        <a href="#" class="list-group-item bg-light">More</a>
                        <button>TWEET</button>
                        <span>USER INFO</span>
                    </div>
                </div>
    )
}
