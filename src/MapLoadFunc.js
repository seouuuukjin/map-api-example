import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const { kakao } = window;

const MapLoadFunc = () => {
    let [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    
    useEffect(()=>{
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        //이 문장이 map 을 띄워준다.
        const map = new kakao.maps.Map(container, options);
    //resize 이벤트 감지용 임시 함수
        let handleResize = () => {
            let resizeTimer;
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(()=> {
                console.log('before')
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }, 1000)
            console.log(windowSize.width, windowSize.height)
        }
        //window resize 이벤트 감지 위해서 추가
        window.addEventListener('resize', handleResize);
        return () => { // cleanup 
            window.removeEventListener('resize', handleResize);
        }
    }, [windowSize]);

    return (
        <div id = 'myMap' style={{
            width: '500px', 
            height: '500px'
        }}> x: {window.width}, y: {window.height}</div>
    )
}
// const myMap = styled.div`
//     width: 100%
//     height: 100%
// `;

export default MapLoadFunc;