import React from 'react';
import "./CarList.css"
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi"

function Pagination({ carsPerPage, currentPage, paginate }) {
    const totalPages = 10;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a href="#!" className="page-link" onClick={() => paginate(currentPage - 1)}>
                        <HiArrowSmLeft />
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a href="#!" className="page-link" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a href="#!" className="page-link" onClick={() => paginate(currentPage + 1)}>
                        <HiArrowSmRight />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;