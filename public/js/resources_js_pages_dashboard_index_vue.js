"use strict";
(self["webpackChunksubscription_management_system"] = self["webpackChunksubscription_management_system"] || []).push([["resources_js_pages_dashboard_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/dashboard/index.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/dashboard/index.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    mapGetters: vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters
  },
  data: function data() {
    return {
      chartData: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: ["rgb(28,100,147)", "rgb(12,38,128)", "rgb(40,244,180)", "rgb(242,226,185)", "rgb(13,8,16)", "rgb(219,195,67)", "rgb(15,249,9)", "rgb(136,198,215)", "rgb(44,226,196)", "rgb(6,149,161)", "rgb(54,40,39)", "rgb(184,152,214)", "rgb(7,86,136)", "rgb(55,161,233)", "rgb(144,73,61)", "rgb(113,183,41)", "rgb(48,236,233)", "rgb(110,32,118)", "rgb(133,182,111)", "rgb(78,91,35)", "rgb(47,241,127)", "rgb(235,98,157)", "rgb(159,88,3)", "rgb(113,212,12)", "rgb(206,143,53)", "rgb(215,163,204)", "rgb(169,51,120)", "rgb(0,109,250)", "rgb(195,131,245)", "rgb(46,189,24)", "rgb(172,79,89)", "rgb(168,44,179)", "rgb(14,58,167)", "rgb(142,148,66)", "rgb(254,7,158)", "rgb(221,145,161)", "rgb(120,245,69)", "rgb(217,209,183)", "rgb(120,118,144)", "rgb(115,177,215)", "rgb(72,141,145)", "rgb(194,68,206)", "rgb(95,160,105)", "rgb(136,73,147)", "rgb(189,243,151)", "rgb(67,148,227)", "rgb(99,189,25)", "rgb(15,17,227)", "rgb(198,53,216)", "rgb(43,224,215)", "rgb(32,17,65)", "rgb(26,207,98)", "rgb(175,93,205)", "rgb(229,179,196)", "rgb(190,98,188)", "rgb(102,128,173)", "rgb(119,175,118)", "rgb(110,203,253)", "rgb(81,20,63)", "rgb(56,24,175)", "rgb(153,205,155)", "rgb(44,140,8)", "rgb(225,90,157)", "rgb(58,179,69)", "rgb(51,21,233)", "rgb(128,95,254)", "rgb(64,15,27)", "rgb(26,183,69)", "rgb(79,238,96)", "rgb(44,73,124)", "rgb(5,236,244)", "rgb(27,6,150)", "rgb(127,252,159)", "rgb(216,70,137)", "rgb(223,140,182)", "rgb(137,137,148)", "rgb(123,9,96)", "rgb(109,50,222)", "rgb(201,45,119)", "rgb(190,53,165)", "rgb(149,24,239)", "rgb(57,75,43)", "rgb(157,109,234)", "rgb(60,243,23)", "rgb(140,80,151)", "rgb(104,35,97)", "rgb(250,84,90)", "rgb(15,197,5)", "rgb(53,128,4)", "rgb(215,200,170)", "rgb(168,253,26)", "rgb(131,244,42)", "rgb(242,112,102)", "rgb(162,205,134)", "rgb(113,85,71)", "rgb(25,212,73)", "rgb(194,208,181)", "rgb(154,168,155)", "rgb(214,59,34)", "rgb(178,70,204)"],
          hoverBackgroundColor: ["rgb(28,100,147)", "rgb(12,38,128)", "rgb(40,244,180)", "rgb(242,226,185)", "rgb(13,8,16)", "rgb(219,195,67)", "rgb(15,249,9)", "rgb(136,198,215)", "rgb(44,226,196)", "rgb(6,149,161)", "rgb(54,40,39)", "rgb(184,152,214)", "rgb(7,86,136)", "rgb(55,161,233)", "rgb(144,73,61)", "rgb(113,183,41)", "rgb(48,236,233)", "rgb(110,32,118)", "rgb(133,182,111)", "rgb(78,91,35)", "rgb(47,241,127)", "rgb(235,98,157)", "rgb(159,88,3)", "rgb(113,212,12)", "rgb(206,143,53)", "rgb(215,163,204)", "rgb(169,51,120)", "rgb(0,109,250)", "rgb(195,131,245)", "rgb(46,189,24)", "rgb(172,79,89)", "rgb(168,44,179)", "rgb(14,58,167)", "rgb(142,148,66)", "rgb(254,7,158)", "rgb(221,145,161)", "rgb(120,245,69)", "rgb(217,209,183)", "rgb(120,118,144)", "rgb(115,177,215)", "rgb(72,141,145)", "rgb(194,68,206)", "rgb(95,160,105)", "rgb(136,73,147)", "rgb(189,243,151)", "rgb(67,148,227)", "rgb(99,189,25)", "rgb(15,17,227)", "rgb(198,53,216)", "rgb(43,224,215)", "rgb(32,17,65)", "rgb(26,207,98)", "rgb(175,93,205)", "rgb(229,179,196)", "rgb(190,98,188)", "rgb(102,128,173)", "rgb(119,175,118)", "rgb(110,203,253)", "rgb(81,20,63)", "rgb(56,24,175)", "rgb(153,205,155)", "rgb(44,140,8)", "rgb(225,90,157)", "rgb(58,179,69)", "rgb(51,21,233)", "rgb(128,95,254)", "rgb(64,15,27)", "rgb(26,183,69)", "rgb(79,238,96)", "rgb(44,73,124)", "rgb(5,236,244)", "rgb(27,6,150)", "rgb(127,252,159)", "rgb(216,70,137)", "rgb(223,140,182)", "rgb(137,137,148)", "rgb(123,9,96)", "rgb(109,50,222)", "rgb(201,45,119)", "rgb(190,53,165)", "rgb(149,24,239)", "rgb(57,75,43)", "rgb(157,109,234)", "rgb(60,243,23)", "rgb(140,80,151)", "rgb(104,35,97)", "rgb(250,84,90)", "rgb(15,197,5)", "rgb(53,128,4)", "rgb(215,200,170)", "rgb(168,253,26)", "rgb(131,244,42)", "rgb(242,112,102)", "rgb(162,205,134)", "rgb(113,85,71)", "rgb(25,212,73)", "rgb(194,208,181)", "rgb(154,168,155)", "rgb(214,59,34)", "rgb(178,70,204)"]
        }]
      },
      lightOptions: {
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        }
      }
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    products: 'product/products',
    product: 'product/product',
    chartProduct: 'product/chartProduct',
    activationLines: 'activation/activationLines'
  })),
  watch: {
    chartProduct: function chartProduct() {
      this.chartData.labels = this.chartProduct;
    },
    activationLines: function activationLines() {
      var obj = [];
      var _iterator = _createForOfIteratorHelper(this.products),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          var i = 0;
          var _iterator2 = _createForOfIteratorHelper(this.activationLines),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var s = _step2.value;
              if (p.id == s.product_id) {
                i++;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          obj = [].concat(_toConsumableArray(obj), [i]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.chartData.datasets[0].data = obj;
      console.log(obj);
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.$store.dispatch('product/GET_PRODUCT').then(function (response) {
      if (response) {
        _this.chartData.labels = _this.chartProduct;
      }
    });
    this.$store.dispatch('activation/GET_ACTIVATION_LINE').then(function (response) {
      if (response) {
        var obj = [];
        var _iterator3 = _createForOfIteratorHelper(_this.products),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var p = _step3.value;
            var i = 0;
            var _iterator4 = _createForOfIteratorHelper(_this.activationLines),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var s = _step4.value;
                if (p.id == s.product_id) {
                  i++;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            obj = [].concat(_toConsumableArray(obj), [i]);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        _this.chartData.datasets[0].data = obj;
      }
    });
  },
  methods: {
    // GENERATE COLOR CODE
    getColorCode: function getColorCode() {
      var colorCode = [];
      var dynamicColors = function dynamicColors() {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
      };
      for (var i = 0; i <= 100; i++) {
        colorCode.push(dynamicColors());
      }
      this.chartData.datasets[0].backgroundColor = colorCode;
      this.chartData.datasets[0].hoverBackgroundColor = colorCode;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/dashboard/index.vue?vue&type=template&id=0cb0e7be":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/dashboard/index.vue?vue&type=template&id=0cb0e7be ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "grid grid-cols-3 gap-2"
};
var _hoisted_2 = {
  "class": "col-span-2 border rounded shadow bg-gray-50"
};
var _hoisted_3 = {
  "class": "border rounded shadow bg-gray-50"
};
var _hoisted_4 = {
  "class": "w-full h-full p-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Column");
  var _component_DataTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DataTable");
  var _component_Chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Chart");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DataTable, {
    value: _ctx.products,
    stripedRows: "",
    responsiveLayout: "scroll",
    "class": "p-datatable-sm"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "type",
        header: "Type"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "name",
        header: "Name"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Column, {
        field: "description",
        header: "Description"
      })];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["value"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Chart, {
    type: "pie",
    data: $data.chartData,
    options: $data.lightOptions,
    style: {
      "width": "600px",
      "height": "550px"
    }
  }, null, 8 /* PROPS */, ["data", "options"])])])]);
}

/***/ }),

/***/ "./resources/js/pages/dashboard/index.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/dashboard/index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_0cb0e7be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0cb0e7be */ "./resources/js/pages/dashboard/index.vue?vue&type=template&id=0cb0e7be");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/pages/dashboard/index.vue?vue&type=script&lang=js");
/* harmony import */ var D_Project_Lerning_Subscription_Management_LV_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Project_Lerning_Subscription_Management_LV_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_0cb0e7be__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/dashboard/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/dashboard/index.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/pages/dashboard/index.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/dashboard/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/dashboard/index.vue?vue&type=template&id=0cb0e7be":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/dashboard/index.vue?vue&type=template&id=0cb0e7be ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_0cb0e7be__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_0cb0e7be__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=0cb0e7be */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/dashboard/index.vue?vue&type=template&id=0cb0e7be");


/***/ })

}]);