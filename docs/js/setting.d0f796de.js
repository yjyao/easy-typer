(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{11:function(e,t){},1132:function(e,t,n){(function(t,i){e.exports=i(n("21bf"))})(0,(function(e){return function(){var t=e,n=t.lib,i=n.WordArray,o=t.enc;o.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,i=this._map;e.clamp();for(var o=[],r=0;r<n;r+=3)for(var a=t[r>>>2]>>>24-r%4*8&255,s=t[r+1>>>2]>>>24-(r+1)%4*8&255,l=t[r+2>>>2]>>>24-(r+2)%4*8&255,c=a<<16|s<<8|l,u=0;u<4&&r+.75*u<n;u++)o.push(i.charAt(c>>>6*(3-u)&63));var f=i.charAt(64);if(f)while(o.length%4)o.push(f);return o.join("")},parse:function(e){var t=e.length,n=this._map,i=this._reverseMap;if(!i){i=this._reverseMap=[];for(var o=0;o<n.length;o++)i[n.charCodeAt(o)]=o}var a=n.charAt(64);if(a){var s=e.indexOf(a);-1!==s&&(t=s)}return r(e,t,i)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function r(e,t,n){for(var o=[],r=0,a=0;a<t;a++)if(a%4){var s=n[e.charCodeAt(a-1)]<<a%4*2,l=n[e.charCodeAt(a)]>>>6-a%4*2,c=s|l;o[r>>>2]|=c<<24-r%4*8,r++}return i.create(o,r)}}(),e.enc.Base64}))},"1fad":function(e,t,n){"use strict";n("db42")},"21bf":function(e,t,n){(function(t){(function(t,n){e.exports=n()})(0,(function(){var e=e||function(e,i){var o;if("undefined"!==typeof window&&window.crypto&&(o=window.crypto),"undefined"!==typeof self&&self.crypto&&(o=self.crypto),"undefined"!==typeof globalThis&&globalThis.crypto&&(o=globalThis.crypto),!o&&"undefined"!==typeof window&&window.msCrypto&&(o=window.msCrypto),!o&&"undefined"!==typeof t&&t.crypto&&(o=t.crypto),!o)try{o=n(11)}catch(b){}var r=function(){if(o){if("function"===typeof o.getRandomValues)try{return o.getRandomValues(new Uint32Array(1))[0]}catch(b){}if("function"===typeof o.randomBytes)try{return o.randomBytes(4).readInt32LE()}catch(b){}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),s={},l=s.lib={},c=l.Base=function(){return{extend:function(e){var t=a(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),u=l.WordArray=c.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=t!=i?t:4*e.length},toString:function(e){return(e||d).stringify(this)},concat:function(e){var t=this.words,n=e.words,i=this.sigBytes,o=e.sigBytes;if(this.clamp(),i%4)for(var r=0;r<o;r++){var a=n[r>>>2]>>>24-r%4*8&255;t[i+r>>>2]|=a<<24-(i+r)%4*8}else for(var s=0;s<o;s+=4)t[i+s>>>2]=n[s>>>2];return this.sigBytes+=o,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=c.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var t=[],n=0;n<e;n+=4)t.push(r());return new u.init(t,e)}}),f=s.enc={},d=f.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,i=[],o=0;o<n;o++){var r=t[o>>>2]>>>24-o%4*8&255;i.push((r>>>4).toString(16)),i.push((15&r).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i+=2)n[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new u.init(n,t/2)}},p=f.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,i=[],o=0;o<n;o++){var r=t[o>>>2]>>>24-o%4*8&255;i.push(String.fromCharCode(r))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i++)n[i>>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new u.init(n,t)}},m=f.Utf8={stringify:function(e){try{return decodeURIComponent(escape(p.stringify(e)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(e){return p.parse(unescape(encodeURIComponent(e)))}},h=l.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new u.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=m.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n,i=this._data,o=i.words,r=i.sigBytes,a=this.blockSize,s=4*a,l=r/s;l=t?e.ceil(l):e.max((0|l)-this._minBufferSize,0);var c=l*a,f=e.min(4*c,r);if(c){for(var d=0;d<c;d+=a)this._doProcessBlock(o,d);n=o.splice(0,c),i.sigBytes-=f}return new u.init(n,f)},clone:function(){var e=c.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),v=(l.Hasher=h.extend({cfg:c.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new v.HMAC.init(e,n).finalize(t)}}}),s.algo={});return s}(Math);return e}))}).call(this,n("c8ba"))},"2b79":function(e,t,n){(function(t,i,o){e.exports=i(n("21bf"),n("df2f"),n("5980"))})(0,(function(e){return function(){var t=e,n=t.lib,i=n.Base,o=n.WordArray,r=t.algo,a=r.MD5,s=r.EvpKDF=i.extend({cfg:i.extend({keySize:4,hasher:a,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){var n,i=this.cfg,r=i.hasher.create(),a=o.create(),s=a.words,l=i.keySize,c=i.iterations;while(s.length<l){n&&r.update(n),n=r.update(e).finalize(t),r.reset();for(var u=1;u<c;u++)n=r.finalize(n),r.reset();a.concat(n)}return a.sigBytes=4*l,a}});t.EvpKDF=function(e,t,n){return s.create(n).compute(e,t)}}(),e.EvpKDF}))},"38ba":function(e,t,n){(function(t,i,o){e.exports=i(n("21bf"),n("2b79"))})(0,(function(e){e.lib.Cipher||function(t){var n=e,i=n.lib,o=i.Base,r=i.WordArray,a=i.BufferedBlockAlgorithm,s=n.enc,l=(s.Utf8,s.Base64),c=n.algo,u=c.EvpKDF,f=i.Cipher=a.extend({cfg:o.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){a.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?w:_}return function(t){return{encrypt:function(n,i,o){return e(i).encrypt(t,n,i,o)},decrypt:function(n,i,o){return e(i).decrypt(t,n,i,o)}}}}()}),d=(i.StreamCipher=f.extend({_doFinalize:function(){var e=this._process(!0);return e},blockSize:1}),n.mode={}),p=i.BlockCipherMode=o.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),m=d.CBC=function(){var e=p.extend();function n(e,n,i){var o,r=this._iv;r?(o=r,this._iv=t):o=this._prevBlock;for(var a=0;a<i;a++)e[n+a]^=o[a]}return e.Encryptor=e.extend({processBlock:function(e,t){var i=this._cipher,o=i.blockSize;n.call(this,e,t,o),i.encryptBlock(e,t),this._prevBlock=e.slice(t,t+o)}}),e.Decryptor=e.extend({processBlock:function(e,t){var i=this._cipher,o=i.blockSize,r=e.slice(t,t+o);i.decryptBlock(e,t),n.call(this,e,t,o),this._prevBlock=r}}),e}(),h=n.pad={},v=h.Pkcs7={pad:function(e,t){for(var n=4*t,i=n-e.sigBytes%n,o=i<<24|i<<16|i<<8|i,a=[],s=0;s<i;s+=4)a.push(o);var l=r.create(a,i);e.concat(l)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},b=(i.BlockCipher=f.extend({cfg:f.cfg.extend({mode:m,padding:v}),reset:function(){var e;f.reset.call(this);var t=this.cfg,n=t.iv,i=t.mode;this._xformMode==this._ENC_XFORM_MODE?e=i.createEncryptor:(e=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==e?this._mode.init(this,n&&n.words):(this._mode=e.call(i,this,n&&n.words),this._mode.__creator=e)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e,t=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(t.pad(this._data,this.blockSize),e=this._process(!0)):(e=this._process(!0),t.unpad(e)),e},blockSize:4}),i.CipherParams=o.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),g=n.format={},y=g.OpenSSL={stringify:function(e){var t,n=e.ciphertext,i=e.salt;return t=i?r.create([1398893684,1701076831]).concat(i).concat(n):n,t.toString(l)},parse:function(e){var t,n=l.parse(e),i=n.words;return 1398893684==i[0]&&1701076831==i[1]&&(t=r.create(i.slice(2,4)),i.splice(0,4),n.sigBytes-=16),b.create({ciphertext:n,salt:t})}},_=i.SerializableCipher=o.extend({cfg:o.extend({format:y}),encrypt:function(e,t,n,i){i=this.cfg.extend(i);var o=e.createEncryptor(n,i),r=o.finalize(t),a=o.cfg;return b.create({ciphertext:r,key:n,iv:a.iv,algorithm:e,mode:a.mode,padding:a.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,n,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var o=e.createDecryptor(n,i).finalize(t.ciphertext);return o},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),x=n.kdf={},k=x.OpenSSL={execute:function(e,t,n,i){i||(i=r.random(8));var o=u.create({keySize:t+n}).compute(e,i),a=r.create(o.words.slice(t),4*n);return o.sigBytes=4*t,b.create({key:o,iv:a,salt:i})}},w=i.PasswordBasedCipher=_.extend({cfg:_.cfg.extend({kdf:k}),encrypt:function(e,t,n,i){i=this.cfg.extend(i);var o=i.kdf.execute(n,e.keySize,e.ivSize);i.iv=o.iv;var r=_.encrypt.call(this,e,t,o.key,i);return r.mixIn(o),r},decrypt:function(e,t,n,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var o=i.kdf.execute(n,e.keySize,e.ivSize,t.salt);i.iv=o.iv;var r=_.decrypt.call(this,e,t,o.key,i);return r}})}()}))},"4ef5":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"page-content pro-module"},[t("el-form",{ref:"settingForm",staticClass:"pro-module-bd",attrs:{model:e.form,rules:e.rules,"label-suffix":":","label-width":"14rem"}},[t("el-tabs",{attrs:{"tab-position":"left"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[t("el-tab-pane",{attrs:{label:"基本设置",name:"basic"}},[t("el-form-item",{attrs:{label:"自动重新开始"}},[t("el-switch",{model:{value:e.form.retryWhenEmpty,callback:function(t){e.$set(e.form,"retryWhenEmpty",t)},expression:"form.retryWhenEmpty"}})],1),t("el-form-item",{attrs:{label:"结束条件"}},[t("el-select",{model:{value:e.form.finishStrategy,callback:function(t){e.$set(e.form,"finishStrategy",t)},expression:"form.finishStrategy"}},[t("el-option",{attrs:{value:"NO_ERROR",label:"无错字"}}),t("el-option",{attrs:{value:"LENGTH_MATCH",label:"打完"}}),t("el-option",{attrs:{value:"LAST_RIGHT",label:"最后一次上屏无错"}})],1)],1),t("el-form-item",{attrs:{label:"赛文字体"}},[t("el-input",{model:{value:e.form.fontFamily,callback:function(t){e.$set(e.form,"fontFamily",t)},expression:"form.fontFamily"}})],1),t("el-form-item",{attrs:{label:"赛文字号"}},[t("el-input",{model:{value:e.form.fontSize,callback:function(t){e.$set(e.form,"fontSize",t)},expression:"form.fontSize"}})],1),t("el-form-item",{attrs:{label:"文章行数"}},[t("el-input",{attrs:{type:"number"},model:{value:e.form.articleRows,callback:function(t){e.$set(e.form,"articleRows",t)},expression:"form.articleRows"}})],1),t("el-form-item",{attrs:{label:"输入区行数"}},[t("el-input",{attrs:{type:"number"},model:{value:e.form.inputRows,callback:function(t){e.$set(e.form,"inputRows",t)},expression:"form.inputRows"}})],1),t("el-form-item",{attrs:{label:"未打文字颜色"}},[t("el-color-picker",{model:{value:e.form.pending,callback:function(t){e.$set(e.form,"pending",t)},expression:"form.pending"}})],1),t("el-form-item",{attrs:{label:"未打文字颜色[暗黑模式]"}},[t("el-color-picker",{model:{value:e.form.darkPending,callback:function(t){e.$set(e.form,"darkPending",t)},expression:"form.darkPending"}})],1),t("el-form-item",{attrs:{label:"已打文字颜色"}},[t("el-color-picker",{model:{value:e.form.typed,callback:function(t){e.$set(e.form,"typed",t)},expression:"form.typed"}})],1),t("el-form-item",{attrs:{label:"已打文字颜色[暗黑模式]"}},[t("el-color-picker",{model:{value:e.form.darkTyped,callback:function(t){e.$set(e.form,"darkTyped",t)},expression:"form.darkTyped"}})],1),t("el-form-item",{attrs:{label:"正确背景颜色"}},[t("el-color-picker",{model:{value:e.form.correct,callback:function(t){e.$set(e.form,"correct",t)},expression:"form.correct"}})],1),t("el-form-item",{attrs:{label:"正确背景颜色[暗黑模式]"}},[t("el-color-picker",{model:{value:e.form.darkCorrect,callback:function(t){e.$set(e.form,"darkCorrect",t)},expression:"form.darkCorrect"}})],1),t("el-form-item",{attrs:{label:"错误背景颜色"}},[t("el-color-picker",{model:{value:e.form.error,callback:function(t){e.$set(e.form,"error",t)},expression:"form.error"}})],1)],1),t("el-tab-pane",{attrs:{label:"码表设置"}},[t("el-form-item",{attrs:{label:"码表文件"}},[t("el-upload",{attrs:{drag:"",action:"#",accept:".tsv,.txt","auto-upload":!1,"show-file-list":!1,"on-change":e.loadCodings}},[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v("将码表文件拖到此处，或"),t("em",[e._v("点击上传")])]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t("div",[e._v("0. 支持任意码表：虎码、86五笔、091五笔、小鹤等等")]),t("div",[e._v("1. 文本格式文件，UTF8编码多多格式，即 `字 编码`，每行一条记录")]),t("div",[e._v("2. 码表按 "),t("strong",{staticClass:"tidiv-extra"},[e._v("『字母顺序』")]),e._v(" 排列，否则选重计算会有问题")])]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("3. 点击更新默认编码提示： "),t("el-button",{attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-download",loading:e.isCodingLoading},on:{click:function(t){return e.handleCodingDownload("tiger")}}},[e._v("『虎码单字』")]),t("el-button",{attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-download",loading:e.isCodingLoading},on:{click:function(t){return e.handleCodingDownload("xh")}}},[e._v("『小鹤词提』")])],1)])],1)],1),t("el-tab-pane",{attrs:{label:"编码提示设置"}},[t("el-form-item",{attrs:{label:"编码提示"}},[t("el-switch",{model:{value:e.form.hint,callback:function(t){e.$set(e.form,"hint",t)},expression:"form.hint"}})],1),e.form.hint?t("el-form-item",{attrs:{label:"提示选项"}},[t("el-checkbox-group",{model:{value:e.form.hintOptions,callback:function(t){e.$set(e.form,"hintOptions",t)},expression:"form.hintOptions"}},e._l(e.hintOptions,(function(n){return t("el-checkbox-button",{key:n.value,attrs:{label:n.value,disabled:n.disabled}},[e._v(e._s(n.text))])})),1)],1):e._e(),t("el-form-item",{attrs:{label:"禁用单字编码提示"}},[t("el-switch",{model:{value:e.form.disableSingleHint,callback:function(t){e.$set(e.form,"disableSingleHint",t)},expression:"form.disableSingleHint"}})],1),e.selectHintEnabled?t("el-form-item",{attrs:{label:"候选词条数",prop:"pageSize"}},[t("el-input",{attrs:{type:"number",step:"1"},model:{value:e.form.pageSize,callback:function(t){e.$set(e.form,"pageSize",e._n(t))},expression:"form.pageSize"}}),t("span",{staticClass:"el-upload__tip"},[e._v("输入法候选词条数量，需与输入法设置一致")])],1):e._e(),e.form.hint?t("el-form-item",{attrs:{label:"最大候选词位置",prop:"maxIndex"}},[t("el-input",{attrs:{type:"number",step:"1"},model:{value:e.form.maxIndex,callback:function(t){e.$set(e.form,"maxIndex",e._n(t))},expression:"form.maxIndex"}}),t("span",{staticClass:"el-upload__tip"},[e._v("超过该位置的候选词将被丢弃")])],1):e._e(),e.selectHintEnabled?t("el-form-item",{attrs:{label:"翻页提示"}},[t("el-input",{attrs:{size:"1"},model:{value:e.form.nextPage,callback:function(t){e.$set(e.form,"nextPage",t)},expression:"form.nextPage"}}),t("span",{staticClass:"el-upload__tip"},[e._v("下一页候选词条键")])],1):e._e(),e.selectHintEnabled?t("el-form-item",{attrs:{label:"选重提示"}},[t("el-input",{model:{value:e.form.selective,callback:function(t){e.$set(e.form,"selective",t)},expression:"form.selective"}}),t("span",{staticClass:"el-upload__tip"},[e._v("用于选重提示，长度需对应输入法候选词条数量")])],1):e._e(),e.selectHintEnabled?t("el-form-item",{attrs:{label:"非首选键"}},[t("el-input",{model:{value:e.form.altSelectKey,callback:function(t){e.$set(e.form,"altSelectKey",t)},expression:"form.altSelectKey"}}),t("span",{staticClass:"el-upload__tip"},[e._v('选择非首选词条时所用的键，如果使用了";,"作为2，3选时，也需填入')])],1):e._e(),e.selectHintEnabled?t("el-form-item",{attrs:{label:"选重键文本"}},[t("el-input",{model:{value:e.form.selectiveText,callback:function(t){e.$set(e.form,"selectiveText",t)},expression:"form.selectiveText"}}),t("span",{staticClass:"el-upload__tip"},[e._v("在首选字词后出现以上字符时，顶屏将不可用，需要手动选择")])],1):e._e(),e.autoSelectHintEnabled?t("el-form-item",{attrs:{label:"标点顶屏提示"}},[t("el-input",{model:{value:e.form.punctuationAutoSelectHint,callback:function(t){e.$set(e.form,"punctuationAutoSelectHint",t)},expression:"form.punctuationAutoSelectHint"}})],1):e._e(),e.selectHintEnabled?t("el-form-item",{attrs:{label:"四码唯一自动上屏"}},[t("el-switch",{model:{value:e.form.fourthAutoSelect,callback:function(t){e.$set(e.form,"fourthAutoSelect",t)},expression:"form.fourthAutoSelect"}})],1):e._e(),e.selectHintEnabled?t("el-form-item",{attrs:{label:"第五码首选上屏"}},[t("el-switch",{model:{value:e.form.fifthAutoSelect,callback:function(t){e.$set(e.form,"fifthAutoSelect",t)},expression:"form.fifthAutoSelect"}})],1):e._e(),e.showHintColor?t("el-form-item",{attrs:{label:"提示颜色"}},[t("el-color-picker",{model:{value:e.form.hintColor,callback:function(t){e.$set(e.form,"hintColor",t)},expression:"form.hintColor"}})],1):e._e(),e.colorHintEnabled?t("el-form-item",{attrs:{label:"一码颜色"}},[t("el-color-picker",{model:{value:e.form.code1,callback:function(t){e.$set(e.form,"code1",t)},expression:"form.code1"}})],1):e._e(),e.colorHintEnabled?t("el-form-item",{attrs:{label:"二码颜色"}},[t("el-color-picker",{model:{value:e.form.code2,callback:function(t){e.$set(e.form,"code2",t)},expression:"form.code2"}})],1):e._e(),e.colorHintEnabled?t("el-form-item",{attrs:{label:"三码颜色"}},[t("el-color-picker",{model:{value:e.form.code3,callback:function(t){e.$set(e.form,"code3",t)},expression:"form.code3"}})],1):e._e(),e.colorHintEnabled?t("el-form-item",{attrs:{label:"全码颜色"}},[t("el-color-picker",{model:{value:e.form.code4,callback:function(t){e.$set(e.form,"code4",t)},expression:"form.code4"}})],1):e._e()],1),e.form.hint?t("el-tab-pane",{attrs:{label:"标点设置",name:"punctuation"}},[t("el-form-item",{attrs:{label:"标点用于"}},[t("el-switch",{attrs:{"active-text":"码表及顶屏计算","inactive-text":"顶屏计算"},model:{value:e.form.addPunctuationToCodings,callback:function(t){e.$set(e.form,"addPunctuationToCodings",t)},expression:"form.addPunctuationToCodings"}})],1),t("el-form-item",[t("el-table",{ref:"punctuationTable",attrs:{data:e.punctuations,border:"",height:e.punctuationTableHeight,size:"mini"},scopedSlots:e._u([{key:"empty",fn:function(n){return[t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.addPunctuation(n.$index)}}},[e._v("添加")])]}}],null,!1,584107909)},[t("el-table-column",{attrs:{prop:"key",label:"标点"}}),e.form.addPunctuationToCodings?t("el-table-column",{attrs:{prop:"value",label:"编码"}}):e._e(),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-popconfirm",{attrs:{"confirm-button-text":"好的","cancel-button-text":"不用了",icon:"el-icon-info","icon-color":"red",title:"确定要删除这个标点吗？"},on:{confirm:function(t){return e.deletePunctuation(n.$index,n.row,e.punctuations)}}},[t("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[e._v("移除")])],1),t("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(t){return t.preventDefault(),e.addPunctuation(n.$index)}}},[e._v("添加")])]}}],null,!1,3482975119)})],1)],1)],1):e._e(),t("el-tab-pane",{attrs:{label:"成绩设置",name:"result"}},[t("el-form-item",{attrs:{label:"选项"}},[t("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),t("div",{staticStyle:{margin:"15px 0"}}),t("el-checkbox-group",{on:{change:e.handleCheckedResultChange},model:{value:e.form.resultOptions,callback:function(t){e.$set(e.form,"resultOptions",t)},expression:"form.resultOptions"}},e._l(e.resultOptions,(function(n){return t("el-checkbox",{key:n.value,attrs:{label:n.value,disabled:n.disabled}},[e._v(e._s(n.text))])})),1)],1),t("el-form-item",{attrs:{label:"输入法"}},[t("el-switch",{model:{value:e.form.inputMethod,callback:function(t){e.$set(e.form,"inputMethod",t)},expression:"form.inputMethod"}}),e.form.inputMethod?t("el-input",{attrs:{maxlength:"20"},model:{value:e.form.inputMethodName,callback:function(t){e.$set(e.form,"inputMethodName",t)},expression:"form.inputMethodName"}}):e._e()],1),t("el-form-item",{attrs:{label:"个性签名"}},[t("el-switch",{model:{value:e.form.signature,callback:function(t){e.$set(e.form,"signature",t)},expression:"form.signature"}}),e.form.signature?t("el-input",{attrs:{maxlength:"100"},model:{value:e.form.signatureText,callback:function(t){e.$set(e.form,"signatureText",t)},expression:"form.signatureText"}}):e._e()],1)],1),t("el-tab-pane",{attrs:{label:"载文设置",name:"load"}},[t("el-form-item",{attrs:{label:"去除空格"}},[t("el-switch",{model:{value:e.form.replaceSpace,callback:function(t){e.$set(e.form,"replaceSpace",t)},expression:"form.replaceSpace"}})],1),t("el-form-item",{attrs:{label:"替换符号[英->中]"}},[t("el-switch",{model:{value:e.form.replaceSymbol,callback:function(t){e.$set(e.form,"replaceSymbol",t)},expression:"form.replaceSymbol"}})],1)],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]),t("el-button",{on:{click:e.resetForm}},[e._v("重置")]),t("el-button",{attrs:{type:"danger"},on:{click:e.setToDefault}},[e._v("恢复默认设置")])],1)],1),t("el-dialog",{attrs:{title:"添加标点",visible:e.punctuationFormVisiable}},[t("el-form",{attrs:{model:e.punctuationForm,inline:""}},[t("el-form-item",{attrs:{label:"标点"}},[t("el-input",{model:{value:e.punctuationForm.key,callback:function(t){e.$set(e.punctuationForm,"key",t)},expression:"punctuationForm.key"}})],1),t("el-form-item",{attrs:{label:"编码"}},[t("el-input",{model:{value:e.punctuationForm.value,callback:function(t){e.$set(e.punctuationForm,"value",t)},expression:"punctuationForm.value"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.punctuationFormVisiable=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitPunctuationForm()}}},[e._v("确 定")])],1)],1)],1)},o=[],r=(n("14d9"),n("9ab4")),a=n("1b40"),s=n("b9fd"),l=n("cfc9"),c=n("6011"),u=n("4bb5"),f=n("5c96"),d=n("c198"),p=n.n(d),m=n("f8d5"),h=n.n(m),v=n("e7b9");const b=Object(u["e"])("setting"),g=[{value:"phrase",text:"词语",disabled:!0},{value:"color",text:"颜色"},{value:"select",text:"选重"},{value:"autoSelect",text:"顶屏"},{value:"code",text:"编码"}],y=[{value:"identity",text:"标识",disabled:!0},{value:"typeSpeed",text:"速度",disabled:!0},{value:"hitSpeed",text:"击键",disabled:!0},{value:"codeLength",text:"码长",disabled:!0},{value:"idealCodeLength",text:"理想码长"},{value:"contentLength",text:"字数"},{value:"error",text:"错字"},{value:"usedTime",text:"用时"},{value:"pauseTime",text:"暂停时间"},{value:"accuracy",text:"键准"},{value:"balance",text:"键法"},{value:"leftHand",text:"左"},{value:"rightHand",text:"右"},{value:"phrase",text:"打词数"},{value:"phraseRate",text:"打词"},{value:"selective",text:"选重"},{value:"replace",text:"回改"},{value:"keys",text:"键数"},{value:"backspace",text:"退格"},{value:"enter",text:"回车"},{value:"retry",text:"重打"},{value:"hash",text:"哈希码"},{value:"version",text:"版本"},{value:"firstTry",text:"首打等级提示"},{value:"noCodings",text:"词提禁用提示"},{value:"accuracyTip",text:"无敌键准提示"},{value:"errPenaltyTip",text:"错一罚五提示"}];let _=class extends a["c"]{constructor(){super(...arguments),this.hintOptions=g,this.resultOptions=y,this.form=new c["j"],this.checkAll=!1,this.isIndeterminate=!0,this.activeTab="basic",this.punctuationFormVisiable=!1,this.punctuationIndex=-1,this.isCodingLoading=!1,this.punctuationForm={key:"",value:""},this.rules={maxIndex:[{required:!0,type:"number",message:'请输入最大候选词条位置，如不限制，请输入"0"',trigger:"blur"},{type:"number",min:0,message:"最大候选词条位置不得小于0",trigger:"blur"}],pageSize:[{required:!0,type:"number",message:"请输入候每页选词条数",trigger:"blur"},{type:"number",min:1,message:"每页候选词条数不得小于1",trigger:"blur"}]}}get colorHintEnabled(){return this.isHintOptionEnabled("color")}get selectHintEnabled(){return this.isHintOptionEnabled("select")}get autoSelectHintEnabled(){return this.isHintOptionEnabled("autoSelect")}get showHintColor(){return this.selectHintEnabled||this.isHintOptionEnabled("code")||this.autoSelectHintEnabled}get punctuationTableHeight(){return window.innerHeight-300}get punctuations(){const e=[];for(const[t,n]of this.form.punctuations)e.push({key:t,value:n});return e}handleCheckAllChange(e){this.form.resultOptions=e?y.map(e=>e.value):["identity","typeSpeed","hitSpeed","codeLength"],this.isIndeterminate=!e}handleCheckedResultChange(e){const t=e.length;this.checkAll=t===this.resultOptions.length,this.isIndeterminate=t>0&&t<this.resultOptions.length}isHintOptionEnabled(e){const{hint:t,hintOptions:n}=this.form;return t&&n.indexOf(e)>=0}loadCodings(e){const t=f["Loading"].service({lock:!0,text:"正在处理词库，需要一些时间，请耐心等待……",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n=new FileReader;n.onload=()=>{const e=Object(s["b"])(n.result);if(this.form.addToCodings)for(const[t,n]of this.form.punctuations)e.put(t,n,-1);e.sort(),l["a"].configs.put(e.root,"codings").then(()=>{this.updateCodings(e.root),t.close(),this.$message({message:"码表处理完成",type:"success",showClose:!0})})},n.readAsText(e.raw)}deletePunctuation(e,t,n){n.splice(e,1),this.form.punctuations.delete(t.key)}addPunctuation(e){this.punctuationIndex=e,this.punctuationFormVisiable=!0}submitPunctuationForm(){const e=this.$refs.punctuationTable.data;e.splice(this.punctuationIndex+1,0,this.punctuationForm),this.form.punctuations=new Map(e.map(e=>[e.key,e.value])),this.punctuationFormVisiable=!1}submitForm(){this.$refs.settingForm.validate(e=>{if(!e)return this.$message({message:"检验失败",type:"warning",showClose:!0,duration:5e3}),!1;l["a"].configs.put(this.form,"setting").then(()=>{this.$message({message:"保存成功",type:"success",showClose:!0}),this.updateSetting(this.form)})})}setToDefault(){this.form=new c["j"]}resetForm(){Object.assign(this.form,this.setting)}created(){this.resetForm()}handleCodingDownload(e){console.log("coding type: ",e),this.isCodingLoading=!0;const t="xh"===e?"『小鹤词提』":"『虎码单字』",n=e=>{const n=Object(s["b"])(e);for(const[t,i]of v["a"])n.put(t,i,-1);return n.sort(),l["a"].configs.put(n.root,"codings").then(()=>{this.updateCodings(n.root),this.$notify({title:"编码提示加载成功",message:t+"编码提示加载成功",type:"success"}),this.isCodingLoading=!1})};"xh"!==e?fetch("/static/codings.txt").then(e=>e.text()).then(e=>n(e)).catch(()=>{this.isCodingLoading=!1}):fetch("/static/codingsXH.txt").then(e=>e.text()).then(e=>{const t=p.a.decrypt(e,"U2FsdGVkX19wPZQjUTQ0"),i=t.toString(h.a);return n(i)}).catch(e=>{console.log(e),this.isCodingLoading=!1})}};Object(r["a"])([b.State("loaded")],_.prototype,"loaded",void 0),Object(r["a"])([b.Getter("state")],_.prototype,"setting",void 0),Object(r["a"])([b.Mutation("update")],_.prototype,"updateSetting",void 0),Object(r["a"])([Object(u["a"])("updateCodings")],_.prototype,"updateCodings",void 0),Object(r["a"])([Object(a["d"])("loaded")],_.prototype,"resetForm",null),_=Object(r["a"])([a["a"]],_);var x=_,k=x,w=(n("1fad"),n("2877")),S=Object(w["a"])(k,i,o,!1,null,null,null);t["default"]=S.exports},5980:function(e,t,n){(function(t,i){e.exports=i(n("21bf"))})(0,(function(e){(function(){var t=e,n=t.lib,i=n.Base,o=t.enc,r=o.Utf8,a=t.algo;a.HMAC=i.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=r.parse(t));var n=e.blockSize,i=4*n;t.sigBytes>i&&(t=e.finalize(t)),t.clamp();for(var o=this._oKey=t.clone(),a=this._iKey=t.clone(),s=o.words,l=a.words,c=0;c<n;c++)s[c]^=1549556828,l[c]^=909522486;o.sigBytes=a.sigBytes=i,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e);t.reset();var i=t.finalize(this._oKey.clone().concat(n));return i}})})()}))},"72fe":function(e,t,n){(function(t,i){e.exports=i(n("21bf"))})(0,(function(e){return function(t){var n=e,i=n.lib,o=i.WordArray,r=i.Hasher,a=n.algo,s=[];(function(){for(var e=0;e<64;e++)s[e]=4294967296*t.abs(t.sin(e+1))|0})();var l=a.MD5=r.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var i=t+n,o=e[i];e[i]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8)}var r=this._hash.words,a=e[t+0],l=e[t+1],p=e[t+2],m=e[t+3],h=e[t+4],v=e[t+5],b=e[t+6],g=e[t+7],y=e[t+8],_=e[t+9],x=e[t+10],k=e[t+11],w=e[t+12],S=e[t+13],C=e[t+14],B=e[t+15],H=r[0],z=r[1],O=r[2],E=r[3];H=c(H,z,O,E,a,7,s[0]),E=c(E,H,z,O,l,12,s[1]),O=c(O,E,H,z,p,17,s[2]),z=c(z,O,E,H,m,22,s[3]),H=c(H,z,O,E,h,7,s[4]),E=c(E,H,z,O,v,12,s[5]),O=c(O,E,H,z,b,17,s[6]),z=c(z,O,E,H,g,22,s[7]),H=c(H,z,O,E,y,7,s[8]),E=c(E,H,z,O,_,12,s[9]),O=c(O,E,H,z,x,17,s[10]),z=c(z,O,E,H,k,22,s[11]),H=c(H,z,O,E,w,7,s[12]),E=c(E,H,z,O,S,12,s[13]),O=c(O,E,H,z,C,17,s[14]),z=c(z,O,E,H,B,22,s[15]),H=u(H,z,O,E,l,5,s[16]),E=u(E,H,z,O,b,9,s[17]),O=u(O,E,H,z,k,14,s[18]),z=u(z,O,E,H,a,20,s[19]),H=u(H,z,O,E,v,5,s[20]),E=u(E,H,z,O,x,9,s[21]),O=u(O,E,H,z,B,14,s[22]),z=u(z,O,E,H,h,20,s[23]),H=u(H,z,O,E,_,5,s[24]),E=u(E,H,z,O,C,9,s[25]),O=u(O,E,H,z,m,14,s[26]),z=u(z,O,E,H,y,20,s[27]),H=u(H,z,O,E,S,5,s[28]),E=u(E,H,z,O,p,9,s[29]),O=u(O,E,H,z,g,14,s[30]),z=u(z,O,E,H,w,20,s[31]),H=f(H,z,O,E,v,4,s[32]),E=f(E,H,z,O,y,11,s[33]),O=f(O,E,H,z,k,16,s[34]),z=f(z,O,E,H,C,23,s[35]),H=f(H,z,O,E,l,4,s[36]),E=f(E,H,z,O,h,11,s[37]),O=f(O,E,H,z,g,16,s[38]),z=f(z,O,E,H,x,23,s[39]),H=f(H,z,O,E,S,4,s[40]),E=f(E,H,z,O,a,11,s[41]),O=f(O,E,H,z,m,16,s[42]),z=f(z,O,E,H,b,23,s[43]),H=f(H,z,O,E,_,4,s[44]),E=f(E,H,z,O,w,11,s[45]),O=f(O,E,H,z,B,16,s[46]),z=f(z,O,E,H,p,23,s[47]),H=d(H,z,O,E,a,6,s[48]),E=d(E,H,z,O,g,10,s[49]),O=d(O,E,H,z,C,15,s[50]),z=d(z,O,E,H,v,21,s[51]),H=d(H,z,O,E,w,6,s[52]),E=d(E,H,z,O,m,10,s[53]),O=d(O,E,H,z,x,15,s[54]),z=d(z,O,E,H,l,21,s[55]),H=d(H,z,O,E,y,6,s[56]),E=d(E,H,z,O,B,10,s[57]),O=d(O,E,H,z,b,15,s[58]),z=d(z,O,E,H,S,21,s[59]),H=d(H,z,O,E,h,6,s[60]),E=d(E,H,z,O,k,10,s[61]),O=d(O,E,H,z,p,15,s[62]),z=d(z,O,E,H,_,21,s[63]),r[0]=r[0]+H|0,r[1]=r[1]+z|0,r[2]=r[2]+O|0,r[3]=r[3]+E|0},_doFinalize:function(){var e=this._data,n=e.words,i=8*this._nDataBytes,o=8*e.sigBytes;n[o>>>5]|=128<<24-o%32;var r=t.floor(i/4294967296),a=i;n[15+(o+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),n[14+(o+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),e.sigBytes=4*(n.length+1),this._process();for(var s=this._hash,l=s.words,c=0;c<4;c++){var u=l[c];l[c]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return s},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}});function c(e,t,n,i,o,r,a){var s=e+(t&n|~t&i)+o+a;return(s<<r|s>>>32-r)+t}function u(e,t,n,i,o,r,a){var s=e+(t&i|n&~i)+o+a;return(s<<r|s>>>32-r)+t}function f(e,t,n,i,o,r,a){var s=e+(t^n^i)+o+a;return(s<<r|s>>>32-r)+t}function d(e,t,n,i,o,r,a){var s=e+(n^(t|~i))+o+a;return(s<<r|s>>>32-r)+t}n.MD5=r._createHelper(l),n.HmacMD5=r._createHmacHelper(l)}(Math),e.MD5}))},c198:function(e,t,n){(function(t,i,o){e.exports=i(n("21bf"),n("1132"),n("72fe"),n("2b79"),n("38ba"))})(0,(function(e){return function(){var t=e,n=t.lib,i=n.BlockCipher,o=t.algo,r=[],a=[],s=[],l=[],c=[],u=[],f=[],d=[],p=[],m=[];(function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;var n=0,i=0;for(t=0;t<256;t++){var o=i^i<<1^i<<2^i<<3^i<<4;o=o>>>8^255&o^99,r[n]=o,a[o]=n;var h=e[n],v=e[h],b=e[v],g=257*e[o]^16843008*o;s[n]=g<<24|g>>>8,l[n]=g<<16|g>>>16,c[n]=g<<8|g>>>24,u[n]=g;g=16843009*b^65537*v^257*h^16843008*n;f[o]=g<<24|g>>>8,d[o]=g<<16|g>>>16,p[o]=g<<8|g>>>24,m[o]=g,n?(n=h^e[e[e[b^h]]],i^=e[e[i]]):n=i=1}})();var h=[0,1,2,4,8,16,32,64,128,27,54],v=o.AES=i.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,t=e.words,n=e.sigBytes/4,i=this._nRounds=n+6,o=4*(i+1),a=this._keySchedule=[],s=0;s<o;s++)s<n?a[s]=t[s]:(u=a[s-1],s%n?n>6&&s%n==4&&(u=r[u>>>24]<<24|r[u>>>16&255]<<16|r[u>>>8&255]<<8|r[255&u]):(u=u<<8|u>>>24,u=r[u>>>24]<<24|r[u>>>16&255]<<16|r[u>>>8&255]<<8|r[255&u],u^=h[s/n|0]<<24),a[s]=a[s-n]^u);for(var l=this._invKeySchedule=[],c=0;c<o;c++){s=o-c;if(c%4)var u=a[s];else u=a[s-4];l[c]=c<4||s<=4?u:f[r[u>>>24]]^d[r[u>>>16&255]]^p[r[u>>>8&255]]^m[r[255&u]]}}},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,s,l,c,u,r)},decryptBlock:function(e,t){var n=e[t+1];e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,f,d,p,m,a);n=e[t+1];e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,i,o,r,a,s){for(var l=this._nRounds,c=e[t]^n[0],u=e[t+1]^n[1],f=e[t+2]^n[2],d=e[t+3]^n[3],p=4,m=1;m<l;m++){var h=i[c>>>24]^o[u>>>16&255]^r[f>>>8&255]^a[255&d]^n[p++],v=i[u>>>24]^o[f>>>16&255]^r[d>>>8&255]^a[255&c]^n[p++],b=i[f>>>24]^o[d>>>16&255]^r[c>>>8&255]^a[255&u]^n[p++],g=i[d>>>24]^o[c>>>16&255]^r[u>>>8&255]^a[255&f]^n[p++];c=h,u=v,f=b,d=g}h=(s[c>>>24]<<24|s[u>>>16&255]<<16|s[f>>>8&255]<<8|s[255&d])^n[p++],v=(s[u>>>24]<<24|s[f>>>16&255]<<16|s[d>>>8&255]<<8|s[255&c])^n[p++],b=(s[f>>>24]<<24|s[d>>>16&255]<<16|s[c>>>8&255]<<8|s[255&u])^n[p++],g=(s[d>>>24]<<24|s[c>>>16&255]<<16|s[u>>>8&255]<<8|s[255&f])^n[p++];e[t]=h,e[t+1]=v,e[t+2]=b,e[t+3]=g},keySize:8});t.AES=i._createHelper(v)}(),e.AES}))},db42:function(e,t,n){},df2f:function(e,t,n){(function(t,i){e.exports=i(n("21bf"))})(0,(function(e){return function(){var t=e,n=t.lib,i=n.WordArray,o=n.Hasher,r=t.algo,a=[],s=r.SHA1=o.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,i=n[0],o=n[1],r=n[2],s=n[3],l=n[4],c=0;c<80;c++){if(c<16)a[c]=0|e[t+c];else{var u=a[c-3]^a[c-8]^a[c-14]^a[c-16];a[c]=u<<1|u>>>31}var f=(i<<5|i>>>27)+l+a[c];f+=c<20?1518500249+(o&r|~o&s):c<40?1859775393+(o^r^s):c<60?(o&r|o&s|r&s)-1894007588:(o^r^s)-899497514,l=s,s=r,r=o<<30|o>>>2,o=i,i=f}n[0]=n[0]+i|0,n[1]=n[1]+o|0,n[2]=n[2]+r|0,n[3]=n[3]+s|0,n[4]=n[4]+l|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(i+64>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=o._createHelper(s),t.HmacSHA1=o._createHmacHelper(s)}(),e.SHA1}))},f8d5:function(e,t,n){(function(t,i){e.exports=i(n("21bf"))})(0,(function(e){return e.enc.Utf8}))}}]);