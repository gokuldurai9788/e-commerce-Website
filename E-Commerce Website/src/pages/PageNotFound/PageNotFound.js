import React from 'react';
import {NotFoundPage} from '../../utils/images'; 

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Page Not Found</h1>
      <img src={NotFoundPage} alt="404" />
    </div>
  );
};

export default PageNotFound;
