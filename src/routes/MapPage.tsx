import styles from "./MapPage.module.css";
import { useEffect, useRef } from "react";
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
      level: 13,
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
              content: `<div><a href="/stories/${story.title}">${story.title}</a></div>`,
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
      지도 페이지
      <div className={styles.map} ref={mapRef} />
    </div>
  );
};

export default MapPage;
