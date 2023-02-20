import { BMapGLLib, BMapLib, LOAD_STATE } from "./helper";

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
export type Libraries =
    | "DrawingManager"
    | "AreaRestriction"
    | "CustomOverlay"
    | "DistanceTool"
    | "InfoBox"
    | "Lushu"
    | "GeoUtils"
    | "RichMarker"
    | "TrackAnimation";

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

const BMAP_API_HOST = "https://api.map.baidu.com";

let BMAP_STATE = LOAD_STATE.NOT_LOAD;

const BMAP_GL = "webgl";

async function loader(params: LoaderOptions) {
    const { ak, v, type, library } = params;
    if (!ak) return Promise.reject("please provide map ak");
    if (typeof ak !== "string")
        return Promise.reject(`illegal ak value: ${ak}`);
    if (!v) return Promise.reject("please set bmap version");
    if (type && type !== BMAP_GL)
        return Promise.reject(
            `expected type value webgl but got value ${type}`
        );

    return new Promise((resolve, rejected) => {
        if (BMAP_STATE & LOAD_STATE.LOADED) return resolve(null);
        if (BMAP_STATE & LOAD_STATE.FAILED)
            return rejected("install map script failed");
        if (BMAP_STATE & LOAD_STATE.LOADING)
            return appendUnSetteldTask(resolve, "bmap");

        const mapUrl = new URL(`${BMAP_API_HOST}/api`);
        mapUrl.searchParams.set("ak", ak);
        mapUrl.searchParams.set("v", v);
        mapUrl.searchParams.set("callback", "__BMapLoadedCallBack");
        if (type) mapUrl.searchParams.set("type", BMAP_GL);
        const script = document.createElement("script");
        script.src = mapUrl.toString();
        script.type = "text/javascript";
        BMAP_STATE = LOAD_STATE.LOADING;

        script.addEventListener("error", function (e) {
            BMAP_STATE = LOAD_STATE.FAILED;
            rejected(e.message);
        });

        window.__BMapLoadedCallBack = function (err) {
            if (err) {
                BMAP_STATE = LOAD_STATE.FAILED;
                return rejected(err);
            }
            BMAP_STATE = LOAD_STATE.LOADED;
            if (!Array.isArray(library) || !library.length) {
                resolve(null);
                run(unResolvedMapTask);
            } else {
                (type ? addBMapGLLibrary(library) : addBMapLibrary(library))
                    .then((values) => {
                        resolve(null);
                        run(unResolvedMapTask);
                        const failedRecords = values.filter(
                            (record) => record.status === "rejected"
                        ) as PromiseRejectedResult[];
                        failedRecords.forEach((d) => console.error(d.reason));
                    })
                    .catch(rejected);
            }
        };

        document.head.appendChild(script);
    });
}

function addBMapLibrary(libs: LoaderOptions["library"]) {
    const awaitJobs = libs!.map((data) => {
        const { lib, version, disableZip } = data;
        const libData = BMapLib.get(lib);
        if (!libData) {
            console.warn(
                "It's seems like you provide uncorrect lib name, please checkout your lib name spell"
            );
            return Promise.resolve();
        } else {
            const { install, hasCSS } = libData;
            if (install & LOAD_STATE.LOADED) return Promise.resolve();
            if (install & LOAD_STATE.FAILED)
                return Promise.reject(`try install library ${lib} failed`);
            if (install & LOAD_STATE.LOADING)
                return new Promise((resolve) =>
                    appendUnSetteldTask(resolve, "normal")
                );
            return new Promise((resolve, rejected) => {
                const st = document.createElement("script");
                const sourcelink = `${BMAP_API_HOST}/library/${lib}/${version}/src/${lib}.min.js`;
                st.src = disableZip
                    ? sourcelink.replace(/\.min(?=\.js)/, "")
                    : sourcelink;
                document.head.appendChild(st);
                libData.install = LOAD_STATE.LOADING;

                st.addEventListener("error", function (e) {
                    libData.install = LOAD_STATE.FAILED;
                    rejected(e.message);
                });

                st.addEventListener("load", function () {
                    libData.install = LOAD_STATE.LOADED;
                    run(unResolvedLibTask);
                    resolve(void 0);
                });

                if (hasCSS)
                    addLibStyle(
                        `${BMAP_API_HOST}/library/${lib}/${version}/src/${lib}.min.css`
                    );
            });
        }
    });

    return Promise.allSettled(awaitJobs);
}

// GL版的开源工具库放到了百度云的BOS存储上, 参见右侧链接 https://github.com/huiyan-fe/BMapGLLib
const BMapGLLibURL = "https://mapopen.bj.bcebos.com/github/BMapGLLib";

function addBMapGLLibrary(libs: LoaderOptions["library"]) {
    // 对于已经安装了的lib，可以直接resolve
    const awaitJobs = libs!.map((data) => {
        const { lib, disableZip } = data;
        const libData = BMapGLLib.get(lib);
        if (!libData) {
            console.warn(
                "It's seems like you provide uncorrect GLlib name, please checkout your GLlib name spell"
            );
            return Promise.resolve();
        } else {
            const { install, hasCSS } = libData;
            if (install & LOAD_STATE.LOADED) return Promise.resolve();
            if (install & LOAD_STATE.FAILED)
                return Promise.reject(`try install GL-library ${lib} failed`);
            if (install & LOAD_STATE.LOADING)
                return new Promise((resolve) =>
                    appendUnSetteldTask(resolve, "gl")
                );
            return new Promise((resolve, rejected) => {
                const st = document.createElement("script");
                const sourcelink = `${BMapGLLibURL}/${lib}/src/${lib}.min.js`;
                st.src = disableZip
                    ? sourcelink.replace(/\.min(?=\.js)/, "")
                    : sourcelink;
                document.head.appendChild(st);
                libData.install = LOAD_STATE.LOADING;

                st.addEventListener("error", function (e) {
                    libData.install = LOAD_STATE.FAILED;
                    rejected(e.message);
                });

                st.addEventListener("load", function () {
                    libData.install = LOAD_STATE.LOADED;
                    run(unResolvedGLLibTask);
                    resolve(void 0);
                });

                if (hasCSS)
                    addLibStyle(`${BMapGLLibURL}/${lib}/src/${lib}.min.css`);
            });
        }
    });

    return Promise.allSettled(awaitJobs);
}

function addLibStyle(libUrl: string) {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = libUrl;
    document.head.appendChild(style);
}

type Tasker = (...args: any[]) => void;

const unResolvedMapTask: Tasker[] = [];
const unResolvedGLLibTask: Tasker[] = [];
const unResolvedLibTask: Tasker[] = [];

function appendUnSetteldTask(fn: Tasker, libType: "gl" | "normal" | "bmap") {
    switch (libType) {
        case "bmap":
            unResolvedMapTask.push(fn);
            break;
        case "gl":
            unResolvedGLLibTask.push(fn);
            break;
        case "normal":
            unResolvedLibTask.push(fn);
            break;
    }
}

function run(taskSets: Tasker[]) {
    taskSets.forEach((d) => d());
    taskSets.splice(0);
}

export { loader };
