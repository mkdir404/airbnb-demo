import { useState } from 'react';
import {Map as Mapbox , Marker , Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'

import 'mapbox-gl/dist/mapbox-gl.css';
import { devNull } from 'os';

function Map({searchResult}:any) {
    
    const [selectedLocation,setSelectedLocation] = useState(null)

    const coordinates = searchResult.map((res:any)=>({
        longitude: res.long,
        latitude: res.lat,
    }))

    const center:any = getCenter(coordinates)
    
  return (    
        <Mapbox              
              mapStyle="mapbox://styles/mkdir404/cl5lkuuvc004v14t1m33wrbf0"
              mapboxAccessToken={process.env.mapbox_key}              
              initialViewState={{
                longitude: center.longitude,
                latitude: center.latitude,
                zoom: 10
              }}
              style={{width: 500, height: '100%' }}
        >
            
        
            {searchResult.map( (res:any) =>(
                <div key={res.long}>
                    <Marker
                        longitude={res.long}
                        latitude={res.lat}
                        
                    >
                        <p 
                        role="img" 
                        className='cursor-pointer text-2xl animate-bounce'
                        onClick={()=>setSelectedLocation(res)}
                        arial-label="push-pin"
                        >
                            &#129409;
                        </p>
                    </Marker>
                    {selectedLocation ? (
                        <Popup
                            onClose={()=>setSelectedLocation(null)}
                            //closeOnClick={true}
                            longitude={res.long}
                            latitude={res.lat}                                                   
                        >
                        <div >
                            <h1>{res.title}</h1>
                        </div>
                        </Popup>
                    ):(
                        null
                    )}
                </div>
            ))}
            
            


        </Mapbox>    
  )
}

export default Map