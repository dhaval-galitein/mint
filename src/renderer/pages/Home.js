import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log('Rerendder');
  }, []);
  return (
    <div>
      <div>Home</div>
      <button onClick={() => navigate('/todo')}>Go to TODO</button>
    </div>
  );
};

export default Home;
