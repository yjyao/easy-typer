(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{3971:function(t,n,s){"use strict";s.r(n);var a=function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.html)}})},e=[],i=s("9ab4"),o=s("1b40"),c="## 下载地址\n\n本程序可从以下地址下载：\n\n### QQ群\n> 群号 `787343469` 群文件下载\n\n### 百度网盘\n> [木易跟打器发布记录] - [https://pan.baidu.com/s/16UKkWAnH9nk3Na45RGe1jg?pwd=8888](https://pan.baidu.com/s/16UKkWAnH9nk3Na45RGe1jg?pwd=8888) 提取码8888\n",l=s("339e"),r=s.n(l);const d=new r.a.Converter;d.setOption("tables",!0),d.setOption("tasklists",!0);let p=class extends o["c"]{get html(){return d.makeHtml(c)}};p=Object(i["a"])([o["a"]],p);var m=p,v=m,u=s("2877"),C=Object(u["a"])(v,a,e,!1,null,null,null);n["default"]=C.exports},"3c72":function(t,n,s){"use strict";s("fed8")},"88a5":function(t,n,s){},9713:function(t,n,s){"use strict";s("88a5")},e4bb:function(t,n,s){"use strict";s.r(n);var a=function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"history-page"},[n("el-container",{attrs:{direction:"vertical"}},[n("IndicatorSimple"),n("Achievements")],1)],1)},e=[],i=s("9ab4"),o=s("1b40"),c=function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"history-indicator"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{xs:24,sm:12,lg:8,md:8,xl:6}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"chartCard"},[n("div",{staticClass:"chartTop"},[n("div",{staticClass:"metaWrap"},[n("div",{staticClass:"meta"},[n("span",[t._v("今日跟打记录")]),n("span",{staticClass:"action"},[n("el-tooltip",{attrs:{effect:"dark",content:"今日跟打记录指标展示",placement:"top"}},[n("i",{staticClass:"el-icon-info"})])],1)]),n("div",{staticClass:"total"},[n("span",[t._v(t._s(t._f("numberWithCommas")(t.todayWords))),n("span",{staticClass:"total-label"},[t._v(" 字")])])])])]),n("div",{staticClass:"content",staticStyle:{height:"46px"}},[n("div",{staticClass:"contentFixed"},[n("div",{staticClass:"trendItem",staticStyle:{"margin-right":"20px"}},[n("span",[t._v("正确字数"),n("span",{staticClass:"trendText"},[t._v(t._s(t._f("numberWithCommas")(t.todayWords-t.todayErrorWords)))])]),n("span",{staticClass:"down"},[n("i",{staticClass:"el-icon-check"})])]),n("div",{staticClass:"trendItem",attrs:{title:""}},[n("span",[t._v("错误字数"),n("span",{staticClass:"trendText"},[t._v(t._s(t._f("numberWithCommas")(t.todayErrorWords)))])]),n("span",{staticClass:"up"},[n("i",{staticClass:"el-icon-close"})])])])]),n("div",{staticClass:"footer"},[n("div",{staticClass:"field"},[n("span",{staticClass:"label"},[t._v("连续跟打天数")]),n("span",{staticClass:"number"},[t._v(t._s(t.consecutiveDays))])])])])])],1),n("el-col",{attrs:{xs:24,sm:12,lg:8,md:8,xl:6}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"chartCard"},[n("div",{staticClass:"chartTop"},[n("div",{staticClass:"metaWrap"},[n("div",{staticClass:"meta"},[n("span",[t._v("跟打总记录")]),n("span",{staticClass:"action"},[n("el-tooltip",{attrs:{effect:"dark",content:"跟打总记录指标展示",placement:"top"}},[n("i",{staticClass:"el-icon-info"})])],1)]),n("div",{staticClass:"total"},[n("span",[t._v(t._s(t._f("numberWithCommas")(t.totalWords))),n("span",{staticClass:"total-label"},[t._v(" 字")])])])])]),n("div",{staticClass:"content",staticStyle:{height:"46px"}},[n("div",{staticClass:"contentFixed"},[n("div",{staticClass:"trendItem",staticStyle:{"margin-right":"20px"}},[n("span",[t._v("正确字数"),n("span",{staticClass:"trendText"},[t._v(t._s(t._f("numberWithCommas")(t.totalWords-t.totalErrorWords)))])]),n("span",{staticClass:"down"},[n("i",{staticClass:"el-icon-check"})])]),n("div",{staticClass:"trendItem",attrs:{title:""}},[n("span",[t._v("错误字数"),n("span",{staticClass:"trendText"},[t._v(t._s(t._f("numberWithCommas")(t.totalErrorWords)))])]),n("span",{staticClass:"up"},[n("i",{staticClass:"el-icon-close"})])])])]),n("div",{staticClass:"footer"},[n("div",{staticClass:"field"},[n("span",{staticClass:"label"},[t._v("跟打总天数")]),n("span",{staticClass:"number"},[t._v(t._s(t.totalDays))])])])])])],1)],1)],1)},l=[],r=s("4bb5");const d=Object(r["d"])("summary");let p=class extends o["c"]{get version(){return"0.2.4"}};Object(i["a"])([d.Getter("todayWords")],p.prototype,"todayWords",void 0),Object(i["a"])([d.Getter("todayErrorWords")],p.prototype,"todayErrorWords",void 0),Object(i["a"])([d.Getter("totalWords")],p.prototype,"totalWords",void 0),Object(i["a"])([d.Getter("totalErrorWords")],p.prototype,"totalErrorWords",void 0),Object(i["a"])([d.Getter("consecutiveDays")],p.prototype,"consecutiveDays",void 0),Object(i["a"])([d.Getter("totalDays")],p.prototype,"totalDays",void 0),p=Object(i["a"])([o["a"]],p);var m=p,v=m,u=(s("9713"),s("2877")),C=Object(u["a"])(v,c,l,!1,null,null,null),b=C.exports,h=s("4c64");let _=class extends o["c"]{};_=Object(i["a"])([Object(o["a"])({components:{IndicatorSimple:b,Achievements:h["a"]}})],_);var y=_,f=y,g=(s("3c72"),Object(u["a"])(f,a,e,!1,null,null,null));n["default"]=g.exports},f820:function(t,n,s){"use strict";s.r(n);var a=function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.html)}})},e=[],i=s("9ab4"),o=s("1b40"),c='<img style="max-height:400px;" alt="木易跟打器macOS版" src="img/logo-lanscape%402x.png">\n\n# 木易跟打器macOS版 {{ version }}\n\n> macOS上可直接载文的跟打器\n\n本人是个五笔爱好者，也一直在使用五笔，曾经(差不多10年前了)也做过Windows平台的跟打器[易跟打Windows版](https://github.com/owenyang0/FollowTyperAndSender)。\n\n从 `Windows` 转到 `Mac` 之后，苦于`macOS`没有可用的跟打器，偶然看到了[QT](https://gitee.com/hotleave/quick-typing)基于他们的代码做一个`macOS`上可直接载文用的跟打器，外理了一些macOS系统的兼容，于是便有了这个项目。\n\n<img style="max-height:400px;" alt="木易跟打器macOS版" src="img/ui%402x.png">\n\n## 一、快速上手\n因为需要载文，在`系统偏好设置-安全性与隐私-辅助功能`中，允许木易跟打器控制电脑\n\n<img width="500" alt="木易跟打器macOS版" src="img/setting.png">\n\n同时由于QQ macOS版本的限制，无法全文获取，可通过以下方式载文\n- 鼠标移至聊天窗口对应消息位置\n- 按`F4`载入文本\n- 开始打字\n\n## 二、主要功能\n\n- [x] QQ群直接载文\n- [x] 赛文跟打\n- [x] 词语提示\n- [x] 本地发文-复合指标\n- [x] 成绩发送\n\n## 三、Contributing\n\n- 有问题，提个[Issue](https://github.com/owenyang0/easy-typer/issues)\n- 有想法，提个[Issue](https://github.com/owenyang0/easy-typer/issues)\n- 或通过QQ群联系我：**木易跟打器** `787343469`\n- 有能力，提个[PR](https://github.com/owenyang0/easy-typer/pulls)\n\n## 四、声明\n\n1. 本程序系私人用途，非商业产品，即不提供相应的服务\n1. 本程序所有数据均保存在用户浏览器的[IndexedDB](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API)中，**不会上传到任何服务器**\n1. 如果有侵权行为，请联系：`songallica@gmail.com`，会在看到后第一时间取消\n1. 用户使用本程序所引发的一切问题，由用户自己承担，本程序概不负责\n1. **使用本程序则旨在接受本条及以上条款**\n\n## 五、操作说明\n\n### 5.1 快捷键\n\n- `F4`：激活QQ聊天窗口，从当前鼠标位置载文（确保鼠标在需要载文的消息上面）\n- `Ctrl` + `v`：从剪切板载文（Mac下为`Cmd` + `v`，与粘贴快捷键一致）\n- `F3`：重打\n- `Esc`：暂停\n- `Enter`: 继续\n\n\n### 5.2 载文\n由于QQ macOS版本的限制，无法全文获取。可将鼠标移至聊天窗口对应消息位置，按`F4`载入文本。\n\n1. 『赛文文字』从QQ群使用指令获取赛文，然后鼠标移至赛文外，按`F4`即可\n2. 『自由文本』将要打的文本复制到剪切板，然后到主页粘贴即可\n\n### 5.3 打文\n\n> 载文后，下方的输入框自动获取焦点，当按下任**意键**时，开始计时。\n\n> 打文过程中可以使用`Esc`暂停。暂停后，使用`Enter`继续，按下`Enter`后，输入框自动获取焦点，并立即继续计时。\n\n> 如果打的过程中，或完成后，对结果不满意，可以按`F3`重新开始。计时会清零，并等待第一个键按下后，再次开始计时。\n\n> 如果赛文较长，而对照文本区域无法完全显示，那么在打文过程中，对照文本会自动根据输入进度移动滚动条，方便跟打。\n\n> 如果在打文时输入错误的字词，会以指定颜色的背景（默认是红色）显示。\n\n> 跟打时，必须将赛文**全部输入正确**才会停止计时，如果发现打完最后一个字时，并没有提示完成，计时还在继续，则需要到对照文本中查找被标成错误背景的字词并加以修正，直至全部正确。\n\n#### 词语提示\n\n> 程序提供词语提示功能，方便前期掌握词库中的词语。\n\n> 在词语提示功能打开时，程序会将赛文中的词语去词库中匹配，并计算出**码长最短**的一个组合，这个码长就是理论码长。\n\n> 开始输入后，如果没按词语提示的内容输入，那么提示的内容会同时进行调整，提示从当前位置开始的码长最短的组合。\n\n基础的词语提示以间隔加粗的方式展示，如：“这个**码长**短”。在此基础上，还提供：\n\n- 码长提示：用不同的颜色（不是背景颜色）来区分1，2，3，4码的字词。\n- 选重提示：在需要选重的字词下方增加下划线，并在下划线下方显示选重键。如果某个字词不需要选重，则下方什么都不显示。\n- 编码提示：在字词下方显示该字词的编码（不含选重键）。除了该方式外，界面右上角也有编码及选重键的提示。\n- 标点顶屏：在可以使用标点顶屏的字词下显示顶屏提示（默认是“顶”字），如果某个首选字词后是标点，则可以利用标点直接将首选上屏，这样可以减少1码。\n\n***词语提示需要上传码表后才可以使用，具体见设置中的相关内容***\n\n### 5.4 发送成绩\n\n跟打结束后，成绩会**自动**发送至QQ群当前激活的窗口并发送，并复制到系统剪切板\n\n如不想自动发送成绩，可在左侧开启 **`潜水`** 模式\n\n### 5.5 查看理想编码\n\n程序能根据词库中的词条计算出理想码长，也可以计算出该码长对应的编码。点击左侧面板中的`理想`二字，即可查看理想编码对应的编码。\n\n### 5.6 查看录入的编码\n\n程序会记录打文过程中按下的每一个按键，点击左侧面板中的`码长`二字，即可查看打文过程中按下的所有按键。\n\n## 六、设置\b\n\n> 设置中的变更，除了上传码表文件会自动保存外，其余的变动均需手动点击下方的”保存按钮进行保存\n\n- `保存`: 将变更写入数据库\n- `重置`：恢复设置到数据库中的状态\n- `恢复默认`: 将所有设置恢复到默认状态\n\n### 6.1 基础设置\n\n- `自动重新开始`：当删除输入的所有文字后自动重新开始\n- `结束条件`: 赛文结束的条件，默认为赛文中所有的字及标点都正确时结束。`打完`则比较赛文和输入的长度，一致就认为结束。但在结束时如果输入的内容中有错字，则每错一个字罚5个字，会导致速度降低\n\n### 6.2 词提设置\n\n- `词语提示`: 总开关，关闭时不会进行词语提示，默认关闭\n- `码表文件`: 输入法使用的码表文件，文件使用`多多格式`，`UTF-8`编码，如：\n\n  ```tsv\n  五  pf\n  五笔    pfr\n  笔  rkq\n  ```\n\n- `提示选项`：选择提示内容，`词语`是必选的。\n- `候选词条数`: 输入法每页候选词条数，对于需要翻页的字词，会的选重提示上增加`翻页键`。默认：9\n- `最大候选词位置`：为避免某些生僻词位置过去靠后，可以通过设置该值，将位置过于靠后的词略掉，拆成位置更靠前一些的短词或单字。该设置可能会影响码长。默认：0\n- `翻页键`：指定的词条位置比较靠后，需要翻页才能选择时，会在选重码提示上增加该符号。只需要指定提示的符号，方便自己识别，即使输入法设置了多组翻页键。默认：+\n- `选重键`：提示时展示的选重键。每个字符表示一个选重键，字符数不得少于`候选词条数`。默认：`␣23456789`\n- `选重键文本`：选重键对应的文本，当这些字符出现在字词后面时，**必须**手动选择词条。默认：` 234567890;+\'＋；’`\n- `标点顶屏提示`: 顶屏提示符号\n- `四码唯一自动上屏`：如题\n- `第五码首选上屏`：如题\n\n### 6.3 成绩设置\n\n- 标识：赛文标识，如`第999段`\n- 速度：每分钟输入的字数，数值越大说明打字的速度越快\n- 击键：每秒钟敲击按键的次数\n- 码长：平均每个字（含标点符号）所需要的按键次数\n- 理想码长：程序计算出的最短码长\n- 字数：文章总字数\n- 错字：结束时输入的错字数\n- 用时：总时间，单位秒\n- 暂停：打文时暂停的次数和总暂停时长\n- 键准：按键准确率，退格数及回改数作为失误按键来源，算法：`(总按键数 - 退格数 - 回改数 * 平均码长) / 总按键数`\n- 键法：左手与右手按键数的均衡性，算法：`(1 - abs(左 - 右) / (左 + 右)) * 100`\n- 左：左手按键次数\n- 右：右手按键次数\n- 打词：有多少字是通过词组的方式输入的\n- 打词率：打词数占总字数的比率\n- 选重：要输入的字词不在首选位置的次数\n- 回改：输入错误被删除的字数\n- 键数：总按键次数\n- 退格：退格键被按次数\n- 回车：回车键被按次数\n- 重打：重新打的次数\n- 版本：版本信息\n- 输入法：所使用的输入法名称\n- 个性签名：想立的Flag\n\n### 6.4 标点设置\n\n标点用于：\n  - 顶屏计算：仅用于顶屏计算，不将标点加入码表\n  - 码表及顶屏计算：将标点加入码表，防止码表中的标点码长过长\n\n> 如果需要将标点加入码表，则需要重新导入词库文件\n\n### 6.5 载文设置\n\n- `去除空格`: 移除文章中的所有空白字符，包括：空格、回车、换行、制表符等\n\n',l=s("339e"),r=s.n(l);const d=new r.a.Converter;d.setOption("tables",!0),d.setOption("tasklists",!0);let p=class extends o["c"]{constructor(){super(...arguments),this.version="0.2.4(3)"}get html(){return d.makeHtml(c.replace("{{ version }}",this.version))}created(){document.addEventListener("click",t=>{const n=t.target;n&&"A"===(null===n||void 0===n?void 0:n.tagName)&&(t.preventDefault(),window.open(n.href,"_blank"))})}destroyed(){document.removeEventListener("click",()=>null)}};p=Object(i["a"])([o["a"]],p);var m=p,v=m,u=s("2877"),C=Object(u["a"])(v,a,e,!1,null,null,null);n["default"]=C.exports},fed8:function(t,n,s){}}]);