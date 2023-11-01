import React from 'react';

function Pagination({ page, handlePreviousPage, handleNextPage }) {
    return (
        <div>
            <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
            <button onClick={handleNextPage}>Next</button>
        </div>
    );
}

export default Pagination;
