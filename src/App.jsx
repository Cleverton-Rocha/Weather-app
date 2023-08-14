import React, { useState } from 'react';
import Card from './components/Card';
import fetchData from './services/api';
import initialData from './helpers/initialData';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);
  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(city).then((res) => {
      setData(res);
    });
  };

  return (
    <div className='p-4 flex flex-col w-full h-screen sm:justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='fixed bottom-0 w-full flex p-4 sm:relative justify-center'
      >
        <input
          type='text'
          placeholder='Cidade'
          className='p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          type='submit'
          className='bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold'
        >
          Pesquisar
        </button>
      </form>
      <Card data={data} />
    </div>
  );
}

export default App;
