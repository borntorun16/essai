var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_etab_sante_ars_1 = new ol.format.GeoJSON();
var features_etab_sante_ars_1 = format_etab_sante_ars_1.readFeatures(json_etab_sante_ars_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_etab_sante_ars_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_etab_sante_ars_1.addFeatures(features_etab_sante_ars_1);
var lyr_etab_sante_ars_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_etab_sante_ars_1, 
                style: style_etab_sante_ars_1,
                interactive: true,
                title: '<img src="styles/legend/etab_sante_ars_1.png" /> etab_sante_ars'
            });

lyr_OSMStandard_0.setVisible(true);lyr_etab_sante_ars_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_etab_sante_ars_1];
lyr_etab_sante_ars_1.set('fieldAliases', {'dep': 'dep', 'finess_et': 'finess_et', 'finess_ej': 'finess_ej', 'rs_ej': 'rs_ej', 'rs_et': 'rs_et', 'statut': 'statut', 'code_categ': 'code_categ', 'libelle_ca': 'libelle_ca', 'medecine': 'medecine', 'chirurgie': 'chirurgie', 'obstetriqu': 'obstetriqu', 'psychiatri': 'psychiatri', 'ssr': 'ssr', 'sld': 'sld', 'urgences': 'urgences', 'reanimatio': 'reanimatio', 'dialyse': 'dialyse', 'soins_inte': 'soins_inte', 'surveillan': 'surveillan', 'medecine_p': 'medecine_p', 'neonatalog': 'neonatalog', 'had': 'had', 'rs_complem': 'rs_complem', 'ad_compl': 'ad_compl', 'ad_num': 'ad_num', 'ad_type_vo': 'ad_type_vo', 'ad_nom_voi': 'ad_nom_voi', 'ad_cp': 'ad_cp', 'ad_ld': 'ad_ld', 'ad_commune': 'ad_commune', 'code_commu': 'code_commu', 'tel': 'tel', 'fax': 'fax', 'x': 'x', 'y': 'y', 'mail': 'mail', 'comm': 'comm', });
lyr_etab_sante_ars_1.set('fieldImages', {'dep': '', 'finess_et': '', 'finess_ej': '', 'rs_ej': '', 'rs_et': '', 'statut': '', 'code_categ': '', 'libelle_ca': '', 'medecine': '', 'chirurgie': '', 'obstetriqu': '', 'psychiatri': '', 'ssr': '', 'sld': '', 'urgences': '', 'reanimatio': '', 'dialyse': '', 'soins_inte': '', 'surveillan': '', 'medecine_p': '', 'neonatalog': '', 'had': '', 'rs_complem': '', 'ad_compl': '', 'ad_num': '', 'ad_type_vo': '', 'ad_nom_voi': '', 'ad_cp': '', 'ad_ld': '', 'ad_commune': '', 'code_commu': '', 'tel': '', 'fax': '', 'x': '', 'y': '', 'mail': '', 'comm': '', });
lyr_etab_sante_ars_1.set('fieldLabels', {'dep': 'no label', 'finess_et': 'no label', 'finess_ej': 'no label', 'rs_ej': 'no label', 'rs_et': 'no label', 'statut': 'no label', 'code_categ': 'no label', 'libelle_ca': 'no label', 'medecine': 'no label', 'chirurgie': 'no label', 'obstetriqu': 'no label', 'psychiatri': 'no label', 'ssr': 'no label', 'sld': 'no label', 'urgences': 'no label', 'reanimatio': 'no label', 'dialyse': 'no label', 'soins_inte': 'no label', 'surveillan': 'no label', 'medecine_p': 'no label', 'neonatalog': 'no label', 'had': 'no label', 'rs_complem': 'no label', 'ad_compl': 'no label', 'ad_num': 'no label', 'ad_type_vo': 'no label', 'ad_nom_voi': 'no label', 'ad_cp': 'no label', 'ad_ld': 'no label', 'ad_commune': 'no label', 'code_commu': 'no label', 'tel': 'no label', 'fax': 'no label', 'x': 'no label', 'y': 'no label', 'mail': 'no label', 'comm': 'no label', });
lyr_etab_sante_ars_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});