import { useState, useEffect } from "react"
import Odometer from "react-odometerjs"
import TrackVisibility from "react-on-screen"
import ClientOnly from "../components/clientonly"

const DownloadOdometerBase = ({ initialValue, isVisible }) => {
  const [hasMounted, setHasMounted] = useState(false)
  const [odometerValue, setOdometerValue] = useState(initialValue)
  const [downloads, setDownloads] = useState(initialValue)
  const [interval, setIntervalValue] = useState(false)
  const [hasBaseInterval, setHasBaseInterval] = useState(false)
  const getDownloads = async (pid) => {
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
      return downloads
    } else {
      return 0
    }
  }
  useEffect(() => {
    setHasMounted(true)
    if (isVisible) {
      if (!interval) {
        setIntervalValue(
          setInterval(() => {
            setOdometerValue(downloads)
          }, 60 * 1000)
        )
      }
      setOdometerValue(downloads)
    } else {
      if (interval) {
        setIntervalValue(null)
        clearInterval(interval)
      }
      setOdometerValue(0)
    }
    if (!hasBaseInterval) {
      setInterval(
        async () => setDownloads(await getDownloads("303557")),
        5 * 60 * 1000
      )
      setHasBaseInterval(true)
      const updateDownloads = async () => {
        setDownloads(await getDownloads("303557"))
        setOdometerValue(isVisible ? downloads : 0)
      }
      updateDownloads()
    }
    return () => {
      if (interval) {
        setIntervalValue(false)
        clearInterval(interval)
      }
    }
  }, [isVisible, downloads]) // eslint-disable-line react-hooks/exhaustive-deps

  if (hasMounted) {
    return (
      <div className="text-center big">
        <ClientOnly>
          <Odometer format="(,ddd).dd" value={odometerValue} />
        </ClientOnly>
      </div>
    )
  } else {
    return null
  }
}

const DownloadOdometerClient = ({ ...delegated }) => {
  return (
    <TrackVisibility partialVisibility>
      <DownloadOdometerBase {...delegated} />
    </TrackVisibility>
  )
}

export default DownloadOdometerClient
