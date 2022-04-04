import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { PeticionApi } from '../actions/actions';
import img1 from '../assets/img/productos/service1.jpg'
import img2 from '../assets/img/productos/service2.jpg'
import img3 from '../assets/img/productos/service3.jpg'

const Home = () => {
    const { dataApi } = useSelector(state => state.myApi);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PeticionApi())
    }, [])

    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home;
