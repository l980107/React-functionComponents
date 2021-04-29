import React, { useState } from 'react';
import './index.css';
import Edit from './Edit/';
import Form from './Form/';

const Home = () => {
  const [date, setDate] = useState([]);
  return (
    <div className="app">
      <Edit add={setDate} />
      <Form listDate={date} />
    </div>
  );
};

export default Home;
