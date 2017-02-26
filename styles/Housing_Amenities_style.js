var size = 0;
var ranges_Housing_Amenities = [[503.050000, 1715.530000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(251,8,255,1.0)'})})
    })]],
[1715.530000, 2343.970000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(249,64,252,1.0)'})})
    })]],
[2343.970000, 3058.550000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(246,120,248,1.0)'})})
    })]],
[3058.550000, 4493.730000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(243,177,244,1.0)'})})
    })]],
[4493.730000, 11058.290000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(240,233,240,1.0)'})})
    })]]];
var styleCache_Housing_Amenities={}
var style_Housing_Amenities = function(feature, resolution){
    var value = feature.get("q2wHide_Total");
    var style = ranges_Housing_Amenities[0][2];
    for (i = 0; i < ranges_Housing_Amenities.length; i++){
        var range = ranges_Housing_Amenities[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Housing_Amenities[key]){
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
        styleCache_Housing_Amenities[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Housing_Amenities[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};