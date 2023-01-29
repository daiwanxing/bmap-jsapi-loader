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

declare namespace BMapJSAPI {
    export interface LoadParams {
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
            version?: string;
            /* 禁止引用压缩后的脚本 */
            disableZip: boolean;
        }[];
    }
}
declare module "bmap-loader" {
    const a: BMapJSPI.MyType;

    const loader: (params: BMapJSAPI.LoadParams) => Promise<null>;

    export default loader;
}
