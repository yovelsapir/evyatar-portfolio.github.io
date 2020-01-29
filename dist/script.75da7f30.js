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
})({"Blackmoji2.gif":[function(require,module,exports) {
module.exports = "/Blackmoji2.b2376b15.gif";
},{}],"Whitemoji2.gif":[function(require,module,exports) {
module.exports = "/Whitemoji2.6bd312af.gif";
},{}],"*.gif":[function(require,module,exports) {
module.exports = {
  "Blackmoji2": require("./Blackmoji2.gif"),
  "Whitemoji2": require("./Whitemoji2.gif")
};
},{"./Blackmoji2.gif":"Blackmoji2.gif","./Whitemoji2.gif":"Whitemoji2.gif"}],"node_modules/emergence.js/src/emergence.js":[function(require,module,exports) {
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

},{}],"script.js":[function(require,module,exports) {
// טעינת תמונה איטית
var _require = require('*.gif'),
    Whitemoji2 = _require.Whitemoji2,
    Blackmoji2 = _require.Blackmoji2;

window.addEventListener('load', function () {
  var elm = $('[data-src=Whitemoji2]');
  elm[0].setAttribute('src', Whitemoji2);
}, false); // חץ למטה

var delayInMilliseconds = 20000; //1 second

setTimeout(function () {
  $('.arrow').css('visibility', 'visible');
}, delayInMilliseconds); // const emergence = require('./emergence.min.js');

var e = require('emergence.js');

var emergence = e();
var HOME_GROUP = 'home-group';
var WORK_GROUP = 'show-me-your-work-group';
var WHAT_YOU_CAN_DO_GROUP = 'what-you-can-do-group';
var SMOOTH_ANIMATION_GROUP = 'smooth-animation-group';
var CONTACT_GROUP = 'contact-group';
var buttonsClicked = {};
document.querySelectorAll('.message-block').forEach(function (el) {
  return el.style.top = "0px";
});
document.querySelectorAll('.group-container').forEach(function (el, i) {
  return el.style.order = i;
}); // קונפטי

var retina = window.devicePixelRatio,
    // Math shorthands
PI = Math.PI,
    sqrt = Math.sqrt,
    round = Math.round,
    random = Math.random,
    cos = Math.cos,
    sin = Math.sin,
    // Local WindowAnimationTiming interface
rAF = window.requestAnimationFrame,
    cAF = window.cancelAnimationFrame || window.cancelRequestAnimationFrame,
    _now = Date.now || function () {
  return new Date().getTime();
}; // Local WindowAnimationTiming interface polyfill


(function (w) {
  /**
                * Fallback implementation.
                */
  var prev = _now();

  function fallback(fn) {
    var curr = _now();

    var ms = Math.max(0, 16 - (curr - prev));
    var req = setTimeout(fn, ms);
    prev = curr;
    return req;
  }
  /**
                * Cancel.
                */


  var cancel = w.cancelAnimationFrame || w.webkitCancelAnimationFrame || w.clearTimeout;
  rAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || fallback;

  cAF = function cAF(id) {
    cancel.call(w, id);
  };
})(window);

function myFunction123() {
  var speed = 50,
      duration = 1.0 / speed,
      confettiRibbonCount = 11,
      ribbonPaperCount = 30,
      ribbonPaperDist = 8.0,
      ribbonPaperThick = 8.0,
      confettiPaperCount = 95,
      DEG_TO_RAD = PI / 180,
      RAD_TO_DEG = 180 / PI,
      colors = [["#df0049", "#660671"], ["#00e857", "#005291"], ["#2bebbc", "#05798a"], ["#ffd200", "#b06c00"]];

  function Vector2(_x, _y) {
    this.x = _x, this.y = _y;

    this.Length = function () {
      return sqrt(this.SqrLength());
    };

    this.SqrLength = function () {
      return this.x * this.x + this.y * this.y;
    };

    this.Add = function (_vec) {
      this.x += _vec.x;
      this.y += _vec.y;
    };

    this.Sub = function (_vec) {
      this.x -= _vec.x;
      this.y -= _vec.y;
    };

    this.Div = function (_f) {
      this.x /= _f;
      this.y /= _f;
    };

    this.Mul = function (_f) {
      this.x *= _f;
      this.y *= _f;
    };

    this.Normalize = function () {
      var sqrLen = this.SqrLength();

      if (sqrLen != 0) {
        var factor = 1.0 / sqrt(sqrLen);
        this.x *= factor;
        this.y *= factor;
      }
    };

    this.Normalized = function () {
      var sqrLen = this.SqrLength();

      if (sqrLen != 0) {
        var factor = 1.0 / sqrt(sqrLen);
        return new Vector2(this.x * factor, this.y * factor);
      }

      return new Vector2(0, 0);
    };
  }

  Vector2.Lerp = function (_vec0, _vec1, _t) {
    return new Vector2((_vec1.x - _vec0.x) * _t + _vec0.x, (_vec1.y - _vec0.y) * _t + _vec0.y);
  };

  Vector2.Distance = function (_vec0, _vec1) {
    return sqrt(Vector2.SqrDistance(_vec0, _vec1));
  };

  Vector2.SqrDistance = function (_vec0, _vec1) {
    var x = _vec0.x - _vec1.x;
    var y = _vec0.y - _vec1.y;
    return x * x + y * y + z * z;
  };

  Vector2.Scale = function (_vec0, _vec1) {
    return new Vector2(_vec0.x * _vec1.x, _vec0.y * _vec1.y);
  };

  Vector2.Min = function (_vec0, _vec1) {
    return new Vector2(Math.min(_vec0.x, _vec1.x), Math.min(_vec0.y, _vec1.y));
  };

  Vector2.Max = function (_vec0, _vec1) {
    return new Vector2(Math.max(_vec0.x, _vec1.x), Math.max(_vec0.y, _vec1.y));
  };

  Vector2.ClampMagnitude = function (_vec0, _len) {
    var vecNorm = _vec0.Normalized;
    return new Vector2(vecNorm.x * _len, vecNorm.y * _len);
  };

  Vector2.Sub = function (_vec0, _vec1) {
    return new Vector2(_vec0.x - _vec1.x, _vec0.y - _vec1.y, _vec0.z - _vec1.z);
  };

  function EulerMass(_x, _y, _mass, _drag) {
    this.position = new Vector2(_x, _y);
    this.mass = _mass;
    this.drag = _drag;
    this.force = new Vector2(0, 0);
    this.velocity = new Vector2(0, 0);

    this.AddForce = function (_f) {
      this.force.Add(_f);
    };

    this.Integrate = function (_dt) {
      var acc = this.CurrentForce(this.position);
      acc.Div(this.mass);
      var posDelta = new Vector2(this.velocity.x, this.velocity.y);
      posDelta.Mul(_dt);
      this.position.Add(posDelta);
      acc.Mul(_dt);
      this.velocity.Add(acc);
      this.force = new Vector2(0, 0);
    };

    this.CurrentForce = function (_pos, _vel) {
      var totalForce = new Vector2(this.force.x, this.force.y);
      var speed = this.velocity.Length();
      var dragVel = new Vector2(this.velocity.x, this.velocity.y);
      dragVel.Mul(this.drag * this.mass * speed);
      totalForce.Sub(dragVel);
      return totalForce;
    };
  }

  function ConfettiPaper(_x, _y) {
    this.pos = new Vector2(_x, _y);
    this.rotationSpeed = random() * 600 + 800;
    this.angle = DEG_TO_RAD * random() * 360;
    this.rotation = DEG_TO_RAD * random() * 360;
    this.cosA = 1.0;
    this.size = 5.0;
    this.oscillationSpeed = random() * 1.5 + 0.5;
    this.xSpeed = 40.0;
    this.ySpeed = random() * 60 + 50.0;
    this.corners = new Array();
    this.time = random();
    var ci = round(random() * (colors.length - 1));
    this.frontColor = colors[ci][0];
    this.backColor = colors[ci][1];

    for (var i = 0; i < 4; i++) {
      var dx = cos(this.angle + DEG_TO_RAD * (i * 90 + 45));
      var dy = sin(this.angle + DEG_TO_RAD * (i * 90 + 45));
      this.corners[i] = new Vector2(dx, dy);
    }

    this.Update = function (_dt) {
      this.time += _dt;
      this.rotation += this.rotationSpeed * _dt;
      this.cosA = cos(DEG_TO_RAD * this.rotation);
      this.pos.x += cos(this.time * this.oscillationSpeed) * this.xSpeed * _dt;
      this.pos.y += this.ySpeed * _dt;

      if (this.pos.y > ConfettiPaper.bounds.y) {
        this.pos.x = random() * ConfettiPaper.bounds.x;
        this.pos.y = 0;
      }
    };

    this.Draw = function (_g) {
      if (this.cosA > 0) {
        _g.fillStyle = this.frontColor;
      } else {
        _g.fillStyle = this.backColor;
      }

      _g.beginPath();

      _g.moveTo((this.pos.x + this.corners[0].x * this.size) * retina, (this.pos.y + this.corners[0].y * this.size * this.cosA) * retina);

      for (var i = 1; i < 4; i++) {
        _g.lineTo((this.pos.x + this.corners[i].x * this.size) * retina, (this.pos.y + this.corners[i].y * this.size * this.cosA) * retina);
      }

      _g.closePath();

      _g.fill();
    };
  }

  ConfettiPaper.bounds = new Vector2(0, 0);

  function ConfettiRibbon(_x, _y, _count, _dist, _thickness, _angle, _mass, _drag) {
    this.particleDist = _dist;
    this.particleCount = _count;
    this.particleMass = _mass;
    this.particleDrag = _drag;
    this.particles = new Array();
    var ci = round(random() * (colors.length - 1));
    this.frontColor = colors[ci][0];
    this.backColor = colors[ci][1];
    this.xOff = cos(DEG_TO_RAD * _angle) * _thickness;
    this.yOff = sin(DEG_TO_RAD * _angle) * _thickness;
    this.position = new Vector2(_x, _y);
    this.prevPosition = new Vector2(_x, _y);
    this.velocityInherit = random() * 2 + 4;
    this.time = random() * 100;
    this.oscillationSpeed = random() * 2 + 2;
    this.oscillationDistance = random() * 40 + 40;
    this.ySpeed = random() * 40 + 80;

    for (var i = 0; i < this.particleCount; i++) {
      this.particles[i] = new EulerMass(_x, _y - i * this.particleDist, this.particleMass, this.particleDrag);
    }

    this.Update = function (_dt) {
      var i = 0;
      this.time += _dt * this.oscillationSpeed;
      this.position.y += this.ySpeed * _dt;
      this.position.x += cos(this.time) * this.oscillationDistance * _dt;
      this.particles[0].position = this.position;
      var dX = this.prevPosition.x - this.position.x;
      var dY = this.prevPosition.y - this.position.y;
      var delta = sqrt(dX * dX + dY * dY);
      this.prevPosition = new Vector2(this.position.x, this.position.y);

      for (i = 1; i < this.particleCount; i++) {
        var dirP = Vector2.Sub(this.particles[i - 1].position, this.particles[i].position);
        dirP.Normalize();
        dirP.Mul(delta / _dt * this.velocityInherit);
        this.particles[i].AddForce(dirP);
      }

      for (i = 1; i < this.particleCount; i++) {
        this.particles[i].Integrate(_dt);
      }

      for (i = 1; i < this.particleCount; i++) {
        var rp2 = new Vector2(this.particles[i].position.x, this.particles[i].position.y);
        rp2.Sub(this.particles[i - 1].position);
        rp2.Normalize();
        rp2.Mul(this.particleDist);
        rp2.Add(this.particles[i - 1].position);
        this.particles[i].position = rp2;
      }

      if (this.position.y > ConfettiRibbon.bounds.y + this.particleDist * this.particleCount) {
        this.Reset();
      }
    };

    this.Reset = function () {
      this.position.y = -random() * ConfettiRibbon.bounds.y;
      this.position.x = random() * ConfettiRibbon.bounds.x;
      this.prevPosition = new Vector2(this.position.x, this.position.y);
      this.velocityInherit = random() * 2 + 4;
      this.time = random() * 100;
      this.oscillationSpeed = random() * 2.0 + 1.5;
      this.oscillationDistance = random() * 40 + 40;
      this.ySpeed = random() * 40 + 80;
      var ci = round(random() * (colors.length - 1));
      this.frontColor = colors[ci][0];
      this.backColor = colors[ci][1];
      this.particles = new Array();

      for (var i = 0; i < this.particleCount; i++) {
        this.particles[i] = new EulerMass(this.position.x, this.position.y - i * this.particleDist, this.particleMass, this.particleDrag);
      }
    };

    this.Draw = function (_g) {
      for (var i = 0; i < this.particleCount - 1; i++) {
        var p0 = new Vector2(this.particles[i].position.x + this.xOff, this.particles[i].position.y + this.yOff);
        var p1 = new Vector2(this.particles[i + 1].position.x + this.xOff, this.particles[i + 1].position.y + this.yOff);

        if (this.Side(this.particles[i].position.x, this.particles[i].position.y, this.particles[i + 1].position.x, this.particles[i + 1].position.y, p1.x, p1.y) < 0) {
          _g.fillStyle = this.frontColor;
          _g.strokeStyle = this.frontColor;
        } else {
          _g.fillStyle = this.backColor;
          _g.strokeStyle = this.backColor;
        }

        if (i == 0) {
          _g.beginPath();

          _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);

          _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);

          _g.lineTo((this.particles[i + 1].position.x + p1.x) * 0.5 * retina, (this.particles[i + 1].position.y + p1.y) * 0.5 * retina);

          _g.closePath();

          _g.stroke();

          _g.fill();

          _g.beginPath();

          _g.moveTo(p1.x * retina, p1.y * retina);

          _g.lineTo(p0.x * retina, p0.y * retina);

          _g.lineTo((this.particles[i + 1].position.x + p1.x) * 0.5 * retina, (this.particles[i + 1].position.y + p1.y) * 0.5 * retina);

          _g.closePath();

          _g.stroke();

          _g.fill();
        } else if (i == this.particleCount - 2) {
          _g.beginPath();

          _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);

          _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);

          _g.lineTo((this.particles[i].position.x + p0.x) * 0.5 * retina, (this.particles[i].position.y + p0.y) * 0.5 * retina);

          _g.closePath();

          _g.stroke();

          _g.fill();

          _g.beginPath();

          _g.moveTo(p1.x * retina, p1.y * retina);

          _g.lineTo(p0.x * retina, p0.y * retina);

          _g.lineTo((this.particles[i].position.x + p0.x) * 0.5 * retina, (this.particles[i].position.y + p0.y) * 0.5 * retina);

          _g.closePath();

          _g.stroke();

          _g.fill();
        } else {
          _g.beginPath();

          _g.moveTo(this.particles[i].position.x * retina, this.particles[i].position.y * retina);

          _g.lineTo(this.particles[i + 1].position.x * retina, this.particles[i + 1].position.y * retina);

          _g.lineTo(p1.x * retina, p1.y * retina);

          _g.lineTo(p0.x * retina, p0.y * retina);

          _g.closePath();

          _g.stroke();

          _g.fill();
        }
      }
    };

    this.Side = function (x1, y1, x2, y2, x3, y3) {
      return (x1 - x2) * (y3 - y2) - (y1 - y2) * (x3 - x2);
    };
  }

  ConfettiRibbon.bounds = new Vector2(0, 0);
  confetti = {};

  confetti.Context = function (id) {
    var i = 0;
    var canvas = document.getElementById(id);
    var canvasParent = canvas.parentNode;
    var canvasWidth = canvasParent.offsetWidth;
    var canvasHeight = canvasParent.offsetHeight;
    canvas.width = canvasWidth * retina;
    canvas.height = canvasHeight * retina;
    var context = canvas.getContext('2d');
    var interval = null;
    var confettiRibbons = new Array();
    ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);

    for (i = 0; i < confettiRibbonCount; i++) {
      confettiRibbons[i] = new ConfettiRibbon(random() * canvasWidth, -random() * canvasHeight * 2, ribbonPaperCount, ribbonPaperDist, ribbonPaperThick, 45, 1, 0.05);
    }

    var confettiPapers = new Array();
    ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);

    for (i = 0; i < confettiPaperCount; i++) {
      confettiPapers[i] = new ConfettiPaper(random() * canvasWidth, random() * canvasHeight);
    }

    this.resize = function () {
      canvasWidth = canvasParent.offsetWidth;
      canvasHeight = canvasParent.offsetHeight;
      canvas.width = canvasWidth * retina;
      canvas.height = canvasHeight * retina;
      ConfettiPaper.bounds = new Vector2(canvasWidth, canvasHeight);
      ConfettiRibbon.bounds = new Vector2(canvasWidth, canvasHeight);
    };

    this.start = function () {
      this.stop();
      var context = this;
      this.update();
    };

    this.stop = function () {
      cAF(this.interval);
    };

    this.update = function () {
      var i = 0;
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (i = 0; i < confettiPaperCount; i++) {
        confettiPapers[i].Update(duration);
        confettiPapers[i].Draw(context);
      }

      for (i = 0; i < confettiRibbonCount; i++) {
        confettiRibbons[i].Update(duration);
        confettiRibbons[i].Draw(context);
      }

      this.interval = rAF(function () {
        confetti.update();
      });
    };
  };

  var confetti = new confetti.Context('confetti');
  confetti.start();
  window.addEventListener('resize', function (event) {
    confetti.resize();
  });
  var canvas = document.getElementById("confetti");
  canvas.width = window.innerWidth; // equals window dimension

  canvas.height = window.innerHeight;
} //סוף קונפטי


