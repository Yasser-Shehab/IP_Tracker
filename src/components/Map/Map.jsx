import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapReCenter from './MapReCenter';

const Map = (props) => {
  return (
    <MapContainer center={props.position} zoomControl={false} zoom={13} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={props.position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapReCenter position={props.position} />
    </MapContainer>
  );
};

export default Map;
