import { useState, useEffect } from "react";

const useProjectDownloads = (pid) => {
  const [downloads, setDownloads] = useState(0);
  useEffect(() => {
    const fetchEstimate = async () => {
      let res = await fetch(
        `https://cors.itsmeow.dev/addons-ecs.forgesvc.net/api/v2/addon/${pid}`
      );

      if (res && res.ok) {
        const json = await res.json();
        setDownloads(json.downloadCount);
      }
    };

    if (pid) {
      fetchEstimate();
    }
  }, [pid]);

  return downloads;
};

export default useProjectDownloads;
