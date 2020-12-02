import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";
import TrackVisibility from "react-on-screen";

const DownloadOdometerBase = ({ initialValue, isVisible }) => {
  // client only
  const [hasMounted, setHasMounted] = useState(false);
  const [odometerValue, setOdometerValue] = useState(initialValue);
  const [downloads, setDownloads] = useState(initialValue);
  const [interval, setIntervalValue] = useState(false);
  const [hasBaseInterval, setHasBaseInterval] = useState(false);
  const getDownloads = async (pid) => {
    let res = await fetch(
      `https://cors.itsmeow.dev/addons-ecs.forgesvc.net/api/v2/addon/${pid}`
    );
    if (res && res.ok) {
      const json = await res.json();
      return json.downloadCount;
    } else {
      return 0;
    }
  };
  useEffect(() => {
    setHasMounted(true);
    if (isVisible) {
      if (!interval) {
        setIntervalValue(
          setInterval(() => {
            setOdometerValue(downloads);
          }, 60 * 1000)
        );
      }
      setOdometerValue(downloads);
    } else {
      if (interval) {
        clearInterval(interval);
      }
      setOdometerValue(0);
    }
    if (!hasBaseInterval) {
      setInterval(
        async () => setDownloads(await getDownloads("303557")),
        5 * 60 * 1000
      );
      setHasBaseInterval(true);
      const updateDownloads = async () => {
        setDownloads(await getDownloads("303557"));
        setOdometerValue(isVisible ? downloads : 0);
      };
      updateDownloads();
    }
  }, [isVisible, downloads]); // eslint-disable-line react-hooks/exhaustive-deps

  return hasMounted ? (
    <div className="text-center big">
      <Odometer format="(,ddd).dd" value={odometerValue} />
    </div>
  ) : null;
};

const DownloadOdometer = ({ ...delegated }) => {
  return (
    <TrackVisibility partialVisibility>
      <DownloadOdometerBase {...delegated} />
    </TrackVisibility>
  );
};

export default DownloadOdometer;
