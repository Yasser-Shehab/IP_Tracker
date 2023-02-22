import './LocationDetails.scss';

const LocationDetails = ({ location }) => {
  return (
    <div className='location-details'>
      <ul className='location-list'>
        <li className='list-item no-border'>
          <span className='list-title'>IP ADDRESS</span>
          <span className='list-info'>{location.ip}</span>
        </li>
        <li className='list-item'>
          <span className='list-title'>Location</span>
          <span className='list-info'>{location.location.country}</span>
        </li>
        <li className='list-item'>
          <span className='list-title'>TIMEZONE</span>
          <span className='list-info'>{location.location.timezone}</span>
        </li>
        <li className='list-item'>
          <span className='list-title'>ISP</span>
          <span className='list-info'>{location.isp}</span>
        </li>
      </ul>
    </div>
  );
};

export default LocationDetails;
