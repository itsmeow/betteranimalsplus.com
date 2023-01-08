import { useState, useEffect } from "react"

const useProjectDownloads = (pid) => {
  const [downloads, setDownloads] = useState(0)
  useEffect(() => {
    const fetchEstimate = async () => {
      let res = await fetch(
        `https://cors.itsmeow.dev/cf.way2muchnoise.eu/full_${pid}.svg`
      )

      if (res && res.ok) {
        const text = await res.text()
        let matches = Array.from(
          text.matchAll(/<text x="[\d.]+" y="[\d.]+">([\d,]+)<\/text>/g),
          (m) => m[1]
        )
        let downloads = parseInt(matches[0].replace(/,/g, ""))
        setDownloads(downloads)
      }
    }

    if (pid) {
      fetchEstimate()
    }
  }, [pid])

  return downloads
}

export default useProjectDownloads
