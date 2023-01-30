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
         * @description 百度地图版本
         */
        v: string;
        /**
         * @description 百度地图开发密钥
         */
        ak: string;
        /**
         * @description 当需要加载 GL 版本的百度地图需要指定该参数
         * @example type: "webgl"
         */
        type?: string;
        /**
         * @description 百度地图开源工具库
         */
        library?: {
            lib: UtilLibs;
            version?: string;
            /**
             * @description 是否禁止压缩后的开源库脚本
             */
            disableZip: boolean;
        }[];
    }
}
declare module "bmap-loader" {
    const loader: (params: BMapJSAPI.LoadParams) => Promise<null>;

    export default loader;
}
