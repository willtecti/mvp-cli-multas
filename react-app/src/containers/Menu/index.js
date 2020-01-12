import React from 'react'
import {Container} from './styles'
import {  FaCar} from 'react-icons/fa';
import { MdDashboard} from 'react-icons/md';
import { GiPathDistance, GiExitDoor, GiFamilyHouse} from 'react-icons/gi';
import ItemSideMenu from  '../../components/ItemSideMenu'
import { danger } from '../../styles/colors';

const App = ({showOnlyIcon}) =>{
    return(
        <Container>
            
            
            <div className='nav flex-column'>
                <ItemSideMenu title="Acesse o dashboard e obtenha informações sobre a frota" showOnlyIcon={showOnlyIcon} Icon={MdDashboard} Text="Dashboard" To="/app"/>
                <ItemSideMenu title="Visualize a frota de veículos" showOnlyIcon={showOnlyIcon} Icon={FaCar} Text="Frota" To="/app/cars"/>
                <ItemSideMenu title="Visualize a localização dos veículos pelo mapa" showOnlyIcon={showOnlyIcon} Icon={GiPathDistance} Text="Localização" To="/app/location"/>
                <ItemSideMenu title="Visualizar Possíveis casas"  showOnlyIcon={showOnlyIcon} Icon={GiFamilyHouse} Text="Moradias"  To="/app/house"/>
                <ItemSideMenu title="Deslogar de sua conta de Usuário" color={'danger'} showOnlyIcon={showOnlyIcon} Icon={GiExitDoor} Text="Sair" To="/login"/>
                
                
            </div>

        </Container>
    )
}

export default App;