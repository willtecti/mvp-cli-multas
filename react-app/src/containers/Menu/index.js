import React from 'react'
import {Container} from './styles'
import {  FaCar} from 'react-icons/fa';
import { MdDashboard} from 'react-icons/md';
import { GiPathDistance} from 'react-icons/gi';
import ItemSideMenu from  '../../components/ItemSideMenu'

const App = ({showOnlyIcon}) =>{
    return(
        <Container>
            
            
            <div className='nav flex-column'>
                <ItemSideMenu showOnlyIcon={showOnlyIcon} Icon={MdDashboard} Text="Dashboard" To="/app"/>
                <ItemSideMenu showOnlyIcon={showOnlyIcon} Icon={FaCar} Text="Frota" To="/app/cars"/>
                <ItemSideMenu showOnlyIcon={showOnlyIcon} Icon={GiPathDistance} Text="Localização" To="/app/location"/>
                
            </div>

        </Container>
    )
}

export default App;