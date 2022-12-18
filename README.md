# QRCode2.js / QRCode-enhanced.js
QRCode.js is javascript library for making QRCode. QRCode.js supports Cross-browser with HTML5 Canvas and table tag in DOM. QRCode.js has no dependencies.

QRCode-enhanced.js is a javascript plugin that modifies the behaviour of QRCode.js as a black box, such that the output will always be pixel-perfect, with no smeared edges, irregular pixel sizes, etc.

QRCode2.js is a javascript library that does the same as QRCode.js and QRCode-enhanced.js and even more, only that the function calls remains the same.

## Recommended New Usages (QRCode2.js)

Replace qrcode.js / qrcode.min.js with qrcode2.js.

Parameter "multiplier" can be used to define image size as multiples to the size (in pixels) of the QR Code.

Default: 4

Parameter "applyCSS" can be used to disable or enable applying of CSS which ensures sharp rendering of QR Code (no antialiasing) in the case of width and height both coincidentally being multiples of the QR Code size, or that an integer multiplier has been used.

Default: true

Parameter "useSVG" now generates pixel-perfect QR Codes with no seams. This cannot be turned off. (why would you...)

## Basic Usages (legacy QRCode-enhanced.js)

Add qrcode-enhanced.js right below qrcode.js

qrcode.min.js does NOT work (yet)...

Then, simply replace "new QRCode" with "QRCodeEnhanced".
```
<div id="qrcode"></div>
<script type="text/javascript">
// new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
QRCodeEnhanced(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");
</script>
```

Should you like to use options, it also works:

```
<div id="qrcode"></div>
<script type="text/javascript">
/*var qrcode = new QRCode("test", {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});*/
var qrcode = QRCodeEnhanced("test", {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
</script>
```

Methods are also supported.

```
//qrcode.clear(); // this is not required anymore. 
//qrcode.makeCode("http://naver.com"); // old way to make another code.
qrcode.makeCodeEnhanced("http://naver.com"); // new way to make another code.
```

Add the following CSS code to disable antialiased zoom in

```
#qrcode { 
    image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
    image-rendering: -moz-crisp-edges;          /* Firefox                        */
    image-rendering: -o-crisp-edges;            /* Opera                          */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
    image-rendering: pixelated;                 /* Universal support since 2021   */
    image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */

}
```

(https://stackoverflow.com/a/14068216)

## Browser Compatibility
QRCode.js originally works on: IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

QRCode-enhanced.js works on: [testing is still required]

QRCode2.js SHOULD work on: IE6~10, Chrome, Firefox, Safari, Opera, Mobile Safari, Android, Windows Mobile, ETC.

## License
MIT License

## Contact

Original developer

twitter @davidshimjs

Patch developer

Github: @evnchn


