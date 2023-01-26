export const LOAD_STATE = {
    NOT_LOAD: 1 << 1,
    LOADING: 1 << 2,
    LOADED: 1 << 3,
    FAILED: 1 << 4,
};

export const BMapGLLib = new Map([
    [
        "DrawingManager",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: true,
        }
    ],
    [
        "AreaRestriction",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "CustomOverlay",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "DistanceTool",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "Lushu",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "TrackAnimation",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "RichMarker",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false,  
        }
    ]
]);

// https://lbsyun.baidu.com/index.php?title=jspopular3.0/openlibrary
export const BMapLib = new Map([
    [
        "Heatmap",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "LuShu",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "AreaRestriction",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "RectangleZoom",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false,  
        }
    ],
    [
        "RichMarker",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false,   
        }
    ],
    [
        "InfoBox",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false, 
        }
    ],
    [
        "CurveLine",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false,  
        }
    ],
    [
        "DrawingManager",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: true, 
        }
    ],
    [
        "SearchInfoWindow",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: true, 
        }
    ],
    [
        "MarkerClusterer",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false,
        }
    ],
    [
        "TextIconOverlay",
        {
            install: LOAD_STATE.NOT_LOAD,
            hasCSS: false
        }
    ]
]);