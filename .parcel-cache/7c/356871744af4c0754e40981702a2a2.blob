// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, cache, entry, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject.parcelRequire === 'function' &&
    globalObject.parcelRequire;
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {}
    ];
  };

  globalObject.parcelRequire = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7efd9d0d128b7429fe4d9a995bcbd347":[function(require,module,exports) {
// const emergence = require('./emergence.min.js');
const e = require('emergence.js');

const emergence = e();
const HOME_GROUP = 'home-group';
const WORK_GROUP = 'show-me-your-work-group';
const WHAT_YOU_CAN_DO_GROUP = 'what-you-can-do-group';
const SMOOTH_ANIMATION_GROUP = 'smooth-animation-group';
const CONTACT_GROUP = 'contact-group';
let buttonsClicked = {}; // const HOME_GROUP_BTN = 'home-group';
// const WORK_GROUP = 'show-me-your-work-group';
// const WHAT_YOU_CAN_DO_GROUP = 'what-you-can-do-group';
// const SMOOTH_ANIMATION_GROUP = 'smooth-animation-group';
// const CONTACT_GROUP = 'contact-group';

document.querySelectorAll('.message-block').forEach(el => el.style.top = "0px");
document.querySelectorAll('.group-container').forEach((el, i) => el.style.order = i);
document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).addEventListener('click', () => {
  showPage(WORK_GROUP, 1);
  document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).remove();
  document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).remove();
  createGallery('.gallery-block-show-me-your-work');
  const whatYouCanDoButton = createButton("What you can do?", '#what-you-can-do-group', WORK_GROUP);
  const smoothAnimationButton = createButton("Show me smooth animations", '#smooth-animation-group', WORK_GROUP);

  if (whatYouCanDoButton) {
    whatYouCanDoButton.addEventListener('click', () => {
      removeButton(smoothAnimationButton);
      removeButton(whatYouCanDoButton);
      showPage(WHAT_YOU_CAN_DO_GROUP, 2);
      const w_contactInfoButton = createButton("Contact info", '#contact-group', SMOOTH_ANIMATION_GROUP);

      if (w_contactInfoButton) {
        w_contactInfoButton.addEventListener('click', () => {
          removeButton(w_contactInfoButton);
          showPage(CONTACT_GROUP, 3);
        });
      }
    });
  }

  if (smoothAnimationButton) {
    smoothAnimationButton.addEventListener('click', () => {
      removeButton(whatYouCanDoButton);
      removeButton(smoothAnimationButton);
      showPage(SMOOTH_ANIMATION_GROUP, 2);
      createGallery('.gallery-block-smooth-animation');
      const s_whatYouCanDoButton = createButton("What you can do?", '#what-you-can-do-group', SMOOTH_ANIMATION_GROUP);

      if (s_whatYouCanDoButton) {
        s_whatYouCanDoButton.addEventListener('click', () => {
          removeButton(s_whatYouCanDoButton);
          showPage(WHAT_YOU_CAN_DO_GROUP, 3);
          const s_contactInfoButton = createButton("Contact info", '#contact-group', WHAT_YOU_CAN_DO_GROUP);

          if (s_contactInfoButton) {
            s_contactInfoButton.addEventListener('click', () => {
              removeButton(s_contactInfoButton);
              showPage(CONTACT_GROUP, 4);
            });
          }
        });
      }
    });
  }
});
document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).addEventListener('click', () => {
  showPage(WHAT_YOU_CAN_DO_GROUP, 1);
  document.querySelector(`#${HOME_GROUP} .show-me-your-work-btn`).remove();
  document.querySelector(`#${HOME_GROUP} .what-you-can-do-btn`).remove();
  const showMeYourWorkButton = createButton("Show me Your work", '#show-me-your-work-group', WHAT_YOU_CAN_DO_GROUP);
  const smoothAnimationButton = createButton("Show me smooth animations", '#smooth-animation-group', WHAT_YOU_CAN_DO_GROUP);
  showMeYourWorkButton.addEventListener('click', () => {
    removeButton(smoothAnimationButton);
    removeButton(showMeYourWorkButton);
    showPage(WORK_GROUP, 2);
    createGallery('.gallery-block-show-me-your-work');
    const w_smoothAnimationButton = createButton("Show me smooth animations", '#smooth-animation-group', WORK_GROUP);
    w_smoothAnimationButton.addEventListener('click', () => {
      removeButton(w_smoothAnimationButton);
      showPage(SMOOTH_ANIMATION_GROUP, 3);
      createGallery('.gallery-block-smooth-animation');
      const w_contactInfoButton = createButton("Contact info", '#contact-group', SMOOTH_ANIMATION_GROUP);
      w_contactInfoButton.addEventListener('click', () => {
        removeButton(w_contactInfoButton);
        showPage(CONTACT_GROUP, 4);
      });
    });
  });
  smoothAnimationButton.addEventListener('click', () => {
    removeButton(showMeYourWorkButton);
    removeButton(smoothAnimationButton);
    showPage(SMOOTH_ANIMATION_GROUP, 2);
    createGallery('.gallery-block-smooth-animation');
    const s_showMeYourWorkButton = createButton("Show me Your work", '#show-me-your-work-group', SMOOTH_ANIMATION_GROUP);
    s_showMeYourWorkButton.addEventListener('click', () => {
      removeButton(s_showMeYourWorkButton);
      showPage(WORK_GROUP, 3);
      createGallery('.gallery-block-show-me-your-work');
      const w_contactInfoButton = createButton("Contact info", '#contact-group', WORK_GROUP);
      w_contactInfoButton.addEventListener('click', () => {
        removeButton(w_contactInfoButton);
        showPage(CONTACT_GROUP, 4);
      });
    });
  });
});

