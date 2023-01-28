# BMap-loader

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

BMapLoader({
  v: "1.0",
  type: "webgl",
  ak: "填写你的ak密钥",
}).then(() => {
  // window.BMapGL
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
    // 加载百度地图的工具库
    library: [
      {
        lib: "DrawingManager"
       }
    ]
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

### 百度地图 GL 版本的开源库是不需要指定库的 version，但是3.0及以下百度地图版本在使用开源库时需要指定库的版本.

> [点击链接](https://lbsyun.baidu.com/index.php?title=jspopular3.0/openlibrary)查看 3.0 及以下版本的工具库的版本列表

> [点击链接](https://github.com/huiyan-fe/BMapGLLib)查看GL版本的可用开源库

```js
  BMapLoader({
    v: "3.0",
    ak: "填写你的ak密钥",
    // 加载百度地图的工具库
    library: [
      {
        lib: "DrawingManager",
        version: "1.5"
       },
       {
        lib: "MarkerClusterer",
        version: "1.2"
       }
    ]
  })
```

### 如果你在使用过程中遇到任何问题，请提交 issue，谢谢。

### 如果你觉得这个插件还不错，还请给我一个⭐支持下我。

# License

MIT
