import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Prueba from '../components/Prueba';
import Screen from '../components/Screen';

import Blog from '../components/Blog'
import Home from '../components/Home';
import Service from '../components/Service';
import Store from '../components/Store';
import Error from '../components/Error';
import AboutMe from '../components/AboutMe';



export const AppRouter = () => {
  //Rutas de la prueba
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route index element={
            <Screen component={Prueba} />
          }>
          </Route>
          <Route exact path='/home' element={
            <Screen>
              <Home></Home>
            </Screen>
          }>
          </Route>
          <Route exact path='/service' element={
            <Screen>
              <Service></Service>
            </Screen>
          }>
          </Route>
          <Route exact path='/api' element={
            <Screen>
              <Prueba></Prueba>
            </Screen>
          }>
          </Route>
          <Route exact path='/store' element={
            <Screen>
              <Store></Store>
            </Screen>
          }>
          </Route>
          <Route exact path='/contact' element={
            <Screen>
              <AboutMe></AboutMe>
            </Screen>
          }>
          </Route>

          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Fragment>
    </Router>
  )
}
