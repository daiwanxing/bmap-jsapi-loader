# BMap-loader

BMap-loader 是一个非官方的地图 jsAPI 加载器, 目标是为用户提供一个简洁易用的创建百度地图的插件。 BMap-loader 的灵感来源于 [amap-jsapi-loader](https://www.npmjs.com/package/@amap/amap-jsapi-loader), 如果您在使用中遇到了问题，欢迎提交 PR 或者 issues。

BMap-loader 特性如下：

- 支持以 UMD 和 ESM 两种方式使用；
- 以异步加载的方式加载百度地图;
- 支持加载 JSAPI JSAPI-GL 两个地图版本；
- 支持多次加载插件；
- 对于加载地图的错误用法给予报错处理；

# 使用方式

## 以 npm 方式引用

```shell
$ npm install bmap-loader --save
```

```js
import BMapLoader from "bmap-loader";

BMapLoader({
  v: "1.0",
  type: "webgl",
  ak: "填写你的ak密钥",
}).then((BMapGL) => {
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

## 以 js 脚本的方式引用

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
  }).then((BMapGL) => {
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
