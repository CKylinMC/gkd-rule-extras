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

![Version](https://img.shields.io/badge/2025--12--23-v22-blue.svg)  

**当前包含针对 27 个应用的总计 35 条规则。**    
| 应用 | 包名 | 规则 |
| --- | --- | --- |
| APKPure | com.apkpure.aegon | 启动广告 |
| 百度 | com.baidu.searchbox | 启动广告 |
| 百度地图 | com.baidu.BaiduMap | 启动广告 |
| 百度贴吧 | com.baidu.tieba | 启动广告 |
| 北京银行 | com.bankofbeijing.mobilebanking | 启动广告 |
| 北通游戏厅 | com.zuoyou.center | 启动弹窗（不稳定） |
| 北通游戏厅 | com.zuoyou.center | 启动广告 |
| 便利蜂 | com.bianlifeng.customer.android | 启动广告-加盟弹窗 |
| 哔哩哔哩 | tv.danmaku.bili | 启动广告 |
| Cellular-Z | make.more.r2d2.cellular_z | 启动广告 |
| 刺猬猫阅读 | com.kuangxiangciweimao.novel | 启动弹窗（不稳定）-主页节日弹窗 |
| 大众点评 | com.dianping.v1 | 启动弹窗-红包弹窗广告 |
| 钉钉 | com.alibaba.android.rimet | 启动广告 |
| 多点 | com.wm.dmall | 启动广告 |
| 多点 | com.wm.dmall | 启动弹窗-红包弹窗广告 |
| 多点 | com.wm.dmall | 启动弹窗-促销广告 |
| 丰巢 | com.fcbox.hiveconsumer | 启动广告 |
| 京东金融 | com.jd.jrapp | 启动广告 |
| KOOK | cn.kaiheila | 启动广告 |
| 肯德基 | com.yek.android.kfc.activitys | 启动广告 |
| 肯德基 | com.yek.android.kfc.activitys | 启动广告 |
| 肯德基 | com.yek.android.kfc.activitys | 启动弹窗 |
| 麦当劳 | com.mcdonalds.gma.cn | 启动广告 |
| 麦当劳 | com.mcdonalds.gma.cn | 启动弹窗 |
| 美团 | com.sankuai.meituan | 启动广告 |
| 菠萝包轻小说 | com.sfacg | 启动广告 |
| 菠萝包轻小说 | com.sfacg | 启动弹窗 |
| 淘宝 | com.taobao.taobao | 启动弹窗-弹窗红包广告 |
| 微博 | com.sina.weibo | 启动广告 |
| 小黑盒 | com.max.xiaoheihe | 次要启动弹窗 |
| 小米商城 | com.xiaomi.shop | 启动弹窗 |
| 有道词典 | com.youdao.dict | 启动广告 |
| 掌上京彩 | com.csii.bj.ui | 启动广告 |
| 知乎 | com.zhihu.android | 启动广告 |
<!--/DYNAMIC-->