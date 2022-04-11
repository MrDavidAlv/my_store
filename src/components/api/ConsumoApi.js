import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { PeticionApi } from '../../actions/actions';



const ConsumoApi  = () => {
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
        <div>
            <Link to="/home">home</Link>
            <h3>Cinsumir Api</h3>
            <button onClick={traerDatos}>traer datos</button>


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

            <br />

        </div>
    )
}

export default ConsumoApi;
