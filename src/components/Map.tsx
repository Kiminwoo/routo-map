import { useEffect } from "react";

const Map: React.FC = () => {
    useEffect(() => {
        const initMap = () => {
            const options = {
                center: { lat: 37.5100, lng: 127.0504 },
                zoom: 16,
            };
            const map = new (window as any).Routo.Map('map', options);
        };

        if ((window as any).Routo) {
            initMap();
        } else {
            window.onload = initMap;
        }
    }, []);

    return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
};

export default Map;  // default export 추가