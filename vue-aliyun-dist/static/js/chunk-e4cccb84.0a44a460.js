(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4cccb84"],{"142e":function(t,o,e){"use strict";var i=e("7a15"),n=e.n(i);n.a},"7a15":function(t,o,e){},"8d90":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("a-modal",{attrs:{title:"修改头像",visible:t.visible,maskClosable:!1,confirmLoading:t.confirmLoading,width:800,footer:null},on:{cancel:t.cancelHandel}},[e("a-row",[e("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e("vue-cropper",{ref:"cropper",attrs:{img:t.options.img,info:!0,autoCrop:t.options.autoCrop,autoCropWidth:t.options.autoCropWidth,autoCropHeight:t.options.autoCropHeight,fixedBox:t.options.fixedBox},on:{realTime:t.realTime}})],1),e("a-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e("div",{staticClass:"avatar-upload-preview"},[e("img",{style:t.previews.img,attrs:{src:t.previews.url}})])])],1),e("br"),e("a-row",[e("a-col",{attrs:{lg:2,md:2}},[e("a-upload",{attrs:{name:"file",beforeUpload:t.beforeUpload,showUploadList:!1}},[e("a-button",{attrs:{icon:"upload"}},[t._v("选择图片")])],1)],1),e("a-col",{attrs:{lg:{span:1,offset:2},md:2}},[e("a-button",{attrs:{icon:"plus"},on:{click:function(o){return t.changeScale(1)}}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"minus"},on:{click:function(o){return t.changeScale(-1)}}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"undo"},on:{click:t.rotateLeft}})],1),e("a-col",{attrs:{lg:{span:1,offset:1},md:2}},[e("a-button",{attrs:{icon:"redo"},on:{click:t.rotateRight}})],1),e("a-col",{attrs:{lg:{span:2,offset:6},md:2}},[e("a-button",{attrs:{type:"primary"},on:{click:function(o){return t.finish("blob")}}},[t._v("保存")])],1)],1)],1)},n=[],a=(e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("7e79")),r={components:{VueCropper:a["VueCropper"]},data:function(){return{visible:!1,id:null,confirmLoading:!1,fileList:[],uploading:!1,options:{img:"",autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0},previews:{}}},methods:{edit:function(t){this.visible=!0,this.id=t},close:function(){this.id=null,this.visible=!1},cancelHandel:function(){this.close()},changeScale:function(t){t=t||1,this.$refs.cropper.changeScale(t)},rotateLeft:function(){this.$refs.cropper.rotateLeft()},rotateRight:function(){this.$refs.cropper.rotateRight()},beforeUpload:function(t){var o=this,e=new FileReader;return e.readAsDataURL(t),e.onload=function(){o.options.img=e.result},!1},finish:function(t){var o=this,e=this,i=new FormData;"blob"===t?this.$refs.cropper.getCropBlob((function(t){var n=window.URL.createObjectURL(t);o.model=!0,o.modelSrc=n,i.append("file",t,o.fileName),o.$http.post("https://www.mocky.io/v2/5cc8019d300000980a055e76",i,{contentType:!1,processData:!1,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){e.$message.success("上传成功"),e.$emit("ok",t.url),e.visible=!1}))})):this.$refs.cropper.getCropData((function(t){o.model=!0,o.modelSrc=t}))},okHandel:function(){var t=this;t.confirmLoading=!0,setTimeout((function(){t.confirmLoading=!1,t.close(),t.$message.success("上传头像成功")}),2e3)},realTime:function(t){this.previews=t}}},s=r,c=(e("142e"),e("2877")),l=Object(c["a"])(s,i,n,!1,null,"2dd71f81",null);o["default"]=l.exports}}]);