require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(28);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4eb69cbc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4eb69cbc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4eb69cbc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\near\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4eb69cbc", Component.options)
  } else {
    hotAPI.reload("data-v-4eb69cbc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 29:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      current_scroll: 'tab1',
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      if (global.mpvuePlatform === 'wx') {
        global.mpvue.switchTab({ url: url });
      } else {
        global.mpvue.navigateTo({ url: url });
      }
    },
    handleChange: function handleChange(_ref) {
      var detail = _ref.detail;

      this.setData({
        current: detail.key
      });
    },
    handleChangeScroll: function handleChangeScroll(event) {
      this.current_scroll = event.mp.detail.key;
    },
    clickHandle: function clickHandle(ev) {
      console.log('clickHandle:', ev);
      // throw {message: 'custom test'}
    }
  },

  created: function created() {
    // let app = getApp()
  }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-tabs', {
    attrs: {
      "current": _vm.current_scroll,
      "scroll": "",
      "eventid": '0',
      "mpcomid": '9'
    },
    on: {
      "change": _vm.handleChangeScroll
    }
  }, [_c('i-tab', {
    key: "tab1",
    attrs: {
      "title": "选项1",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab2",
    attrs: {
      "title": "选项2",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab3",
    attrs: {
      "title": "选项3",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab4",
    attrs: {
      "title": "选项4",
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab5",
    attrs: {
      "title": "选项5",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab6",
    attrs: {
      "title": "选项6",
      "mpcomid": '5'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab7",
    attrs: {
      "title": "选项7",
      "mpcomid": '6'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab8",
    attrs: {
      "title": "选项8",
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('i-tab', {
    key: "tab9",
    attrs: {
      "title": "选项9",
      "mpcomid": '8'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "top-padding"
  }, [_c('i-card', {
    attrs: {
      "title": "良品铺子",
      "extra": "零食",
      "thumb": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "mpcomid": '10'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("好多不错的零食")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("后街1-22")])]), _vm._v(" "), _c('view', {
    staticClass: "top-padding"
  }), _vm._v(" "), _c('i-card', {
    attrs: {
      "title": "卡片标题",
      "i-class": "top-padding",
      "extra": "额外内容",
      "thumb": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "mpcomid": '11'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("内容不错")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("尾部内容")])]), _vm._v(" "), _c('view', {
    staticClass: "top-padding"
  }), _vm._v(" "), _c('i-card', {
    attrs: {
      "title": "卡片标题",
      "i-class": "top-padding",
      "extra": "额外内容",
      "thumb": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "mpcomid": '12'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("内容不错")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("尾部内容")])]), _vm._v(" "), _c('view', {
    staticClass: "top-padding"
  }), _vm._v(" "), _c('i-card', {
    attrs: {
      "title": "卡片标题",
      "i-class": "top-padding",
      "extra": "额外内容",
      "thumb": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "mpcomid": '13'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("内容不错")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("尾部内容")])]), _vm._v(" "), _c('view', {
    staticClass: "top-padding"
  }), _vm._v(" "), _c('i-card', {
    attrs: {
      "title": "卡片标题",
      "i-class": "top-padding",
      "extra": "额外内容",
      "thumb": "https://i.loli.net/2017/08/21/599a521472424.jpg",
      "mpcomid": '14'
    }
  }, [_c('view', {
    slot: "content"
  }, [_vm._v("内容不错")]), _vm._v(" "), _c('view', {
    slot: "footer"
  }, [_vm._v("尾部内容")])]), _vm._v(" "), _c('view', {
    staticClass: "top-padding"
  })], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4eb69cbc", esExports)
  }
}

/***/ })

},[27]);