import { useState } from "react";
const Tour = ({name, id, image, price, info, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
     <article>
        
        <div className="img-container">
            <img src={image} alt={name} />
            <span>$ {price}</span>
        </div>
        <div className="info-container">
            <h2>{name}</h2>
            <p>
                {readMore? info : `${info.substring(0, 200)}... `}
                <button type="button" className="btn-readmore" onClick={() => setReadMore(!readMore)}>{readMore? "...read less" : "read more"}</button>
            </p>
            <button type="button" className="btn-default"onClick={() => removeTour(id)}>Not interested</button>
        </div>

     </article>
    )
}

export default Tour;