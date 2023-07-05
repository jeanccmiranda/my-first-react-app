import './App.css';
import { useState, useEffect } from 'react';
import Tours from './Tours';
import Loading from './Loading';

function App() {
  const url = 'https://course-api.com/react-tours-project';
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
  try {
    const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false);
    setTours(tours)
  }

  catch(error) {
    setIsLoading(false)
    console.log(error)

  }
}

const removeTour = (id) => {
  const newTours = tours.filter((tour) => tour.id !== id)
  setTours(newTours);
}

  useEffect(() => {
    fetchTours();
  }, [])

  return (
    <main>
      {isLoading? <Loading/> : <Tours tours={tours} removeTour={removeTour} fetchTours={fetchTours}/>}
    </main>
    )
  }


export default App;
