# BMap-loader

![GitHub](https://img.shields.io/github/license/yinguobing/cnn-facial-landmark)
![downloads](https://img.shields.io/npm/dt/bmap-loader.svg)
![version](https://img.shields.io/npm/v/bmap-loader)

`BMap-loader` 是一个小巧的易于加载百度地图以及地图开源工具库的插件, `BMap-loader` 的灵感来源于 [amap-jsapi-loader](https://www.npmjs.com/package/@amap/amap-jsapi-loader)。

### 特点

- 🎨支持以 UMD 和 ESM 两种模块方式使用
- 🪄为 TypeScript 用户提供完善的类型支持
- ⚡异步加载百度地图脚本
- 💌可加载 bmap 3.0 或者 bmap-gl 两个版本
- 💡支持加载百度地图开源库
- 📦提供完善的单元测试

# 安装

## 以包管理工具的方式安装

### 使用 NPM:
```shell
$ npm install bmap-loader --save
```

### 使用 Yarn:

```shell
$ yarn add bmap-loader --save
```

### 使用 PNPM:

```shell
$ pnpm install bmap-loader --save
```

## 以 CDN 的方式使用

```js
<script src="https://cdn.jsdelivr.net/npm/bmap-loader@0.1.0/dist/umd.min.js"></script>
```

## 快速开始

### 示例

```js
import BMapLoader from "bmap-loader";

// 安装 Javascrtip-API 3.0 版本的百度地图
BMapLoader({
    v: "3.0",
    ak: "填写你的ak密钥",
}).then(() => {
    // 在 then 函数中 BMap 对象已经挂载到了 window 对象上，所以我们可以安全的访问 BMap 对象的属性和方法
    const map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    map.addControl(
        new BMap.MapTypeControl({
            mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
    );
    map.enableScrollWheelZoom(true);
}).catch(error => {
    alert(error);
})

// 安装 Javascrtip-API GL 版本的百度地图
BMapLoader({
    v: "1.0",
    type: "webgl"
    ak: "填写你的ak密钥",
}).then(() => {
    const map = new BMapGL.Map("map");
    map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
    map.addControl(
        new BMapGL.MapTypeControl({
            mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
        })
    );
    map.enableScrollWheelZoom(true);
});
```

## 使用地图工具库

### 百度地图 GL 版本的开源库不需要指定版本，但是安装适用于 bmap 3.0 的开源库需要设置库的版本.

> [点击链接](https://lbsyun.baidu.com/index.php?title=jspopular3.0/openlibrary)查看 bmap 3.0 的开源库列表

> [点击链接](https://github.com/huiyan-fe/BMapGLLib)查看 bmap GL 版本的开源库列表

```js
BMapLoader({
    v: "3.0",
    ak: "填写你的ak密钥",
    // 加载百度地图的工具库
    library: [
        {
            lib: "DrawingManager",
            version: "1.5",
        },
        {
            lib: "MarkerClusterer",
            version: "1.2",
            // bmap-loader 默认请求开源库的压缩后的脚本文件，如果需要请求未压缩的源文件，设置 `disableZip: true` 即可。
            disableZip: true,
        },
    ],
});
```

## 👉 [在线 DEMO](https://codesandbox.io/s/sad-firefly-nvbl4c?file=/src/App.vue)

## 🐛 提交 issue

提交 issue 前，请尽可能的能提供一个可复现的 demo 链接放在 issue 中。

## 结尾

如果你觉得这个插件还不错，请给我一个 ⭐ 支持下我。

# License

MIT © 2023-PRESENT Wonder Dai
