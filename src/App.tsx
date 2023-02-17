import { Layout } from 'antd';
import React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

function App() {
  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