function showPage(group, order) {
  document.getElementById(group).style.order = order;
  document.getElementById(group).classList.remove('hidden');
}

function createButton(text, link, group) {
  if (!buttonsClicked[`${link}${group}`]) {
    const button = document.createElement('a');
    var t = document.createTextNode(text);
    button.appendChild(t);
    button.setAttribute('href', link);
    button.classList.add('btn');
    document.querySelector(`#${group} .button-group`).appendChild(button);
    buttonsClicked[`${link}${group}`] = true;
    return button;
  }

  return null;
}

function removeButton(el) {
  el.remove();
}

createGallery('.gallery-block-home-group');
emergence.init({
  container: window,
  reset: false,
  handheld: true,
  throttle: 25,
  elemCushion: 0.15,
  offsetTop: 0,
  offsetRight: 0,
  offsetBottom: 0,
  offsetLeft: 0,
  callback: function callback(element, state) {
    var getVisibles = document.querySelectorAll('.message-block[data-emergence=visible]');
    getVisibles.forEach(el => {
      const domRectTop = el.getBoundingClientRect().top;
      const outerHeight = window.outerHeight;

      if (domRectTop >= 0 && domRectTop <= outerHeight) {
        const elementClientPosition = domRectTop / outerHeight * 100;

        if (elementClientPosition >= 0 && elementClientPosition <= 8) {
          el.style.top = domRectTop / outerHeight * 100 + -120 + 'px';
        } else if (elementClientPosition > 8 && elementClientPosition <= 25) {
          el.style.top = domRectTop / outerHeight * 100 + -100 + 'px';
        } else if (elementClientPosition > 25 && elementClientPosition <= 50) {
          el.style.top = domRectTop / outerHeight * 100 + -85 + 'px';
        } else if (elementClientPosition > 50 && elementClientPosition <= 75) {
          el.style.top = domRectTop / outerHeight * 70 + -60 + 'px';
        } else if (elementClientPosition > 75 && elementClientPosition <= 100) {
          el.style.top = domRectTop / outerHeight * 50 + -40 + 'px';
        }
      }
    });
  }
});

function createGallery(selector, horizontalAlign) {
  const galleryBlock = document.querySelector(selector);

  if (!galleryBlock.classList.contains('gallery-active')) {
    const _horizontalAlign = horizontalAlign == 'right' ? horizontalAlign : 'left';

    galleryBlock.classList.add('gallery-active');
    galleryBlock.style.position = 'relative';
    const galleryBlockChildrenCount = galleryBlock.childElementCount;
    const galleryBlockChildrenClientWidth = galleryBlock.clientWidth;
    const galleryBlockChildrenOffset = galleryBlockChildrenCount * (galleryBlockChildrenClientWidth / galleryBlockChildrenCount) / 1.5;
    galleryBlock.style[_horizontalAlign] = -galleryBlockChildrenOffset + 'px';
    let galleryBlockStep = 0;
    galleryBlock.addEventListener('click', () => {
      const galleryBlockPos = parseInt(galleryBlock.style[_horizontalAlign].replace('px', ''));
      galleryBlockStep++;

      if (galleryBlockStep >= galleryBlockChildrenCount) {
        galleryBlock.style[_horizontalAlign] = -galleryBlockChildrenOffset + 'px';
        galleryBlockStep = 0;
      } else {
        if (galleryBlockStep == galleryBlockChildrenCount - 1) {
          galleryBlock.style[_horizontalAlign] = '0px';
        } else {
          galleryBlock.style[_horizontalAlign] = galleryBlockPos + galleryBlockChildrenClientWidth / galleryBlockChildrenCount + 'px';
        }
      }
    });
  }
}

