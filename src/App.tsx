import React from 'react';
import MainLayout from './layouts/MainLayout';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}