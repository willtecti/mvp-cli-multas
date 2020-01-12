import {TOKEN} from '../configs/MapBox'

//{bairro, preco, quartos, vaga}

async function getAddress(){ 

    try {
           
        const address =  await (await (fetch('http://localhost:2000/api/houses'))).json()

        return address
        

        } catch (error) {
            console.error('getAddress',error)
            return error
        
        }

}



const addressToCoordinates = async  (address) =>{
    try {

        const data  = await(await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${TOKEN}`)).json()

        return { 
            last_position: {
            lng: data.features[0].geometry.coordinates[0],
            lat: data.features[0].geometry.coordinates[1],
            address
        }}
        
    } catch (error) {
        console.error('addresToCoordinates', error)
    }

}

export const getHousesAgended = async () =>{
    return [
        { 
            id : 'https://gonzagaimoveis.com.br/imovel/10091001/apartamento-1-quarto-horizonte-centro-curitiba/',
            address: 'Rua Francisco Torres A, 581, Centro - Curitiba/Pr',
            last_position: {
                lng: -25.682271,
                lat: -48.554413,
                },
            description: `O Imóvel

            Imóvel em excelente localização
            
            sala para 02 ambientes,
            sofá com chaise, canto alemão e balcão para tv e computador,
            cozinha com armários e conjugada com lavanderia,
            01 dormitório sendo suíte com armários planejados, cama de casal e balcão,
            bwc social com box blindes e armário,
            piso parquet.`
        },{ 
            address: '',
            last_position: {
                lng: null,
                lat: null,
                }
        },
    ]
    
}


export const getHousesVivaReal = async () =>{

    const address = await getAddress()
    const housesLocation = await Promise.all( address.map( async (address) =>{
        return await addressToCoordinates(address)
    }))
    return housesLocation


}




