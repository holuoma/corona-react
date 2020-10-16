import React from 'react'
import { Link } from "react-router-dom";

export default function MainMessages( {data} ) {

    console.log("DATA from main", data.name)
    return (
        <div className="col-sm-6 d-flex">
        <div className="d-flex flex-column mx-auto">
            {data.map(el => {
                return (
                    <div className="card" style={{width: "30rem"}}>
                        <div className="card-body">
                            <div className="card-title d-flex justify-content-between">
                                <div className="d-flex justify-content-between" style={{width: "30%", height: "2.5em"}}>
                                    <img style={{width: 40, borderRadius: "50%"}} src="https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg"></img>
                                    <span className="align-self-center"><b><Link to={`/${el.id}`}>{el.name}</Link></b></span>
                                </div>
                                <span className="align-self-center">October 16</span>
                            </div>
                            <p className="card-text">{el.message}</p>
                            <img class="card-img-top" src="https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg" alt="Card image cap"></img>
                            <div className="d-flex justify-content-around"><i class="far fa-comment"></i><i class="far fa-heart"></i><i class="fas fa-retweet"></i><i class="fas fa-arrow-down"></i></div>
                        </div>
                    </div>
                    )
                })}

            </div>
        </div>
    )
}
