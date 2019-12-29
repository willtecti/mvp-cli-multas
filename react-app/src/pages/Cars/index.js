import React, { useState, useEffect } from "react";



import InternalTemplate from '../../templates/Internal'

import {  Container } from "./styles";

import service from '../../services/api'

import carPhoto from '../../assets/hb20.png'


const App = () =>{

    const [cars, setCars] = useState([])
    const [error, setError] = useState('')

    useEffect( () =>{
        getAllVehicles()
    },[])

    async function getAllVehicles(){

        try {

            const res = await service.get('/api/vehicles/')
            const json = await res.json()
            console.log('res',res)
            setCars(json)
            
        } catch (error) {
            console.error(error)
            setError(error)
        }

    }
    return(
        <InternalTemplate>
            <Container>
                <div className="row">
                    {cars.map( car =>{
                        return (
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" key={car.id}>
                                    
                                <div className='card'>
                                    <img className="card-img-top" src={carPhoto} alt={car.model}/>
                                    <div className='card-body'>
                                        <h4 className='card-title'>
                                            {car.license_plate}
                                        </h4>
                                        <hr/>
                                        <p className='car-category'>
                                            {car.last_position.address}
                                        </p>
                                        <p className='car-category'>
                                            Ligado: { car.ignition_is_on ? 'Sim': 'Não'}
                                        </p>

                                        <p className='car-category'>
                                            Velocidade: { car.last_position.speed } Km/h
                                        </p>
                                    </div>
                                </div>
                            </div>
                        

                    )
                })}
                

                   

                </div>
            </Container>
        </InternalTemplate>
    )
}

export default App;