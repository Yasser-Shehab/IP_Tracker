import { useMap } from 'react-leaflet';
const MapReCenter = (props) => {
  const map = useMap();
  map.setView(props.position, props.zoom);
  return null;
};

export default MapReCenter;
