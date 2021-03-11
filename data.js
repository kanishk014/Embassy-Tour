var APP_DATA = {
  "scenes": [
    {
      "id": "0-embassy-entry",
      "name": "Embassy Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.914577799833883,
        "pitch": 0.1114363828874616,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 2.9518822760735084,
          "pitch": 0.39060362827129147,
          "rotation": 0,
          "target": "1-hotspot-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.2410504616130744,
        "pitch": 0.4219110728101292,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 1.3217816632593191,
          "pitch": 0.262305475082508,
          "rotation": 0,
          "target": "0-embassy-entry"
        },
        {
          "yaw": -2.072874760732354,
          "pitch": 0.2971099744798362,
          "rotation": 0.7853981633974483,
          "target": "2-hotspot-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hotspot-2",
      "name": "Hotspot 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.3246541160373688,
        "pitch": 0.07866097615585588,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.5636147545020833,
          "pitch": 0.3053417652413195,
          "rotation": 0,
          "target": "1-hotspot-1"
        },
        {
          "yaw": 3.0669718459366493,
          "pitch": 0.1917866103551198,
          "rotation": 0,
          "target": "3-hotspot-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hotspot-3",
      "name": "Hotspot 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.18400682241141197,
        "pitch": 0.327754067316107,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 3.037911510865812,
          "pitch": 0.3511608172701166,
          "rotation": 0,
          "target": "2-hotspot-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
