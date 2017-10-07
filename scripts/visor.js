$(document).ready(function() {


	

	
	$("div#tabs-5 input#capa_sectores").prop("checked", false);
	$("div#tabs-5 input#capa_unidades").prop("checked", false);
	$("div#tabs-5 input#capa_areas").prop("checked", false);
	$("div#capas input#capa_sectores2").prop("checked", false);
    

		
	
	function refrescaSectores(){
		if($("div#tabs-5  input#capa_sectores").is(":checked")){
			sectores_paramLayer.setVisible(true);
       			
			
			var ido_sectores = $("div#tabs-5  select#sectores_param").val();
						
			sectores_param.updateParams({
				"VIEWPARAMS":  "importancia:" + ido_sectores
			});
		}else{
			sectores_paramLayer.setVisible(false);			
		};
	};
		
	$("div#tabs-5 input#capa_sectores").click(function(){
		refrescaSectores();
	});

	$("div#tabs-5 select#sectores_param").change(function(){
		refrescaSectores();
	});
	

  function pruebaSectores(){	 
	 if($("div#tabs-5  input#capa_sectores").is(":checked")){
		$("div#tabs-5  input#capa_unidades").prop("checked", false);
		unidades_paramLayer.setVisible(false);
		$("div#tabs-5  input#capa_areas").prop("checked", false);
		areas_paramLayer.setVisible(false);
	 };  	  
  };
  
  	$("div#tabs-5 input#capa_sectores").click(function(){
		pruebaSectores();
	});

 function pruebaUnidades(){	 
	 if($("div#tabs-5  input#capa_unidades").is(":checked")){
		$("div#tabs-5  input#capa_sectores").prop("checked", false);
		sectores_paramLayer.setVisible(false);
		$("div#tabs-5  input#capa_areas").prop("checked", false);
		areas_paramLayer.setVisible(false);
	 };  	  
  };
  
  	$("div#tabs-5 input#capa_unidades").click(function(){
		pruebaUnidades();
	});

  function pruebaAreas(){	 
	 if($("div#tabs-5  input#capa_areas").is(":checked")){
		$("div#tabs-5  input#capa_unidades").prop("checked", false);
		unidades_paramLayer.setVisible(false);
		$("div#tabs-5  input#capa_sectores").prop("checked", false);
		sectores_paramLayer.setVisible(false);
	 };  	  
  };
  
  	$("div#tabs-5 input#capa_areas").click(function(){
		pruebaAreas();
	});


	function refrescaServicios(){
		if($("div#tabs-5 input#capa_unidades").is(":checked")){
			unidades_paramLayer.setVisible(true);
			
			var ido_unidad = $("div#tabs-5 select#unidades_param").val();
			
			
			
			unidades_param.updateParams({
				"VIEWPARAMS": "codigo:" + ido_unidad
			});
		}else{
			unidades_paramLayer.setVisible(false);			
		};
	};
	
	
	$("div#tabs-5 input#capa_unidades").click(function(){
		refrescaServicios();
	});

	$("div#tabs-5 select#unidades_param").change(function(){
		refrescaServicios();
	});

	function refrescaAreas(){
		if($("div#tabs-5 input#capa_areas").is(":checked")){
			areas_paramLayer.setVisible(true);
			
			var ido_areas = $("div#tabs-5 select#areas_param").val();
			
			areas_param.updateParams({
				"VIEWPARAMS": "cod:" + ido_areas
			});
		}else{
			areas_paramLayer.setVisible(false);			
		};
	};
	
	
	$("div#tabs-5 input#capa_areas").click(function(){
		refrescaAreas();
	});

	$("div#tabs-5 select#areas_param").change(function(){
		refrescaAreas();
	});	
	
	

	
	
	function refrescaSectores2(){
		if($("div#capas input#capa_sectores2").is(":checked")){
			combo_paramLayer.setVisible(true);
			
			var ido_areas2 = $("div#capas select#areas_param2").val();
			var ido_sectores2 = $("div#capas select#sectores_param2").val();
			
						
			combo_param.updateParams({
				"VIEWPARAMS":  "codigo:" + ido_areas2 + ";capacidad:" + ido_sectores2
			});
		}else{
			combo_paramLayer.setVisible(false);			
		};
	};
		
	$("div#capas input#capa_sectores2").click(function(){
		refrescaSectores2();
	});

	$("div#capas select#areas_param2").change(function(){
		refrescaSectores2();
	});
	
	$("div#capas select#sectores_param2").change(function(){
		refrescaSectores2();
	});
	
	
	
	
	
	/*

       Configuración del mapa con una capa WMS

	*/

	var geoserverUrl = "http://localhost:8085/geoserver/";


	var sectores_param = new ol.source.ImageWMS({
			url: geoserverUrl+"proyecto/wms",
			params: {
				'VERSION': '1.1.1',
				'FORMAT': 'image/png',
				'LAYERS': "impactos_param",
				"VIEWPARAMS": "importancia:"
			}
		});		
		
	var unidades_param = new ol.source.ImageWMS({
			url: geoserverUrl+"proyecto/wms",
			params: {
				'VERSION': '1.1.1',
				'FORMAT': 'image/png',
				'LAYERS': "unidades_param",
				"VIEWPARAMS": "codigo:"
			}
		});
		
	var areas_param = new ol.source.ImageWMS({
			url: geoserverUrl+"proyecto/wms",
			params: {
				'VERSION': '1.1.1',
				'FORMAT': 'image/png',
				'LAYERS': "equipamientos_param",
				"VIEWPARAMS": "cod:"
			}
		});
		
	var combo_param = new ol.source.ImageWMS({
			url: geoserverUrl+"proyecto/wms",
			params: {
				'VERSION': '1.1.1',
				'FORMAT': 'image/png',
				'LAYERS': "combo_param",
				"VIEWPARAMS": "codigo:;capacidad:"
			}
		});		
	
	 var sectores_paramLayer = new ol.layer.Image({
		source: sectores_param
	});
	
	var unidades_paramLayer = new ol.layer.Image({
		source: unidades_param
	});
	
	var areas_paramLayer = new ol.layer.Image({
		source: areas_param
	});
	
		
	 var combo_paramLayer = new ol.layer.Image({
		source: combo_param
	});
	
	
		sectores_paramLayer.setVisible(true);
		unidades_paramLayer.setVisible(true);
		areas_paramLayer.setVisible(true);
		combo_paramLayer.setVisible(true);
        		
	
	
	  var map = new ol.Map({
        target: 'map',
        view: new ol.View({
            center: ol.proj.transform([-5.324471,36.243612], 'EPSG:4326', 'EPSG:3857'),
            zoom: 15
        }),
		
        layers: [sectores_paramLayer,unidades_paramLayer,areas_paramLayer,combo_paramLayer,
            new ol.layer.Group({
                'title': 'Mapas base',
                layers: [
                    		new ol.layer.Image({
                        title: 'Mapa Topográfico',
						type: 'base',
                        visible: false,
                        source: new ol.source.ImageWMS({
						url: "http://localhost:8085/geoserver/proyecto/wms",
			            params: {
				        'VERSION': '1.1.1',
				        'FORMAT': 'image/png',
				        'LAYERS': "TOPO_10r"
						}
						})
					 }),
					new ol.layer.Image({
                        title: 'Ortofoto 2004',
						type: 'base',
                        visible: false,
                        source: new ol.source.ImageWMS({
						url: "http://localhost:8085/geoserver/proyecto/wms",
			            params: {
				        'VERSION': '1.1.1',
				        'FORMAT': 'image/png',
				        'LAYERS': "ORTO_2004"
						}
						})
					 }),	
						
                    new ol.layer.Tile({
                        title: 'OSM',
                        type: 'base',
                        visible: true,
                        source: new ol.source.OSM()
                    })
                ]
            })       
        ],
    	controls: [
			new ol.control.FullScreen(),
			new ol.control.Zoom(),
			new ol.control.ZoomSlider(),
			new ol.control.OverviewMap({
					layers: []
				})
		]
     
    });

    var layerSwitcher = new ol.control.LayerSwitcher;	
    map.addControl(layerSwitcher);
	
	
    map.addLayer(sectores_paramLayer);
	map.addLayer(unidades_paramLayer);
	map.addLayer(areas_paramLayer);
	map.addLayer(combo_paramLayer);
	
	
	
	




// Pop up

	var popup = new ol.Overlay.Popup();
	map.addOverlay(popup);

	// GetFeatureInfo
	map.on("singleclick", function(evt) {
		var url = sectores_param.getGetFeatureInfoUrl( //esto sí hay q cambiarlo
			evt.coordinate, view.getResolution(), 'EPSG:3857', //esto no hace falta tocarlo
			{'INFO_FORMAT': 'text/html'});

		// esto es ajax
		$.get(url, function(data) {
			if(data){
				popup.show(evt.coordinate, data);
			}
		});
	});


	var popup = new ol.Overlay.Popup();
	map.addOverlay(popup);

	// GetFeatureInfo
	map.on("singleclick", function(evt) {
		var url = unidades_param.getGetFeatureInfoUrl( //esto sí hay q cambiarlo
			evt.coordinate, view.getResolution(), 'EPSG:3857', //esto no hace falta tocarlo
			{'INFO_FORMAT': 'text/html'});

		// esto es ajax
		$.get(url, function(data) {
			if(data){
				popup.show(evt.coordinate, data);
			}
		});
	});

		var popup = new ol.Overlay.Popup();
	map.addOverlay(popup);

	// GetFeatureInfo
	map.on("singleclick", function(evt) {
		var url = areas_param.getGetFeatureInfoUrl( //esto sí hay q cambiarlo
			evt.coordinate, view.getResolution(), 'EPSG:3857', //esto no hace falta tocarlo
			{'INFO_FORMAT': 'text/html'});

		// esto es ajax
		$.get(url, function(data) {
			if(data){
				popup.show(evt.coordinate, data);
			}
		});
	});

});
