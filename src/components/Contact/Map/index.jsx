import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'
const Map = () => {
  return (
    <>
      <div className="info-map">
        Tofiq Movsumov
        <br />
        Azerbaijan
        <br />
        Babak street, Sumgait
      </div>
      <div className="map-wrap">
        <MapContainer
          center={[process.env.REACT_APP_X_CORD, process.env.REACT_APP_Y_CORD]}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[
              process.env.REACT_APP_X_CORD,
              process.env.REACT_APP_Y_CORD,
            ]}
          >
            <Popup>Tofiq is living here, come here for a cup of coffee</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default Map
