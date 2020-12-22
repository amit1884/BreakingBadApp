import React from "react";
import Pagination from "react-js-pagination";
 
function PaginationComp ({ activePage,handlePageChange}) {
    return (
      <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={60}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
        />
      </div>
    );
}

export default PaginationComp