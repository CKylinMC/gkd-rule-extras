> [!WARNING]
> 你当前在dist分支，此分支用于存储构建产物。如果需要添加规则，请前往main分支。

# gkd-rule-extras
自用的不在内置规则列表的补充规则。不包含除屏蔽广告外的功能（例如抢红包）。

## 使用方法

通过订阅链接：

*长按或右键链接选择复制链接地址*

* [Fastly jsDelivr (国内可访问)](https://fastly.jsdelivr.net/gh/ckylinmc/gkd-rule-extras@dist/dist/cky-gkd-rules.json)
* [Github](https://github.com/CKylinMC/gkd-rule-extras/raw/dist/dist/cky-gkd-rules.json)
* [Statically](https://cdn.statically.io/gh/ckylinmc/gkd-rule-extras@dist/dist/cky-gkd-rules.json)

## 补充规则

补充规则可以直接在rules目录下添加对应的json文件，文件名方便辨识即可，每个文件对应一个APP。

合成规则：

```
npm run build
```