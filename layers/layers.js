var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_MP14_SUBZONE_NO_SEA_PL_svy21 = new ol.format.GeoJSON();
var features_MP14_SUBZONE_NO_SEA_PL_svy21 = format_MP14_SUBZONE_NO_SEA_PL_svy21.readFeatures(geojson_MP14_SUBZONE_NO_SEA_PL_svy21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_MP14_SUBZONE_NO_SEA_PL_svy21 = new ol.source.Vector();
jsonSource_MP14_SUBZONE_NO_SEA_PL_svy21.addFeatures(features_MP14_SUBZONE_NO_SEA_PL_svy21);var lyr_MP14_SUBZONE_NO_SEA_PL_svy21 = new ol.layer.Vector({
                source:jsonSource_MP14_SUBZONE_NO_SEA_PL_svy21, 
                style: style_MP14_SUBZONE_NO_SEA_PL_svy21,
                title: "MP14_SUBZONE_NO_SEA_PL_svy21"
            });var format_Train_Stations_SG_subzones = new ol.format.GeoJSON();
var features_Train_Stations_SG_subzones = format_Train_Stations_SG_subzones.readFeatures(geojson_Train_Stations_SG_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Train_Stations_SG_subzones = new ol.source.Vector();
jsonSource_Train_Stations_SG_subzones.addFeatures(features_Train_Stations_SG_subzones);var lyr_Train_Stations_SG_subzones = new ol.layer.Vector({
                source:jsonSource_Train_Stations_SG_subzones, 
                style: style_Train_Stations_SG_subzones,
                title: "Train_Stations_SG_subzones"
            });var format_Bus_Stops_SG_subzones = new ol.format.GeoJSON();
var features_Bus_Stops_SG_subzones = format_Bus_Stops_SG_subzones.readFeatures(geojson_Bus_Stops_SG_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Bus_Stops_SG_subzones = new ol.source.Vector();
jsonSource_Bus_Stops_SG_subzones.addFeatures(features_Bus_Stops_SG_subzones);var lyr_Bus_Stops_SG_subzones = new ol.layer.Vector({
                source:jsonSource_Bus_Stops_SG_subzones, 
                style: style_Bus_Stops_SG_subzones,
                title: "Bus_Stops_SG_subzones"
            });var format_Education_subzones = new ol.format.GeoJSON();
var features_Education_subzones = format_Education_subzones.readFeatures(geojson_Education_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Education_subzones = new ol.source.Vector();
jsonSource_Education_subzones.addFeatures(features_Education_subzones);var lyr_Education_subzones = new ol.layer.Vector({
                source:jsonSource_Education_subzones, 
                style: style_Education_subzones,
                title: "Education_subzones"
            });var format_Coffeeshops_SG_subzones = new ol.format.GeoJSON();
var features_Coffeeshops_SG_subzones = format_Coffeeshops_SG_subzones.readFeatures(geojson_Coffeeshops_SG_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Coffeeshops_SG_subzones = new ol.source.Vector();
jsonSource_Coffeeshops_SG_subzones.addFeatures(features_Coffeeshops_SG_subzones);var lyr_Coffeeshops_SG_subzones = new ol.layer.Vector({
                source:jsonSource_Coffeeshops_SG_subzones, 
                style: style_Coffeeshops_SG_subzones,
                title: "Coffeeshops_SG_subzones"
            });var format_Shopping_Malls_SG_subzones = new ol.format.GeoJSON();
var features_Shopping_Malls_SG_subzones = format_Shopping_Malls_SG_subzones.readFeatures(geojson_Shopping_Malls_SG_subzones, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Shopping_Malls_SG_subzones = new ol.source.Vector();
jsonSource_Shopping_Malls_SG_subzones.addFeatures(features_Shopping_Malls_SG_subzones);var lyr_Shopping_Malls_SG_subzones = new ol.layer.Vector({
                source:jsonSource_Shopping_Malls_SG_subzones, 
                style: style_Shopping_Malls_SG_subzones,
                title: "Shopping_Malls_SG_subzones"
            });var format_Housing_Education = new ol.format.GeoJSON();
var features_Housing_Education = format_Housing_Education.readFeatures(geojson_Housing_Education, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Education = new ol.source.Vector();
jsonSource_Housing_Education.addFeatures(features_Housing_Education);var lyr_Housing_Education = new ol.layer.Vector({
                source:jsonSource_Housing_Education, 
                style: style_Housing_Education,
                title: "Housing_Education"
            });var format_Housing_Amenities = new ol.format.GeoJSON();
var features_Housing_Amenities = format_Housing_Amenities.readFeatures(geojson_Housing_Amenities, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Amenities = new ol.source.Vector();
jsonSource_Housing_Amenities.addFeatures(features_Housing_Amenities);var lyr_Housing_Amenities = new ol.layer.Vector({
                source:jsonSource_Housing_Amenities, 
                style: style_Housing_Amenities,
                title: "Housing_Amenities"
            });var format_Housing_Train = new ol.format.GeoJSON();
var features_Housing_Train = format_Housing_Train.readFeatures(geojson_Housing_Train, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Train = new ol.source.Vector();
jsonSource_Housing_Train.addFeatures(features_Housing_Train);var lyr_Housing_Train = new ol.layer.Vector({
                source:jsonSource_Housing_Train, 
                style: style_Housing_Train,
                title: "Housing_Train"
            });var format_Housing_Bus = new ol.format.GeoJSON();
var features_Housing_Bus = format_Housing_Bus.readFeatures(geojson_Housing_Bus, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Bus = new ol.source.Vector();
jsonSource_Housing_Bus.addFeatures(features_Housing_Bus);var lyr_Housing_Bus = new ol.layer.Vector({
                source:jsonSource_Housing_Bus, 
                style: style_Housing_Bus,
                title: "Housing_Bus"
            });var format_Housing_Coffee = new ol.format.GeoJSON();
var features_Housing_Coffee = format_Housing_Coffee.readFeatures(geojson_Housing_Coffee, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Coffee = new ol.source.Vector();
jsonSource_Housing_Coffee.addFeatures(features_Housing_Coffee);var lyr_Housing_Coffee = new ol.layer.Vector({
                source:jsonSource_Housing_Coffee, 
                style: style_Housing_Coffee,
                title: "Housing_Coffee"
            });var format_Housing_Mall = new ol.format.GeoJSON();
var features_Housing_Mall = format_Housing_Mall.readFeatures(geojson_Housing_Mall, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Mall = new ol.source.Vector();
jsonSource_Housing_Mall.addFeatures(features_Housing_Mall);var lyr_Housing_Mall = new ol.layer.Vector({
                source:jsonSource_Housing_Mall, 
                style: style_Housing_Mall,
                title: "Housing_Mall"
            });var format_Housing_Mall_Hub_Distanceshp = new ol.format.GeoJSON();
var features_Housing_Mall_Hub_Distanceshp = format_Housing_Mall_Hub_Distanceshp.readFeatures(geojson_Housing_Mall_Hub_Distanceshp, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Mall_Hub_Distanceshp = new ol.source.Vector();
jsonSource_Housing_Mall_Hub_Distanceshp.addFeatures(features_Housing_Mall_Hub_Distanceshp);var lyr_Housing_Mall_Hub_Distanceshp = new ol.layer.Vector({
                source:jsonSource_Housing_Mall_Hub_Distanceshp, 
                style: style_Housing_Mall_Hub_Distanceshp,
                title: "Housing_Mall_Hub_Distance.shp"
            });var format_Housing_Bus_Hub_Distanceshp = new ol.format.GeoJSON();
var features_Housing_Bus_Hub_Distanceshp = format_Housing_Bus_Hub_Distanceshp.readFeatures(geojson_Housing_Bus_Hub_Distanceshp, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Bus_Hub_Distanceshp = new ol.source.Vector();
jsonSource_Housing_Bus_Hub_Distanceshp.addFeatures(features_Housing_Bus_Hub_Distanceshp);var lyr_Housing_Bus_Hub_Distanceshp = new ol.layer.Vector({
                source:jsonSource_Housing_Bus_Hub_Distanceshp, 
                style: style_Housing_Bus_Hub_Distanceshp,
                title: "Housing_Bus_Hub_Distance.shp"
            });var format_Housing_Coffee_Hub_Distanceshp = new ol.format.GeoJSON();
var features_Housing_Coffee_Hub_Distanceshp = format_Housing_Coffee_Hub_Distanceshp.readFeatures(geojson_Housing_Coffee_Hub_Distanceshp, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Coffee_Hub_Distanceshp = new ol.source.Vector();
jsonSource_Housing_Coffee_Hub_Distanceshp.addFeatures(features_Housing_Coffee_Hub_Distanceshp);var lyr_Housing_Coffee_Hub_Distanceshp = new ol.layer.Vector({
                source:jsonSource_Housing_Coffee_Hub_Distanceshp, 
                style: style_Housing_Coffee_Hub_Distanceshp,
                title: "Housing_Coffee_Hub_Distance.shp"
            });var format_Housing_Education_Hub_Distance = new ol.format.GeoJSON();
var features_Housing_Education_Hub_Distance = format_Housing_Education_Hub_Distance.readFeatures(geojson_Housing_Education_Hub_Distance, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Education_Hub_Distance = new ol.source.Vector();
jsonSource_Housing_Education_Hub_Distance.addFeatures(features_Housing_Education_Hub_Distance);var lyr_Housing_Education_Hub_Distance = new ol.layer.Vector({
                source:jsonSource_Housing_Education_Hub_Distance, 
                style: style_Housing_Education_Hub_Distance,
                title: "Housing_Education_Hub_Distance"
            });var format_Housing_Train_Hub_Distanceshp = new ol.format.GeoJSON();
var features_Housing_Train_Hub_Distanceshp = format_Housing_Train_Hub_Distanceshp.readFeatures(geojson_Housing_Train_Hub_Distanceshp, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Housing_Train_Hub_Distanceshp = new ol.source.Vector();
jsonSource_Housing_Train_Hub_Distanceshp.addFeatures(features_Housing_Train_Hub_Distanceshp);var lyr_Housing_Train_Hub_Distanceshp = new ol.layer.Vector({
                source:jsonSource_Housing_Train_Hub_Distanceshp, 
                style: style_Housing_Train_Hub_Distanceshp,
                title: "Housing_Train_Hub_Distance.shp"
            });

lyr_MP14_SUBZONE_NO_SEA_PL_svy21.setVisible(false);lyr_Train_Stations_SG_subzones.setVisible(false);lyr_Bus_Stops_SG_subzones.setVisible(false);lyr_Education_subzones.setVisible(false);lyr_Coffeeshops_SG_subzones.setVisible(false);lyr_Shopping_Malls_SG_subzones.setVisible(false);lyr_Housing_Education.setVisible(false);lyr_Housing_Amenities.setVisible(false);lyr_Housing_Train.setVisible(false);lyr_Housing_Bus.setVisible(false);lyr_Housing_Coffee.setVisible(false);lyr_Housing_Mall.setVisible(false);lyr_Housing_Mall_Hub_Distanceshp.setVisible(false);lyr_Housing_Bus_Hub_Distanceshp.setVisible(false);lyr_Housing_Coffee_Hub_Distanceshp.setVisible(false);lyr_Housing_Education_Hub_Distance.setVisible(false);lyr_Housing_Train_Hub_Distanceshp.setVisible(false);
var layersList = [baseLayer,lyr_MP14_SUBZONE_NO_SEA_PL_svy21,lyr_Train_Stations_SG_subzones,lyr_Bus_Stops_SG_subzones,lyr_Education_subzones,lyr_Coffeeshops_SG_subzones,lyr_Shopping_Malls_SG_subzones,lyr_Housing_Education,lyr_Housing_Amenities,lyr_Housing_Train,lyr_Housing_Bus,lyr_Housing_Coffee,lyr_Housing_Mall,lyr_Housing_Mall_Hub_Distanceshp,lyr_Housing_Bus_Hub_Distanceshp,lyr_Housing_Coffee_Hub_Distanceshp,lyr_Housing_Education_Hub_Distance,lyr_Housing_Train_Hub_Distanceshp];
lyr_MP14_SUBZONE_NO_SEA_PL_svy21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Age65+': 'Age65+', 'ATotal': 'ATotal', 'WPercent': 'WPercent', 'Amenities_Shopping Malls': 'Amenities_Shopping Malls', 'Amenities_Education': 'Amenities_Education', 'Amenities_Coffeeshops': 'Amenities_Coffeeshops', 'Amenities_Train Stations': 'Amenities_Train Stations', 'Amenities_Bus Stops': 'Amenities_Bus Stops', });
lyr_Train_Stations_SG_subzones.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STN_NAME': 'STN_NAME', 'STN_NO': 'STN_NO', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Bus_Stops_SG_subzones.set('fieldAliases', {'BUS_STOP_N': 'BUS_STOP_N', 'BUS_ROOF_N': 'BUS_ROOF_N', 'LOC_DESC': 'LOC_DESC', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Education_subzones.set('fieldAliases', {'level_of_e': 'level_of_e', 'school': 'school', 'cluster': 'cluster', 'address': 'address', 'postal_cod': 'postal_cod', 'X-Coordina': 'X-Coordina', 'Y-Coordina': 'Y-Coordina', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Coffeeshops_SG_subzones.set('fieldAliases', {'NAME': 'NAME', 'POSTCODE': 'POSTCODE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'field_5': 'field_5', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Shopping_Malls_SG_subzones.set('fieldAliases', {'NAME': 'NAME', 'POSTCODE': 'POSTCODE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'SUBZONE_N': 'SUBZONE_N', });
lyr_Housing_Education.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Housing_Ed': 'Housing_Ed', 'Housing__1': 'Housing__1', });
lyr_Housing_Amenities.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Mall': 'Mall', 'Coffee': 'Coffee', 'Bus': 'Bus', 'Train': 'Train', 'Education': 'Education', 'Total': 'Total', });
lyr_Housing_Train.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Housing_Tr': 'Housing_Tr', 'Housing__1': 'Housing__1', });
lyr_Housing_Bus.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Housing_Bu': 'Housing_Bu', 'Housing__1': 'Housing__1', });
lyr_Housing_Coffee.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Housing_Co': 'Housing_Co', 'Housing__1': 'Housing__1', });
lyr_Housing_Mall.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Housing_Ma': 'Housing_Ma', 'Housing__1': 'Housing__1', });
lyr_Housing_Mall_Hub_Distanceshp.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Housing_Bus_Hub_Distanceshp.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Housing_Coffee_Hub_Distanceshp.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Housing_Education_Hub_Distance.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Housing_Train_Hub_Distanceshp.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'TYPE': 'TYPE', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_MP14_SUBZONE_NO_SEA_PL_svy21.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Age65+': 'TextEdit', 'ATotal': 'TextEdit', 'WPercent': 'TextEdit', 'Amenities_Shopping Malls': 'TextEdit', 'Amenities_Education': 'TextEdit', 'Amenities_Coffeeshops': 'TextEdit', 'Amenities_Train Stations': 'TextEdit', 'Amenities_Bus Stops': 'TextEdit', });
lyr_Train_Stations_SG_subzones.set('fieldImages', {'OBJECTID': 'TextEdit', 'STN_NAME': 'TextEdit', 'STN_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', });
lyr_Bus_Stops_SG_subzones.set('fieldImages', {'BUS_STOP_N': 'TextEdit', 'BUS_ROOF_N': 'TextEdit', 'LOC_DESC': 'TextEdit', 'SUBZONE_N': 'TextEdit', });
lyr_Education_subzones.set('fieldImages', {'level_of_e': 'TextEdit', 'school': 'TextEdit', 'cluster': 'TextEdit', 'address': 'TextEdit', 'postal_cod': 'TextEdit', 'X-Coordina': 'TextEdit', 'Y-Coordina': 'TextEdit', 'SUBZONE_N': 'TextEdit', });
lyr_Coffeeshops_SG_subzones.set('fieldImages', {'NAME': 'TextEdit', 'POSTCODE': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'field_5': 'TextEdit', 'SUBZONE_N': 'TextEdit', });
lyr_Shopping_Malls_SG_subzones.set('fieldImages', {'NAME': 'TextEdit', 'POSTCODE': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'SUBZONE_N': 'TextEdit', });
lyr_Housing_Education.set('fieldImages', {'POSTCODE': 'Hidden', 'TYPE': 'Hidden', 'X-Coord': 'Hidden', 'Y-Coord': 'Hidden', 'Housing_Ed': 'TextEdit', 'Housing__1': 'TextEdit', });
lyr_Housing_Amenities.set('fieldImages', {'POSTCODE': 'Hidden', 'TYPE': 'Hidden', 'X-Coord': 'Hidden', 'Y-Coord': 'Hidden', 'Mall': 'TextEdit', 'Coffee': 'TextEdit', 'Bus': 'TextEdit', 'Train': 'TextEdit', 'Education': 'TextEdit', 'Total': 'Hidden', });
lyr_Housing_Train.set('fieldImages', {'POSTCODE': 'Hidden', 'TYPE': 'Hidden', 'X-Coord': 'Hidden', 'Y-Coord': 'Hidden', 'Housing_Tr': 'TextEdit', 'Housing__1': 'TextEdit', });
lyr_Housing_Bus.set('fieldImages', {'POSTCODE': 'Hidden', 'TYPE': 'Hidden', 'X-Coord': 'Hidden', 'Y-Coord': 'Hidden', 'Housing_Bu': 'TextEdit', 'Housing__1': 'TextEdit', });
lyr_Housing_Coffee.set('fieldImages', {'POSTCODE': 'Hidden', 'TYPE': 'Hidden', 'X-Coord': 'Hidden', 'Y-Coord': 'Hidden', 'Housing_Co': 'TextEdit', 'Housing__1': 'TextEdit', });
lyr_Housing_Mall.set('fieldImages', {'POSTCODE': 'Hidden', 'TYPE': 'Hidden', 'X-Coord': 'Hidden', 'Y-Coord': 'Hidden', 'Housing_Ma': 'TextEdit', 'Housing__1': 'TextEdit', });
lyr_Housing_Mall_Hub_Distanceshp.set('fieldImages', {'POSTCODE': 'TextEdit', 'TYPE': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Housing_Bus_Hub_Distanceshp.set('fieldImages', {'POSTCODE': 'TextEdit', 'TYPE': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Housing_Coffee_Hub_Distanceshp.set('fieldImages', {'POSTCODE': 'TextEdit', 'TYPE': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Housing_Education_Hub_Distance.set('fieldImages', {'POSTCODE': 'TextEdit', 'TYPE': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Housing_Train_Hub_Distanceshp.set('fieldImages', {'POSTCODE': 'TextEdit', 'TYPE': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_MP14_SUBZONE_NO_SEA_PL_svy21.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'header label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Age65+': 'no label', 'ATotal': 'no label', 'WPercent': 'no label', 'Amenities_Shopping Malls': 'inline label', 'Amenities_Education': 'inline label', 'Amenities_Coffeeshops': 'inline label', 'Amenities_Train Stations': 'inline label', 'Amenities_Bus Stops': 'inline label', });
lyr_Train_Stations_SG_subzones.set('fieldLabels', {'OBJECTID': 'no label', 'STN_NAME': 'header label', 'STN_NO': 'no label', 'SUBZONE_N': 'no label', });
lyr_Bus_Stops_SG_subzones.set('fieldLabels', {'BUS_STOP_N': 'header label', 'BUS_ROOF_N': 'no label', 'LOC_DESC': 'inline label', 'SUBZONE_N': 'no label', });
lyr_Education_subzones.set('fieldLabels', {'level_of_e': 'no label', 'school': 'header label', 'cluster': 'no label', 'address': 'inline label', 'postal_cod': 'inline label', 'X-Coordina': 'no label', 'Y-Coordina': 'no label', 'SUBZONE_N': 'no label', });
lyr_Coffeeshops_SG_subzones.set('fieldLabels', {'NAME': 'header label', 'POSTCODE': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'field_5': 'no label', 'SUBZONE_N': 'no label', });
lyr_Shopping_Malls_SG_subzones.set('fieldLabels', {'NAME': 'header label', 'POSTCODE': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'SUBZONE_N': 'no label', });
lyr_Housing_Education.set('fieldLabels', {'Housing_Ed': 'no label', 'Housing__1': 'no label', });
lyr_Housing_Amenities.set('fieldLabels', {'Mall': 'no label', 'Coffee': 'no label', 'Bus': 'no label', 'Train': 'no label', 'Education': 'no label', });
lyr_Housing_Train.set('fieldLabels', {'Housing_Tr': 'no label', 'Housing__1': 'no label', });
lyr_Housing_Bus.set('fieldLabels', {'Housing_Bu': 'no label', 'Housing__1': 'no label', });
lyr_Housing_Coffee.set('fieldLabels', {'Housing_Co': 'no label', 'Housing__1': 'no label', });
lyr_Housing_Mall.set('fieldLabels', {'Housing_Ma': 'no label', 'Housing__1': 'no label', });
lyr_Housing_Mall_Hub_Distanceshp.set('fieldLabels', {'POSTCODE': 'no label', 'TYPE': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Housing_Bus_Hub_Distanceshp.set('fieldLabels', {'POSTCODE': 'no label', 'TYPE': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Housing_Coffee_Hub_Distanceshp.set('fieldLabels', {'POSTCODE': 'no label', 'TYPE': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Housing_Education_Hub_Distance.set('fieldLabels', {'POSTCODE': 'no label', 'TYPE': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Housing_Train_Hub_Distanceshp.set('fieldLabels', {'POSTCODE': 'no label', 'TYPE': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Housing_Train_Hub_Distanceshp.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});