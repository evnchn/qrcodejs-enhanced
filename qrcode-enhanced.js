function fixcode(context, qrcode_object) {
    imageData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    context.putImageData(imageData, 1, 0, 0, 0, context.canvas.width, 1);
    context.putImageData(imageData, 0, 1, 0, 0, 1, context.canvas.height);
    context.putImageData(imageData, 1, 1, 0, 0, context.canvas.width - 1, context.canvas.height - 1);
    qrcode_object.makeImage();
}

function QRCodeEnhanced(q1, q2) {
    // q1 can be passed on directly. 
    // q2 may need some adjustments. 

    // let it draw to get module size. 
    // if q2 is string, no problem. if q2 is dict, no problem. 
    var qrcode = new QRCode(q1, q2);
	console.log(qrcode);
    // get best dimensions from internal structure. 
    best_dimensions = qrcode._oQRCode.getModuleCount();
    //console.log(qrcode._oQRCode.getModuleCount());

    // q1 needs to have its contents cleared. 
    if (typeof q1 == "string") {
        document.getElementById(q1).innerHTML = "";
    } else {
        q1.innerHTML = "";
    }
    if (typeof q2 == "string") {
        q2 = {
            text: q2,
            width: best_dimensions,
            height: best_dimensions
        }
    } else {
        multipiler = q2.multipiler === undefined ? 2 : q2.multipiler;
        multipiler = Math.max(Math.floor(multipiler), 2);

        q2.width = best_dimensions * multipiler;
        q2.height = best_dimensions * multipiler;
        q2.multipiler = multipiler;
    }

    qrcode = new QRCode(q1, q2)
    if (!qrcode._htOption.useSVG) {
        canvas = document.getElementById('qrcode').getElementsByTagName('canvas')[0]
        context = canvas.getContext("2d")
        fixcode(context, qrcode);

    }
    return qrcode

}


QRCode.prototype.makeCodeEnhanced = function(txt) {
    makeCodeEnhanced(this, txt);

}

function makeCodeEnhanced(qrcode_object, txt) {
    qrcode_object.makeCode(txt);
    if (!qrcode_object._htOption.useSVG) {
        best_dimensions = qrcode_object._oQRCode.getModuleCount()
        multipiler = qrcode_object._htOption.multipiler === undefined ? 2 : qrcode_object._htOption.multipiler;
        multipiler = Math.max(Math.floor(multipiler), 2);
        qrcode_object._htOption.width = best_dimensions * multipiler;
        qrcode_object._htOption.height = best_dimensions * multipiler;
        qrcode_object._el.getElementsByTagName('canvas')[0].width = best_dimensions * multipiler;
        qrcode_object._el.getElementsByTagName('canvas')[0].height = best_dimensions * multipiler;
        qrcode_object.makeCode(txt);
        fixcode(qrcode_object._el.getElementsByTagName('canvas')[0].getContext("2d"), qrcode_object);
    }
}