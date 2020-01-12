import React, {  useState, useEffect,  useRef } from "react";
import InternalTemplate from '../../templates/Internal'
import service from '../../services/api'
import MapBox from '../../containers/MapBox'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import {TOKEN} from '../../configs/MapBox'


import { getHousesAgended} from '../../services/houses'






const App = () =>{

    
    const [config, setConfig] = useState(
        {
            bairro : 'centro',
            preco: 1200,
            quartos: 2,
            vaga: 1}
    )
    const [houses, setHouses] = useState([])
    const [error, setError] = useState('')
    
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });


    const populateHouses = async ()  => {   
        
        const data =  [
            {   id : 1,
                url: 'https://gonzagaimoveis.com.br/imovel/10091001/apartamento-1-quarto-horizonte-centro-curitiba/',
                address: 'Rua Francisco Torres A, 581, Centro - Curitiba/Pr',
                license_plate : "16/01/2020 09:00", 
                last_position: {
                    lat: -25.431059,
                    lng: -49.261382,
                    }
            },
            {   id : 2,
                url:'https://pr.olx.com.br/regiao-de-curitiba-e-paranagua/imoveis/apartamento-1-dormitorio-centro-mobiliado-promocao-680245721',
                address: 'R. Emiliano Perneta, 288',
                license_plate : "16/01/2020 Não Marcado", 
                last_position: {
                    lat: -25.434566,
                    lng: -49.275062,
                    }
            },
            // {   id : 4, // Muito Caro / Falta Mobilia
            //     url:'http://www.imobiliaria2000.com.br/imovel/?ref=02902.002-HAB',
            //     address: 'Avenida Marechal Floriano Peixoto 696, Centro, Curitiba - Paraná, 80001, Brazi',
            //     license_plate : "17/01/2020 Não Marcado", 
            //     last_position: {
            //         lat: -25.436086,
            //         lng: -49.269517,
            //         }
            // },
            {   id : 5,
                url:'http://www.imobiliaria2000.com.br/imovel/?ref=32181.003-GAL', //Não Tem mobilia
                address: 'R CONSELHEIRO LAURINDO, 781 AP 1101 ',
                license_plate : "17/01/2020 Não Marcado", 
                last_position: {
                    lat: -25.433645,
                    lng: -49.263375,
                    }
            },
            {   id : 6,
                url:'http://www.imobiliaria2000.com.br/imovel/?ref=07007.001-FUT',
                address: 'Rua Padre Anchieta, 2636-Ap. 706- Bl-A CEP: 80730000',
                license_plate : "17/01/2020 Não Marcado", 
                last_position: {
                    lat: -25.4347,
                    lng: -49.3039,
                    }
            },
            {   id : 7,
                url:'http://www.imobiliaria2000.com.br/imovel/?ref=02240.001-KON&imovel_id=',
                address: 'Professor Guido Straube, 643 Apto 44 B  CEP: 80320030',
                license_plate : "17/01/2020 Não Marcado", 
                last_position: {
                    lat: -25.456497,
                    lng: -49.29503,
                    }
            },
            {   id : 8,
                url:'http://www.imobiliaria2000.com.br/imovel/?ref=03941.002-RAZ&imovel_id=',
                address: 'R BALTAZAR CARRASCO DOS REIS, 2032 AP 33 BL A CEP: 80230070',
                license_plate : "17/01/2020 Não Marcado", 
                last_position: {
                    lat: -25.448988,
                    lng: -49.266409,
                    }
            },
            {   id : 9,
                url:'http://www.imobiliaria2000.com.br/imovel/?ref=06493.001-FUT',
                address: 'Rua Gonçalves Dias, 427 - Apto. 602 CEP: 80240340',
                license_plate : "17/01/2020 Não Marcado", 
                last_position: {
                    lat: -25.446927,
                    lng: -49.295064,
                    }
            },
            {   id : 10,
                url:'http://www.imobiliaria2000.com.br/imovel/?ref=02584.003-CIB&imovel_id=',
                address: 'Rua Guilherme Pugsley, 1674 Apartamento 101 A  CEP: 80620000',
                license_plate : "17/01/2020 Não Marcado", 
                last_position: {
                    lat: -25.461349,
                    lng: -49.288323,
                    }
            },
            {   id : 11,
                url:'https://www.quintoandar.com.br/imovel/892996069',
                address: 'Rua Salustiano Cordeiro, Água Verde, Curitiba',
                license_plate : "16/01/2020 16:00", 
                last_position: {
                    lat: -25.454977,
                    lng: -49.285958,
                    }
            }
        ]
        
        setHouses(data) 

        console.log('houses',houses)
       
    }
   
    


    useEffect( async () => {
        
        populateHouses()

        if (targetRef.current) {
          
          setDimensions({
            width: targetRef.current.offsetWidth,
            height: targetRef.current.offsetHeight,
          });
        }
      }, []);


    return(
        <InternalTemplate>                     
                                   
       { <MapBox parentDimensions={dimensions} cars={houses} /> } 
                 
          
        </InternalTemplate>
    )
}

export default App;