document.querySelector("#".concat(HOME_GROUP, " .show-me-your-work-btn")).addEventListener('click', function () {
  showPage(WORK_GROUP, 1);
  document.querySelector("#".concat(HOME_GROUP, " .what-you-can-do-btn")).remove();
  document.querySelector("#".concat(HOME_GROUP, " .show-me-your-work-btn")).remove();
  createGallery('.gallery-block-show-me-your-work');
  var smoothAnimationButton = createButton("Give me more", '#smooth-animation-group', WORK_GROUP);
  var whatYouCanDoButton = createButton("What can you do?", '#what-you-can-do-group', WORK_GROUP);

  if (whatYouCanDoButton) {
    whatYouCanDoButton.addEventListener('click', function () {
      removeButton(smoothAnimationButton);
      removeButton(whatYouCanDoButton);
      showPage(WHAT_YOU_CAN_DO_GROUP, 2);
      var w_contactInfoButton = createButton("How can I contact you?", '#contact-group', WHAT_YOU_CAN_DO_GROUP);

      if (w_contactInfoButton) {
        w_contactInfoButton.addEventListener('click', function () {
          removeButton(w_contactInfoButton);
          showPage(CONTACT_GROUP, 3);
          $('#confetti').addClass("opa");
          myFunction123();
        });
      }
    });
  }

  if (smoothAnimationButton) {
    smoothAnimationButton.addEventListener('click', function () {
      removeButton(whatYouCanDoButton);
      removeButton(smoothAnimationButton);
      showPage(SMOOTH_ANIMATION_GROUP, 2);
      createGallery('.gallery-block-smooth-animation');
      var s_whatYouCanDoButton = createButton("What you can do?", '#what-you-can-do-group', SMOOTH_ANIMATION_GROUP);

      if (s_whatYouCanDoButton) {
        s_whatYouCanDoButton.addEventListener('click', function () {
          removeButton(s_whatYouCanDoButton);
          showPage(WHAT_YOU_CAN_DO_GROUP, 3);
          var s_contactInfoButton = createButton("How can I contact you?", '#contact-group', WHAT_YOU_CAN_DO_GROUP);

          if (s_contactInfoButton) {
            s_contactInfoButton.addEventListener('click', function () {
              removeButton(s_contactInfoButton);
              showPage(CONTACT_GROUP, 4);
              $('#confetti').addClass("opa");
              myFunction123();
            });
          }
        });
      }
    });
  }
});
document.querySelector("#".concat(HOME_GROUP, " .what-you-can-do-btn")).addEventListener('click', function () {
  showPage(WHAT_YOU_CAN_DO_GROUP, 1);
  document.querySelector("#".concat(HOME_GROUP, " .show-me-your-work-btn")).remove();
  document.querySelector("#".concat(HOME_GROUP, " .what-you-can-do-btn")).remove();
  var showMeYourWorkButton = createButton("Show your workkk", '#show-me-your-work-group', WHAT_YOU_CAN_DO_GROUP); // const smoothAnimationButton = createButton("Show me more!", '#smooth-animation-group', WHAT_YOU_CAN_DO_GROUP);

  showMeYourWorkButton.addEventListener('click', function () {
    // removeButton(smoothAnimationButton);
    removeButton(showMeYourWorkButton);
    showPage(WORK_GROUP, 2);
    createGallery('.gallery-block-show-me-your-work');
    var w_smoothAnimationButton = createButton("Give me more", '#smooth-animation-group', WORK_GROUP);
    var w_contactInfoButton = createButton("How can I contact you?", '#contact-group', WORK_GROUP);
    w_smoothAnimationButton.addEventListener('click', function () {
      removeButton(w_contactInfoButton);
      removeButton(w_smoothAnimationButton);
      showPage(SMOOTH_ANIMATION_GROUP, 3);
      createGallery('.gallery-block-smooth-animation');
      var w_contactInfoButton1 = createButton("How can I contact you?", '#contact-group', SMOOTH_ANIMATION_GROUP);
      w_contactInfoButton1.addEventListener('click', function () {
        removeButton(w_contactInfoButton1);
        showPage(CONTACT_GROUP, 4);
        $('#confetti').addClass("opa");
        myFunction123();
      });
    });
    w_contactInfoButton.addEventListener('click', function () {
      removeButton(w_contactInfoButton);
      removeButton(w_smoothAnimationButton);
      showPage(CONTACT_GROUP, 3);
      $('#confetti').addClass("opa");
      myFunction123();
    });
    /*   s_contactInfoButton.addEventListener('click', () => {
         removeButton(w_contactInfoButton);
         removeButton(w_smoothAnimationButton);
         showPage(CONTACT_GROUP, 4);
       }); */
  });
});

