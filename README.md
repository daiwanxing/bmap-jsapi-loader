# BMap-loader

BMap-loader 是一个百度地图 jsAPI 加载器, 旨为用户提供一个简洁易用的创建百度地图的库。 BMap-loader 的灵感来源于 [amap-jsapi-loader](https://www.npmjs.com/package/@amap/amap-jsapi-loader)。

### 特点

 🎨 支持以 UMD 和 ESM 两种模块方式使用。
  
 🛠️ 完整的 typescript 类型支持。
 
 ⚡ 以异步加载的方式加载百度地图脚本
 
 🌱 支持加载 JSAPI / JSAPI-GL 两个版本。
  
 📃 同时支持加载百度地图工具库。
 
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

## 以脚本引用外链使用

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

## 安装百度地图js工具库

### 百度地图GL版本的工具库是不需要指定库的version，但是3.0以及3.0以下的版本安装库的时候需要指定库的版本.

```js
  BMapLoader({
    v: "3.0",
    ak: "填写你的ak密钥",
    // 加载百度地图的工具库
    library: [
      {
        lib: "DrawingManager",
        version: "1.5"
       }
    ]
  })
```

## RoadMap

- [x] 改用 typescript 重写，增强智能提示。
- [x] 支持加载百度地图的插件库。

# License

MIT
