import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Service from '../components/service/Service';
import News from '../components/news/News';
import Games from '../components/game/Games';
import Tecnology from '../components/tecnology/Tecnology'; 
import ConsumoApi from '../components/api/ConsumoApi';
import Screen from '../components/principal/Screen';
import Error from '../components/error/Error';
import Home from '../components/home/Home';
import Travel from '../components/travel/Travel';
import Tools from '../components/tools/Tools';
import Login from '../components/login/Login';
import Player from '../components/music/Player';
import Explore from '../assets/team/Explore';
import Magazine from '../components/magazine/Magazine';


export const AppRouter = () => {
  //Rutas de la pruebas
  return (
    <Router>
      <Fragment>
        <Routes>

          <Route exact path='/home'       element={ <Screen> <Home/> </Screen> }> </Route> 
          <Route exact path='/service'    element={ <Screen> <Service/> </Screen> }> </Route> 
          <Route exact path='/news'       element={ <Screen> <News/> </Screen> }> </Route> 
          <Route exact path='/games'      element={ <Screen><Games/></Screen> }> </Route> 
          <Route exact path='/tecnology'  element={ <Screen><Tecnology/></Screen> }> </Route> 
          <Route exact path='/travel'  element={ <Screen><Travel/></Screen> }> </Route>
          <Route exact path='/tools'  element={ <Screen><Tools/></Screen> }> </Route> 
          <Route exact path='/login'  element={ <Screen><Login/></Screen> }> </Route>
          <Route exact path='/music'  element={ <Screen><Player/></Screen> }> </Route>
          <Route exact path='/team'  element={ <Screen><Explore/></Screen> }> </Route>
          <Route exact path='/magazine'  element={ <Screen><Magazine/></Screen> }> </Route>
                   
          <Route path="/" element={<Navigate replace to="/Screen"> </Navigate> } /> 
          <Route path="*" element={<Screen><Error/></Screen>}></Route>

        </Routes>
      </Fragment>
    </Router>
  )
}
