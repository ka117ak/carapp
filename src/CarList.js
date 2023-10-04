import React from 'react';
import { BsPeople, BsSpeedometer2 } from 'react-icons/bs'
import { TbSettingsAutomation } from 'react-icons/tb'
import { BiGasPump } from 'react-icons/bi'
import "./CarList.css"

function CarList({ cars, currentPage, carsPerPage }) {
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const rows = [];
    for (let i = 0; i < currentCars.length; i += 2) {
        rows.push(currentCars.slice(i, i + 2));
    }

    return (
        <div className="car-list">
            {rows.map((row, index) => (
                <div className="row" key={index}>
                    {row.map((car) => (
                        <div className="col-md-4" key={car.id}>
                            <div className="card">
                                <p><img className="image" src={car.img} alt="" /></p>
                                <h3>{car.brand} {car.model}</h3>
                                <p>{car.year}</p>
                                <div className="logo">
                                    <div className='find'>
                                        <div className="sub"><BsPeople size={25} />{car.people} People</div>
                                        <div className="sub"><BsSpeedometer2 size={25} />{car.speedometer}</div>
                                    </div>
                                    <div className='find'>
                                        <div className="sub"><TbSettingsAutomation size={25} />{car.auto}</div>
                                        <div className="sub"><BiGasPump size={25} />{car.fule}</div>
                                    </div>
                                </div>
                                <div className="display">
                                    <div className="price">₹{car.rent}/day</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CarList;