var size = 0;

var styleCache_Housing_Education_Hub_Distance={}
var style_Housing_Education_Hub_Distance = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,152,242,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0}),
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Housing_Education_Hub_Distance[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_Housing_Education_Hub_Distance[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Housing_Education_Hub_Distance[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};