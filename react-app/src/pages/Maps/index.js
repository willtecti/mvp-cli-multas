import React, {  useState, useEffect,  useRef } from "react";
import InternalTemplate from '../../templates/Internal'
import service from '../../services/api'
import MapBox from '../../containers/MapBox'
import Error from '../../components/Error'


const App = () =>{

    const [cars, setCars] = useState([])
    const [error, setError] = useState('')
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });
   
    


    useEffect( () => {
        getAllVehicles()
        if (targetRef.current) {
          
          setDimensions({
            width: targetRef.current.offsetWidth,
            height: targetRef.current.offsetHeight,
          });
        }
      }, []);

   

    async function getAllVehicles(){

        try {

            const res = await service.get('/api/vehicles/')
            const json = await res.json()
            
            setCars(json)
            
        } catch (error) {
           
            setError(error)
        }

    }
    return(
        <InternalTemplate>
            { error && <Error text={error}/>}              
                                   
            { <MapBox parentDimensions={dimensions} cars={cars} /> }
                 
          
        </InternalTemplate>
    )
}

export default App;