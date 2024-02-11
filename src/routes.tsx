import React from 'react';
import { Routes as Container, Route } from 'react-router-dom';

const Login = React.lazy(() => import('./pages/Login'));
const Tasks = React.lazy(() => import('./pages/Tasks'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

function Routes() {
  return (
    <Container>
      <Route path="/login" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />

      <Route path="*" element={<PageNotFound />} />
    </Container>
  );
}

export default Routes;
