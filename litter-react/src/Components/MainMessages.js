import React from 'react'
import { Link } from "react-router-dom";

export default function MainMessages( { data, messages } ) {

    const catImages = [
        "https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnnyiQOuh2odeTOWlEwrOVljPafPRBZFiasQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYfUCx4A6ww-bVMwoZudkJmjkmMtssI6ZWlw&usqp=CAU",
        "https://www.catsbest.eu/catsbest_de-wAssets/img/de/blog/musik/weblication/wThumbnails/j54_1346-70c6081d-6e4e3d30@744ll.jpg",
        "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/4/23/w900X450/animal-cat-face-close-up-feline-416160.jpg",
        "https://www.economist.com/img/b/1769/995/90/1843magazine.com/sites/default/files/styles/il_manual_crop_16_9/public/WC-cat-header-new3.jpg"
    ]

    const pic = () => {
        return catImages[Math.floor(Math.random()*catImages.length)]
    }

    const hi = messages.map(el => el.text)
    const randomMessage = () => {
        return hi[Math.floor(Math.random()*hi.length)]
    }


    return (
        <div className="col-sm-6 d-flex">
        <div className="d-flex flex-column mx-auto">
            {data.map(el => {
                return (
                    <div className="card" style={{width: "40rem"}}>
                        <div className="card-body">
                            <div className="card-title d-flex justify-content-between">
                                <div className="d-flex justify-content-start" style={{width: "40%", height: "2.5em"}}>
                                    <img className="mr-3" style={{width: 40, borderRadius: "50%"}} src={el.image}></img>
                                    <span className="align-self-center"><b><Link to={`/${el.id}`}>{el.name}</Link></b></span>
                                </div>
                                <span className="align-self-center">October 13</span>
                            </div>
                            <p className="card-text">{randomMessage()}</p>
                            <img class="card-img-top mb-3" src={pic()} alt="Card image cap"></img>
                            <div className="d-flex justify-content-around"><i class="far fa-comment"></i><i class="far fa-heart"></i><i class="fas fa-retweet"></i><i class="fas fa-arrow-down"></i></div>
                        </div>
                    </div>
                    )
                })}

            </div>
        </div>
    )
}
