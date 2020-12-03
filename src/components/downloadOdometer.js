import Loadable from "@loadable/component";

const DownloadOdometer = Loadable(() => import("./downloadOdometerClient"));

export default DownloadOdometer;
