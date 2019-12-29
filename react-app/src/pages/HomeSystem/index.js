import React, { useState, useEffect } from "react";
import InternalTemplate from '../../templates/Internal'
import service from '../../services/api'

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
    const carsOn = (values) =>{
       return values.filter( car =>{
            return  car.last_position.ignition_is_on
        
        })
    }

  
    return(
        
        <InternalTemplate>
            <div className="row">
                        <div className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                            <div className="card">
                                <div className="card-body ">
                                    <h4 className="card-title">{ cars.length}</h4>
                                    <hr/>
                                    <p className="card-category">Tamanho da Frota</p>
                                    
                                    
                               
                                </div>
                               
                            </div>
                        </div>
                        <div className=" col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2">
                            <div className="card">
                                    <div className="card-body ">
                                        <h4 className="card-title">
                                            { carsOn(cars).length}
                                        </h4>
                                        <hr/>
                                        <p className="card-category">Carros Ligados</p>
                                        
                                        
                                
                                    </div>
                            </div>
                        </div>

                      
          
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                
                            <div className='card-body'>
                                <h4 className='card-title'>
                                    Localização por cidade
                                </h4>
                                <p className='card-category'>
                                    Cidades e a quantidade de veículos presente nela
                                </p>

                            <table className='table'>
                                <tbody>
                                    <tr>
                                    
                                    <td>Curitiba</td>
                                    <td>PR</td>
                                    <td>2</td>
                                                            
                                    
                                    </tr>

                                    <tr>
                                    
                                    <td>São Paulo</td>
                                    <td>SP</td>
                                    <td>5</td>
                                                            
                                    
                                    </tr>


                                    <tr>
                                    
                                    <td>Urualcaria</td>
                                    <td>PR</td>
                                    <td>1</td>
                                                            
                                    
                                    </tr>
                                
                                
                                    </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
        </InternalTemplate>
    )
}

export default App;