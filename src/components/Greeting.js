import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Greeting..</h1>
      {loading && <p>Fetching data...</p>}
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Greeting;
