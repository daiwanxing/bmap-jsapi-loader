# BMap-loader

![GitHub](https://img.shields.io/github/license/yinguobing/cnn-facial-landmark)
![downloads](https://img.shields.io/npm/dt/bmap-loader.svg)
![version](https://img.shields.io/npm/v/bmap-loader)

`BMap-loader` 是一个百度地图 JS-API 加载器, 旨为用户提供一个简洁易用的创建百度地图的库。 `BMap-loader` 的灵感来源于 [amap-jsapi-loader](https://www.npmjs.com/package/@amap/amap-jsapi-loader)。

### 特点

🎨 支持以 UMD 和 ESM 两种模块方式使用。

🛠️ 完整的 typescript 类型支持。

⚡ 以异步加载的方式加载百度地图脚本

🌱 支持加载 JSAPI / JSAPI-GL 两个版本。

📃 支持加载百度地图开源库。

🔑 友好的加载错误提示。

# 用法

## 以 npm 方式使用

```shell
$ npm install bmap-loader --save
```

```js
import BMapLoader from "bmap-loader";

// 使用 Javascrtip-API 3.0 版本的百度地图
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

// 使用 Javascrtip-API GL 版本的百度地图
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

## 以普通脚本引用外链使用

```html
<script src="../dist/umd.js"></script>
<script>
    BMapLoader({
        v: "1.0",
        type: "webgl",
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
</script>
```

## 安装百度地图工具库

### 百度地图 GL 版本的开源库是不需要指定库的 version，但是 3.0 及以下百度地图版本在使用开源库时需要指定库的版本.

> [点击链接](https://lbsyun.baidu.com/index.php?title=jspopular3.0/openlibrary)查看 3.0 及以下版本的工具库的版本列表

> [点击链接](https://github.com/huiyan-fe/BMapGLLib)查看 GL 版本的可用开源库

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

提交 issue 前，请尽可能的能提供一个可复现的 demo 放在 issue 中。

**最后，如果你觉得这个插件还不错，还请给我一个 ⭐ 支持下我。**

# License

MIT
