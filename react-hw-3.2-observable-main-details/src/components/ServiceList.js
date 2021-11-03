/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { fetchServicesRequest } from '../actions/actionCreators';
import { Link } from 'react-router-dom';

function ServiceList() {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  console.log(items);

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [])
  
  const handleReload = () => {
    dispatch(fetchServicesRequest());
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return (
      <div>
      <p>Something went wrong try again</p>
      <button onClick={handleReload}>Reload</button>
      </div>
    );
  }

  return (
    <div className='ServiceList'>
    <ul>
      {items.map(o => (
        <Link to={`/services/${o.id}/details`} key={o.id}>
        <li>{o.name} {o.price}</li>
        </Link>
      ))}
    </ul>
    </div>
  );
}

export default ServiceList