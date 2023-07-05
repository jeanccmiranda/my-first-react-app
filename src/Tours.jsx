import Tour from "./Tour";
const Tours = ({tours, removeTour, fetchTours}) => {

     if(tours.length === 0){
      return (
      <main>
        <button type="button" className="btn-default" onClick={() => fetchTours()}>Refresh Tours</button>
      </main>
      )
     }
    return (
      <>
        <div className="title">
        <h1>Our Tours</h1>
        <div className="green-line"></div>
        </div>
        <section>
            
            {
                tours.map((tour) => {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                })
            }
        </section>
      </>
    )
}

export default Tours;