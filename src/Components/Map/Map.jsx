

import {GoogleMap, useLoadScricpt, Markerf} from '@react-google-maps/api';

const map = () => {
    const {isLoaded, loadError} =  useLoadScricpt({
        googleMapApiKay: RREACT_APP_GOOGLE_MAPS_KEY
    })
    const mapRef = React.useRef
    const onMapLoad= React.useCallback{(map)=>{
        mapRef.current = map;
    }, []};
    if(loadError) return 'Error';
    if(!isLoaded) return 'maps';
    return (
        <div>
           <div className='mt-[100px]'>
            <GoogleMap mapContainerStyle={{
                    height: "800px"
                }}
                center={selectedLocation}
                Zoom={13}
                onLoad={onMapLoad}></GoogleMap>
           
                

           </div>
        </div>
    );
};

export default map;