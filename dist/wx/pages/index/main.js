require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_13cc6114_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-13cc6114"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_13cc6114_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13cc6114", Component.options)
  } else {
    hotAPI.reload("data-v-13cc6114", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      notice: '2019.04.03',
      grids: ['a', 'b'],
      show: true
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
    clickHandle: function clickHandle(ev) {
      console.log('clickHandle:', ev);
      // throw {message: 'custom test'}
    }
  },

  created: function created() {
    var _this = this;

    var db = wx.cloud.database({ env: 'shop-2e5118' });
    db.collection('shop').get().then(function (res) {
      console.log(res.data);
      _this.shop = res.data;
    });
    wx.cloud.callFunction({ name: 'cloud' }).then(function (res) {
      console.log(res);
    });
  }
});

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.clickHandle
    }
  }, [(_vm.show) ? _c('i-notice-bar', {
    attrs: {
      "icon": "systemprompt",
      "loop": "",
      "mpcomid": '0'
    }
  }, [_vm._v("\n    " + _vm._s(_vm.notice) + "\n    ")]) : _vm._e(), _vm._v(" "), _c('i-grid', {
    attrs: {
      "i-class": "no-border",
      "mpcomid": '3'
    }
  }, _vm._l((_vm.grids), function(item, index) {
    return _c('i-grid-item', {
      key: item,
      attrs: {
        "i-class": "no-border",
        "mpcomid": '2_' + index
      }
    }, [_c('i-grid-label', {
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_vm._v(_vm._s(item))])], 1)
  })), _vm._v(" "), _c('i-grid', {
    attrs: {
      "i-class": "no-border",
      "mpcomid": '13'
    }
  }, [_c('i-grid-item', {
    attrs: {
      "i-class": "no-border",
      "mpcomid": '6'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/1.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_vm._v("lemon")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "i-class": "no-border",
      "mpcomid": '9'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/2.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_vm._v("banana")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "i-class": "no-border",
      "mpcomid": '12'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '10'
    }
  }, [_c('image', {
    attrs: {
      "src": "/static/images/3.png"
    }
  })]), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_vm._v("appple")])], 1)], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "推荐",
      "mpcomid": '15'
    }
  }, _vm._l((_vm.shop), function(item, index) {
    return _c('view', {
      key: item,
      staticClass: "top-padding",
      attrs: {
        "view": ""
      }
    }, [_c('i-card', {
      attrs: {
        "title": "需要循环",
        "extra": "零食",
        "thumb": "https://i.loli.net/2017/08/21/599a521472424.jpg",
        "mpcomid": '14_' + index
      }
    }, [_c('view', {
      slot: "content"
    }, [_vm._v("56556")]), _vm._v(" "), _c('view', {
      slot: "footer"
    }, [_vm._v("5566622")])])], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13cc6114", esExports)
  }
}

/***/ })
],[8]);