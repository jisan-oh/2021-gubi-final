import React, { useEffect, useRef } from "react";
import stories from "../data/stories";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    const map = new window.kakao.maps.Map(mapRef.current, {
      center: new window.kakao.maps.LatLng(36, 128),
      level: 12,
    });

    const geocoder = new window.kakao.maps.services.Geocoder();

    for (const story of stories) {
      if (story.storyPlace) {
        geocoder.addressSearch(story.storyPlace, (result: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const position = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            const marker = new window.kakao.maps.Marker({ map, position });
            const infoWindow = new window.kakao.maps.InfoWindow({
              content: `<a class="font-medium whitespace-nowrap" href="/2021-gubi-final/stories/${story.title}">${story.title}</a>`,
            });
            infoWindow.open(map, marker);
          } else {
            console.log("장자못 주소를 검색하지 못했어요. 죄송해요.");
          }
        });
      }
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-1">우리 동네 근처 장자못</h1>
      <p className="pt-1 pb-3">
        장자못 전설은 전국 이곳저곳에 전해지고 있는 전설입니다. 그 장소만 해도
        백여 곳이 된다고 하죠.
        <br />
        혹시 우리 동네 근처에도 장자못이 있을까요? 찾아봅시다.
      </p>
      <div className="h-screen" ref={mapRef} />
    </div>
  );
};

export default MapPage;