function showPage(group, order) {
  document.getElementById(group).style.order = order;
  document.getElementById(group).classList.remove('hidden');
}

function createButton(text, link, group) {
  if (!buttonsClicked["".concat(link).concat(group)]) {
    var button = document.createElement('a');
    var t = document.createTextNode(text);
    button.appendChild(t);
    button.setAttribute('href', link);
    button.classList.add('btn');
    document.querySelector("#".concat(group, " .button-group")).appendChild(button);
    buttonsClicked["".concat(link).concat(group)] = true;
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
    getVisibles.forEach(function (el) {
      var domRectTop = el.getBoundingClientRect().top;
      var outerHeight = window.outerHeight;

      if (domRectTop >= 0 && domRectTop <= outerHeight) {
        var elementClientPosition = domRectTop / outerHeight * 100;

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
  var galleryBlock = document.querySelector(selector);

  if (galleryBlock) {
    if (!galleryBlock.classList.contains('gallery-active')) {
      var _horizontalAlign = horizontalAlign == 'right' ? horizontalAlign : 'left';

      galleryBlock.classList.add('gallery-active');
      galleryBlock.style.position = 'relative';
      var galleryBlockChildrenCount = galleryBlock.childElementCount;
      var galleryBlockChildrenClientWidth = galleryBlock.clientWidth;
      var galleryBlockChildrenOffset = galleryBlockChildrenCount * (galleryBlockChildrenClientWidth / galleryBlockChildrenCount) / 1.5;
      galleryBlock.style[_horizontalAlign] = -galleryBlockChildrenOffset + 'px';
      var galleryBlockStep = 0;
      galleryBlock.addEventListener('click', function () {
        var galleryBlockPos = parseInt(galleryBlock.style[_horizontalAlign].replace('px', ''));
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
}

setTimeout(function () {
  window.scrollTo(0, 0);
}, 200); // אנימציה ברגע שנטען

$(document).ready(function () {
  $('.profile').addClass("animate");
  $('.page').addClass("move");
  $('.header').addClass("opac");
}); // אנימציה ברגע שזז

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.profile.animate').addClass("smaller");
    $('.frame').addClass("animatef");
    $('.warp').addClass("hidden");
  } else {
    $('.profile.animate').removeClass("smaller");
    $('.frame').removeClass("animatef");
    $('.warp').addClass("hidden");
  }
}); // שעון

window.onload = function () {
  clock();

  function clock() {
    var now = new Date();
    var TwentyFourHour = now.getHours();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mid = 'PM';

    if (min < 10) {
      min = "0" + min;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (TwentyFourHour < 12) {
      mid = 'AM';
    }

    document.getElementById('currentTime').innerHTML = hour + ':' + min + ' ' + mid; //setTimeout(clock, 1000);
  }
}; // מחליף בין דארק ללייט


var toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    $(".profile").attr("src", src = "".concat(Blackmoji2));
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    $(".profile").attr("src", src = "".concat(Whitemoji2));
  }
}

toggleSwitch.addEventListener('change', switchTheme, false); // סקילים

/**
 * inViewport jQuery plugin by Roko C.B.
 * http://stackoverflow.com/a/26831113/383904
 * Returns a callback function with an argument holding
 * the current amount of px an element is visible in viewport
 * (The min returned value is 0 (element outside of viewport)
 */

;

(function ($, win) {
  $.fn.inViewport = function (cb) {
    return this.each(function (i, el) {
      function visPx() {
        var elH = $(el).outerHeight(),
            H = $(win).height(),
            r = el.getBoundingClientRect(),
            t = r.top,
            b = r.bottom;
        return cb.call(el, Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H)));
      }

      visPx();
      $(win).on("resize scroll", visPx);
    });
  };
})(jQuery, window);

$(".bigger").inViewport(function (px) {
  if (px) $(this).addClass("triggeredCSS3");
});
$(".box").inViewport(function (px) {
  if (px) $(this).addClass("load");
});
},{"*.gif":"*.gif","emergence.js":"node_modules/emergence.js/src/emergence.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62397" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script.js"], null)
//# sourceMappingURL=/script.75da7f30.js.map