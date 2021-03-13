/*global kakao*/
import React from "react";
import styled from "styled-components";

class MapContent extends Comment{
    componentDidMount(){
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=cb3d25170c885cf3bdd9b82d4afea158&autoload=false";
        document.head.appendChild(script);
        script.onload = () => {
            kakao.maps.load(()=>{
                let container = document.getElementById("myMap");
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level:7
                };
                const map = new window.kakao.maps.Map(container, options);
            });
        };
    }
    render (){
        return
            <MapContents id="myMap">
            </MapContents>;
    }
}

const MapContents = styled.div`
    width: 100%
    height: 100%
`;

export default MapContent;