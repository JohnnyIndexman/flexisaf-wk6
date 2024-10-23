import { useEffect, useState } from 'react'

function useFetch() {
    const [display, setDisplay] = useState([])
    const [cars, setCars] = useState( [] )

    useEffect( () => {

        const fetching = async () => {
            const response = await fetch('/cars.json')
            const data = await response.json()

            return data

        }

        fetching()
         .then(data => {
            console.log("Resolved: ", data)
            setDisplay(data.houses)
            setCars(data.cars)
        })
    }, [])
  return {
    display,
    cars
  }
}

export default useFetch