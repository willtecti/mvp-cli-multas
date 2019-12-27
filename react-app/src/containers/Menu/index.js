import React from 'react'
import {Container, Ul, Li, HeadSideBar} from './styles'
import Logo from '../../components/Logo';
import { FaServicestack, FaCar} from 'react-icons/fa';
import { MdDashboard} from 'react-icons/md';
import { TiDocumentText} from 'react-icons/ti';
import { GiPathDistance, GiGasPump} from 'react-icons/gi';
import ItemSideMenu from  '../../components/ItemSideMenu'

const App = () =>{
    return(
        <Container>
            <HeadSideBar>
                <Logo/>
            </HeadSideBar>
            
            <Ul>
                <ItemSideMenu Icon={MdDashboard} Text="Dashboard"/>
                <ItemSideMenu Icon={FaCar} Text="Carros"/>
                <ItemSideMenu Icon={GiPathDistance} Text="Distância"/>
                <ItemSideMenu Icon={GiGasPump} Text="Consumo de combustível"/>
                <ItemSideMenu Icon={FaServicestack} Text="Serviços do Dentran"/>
                <ItemSideMenu Icon={TiDocumentText} Text="/ItemSideMenu"/>
            </Ul>

        </Container>
    )
}

export default App;