// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"validators/nameValidation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameValidation = nameValidation;

function nameValidation(el, value) {
  var longerThenTwo = value.length < 2;
  var includeDigitsAndSpecialCharacters = /[1-9!@#$%^&*()_+=-]/g.test(value);

  if (longerThenTwo || includeDigitsAndSpecialCharacters) {
    el.classList.add('is-invalid');
  } else {
    el.classList.remove('is-invalid');
  }
}
},{}],"validators/emailValidation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailValidation = emailValidation;

function emailValidation(emial, value) {
  var includeDomainAndAt = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!includeDomainAndAt.test(value)) {
    emial.classList.add('is-invalid');
  } else {
    emial.classList.remove('is-invalid');
  }
}
},{}],"validators/passwordValidation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmPasswordValidation = confirmPasswordValidation;
exports.passwordValidation = passwordValidation;

function passwordValidation(el, value) {
  var shorterThenNine = value.length < 8;
  var haveMinOneUpperCase = !/[A-Z]/g.test(value);
  var haveMinOneNumber = !/\d/g.test(value);
  var haveMinOneSymbol = !/[!@#$%^&*()_+=-]/g.test(value);

  if (haveMinOneUpperCase || shorterThenNine || haveMinOneNumber || haveMinOneSymbol) {
    el.classList.add('is-invalid');
  } else {
    el.classList.remove('is-invalid');
  }
}

function confirmPasswordValidation(confirmPassword, password, confirmPasswordValue) {
  var passwordValue = password.value;

  if (passwordValue !== confirmPasswordValue) {
    confirmPassword.classList.add('is-invalid');
  } else {
    confirmPassword.classList.remove('is-invalid');
  }
}
},{}],"validators/rodoValidation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rodoValidation = rodoValidation;

function rodoValidation(rodo) {
  if (!rodo.checked) {
    rodo.classList.add('is-invalid');
  } else {
    rodo.classList.remove('is-invalid');
  }
}
},{}],"validators/checkValid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValid = checkValid;

function checkValid(element) {
  if (Object.values(element.classList).includes('is-invalid')) {
    return false;
  } else {
    return true;
  }
}
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _nameValidation = require("./validators/nameValidation.js");

var _emailValidation = require("./validators/emailValidation.js");

var _passwordValidation = require("./validators/passwordValidation.js");

var _rodoValidation = require("./validators/rodoValidation.js");

var _checkValid = require("./validators/checkValid.js");

var form = document.querySelector('.form-register');
var login = document.querySelector('#name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirmPassword');
var rodo = document.querySelector('#rodo');
login.addEventListener('keyup', function (_ref) {
  var value = _ref.target.value;
  (0, _nameValidation.nameValidation)(login, value);
});
email.addEventListener('keyup', function (_ref2) {
  var value = _ref2.target.value;
  (0, _emailValidation.emailValidation)(email, value);
});
password.addEventListener('keyup', function (_ref3) {
  var value = _ref3.target.value;
  (0, _passwordValidation.passwordValidation)(password, value);
});
confirmPassword.addEventListener('keyup', function (_ref4) {
  var value = _ref4.target.value;
  (0, _passwordValidation.confirmPasswordValidation)(confirmPassword, password, value);
});
rodo.addEventListener('change', function () {
  (0, _rodoValidation.rodoValidation)(rodo);
});
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var isLoginValid = (0, _checkValid.checkValid)(login);
  var isEmailValid = (0, _checkValid.checkValid)(email);
  var isPasswordValid = (0, _checkValid.checkValid)(password);
  var isConfirmPasswordValid = (0, _checkValid.checkValid)(confirmPassword);
  var isRodoValid = (0, _checkValid.checkValid)(rodo);

  if (isLoginValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isRodoValid) {
    var data = {
      login: login.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      rodo: rodo.checked
    };
    submitData(data);
  } else {
    alert('blad');
  }
});

function submitData(data) {
  fetch('https://przeprogramowani.pl/projekt-walidacja', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    resetForms();

    if (response.ok) {
      return response.text();
    }

    throw 'nie udało się wysłać zapytania';
  }).then(function (responseText) {
    console.log(responseText);
  }).catch(function (err) {
    resetForms();
    alert(err, 'try again');
  });
}

function resetForms() {
  login.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
  rodo.checked = false;
}
},{"./validators/nameValidation.js":"validators/nameValidation.js","./validators/emailValidation.js":"validators/emailValidation.js","./validators/passwordValidation.js":"validators/passwordValidation.js","./validators/rodoValidation.js":"validators/rodoValidation.js","./validators/checkValid.js":"validators/checkValid.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49759" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/form-validator.e31bb0bc.js.map