import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { PeticionApi } from '../actions/actions';
import './../assets/css/prueba.css';

import perfil from './../assets/img/perfil.jpeg';



const Prueba = () => {
    const { dataApi } = useSelector(state => state.myApi);
    const dispatch = useDispatch();

    const traerDatos = async () => {
        dispatch(PeticionApi());
        // console.log(dataApi); 
        
    }
    useEffect(() => {
        dispatch(PeticionApi());
    }, [])

    return (
        <div className='prueba'>
            <h1 className='title-pru'>Ejemplo del consumo <br/>
                de una API con React JS</h1><br/>
            <div className='parrafo'>
                <p>
                    Este ejemplo cuenta con diseño responsivo y para  
                    realizar el consumo de una API<br/> mediante el uso del 
                    framework react js  implementado con la libreria  
                    redux.
                </p>
            </div>  <br/>

            <div className='cartas'>

                <h4>Todos los clientes de la api</h4> <br/>
                {
                    dataApi.map((element, index) => {
                        return (
                            <div>
                                <div className='tarjeta'>
                                    <h2 className='title-name'>Cliente <strong>- {dataApi[index].id}</strong></h2>
                                    <img src={perfil} alt='logo app' />
                                    <div className='datos'>
                                        <div className='item'>
                                            <p><strong>Nombre: </strong></p>
                                            <p><strong>{dataApi[index].name}</strong></p>
                                        </div> <br/>
                                        <div className='item'>
                                            <p><strong>Email: </strong></p>
                                            <p><strong>{dataApi[index].email}</strong></p>
                                        </div> <br/>
                                        <div className='item'>
                                            <p><strong>Ciudad: </strong></p>
                                            <p><strong>{dataApi[index].address.city}</strong></p>
                                            <p>cll: {dataApi[index].address.street} - apto: {dataApi[index].address.suite}</p>
                                        </div>  <br/>
                                        <div className='item'>
                                            <p><strong>Compañia: </strong></p>
                                            <p><strong>{dataApi[index].company.name}</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                            </div>
                        )
                    }
                    )
                }
            </div>
            <br/>
            <div className='table'>
                <h4>Algunos datos en una tabla</h4><br/>
                <table>
                    <thead>
                        <tr>
                            <th scope="coll">Id</th>
                            <th scope="coll">Nombre</th>
                            <th scope="coll">username</th>
                            <th scope="coll">email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataApi.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td value={element.id}>
                                            {element.id}
                                        </td>
                                        <td value={element.name}>
                                            {element.name}
                                        </td>
                                        <td value={element.username}>
                                            {element.username}
                                        </td>
                                        <td value={element.email}>
                                            {element.email}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
            <br/>
            <br/><br/><br/><br/><br/><br/>.
        </div>
    )
}

export default Prueba;
