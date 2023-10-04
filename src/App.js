import React, { useState } from 'react';
import CarList from './CarList';
import Pagination from './Pagination';
import data from './car.json';
import "./CarList.css"

function App() {
  const [cars, setCars] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter((car) =>
    car.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1>Car Search</h1>
      <input
        className='search'
        type="text"
        placeholder="Search by car name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CarList cars={filteredCars} currentPage={currentPage} carsPerPage={carsPerPage} />
      <Pagination
        carsPerPage={carsPerPage}
        totalCars={filteredCars.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
