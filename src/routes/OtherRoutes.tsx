import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const OtherRoutes: React.FC = () => (
  <BrowserRouter>
    <Route path="/" component={SignIn} />
  </BrowserRouter>
);

export default OtherRoutes;
