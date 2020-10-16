import React from 'react'

function DetailPage({data}) {
    console.log(data);
    return (
        data.map((datum) => 
        <div className="displayPage">
            <img src={datum.picture}></img>
            <h2 className="userHeader">{datum.name}</h2>
            {console.log(datum.name)};
            <p className="userMessage">{datum.message}</p>
        </div>)

    )
}

export default DetailPage