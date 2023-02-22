import React, { useState } from 'react';
import './Main.scss';
import backgroundImg from '../../assets/pattern-bg-desktop.png';
import arrow from '../../assets/icon-arrow.svg';
import { ValidateIPaddress } from '../../utils/validation';
import LocationDetails from '../LocationDetails/LocationDetails';
import Map from '../Map/Map';

const API_KEY = import.meta.env.VITE_IP_TRACKER_KEY;
const API = 'https://geo.ipify.org/api/v2/country,city?apiKey=';

const Main = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ipAddress, setIpAddress] = useState('');
  const [position, setPosition] = useState([51.505, -0.09]);

  const fetchIPAdress = async () => {
    console.log('fetching Location');
    setLoading(true);
    if (!ValidateIPaddress(ipAddress)) return;
    try {
      const url = `${API}${API_KEY}&ipAddress=${ipAddress}`;
      const data = await fetch(url);
      const response = await data.json();
      setPosition([response.location.lat, response.location.lng]);
      setLoading(false);
      setLocation(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section>
      <div className='header-container'>
        <img className='header-image' src={backgroundImg} alt='Background Image' />
        <div className='header__title'>
          <h2>IP Address Tracker</h2>
        </div>
        <div className='search-container'>
          <input
            placeholder='IP Address'
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className='search-input'
          />
          <button className='search-button' onClick={fetchIPAdress}>
            <img src={arrow} alt='arrow' />
          </button>
        </div>

        {location && !loading ? (
          <div className='map-section'>
            <LocationDetails location={location} />
          </div>
        ) : null}
      </div>
      <div>
        <Map position={position} />
      </div>
    </section>
  );
};

export default Main;
