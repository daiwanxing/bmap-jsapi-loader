(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g.BMapLoader=f());})(this,(function(){'use strict';function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}const LOAD_STATE = {
  NOT_LOAD: 1 << 1,
  LOADING: 1 << 2,
  LOADED: 1 << 3,
  FAILED: 1 << 4
};
const BMapGLLib = new Map([["DrawingManager", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: true
}], ["AreaRestriction", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["CustomOverlay", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["DistanceTool", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["Lushu", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["TrackAnimation", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["RichMarker", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}]]);
// https://lbsyun.baidu.com/index.php?title=jspopular3.0/openlibrary
const BMapLib = new Map([["Heatmap", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["LuShu", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["AreaRestriction", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["RectangleZoom", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["RichMarker", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["InfoBox", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["CurveLine", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["DrawingManager", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: true
}], ["SearchInfoWindow", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: true
}], ["MarkerClusterer", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}], ["TextIconOverlay", {
  install: LOAD_STATE.NOT_LOAD,
  hasCSS: false
}]]);const BMAP_API_HOST = "https://api.map.baidu.com";
let BMAP_STATE = LOAD_STATE.NOT_LOAD;
const BMAP_GL = "webgl";
function loader(_x) {
  return _loader.apply(this, arguments);
}
function _loader() {
  _loader = _asyncToGenerator(function* (params) {
    const ak = params.ak,
      v = params.v,
      type = params.type,
      library = params.library;
    if (!ak) return Promise.reject("please provide map ak");
    if (typeof ak !== "string") return Promise.reject(`illegal ak value: ${ak}`);
    if (!v) return Promise.reject("please set bmap version");
    if (type && type !== BMAP_GL) return Promise.reject(`expected type value webgl but got value ${type}`);
    return new Promise((resolve, rejected) => {
      if (BMAP_STATE & LOAD_STATE.LOADED) return resolve(null);
      if (BMAP_STATE & LOAD_STATE.FAILED) return rejected("install map script failed");
      if (BMAP_STATE & LOAD_STATE.LOADING) return appendUnSetteldTask(resolve, "bmap");
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
          (type ? addBMapGLLibrary(library) : addBMapLibrary(library)).then(values => {
            resolve(null);
            run(unResolvedMapTask);
            const failedRecords = values.filter(record => record.status === "rejected");
            failedRecords.forEach(d => console.error(d.reason));
          }).catch(rejected);
        }
      };
      document.head.appendChild(script);
    });
  });
  return _loader.apply(this, arguments);
}
function addBMapLibrary(libs) {
  const awaitJobs = libs.map(data => {
    const lib = data.lib,
      version = data.version,
      disableZip = data.disableZip;
    const libData = BMapLib.get(lib);
    if (!libData) {
      console.warn("It's seems like you provide uncorrect lib name, please checkout your lib name spell");
      return Promise.resolve();
    } else {
      const install = libData.install,
        hasCSS = libData.hasCSS;
      if (install & LOAD_STATE.LOADED) return Promise.resolve();
      if (install & LOAD_STATE.FAILED) return Promise.reject(`try install library ${lib} failed`);
      if (install & LOAD_STATE.LOADING) return new Promise(resolve => appendUnSetteldTask(resolve, "normal"));
      return new Promise((resolve, rejected) => {
        const st = document.createElement("script");
        const sourcelink = `${BMAP_API_HOST}/library/${lib}/${version}/src/${lib}.min.js`;
        st.src = disableZip ? sourcelink.replace(/\.min(?=\.js)/, "") : sourcelink;
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
        if (hasCSS) addLibStyle(`${BMAP_API_HOST}/library/${lib}/${version}/src/${lib}.min.css`);
      });
    }
  });
  return Promise.allSettled(awaitJobs);
}
// GL版的开源工具库放到了百度云的BOS存储上, 参见右侧链接 https://github.com/huiyan-fe/BMapGLLib
const BMapGLLibURL = "https://mapopen.bj.bcebos.com/github/BMapGLLib";
function addBMapGLLibrary(libs) {
  // 对于已经安装了的lib，可以直接resolve
  const awaitJobs = libs.map(data => {
    const lib = data.lib,
      disableZip = data.disableZip;
    const libData = BMapGLLib.get(lib);
    if (!libData) {
      console.warn("It's seems like you provide uncorrect GLlib name, please checkout your GLlib name spell");
      return Promise.resolve();
    } else {
      const install = libData.install,
        hasCSS = libData.hasCSS;
      if (install & LOAD_STATE.LOADED) return Promise.resolve();
      if (install & LOAD_STATE.FAILED) return Promise.reject(`try install GL-library ${lib} failed`);
      if (install & LOAD_STATE.LOADING) return new Promise(resolve => appendUnSetteldTask(resolve, "gl"));
      return new Promise((resolve, rejected) => {
        const st = document.createElement("script");
        const sourcelink = `${BMapGLLibURL}/${lib}/src/${lib}.min.js`;
        st.src = disableZip ? sourcelink.replace(/\.min(?=\.js)/, "") : sourcelink;
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
        if (hasCSS) addLibStyle(`${BMapGLLibURL}/${lib}/src/${lib}.min.css`);
      });
    }
  });
  return Promise.allSettled(awaitJobs);
}
function addLibStyle(libUrl) {
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = libUrl;
  document.head.appendChild(style);
}
const unResolvedMapTask = [];
const unResolvedGLLibTask = [];
const unResolvedLibTask = [];
function appendUnSetteldTask(fn, libType) {
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
function run(taskSets) {
  taskSets.forEach(d => d());
  taskSets.splice(0);
}return loader;}));