setTimeout(function () {
  window.scrollTo(0, 0);
}, 200);
},{"emergence.js":"dfaa8c2eee1f94ed4c7642f44eaa4abb"}],"dfaa8c2eee1f94ed4c7642f44eaa4abb":[function(require,module,exports) {
var define;
(function(root, factory) {
  // AMD
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(root);
    });
  } else if (typeof exports === 'object') {
    // Node.js or CommonJS
    module.exports = factory;
  } else {
    // Browser globals
    root.emergence = factory(root);
  }
})(this, function(root) {

  'use strict';

  var emergence = {};
  var poll, container, throttle, reset, handheld, elemCushion, offsetTop, offsetRight, offsetBottom, offsetLeft;
  var callback = function() {};

  // Browser feature test to include any browser APIs required for >= IE8
  // @return {bool} true if supported, otherwise false
  var cutsTheMustard = function() {
    return 'querySelectorAll' in document ? true : false;
  };

  // Checks if user is on a handheld
  // @return {bool} true if it's a handheld, otherwise false
  var isHandheld = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(
      navigator.userAgent
    );
  };

  // Get the offset of a DOM Element
  // @param {DOMElement} elem the container or element
  // @return {int} the top, left, width and height values in pixels
  var getElemOffset = function(elem) {

    // Width and height of container or element
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;

    // Default top and left position of container or element
    var topPos = 0;
    var leftPos = 0;

    // Get total distance of container or element to document's top and left origin
    do {
      if (!isNaN(elem.offsetTop)) {
        topPos += elem.offsetTop;
      }
      if (!isNaN(elem.offsetLeft)) {
        leftPos += elem.offsetLeft;
      }
    } while ((elem = elem.offsetParent) !== null);

    // Return dimensions and position
    return {
      width: w,
      height: h,
      top: topPos,
      left: leftPos
    };
  };

  // Get the custom container size if provided, otherwise the documents
  // @return {int} the width and height in pixels
  var getContainerSize = function(container) {
    var w, h;

    // If custom container is provided in options
    // Else use window or document
    if (container !== window) {
      w = container.clientWidth;
      h = container.clientHeight;
    } else {
      w = window.innerWidth || document.documentElement.clientWidth;
      h = window.innerHeight || document.documentElement.clientHeight;
    }

    return {
      width: w,
      height: h
    };
  };

  // Get the X and Y scroll positions
  // @return {int} the X and Y values in pixels
  var getContainerScroll = function(container) {

    // If custom container is provided in options
    // Else use window or document
    if (container !== window) {
      return {
        x: container.scrollLeft + getElemOffset(container).left,
        y: container.scrollTop + getElemOffset(container).top
      };
    } else {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
  };

  // Check if element's closest parent is hidden (display: none)
  // @param {DOMElement} elem the element
  // @return {bool} true if hidden, false otherwise
  var isHidden = function(elem) {
    return elem.offsetParent === null;
  };

  // Check if element is visible
  // @param {DOMElement} elem the element
  var isVisible = function(elem) {

    // Discontinue if element's closest parent is hidden
    if (isHidden(elem)) {
      return false;
    }

    // Get information from element and container
    var elemOffset = getElemOffset(elem);
    var containerSize = getContainerSize(container);
    var containerScroll = getContainerScroll(container);

    // Determine element size
    var elemWidth = elemOffset.width;
    var elemHeight = elemOffset.height;

    // Determine element position from rect points
    var elemTop = elemOffset.top;
    var elemLeft = elemOffset.left;
    var elemBottom = elemTop + elemHeight;
    var elemRight = elemLeft + elemWidth;

    // Determine boundaries of container and element
    // @return {bool} true if element is found within boundaries, otherwise false
    var checkBoundaries = function() {

      // Determine element boundaries including custom cushion
      var eTop = elemTop + elemHeight * elemCushion;
      var eRight = elemRight - elemWidth * elemCushion;
      var eBottom = elemBottom - elemHeight * elemCushion;
      var eLeft = elemLeft + elemWidth * elemCushion;

      // Determine container boundaries including custom offset
      var cTop = containerScroll.y + offsetTop;
      var cRight = containerScroll.x - offsetRight + containerSize.width;
      var cBottom = containerScroll.y - offsetBottom + containerSize.height;
      var cLeft = containerScroll.x + offsetLeft;

      return (eTop < cBottom && eBottom > cTop && eLeft < cRight && eRight > cLeft);
    };

    return checkBoundaries();
  };

  // Engage emergence through a throttling method for performance
  var emergenceThrottle = function() {
    if (!!poll) {
      return;
    }
    clearTimeout(poll);
    poll = setTimeout(function() {
      emergence.engage();
      poll = null;
    }, throttle);
  };

  // Initialize emergence with options, do feature test and create event listeners
  // @param {Object} options Custom settings
  emergence.init = function(options) {
    options = options || {};

    // Function to return an integer
    var optionInt = function(option, fallback) {
      return parseInt(option || fallback, 10);
    };

    // Function to return a floating point number
    var optionFloat = function(option, fallback) {
      return parseFloat(option || fallback);
    };

    // Default options
    container = options.container || window; // window or document by default
    reset = typeof options.reset !== 'undefined' ? options.reset : true; // true by default
    handheld = typeof options.handheld !== 'undefined' ? options.handheld : true; // true by default
    throttle = optionInt(options.throttle, 250); // 250 by default
    elemCushion = optionFloat(options.elemCushion, 0.15); // 0.15 by default
    offsetTop = optionInt(options.offsetTop, 0); // 0 by default
    offsetRight = optionInt(options.offsetRight, 0); // 0 by default
    offsetBottom = optionInt(options.offsetBottom, 0); // 0 by default
    offsetLeft = optionInt(options.offsetLeft, 0); // 0 by default
    callback = options.callback || callback;

    // If browser doesn't pass feature test
    if (!cutsTheMustard()) {

      // Provide message in console.log
      console.log('Emergence.js is not supported in this browser.');

    }
    // If this is handheld device AND handheld option is true
    // OR not a handheld device
    else if ((isHandheld() && handheld) || !isHandheld()) {

      // Add '.emergence' class to document for conditional CSS
      document.documentElement.className += ' emergence';

      // If browser supports addEventListener
      // Else use attachEvent
      if (window.addEventListener) {

        // Add event listeners for load, scroll and resize events
        window.addEventListener('load', emergenceThrottle, false);
        container.addEventListener('scroll', emergenceThrottle, false);
        container.addEventListener('resize', emergenceThrottle, false);

      } else {

        // Attach events for legacy load method, scroll and resize events
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState === 'complete') { emergenceThrottle(); }
        });
        container.attachEvent('onscroll', emergenceThrottle);
        container.attachEvent('onresize', emergenceThrottle);

      }
    }
  };

  // Engage emergence
  emergence.engage = function() {
    var nodes = document.querySelectorAll('[data-emergence]');
    var length = nodes.length;
    var elem;

    // Loop through objects with data-emergence attribute
    for (var i = 0; i < length; i++) {
      elem = nodes[i];

      // If element is visible
      if (isVisible(elem)) {

        // Change the state of the attribute to 'visible'
        elem.setAttribute('data-emergence', 'visible');

        // Hack to repaint attribute in IE8
        elem.className = elem.className;

        // Callback for when element is visible
        callback(elem, 'visible');

      } else if (reset === true) {

        // Else if element is hidden and reset
        // Change the state of the attribute to 'hidden'
        elem.setAttribute('data-emergence', 'hidden');

        // Hack to repaint attribute in IE8
        elem.className = elem.className;

        // Create callback
        callback(elem, 'reset');

      } else if (reset === false) {

        // Else if element is hidden and NOT reset
        // Create callback
        callback(elem, 'noreset');

      }
    }
    
    // If no data-emergence attributes are found
    // Disengage emergence
    if (!length) {
      emergence.disengage();
    }
  };

  // Disengage emergence
  emergence.disengage = function() {

    // If browser supports removeEventListener
    // Else use detachEvent
    if (window.removeEventListener) {

      // Remove event listeners scroll and resize events
      container.removeEventListener('scroll', emergenceThrottle, false);
      container.removeEventListener('resize', emergenceThrottle, false);

    } else {

      // Detach scroll and resize events
      container.detachEvent('onscroll', emergenceThrottle);
      container.detachEvent('onresize', emergenceThrottle);

    }

    // Clear timeout from throttle
    clearTimeout(poll);
  };

  return emergence;
});

},{}],"13ce80ed9a2051f997528b96cdd8e3d2":[function(require,module,exports) {
var global = arguments[3];
var __PARCEL_HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
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
var checkedAssets, assetsToAccept, acceptedAssets;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "12345" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    acceptedAssets = {};
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter( // eslint-disable-next-line no-undef
      asset => asset.envHash === __PARCEL_HMR_ENV_HASH); // Handle HMR Update

      var handled = false;
      assets.forEach(asset => {
        var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

        if (didAccept) {
          handled = true;
        }
      });

      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });

        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];

          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      } // Render the fancy html overlay


      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      document.body.appendChild(overlay);
    }
  };

  ws.onerror = function (e) {
    console.error(e.message);
  };

  ws.onclose = function (e) {
    console.warn('[parcel] 🚨 Connection to the HMR server was lost');
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}

function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }

  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
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
        parents.push([bundle, k]);
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
    var fn = new Function('require', 'module', 'exports', asset.output);
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

  return getParents(global.parcelRequire, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1]);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(global.parcelRequire, id);
      });

      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }

  acceptedAssets[id] = true;
}
},{}]},{},["13ce80ed9a2051f997528b96cdd8e3d2","7efd9d0d128b7429fe4d9a995bcbd347"], null)

//# sourceMappingURL=script.c56b080b.js.map
