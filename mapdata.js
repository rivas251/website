var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "1000", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#203d54",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    MEX2706: {
      name: "Baja California",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_bc.xls",
      description: "Población total: 1312544 - Hombres: 640091 - Mujeres: 672453"
    },
    MEX2707: {
      name: "Baja California Sur",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_bcs.xls",
      description: "Población total: 3315766 - Hombres: 1650341 - Mujeres: 1665425"
    },
    MEX2708: {
      name: "Coahuila",
      description: "Población total: 712029 - Hombres: 359137 - Mujeres: 352892",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_coah.xls"
    },
    MEX2709: {
      name: "Chihuahua",
      description: "Población total: 899931 - Hombres: 441276 - Mujeres: 458655",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_chih.xls"
    },
    MEX2710: {
      name: "Durango",
      description: "Población total: 5217908 - Hombres: 2536721 - Mujeres: 2681187",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_dgo.xls"
    },
    MEX2711: {
      name: "Sinaloa",
      description: "Población total: 3556574 - Hombres: 1752275 - Mujeres: 1804299",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_sin.xls"
    },
    MEX2712: {
      name: "Sonora",
      description: "Población total: 8918653 - Hombres: 4231650 - Mujeres: 4687003",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_son.xls"
    },
    MEX2713: {
      name: "Zacatecas",
      description: "Población total: 2954915 - Hombres: 1462612 - Mujeres: 1492303",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_zac.xls"
    },
    MEX2714: {
      name: "Nuevo León",
      description: "Población total: 711235 - Hombres: 350791 - Mujeres: 360444",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_nl.xls"
    },
    MEX2715: {
      name: "San Luis Potosí",
      description: "Población total: 1754754 - Hombres: 860382 - Mujeres: 894372",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_slp.xls"
    },
    MEX2716: {
      name: "Tamaulipas",
      description: "Población total: 5853677 - Hombres: 2826369 - Mujeres: 3027308",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_tamps.xls"
    },
    MEX2717: {
      name: "Aguascalientes",
      description: "Población total: 3533251 - Hombres: 1699059 - Mujeres: 1834192",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_ags.xls"
    },
    MEX2718: {
      name: "Colima",
      description: "Población total: 2858359 - Hombres: 1369025 - Mujeres: 1489334",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_col.xls"
    },
    MEX2719: {
      name: "Jalisco",
      description: "Población total: 7844830 - Hombres: 3835069 - Mujeres: 4009761",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_jal.xls"
    },
    MEX2720: {
      name: "Michoacán",
      description: "Población total: 16187608 - Hombres: 7834068 - Mujeres: 8353540",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_mich.xls"
    },
    MEX2721: {
      name: "Nayarit",
      description: "Población total: 4584471 - Hombres: 2209747 - Mujeres: 2374724",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_nay.xls"
    },
    MEX2722: {
      name: "Campeche",
      description: "Población total: 1903811 - Hombres: 914906 - Mujeres: 988905",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_cam.xls"
    },
    MEX2723: {
      name: "Oaxaca",
      description: "Población total: 1181050 - Hombres: 586000 - Mujeres: 595050",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_oax.xls"
    },
    MEX2724: {
      name: "Puebla",
      description: "Población total: 5119504 - Hombres: 2541857 - Mujeres: 2577647",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_pue.xls"
    },
    MEX2725: {
      name: "Tabasco",
      description: "Población total: 3967889 - Hombres: 1888678 - Mujeres: 2079211",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_tab.xls"
    },
    MEX2726: {
      name: "Tlaxcala",
      description: "Población total: 6168883 - Hombres: 2943677 - Mujeres: 3225206",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_tlax.xls"
    },
    MEX2727: {
      name: "Ciudad de México",
      description: "Población total: 2038372 - Hombres: 993436 - Mujeres: 1044936",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_cdmx.xls"
    },
    MEX2728: {
      name: "Guanajuato",
      description: "Población total: 1501562 - Hombres: 751538 - Mujeres: 750024",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_gto.xls"
    },
    MEX2729: {
      name: "Guerrero",
      description: "Población total: 3533251                                         - Hombres: 1699059 - Mujeres: 1834192",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_gro.xls"
    },
    MEX2730: {
      name: "Hidalgo",
      description: "Población total: 2966321 - Hombres: 1464085 - Mujeres: 1502236",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_hgo.xls"
    },
    MEX2731: {
      name: "México",
      description: "Población total: 2850330 - Hombres: 1410419 - Mujeres: 1439911",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_mex.xls"
    },
    MEX2732: {
      name: "Morelos",
      description: "Población total: 2395272 - Hombres: 1171592 - Mujeres: 1223680",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_mor.xls"
    },
    MEX2733: {
      name: "Querétaro",
      description: "Población total: 3441698 - Hombres: 1692186 - Mujeres: 1749512",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_qro.xls"
    },
    MEX2734: {
      name: "Veracruz",
      description: "Población total: 1272847 - Hombres: 614565 - Mujeres: 658282",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_ver.xls"
    },
    MEX2735: {
      name: "Chiapas",
      description: "Población total: 8112505 - Hombres: 3909140 - Mujeres: 4203365",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_chis.xls"
    },
    MEX2736: {
      name: "Quintana Roo",
      description: "Población total: 2097175 - Hombres: 1027548 - Mujeres: 1069627",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_qroo.xls"
    },
    MEX2737: {
      name: "Yucatán",
      description: "Población total: 1579209 - Hombres: 770368 - Mujeres: 808841",
      url: "https://www.inegi.org.mx/contenidos/programas/intercensal/2015/tabulados/01_poblacion_yuc.xls"
    }
  },
  locations: {
    "0": {
      lat: "21.9404645",
      lng: "-102.3028596",
      name: "Universidad Cuauhtemoc",
      description: "Plantel Aguascalientes",
      size: "10"
    }
  },
  labels: {},
  regions: {},
  data: {
    data: {}
  }
};