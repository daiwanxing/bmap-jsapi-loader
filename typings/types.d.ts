declare namespace BMapLoader {
  interface LoaderParams {
    /**
     * 百度地图版本
     */
    v: string;
    /**
     * 百度地图开发密钥
     */
    ak: string;
    /**
     * 目前 type 的值只能是 webgl
     */
    type?: string;
    /**
     * 百度地图开源工具库
     */
    library: {
      lib: UtilLibs;
      version: string;
    }[];
  }

  type UtilLibs =
    | "DrawingManager"
    | "AreaRestriction"
    | "CustomOverlay"
    | "DistanceTool"
    | "InfoBox"
    | "Lushu"
    | "GeoUtils"
    | "RichMarker"
    | "TrackAnimation";
}

declare interface Window {
  __BMapLoadedCallBack: (...args: any[]) => void;
}
