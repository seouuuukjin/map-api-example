import React, {useEffect} from 'react';
import styled from 'styled-components'

const { kakao } = window;

const MapLoadFunc = () => {
    useEffect(()=>{
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
    }, []);

    return (
        <div id = 'myMap' style={{
            width: '500px', 
            height: '500px'
        }}> </div>
    )
}
// const myMap = styled.div`
//     width: 100%
//     height: 100%
// `;

export default MapLoadFunc;