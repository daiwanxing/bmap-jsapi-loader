/**
 * @ignore
 */
declare global {
    interface Window {
        __BMapLoadedCallBack: (e: Event) => void;
    }
}
/**
 * @description 百度地图官方工具库
 */
export type Libraries = "DrawingManager" | "AreaRestriction" | "CustomOverlay" | "DistanceTool" | "InfoBox" | "Lushu" | "GeoUtils" | "RichMarker" | "TrackAnimation";
export interface LoaderOptions {
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
        /**
         * 库的名称
         */
        lib: Libraries;
        /**
         * 工具库的版本
         */
        version?: string;
        /**
         * @description 是否禁止压缩后的开源库脚本
         */
        disableZip?: boolean;
    }[];
}
declare function loader(params: LoaderOptions): Promise<unknown>;
export { loader };
