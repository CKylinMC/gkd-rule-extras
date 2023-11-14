# gkd-rule-extras
自用的不在内置规则列表的补充规则。不包含除屏蔽广告外的功能（例如抢红包）。

## 使用方法

通过订阅链接：

*长按或右键链接选择复制链接地址*

* [Fastly jsDelivr (国内可访问)](https://fastly.jsdelivr.net/gh/ckylinmc/gkd-rule-extras@main/dist/cky-gkd-rules.json)
* [Github](https://github.com/CKylinMC/gkd-rule-extras/raw/main/dist/cky-gkd-rules.json)
* [Statically](https://cdn.statically.io/gh/ckylinmc/gkd-rule-extras@main/dist/cky-gkd-rules.json)

## 补充规则

补充规则可以直接在rules目录下添加对应的json文件，文件名方便辨识即可，每个文件对应一个APP。

合成规则：

```
npm run build
```

提交到仓库时Action会自动执行合成规则操作。

<!--[DO NOT MODIFY ANYTHING BELOW]-->
<!--DYNAMIC-->
## 补充规则一览表
| 应用 | 包名 | 规则 |
| --- | --- | --- |
| 北京银行 | com.bankofbeijing.mobilebanking | 开屏广告 |
| 北通游戏厅 | com.zuoyou.center | 启动弹窗 |
| 北通游戏厅 | com.zuoyou.center | 开屏广告 |
| 便利蜂 | com.bianlifeng.customer.android | 启动广告-加盟弹窗 |
| Cellular-Z | make.more.r2d2.cellular_z | 启动广告 |
| 刺猬猫阅读 | com.kuangxiangciweimao.novel | 主页节日弹窗 |
| 多点 | com.wm.dmall | 启动广告 |
| 多点 | com.wm.dmall | 弹窗广告 |
| 菠萝包轻小说 | com.sfacg | 启动广告 |
| 淘宝 | com.taobao.taobao | 弹窗红包广告 |
<!--/DYNAMIC-->