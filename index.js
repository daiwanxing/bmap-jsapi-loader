if (!window && typeof process !== undefined) {
  throw Error(
    "BMap-loader should run in broswer env, system detected that your project is running on node."
  );
}

if (!window) {
  throw Error("cannot access the window object");
}

const BMAP_API_HOST = "https://api.map.baidu.com/api";

const LOADER_STATE = {
  NOT_LOAD: 1 << 1,
  LOADING: 1 << 2,
  LOADED: 1 << 3,
  FAILED: 1 << 4,
};

function loader(params) {
  const { v, type, ak } = params;
  if (!v) return Promise.reject("please set bmap version");
  if (!ak) return Promise.reject("please provide your bmap webapp ak");
  if (type && type !== "webgl")
    return Promise.reject("type value could only be webgl");
  if (type === "webgl" && v !== "1.0")
    return Promise.reject("JavaScript API GL version can only be 1.0");
  return type === "webgl" ? installGLBMap(params) : installBMap(params);
}

let installGLState = LOADER_STATE.NOT_LOAD;
let pendingGLTask = [];

function installGLBMap(params) {
  return new Promise((resolve, rejected) => {
    if (installGLState & LOADER_STATE.LOADED) resolve(BMapGL);
    else {
      if (installGLState & LOADER_STATE.LOADING) {
        pendingGLTask.push(resolve);
      } else {
        const mapUrl = new URL(BMAP_API_HOST);
        const { ak, v, type } = params;
        mapUrl.searchParams.set("ak", ak);
        mapUrl.searchParams.set("v", v);
        mapUrl.searchParams.set("type", type);
        mapUrl.searchParams.set("callback", "__BMAPGL_LOADED_CALLBACK");
        const script = document.createElement("script");
        script.src = mapUrl.toString();
        installGLState = LOADER_STATE.LOADING;
        document.body.appendChild(script);

        script.addEventListener("error", (e) => {
          installGLState = LOADER_STATE.FAILED;
          rejected(e.message);
        });

        window.__BMAPGL_LOADED_CALLBACK = function () {
          installGLBMap = LOADER_STATE.LOADED;
          resolve(BMapGL);
          pendingGLTask.forEach((resolve) => resolve(BMapGL));
          pendingGLTask.splice(0);
        };
      }
    }
  });
}

let installStateByDefault = LOADER_STATE.NOT_LOAD;
let pendingDefaultTask = [];

function installBMap(params) {
  return new Promise((resolve, rejected) => {
    if (installStateByDefault & LOADER_STATE.LOADED) resolve(BMap);
    else {
      const mapUrl = new URL(BMAP_API_HOST);
      const { ak, v } = params;
      mapUrl.searchParams.set("ak", ak);
      mapUrl.searchParams.set("v", v);
      mapUrl.searchParams.set("callback", "__BMAP_LOADED_CALLBACK");
      const script = document.createElement("script");
      script.src = mapUrl.toString();
      installGLState = LOADER_STATE.LOADING;
      document.body.appendChild(script);

      script.addEventListener("error", (e) => {
        installGLState = LOADER_STATE.FAILED;
        rejected(e.message);
      });

      window.__BMAP_LOADED_CALLBACK = function () {
        installGLBMap = LOADER_STATE.LOADED;
        resolve(BMap);
        pendingDefaultTask.forEach((resolve) => resolve(BMap));
        pendingDefaultTask.splice(0);
      };
    }
  });
}

export default loader;
