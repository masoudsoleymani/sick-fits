webpackHotUpdate_N_E("pages/orders",{

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrdersPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_msoleym_sick_fits_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/formatMoney */ \"./lib/formatMoney.js\");\n/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ \"./components/styles/OrderItemStyles.js\");\n\n\n\nvar _jsxFileName = \"/Users/msoleym/sick-fits-ui/pages/orders.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_msoleym_sick_fits_ui_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query USER_ORDERS_QUERY {\\n    allOrders {\\n      id\\n      charge\\n      total\\n      user {\\n        id\\n      }\\n      items {\\n        id\\n        name\\n        description\\n        price\\n        quantity\\n        photo {\\n          image {\\n            publicUrlTransformed\\n          }\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar USER_ORDERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\nvar OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ul.withConfig({\n  displayName: \"orders__OrderUl\",\n  componentId: \"sc-15udvsj-0\"\n})([\"display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:4rem;\"]);\n_c = OrderUl;\n\nfunction countItemsInAnOrder(order) {\n  return order.items.reduce(function (tally, item) {\n    return tally + item.quantity;\n  }, 0);\n}\n\nlo;\nfunction OrdersPage() {\n  _s();\n\n  var _this = this;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(USER_ORDERS_QUERY),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 21\n  }, this);\n  var allOrders = data.allOrders;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [\"Your Orders (\", allOrders.length, \")\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: [\"You have \", allOrders.length, \" orders!\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(OrderUl, {\n      children: allOrders.map(function (order) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {\n            href: \"/order/\".concat(order.id),\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"order-meta\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  children: [countItemsInAnOrder(order), \" Item\", order.items.length === 1 ? '' : 's']\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 62,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  children: [order.items.length, \" Product\", order.items.length === 1 ? '' : 's']\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(order.total)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"images\",\n                children: order.items.map(function (item) {\n                  var _item$photo, _item$photo$image;\n\n                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                    src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,\n                    alt: item.name\n                  }, \"image-\".concat(item.id), false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 74,\n                    columnNumber: 21\n                  }, _this);\n                })\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 5\n  }, this);\n}\n\n_s(OrdersPage, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c2 = OrdersPage;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"OrderUl\");\n$RefreshReg$(_c2, \"OrdersPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzLmpzPzU3ZWIiXSwibmFtZXMiOlsiVVNFUl9PUkRFUlNfUVVFUlkiLCJncWwiLCJPcmRlclVsIiwic3R5bGVkIiwidWwiLCJjb3VudEl0ZW1zSW5Bbk9yZGVyIiwib3JkZXIiLCJpdGVtcyIsInJlZHVjZSIsInRhbGx5IiwiaXRlbSIsInF1YW50aXR5IiwibG8iLCJPcmRlcnNQYWdlIiwidXNlUXVlcnkiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiYWxsT3JkZXJzIiwibGVuZ3RoIiwibWFwIiwiaWQiLCJmb3JtYXRNb25leSIsInRvdGFsIiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGtEQUFILG1CQUF2QjtBQXlCQSxJQUFNQyxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsNEZBQWI7S0FBTUYsTzs7QUFNTixTQUFTRyxtQkFBVCxDQUE2QkMsS0FBN0IsRUFBb0M7QUFDbEMsU0FBT0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUIsVUFBQ0MsS0FBRCxFQUFRQyxJQUFSO0FBQUEsV0FBaUJELEtBQUssR0FBR0MsSUFBSSxDQUFDQyxRQUE5QjtBQUFBLEdBQW5CLEVBQTJELENBQTNELENBQVA7QUFDRDs7QUFDREMsRUFBRTtBQUNhLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDRkMsK0RBQVEsQ0FBQ2QsaUJBQUQsQ0FETjtBQUFBLE1BQzNCZSxJQUQyQixhQUMzQkEsSUFEMkI7QUFBQSxNQUNyQkMsS0FEcUIsYUFDckJBLEtBRHFCO0FBQUEsTUFDZEMsT0FEYyxhQUNkQSxPQURjOztBQUVuQyxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTyxxRUFBQyxnRUFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSHdCLE1BSTNCRSxTQUoyQixHQUliSCxJQUphLENBSTNCRyxTQUoyQjtBQUtuQyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxvQ0FBcUJBLFNBQVMsQ0FBQ0MsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSw4QkFBY0QsU0FBUyxDQUFDQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLHFFQUFDLE9BQUQ7QUFBQSxnQkFDR0QsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ2QsS0FBRDtBQUFBLDRCQUNiLHFFQUFDLDBFQUFEO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxtQkFBWUEsS0FBSyxDQUFDZSxFQUFsQixDQUFWO0FBQUEsbUNBQ0U7QUFBQSxzQ0FDRTtBQUFLLHlCQUFTLEVBQUMsWUFBZjtBQUFBLHdDQUNFO0FBQUEsNkJBQ0doQixtQkFBbUIsQ0FBQ0MsS0FBRCxDQUR0QixXQUVHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVksTUFBWixLQUF1QixDQUF2QixHQUEyQixFQUEzQixHQUFnQyxHQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFLRTtBQUFBLDZCQUNHYixLQUFLLENBQUNDLEtBQU4sQ0FBWVksTUFEZixjQUVHYixLQUFLLENBQUNDLEtBQU4sQ0FBWVksTUFBWixLQUF1QixDQUF2QixHQUEyQixFQUEzQixHQUFnQyxHQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFTRTtBQUFBLDRCQUFJRyxnRUFBVyxDQUFDaEIsS0FBSyxDQUFDaUIsS0FBUDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBWUU7QUFBSyx5QkFBUyxFQUFDLFFBQWY7QUFBQSwwQkFDR2pCLEtBQUssQ0FBQ0MsS0FBTixDQUFZYSxHQUFaLENBQWdCLFVBQUNWLElBQUQ7QUFBQTs7QUFBQSxzQ0FDZjtBQUVFLHVCQUFHLGlCQUFFQSxJQUFJLENBQUNjLEtBQVAscUVBQUUsWUFBWUMsS0FBZCxzREFBRSxrQkFBbUJDLG9CQUYxQjtBQUdFLHVCQUFHLEVBQUVoQixJQUFJLENBQUNpQjtBQUhaLHFDQUNnQmpCLElBQUksQ0FBQ1csRUFEckI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEZTtBQUFBLGlCQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NEOztHQTNDdUJSLFU7VUFDV0MsdUQ7OztNQURYRCxVIiwiZmlsZSI6Ii4vcGFnZXMvb3JkZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJztcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tICcuLi9saWIvZm9ybWF0TW9uZXknO1xuaW1wb3J0IE9yZGVySXRlbVN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXMnO1xuXG5jb25zdCBVU0VSX09SREVSU19RVUVSWSA9IGdxbGBcbiAgcXVlcnkgVVNFUl9PUkRFUlNfUVVFUlkge1xuICAgIGFsbE9yZGVycyB7XG4gICAgICBpZFxuICAgICAgY2hhcmdlXG4gICAgICB0b3RhbFxuICAgICAgdXNlciB7XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgICBpdGVtcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgcXVhbnRpdHlcbiAgICAgICAgcGhvdG8ge1xuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBPcmRlclVsID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDRyZW07XG5gO1xuXG5mdW5jdGlvbiBjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKSB7XG4gIHJldHVybiBvcmRlci5pdGVtcy5yZWR1Y2UoKHRhbGx5LCBpdGVtKSA9PiB0YWxseSArIGl0ZW0ucXVhbnRpdHksIDApO1xufVxubG9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyc1BhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFVTRVJfT1JERVJTX1FVRVJZKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+O1xuICBjb25zdCB7IGFsbE9yZGVycyB9ID0gZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Zb3VyIE9yZGVycyAoe2FsbE9yZGVycy5sZW5ndGh9KTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aDI+WW91IGhhdmUge2FsbE9yZGVycy5sZW5ndGh9IG9yZGVycyE8L2gyPlxuICAgICAgPE9yZGVyVWw+XG4gICAgICAgIHthbGxPcmRlcnMubWFwKChvcmRlcikgPT4gKFxuICAgICAgICAgIDxPcmRlckl0ZW1TdHlsZXM+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL29yZGVyLyR7b3JkZXIuaWR9YH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIHtjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKX0gSXRlbVxuICAgICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubGVuZ3RoID09PSAxID8gJycgOiAncyd9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAge29yZGVyLml0ZW1zLmxlbmd0aH0gUHJvZHVjdFxuICAgICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubGVuZ3RoID09PSAxID8gJycgOiAncyd9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cD57Zm9ybWF0TW9uZXkob3JkZXIudG90YWwpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlc1wiPlxuICAgICAgICAgICAgICAgICAge29yZGVyLml0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgaW1hZ2UtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvT3JkZXJJdGVtU3R5bGVzPlxuICAgICAgICApKX1cbiAgICAgIDwvT3JkZXJVbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/orders.js\n");

/***/ })

})