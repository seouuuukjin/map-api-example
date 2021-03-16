import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const { kakao } = window;

const MapLoadFunc = () => {
    let [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    //resize 이벤트 감지용 임시 함수
    
    useEffect(()=>{
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        //이 문장이 map 을 띄워준다.
        const map = new kakao.maps.Map(container, options);
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
    }, []);

    return (
        <div id = 'myMap' style={
            {
                width: `${window.innerWidth}px`, 
                height: `${window.innerHeight}px`
            }
        }>
        </div>
    )
}
// const myMap = styled.div`
//     width: 100%
//     height: 100%
// `;

export default MapLoadFunc;