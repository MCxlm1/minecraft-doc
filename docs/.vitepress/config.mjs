import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Minecraft @minecraft 类型文档",
  description: 'Minecraft @minecraft 类型文档',
  base: "/minecraft-doc/",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '文档', link: '/preview/' },
      { text: '未翻译清单', link: '/untranslated' },
    ],
    sidebar: {
  "/stable/": [
    {
      "text": "版本主页",
      "link": "/stable/"
    },
    {
      "text": "@minecraft/math",
      "collapsed": true,
      "items": [
        {
          "text": "概述",
          "link": "/stable/math/"
        },
        {
          "text": "AABBInvalidExtentError",
          "link": "/stable/math/classes/AABBInvalidExtentError"
        },
        {
          "text": "AABBUtils",
          "link": "/stable/math/classes/AABBUtils"
        },
        {
          "text": "Vector2Builder",
          "link": "/stable/math/classes/Vector2Builder"
        },
        {
          "text": "Vector2Utils",
          "link": "/stable/math/classes/Vector2Utils"
        },
        {
          "text": "Vector3Builder",
          "link": "/stable/math/classes/Vector3Builder"
        },
        {
          "text": "Vector3Utils",
          "link": "/stable/math/classes/Vector3Utils"
        },
        {
          "text": "VectorXZBuilder",
          "link": "/stable/math/classes/VectorXZBuilder"
        },
        {
          "text": "VectorXZUtils",
          "link": "/stable/math/classes/VectorXZUtils"
        },
        {
          "text": "clampNumber",
          "link": "/stable/math/functions/clampNumber"
        },
        {
          "text": "Colors",
          "link": "/stable/math/variables/Colors"
        },
        {
          "text": "VECTOR2_ZERO",
          "link": "/stable/math/variables/VECTOR2_ZERO"
        },
        {
          "text": "VECTOR3_BACK",
          "link": "/stable/math/variables/VECTOR3_BACK"
        },
        {
          "text": "VECTOR3_DOWN",
          "link": "/stable/math/variables/VECTOR3_DOWN"
        },
        {
          "text": "VECTOR3_EAST",
          "link": "/stable/math/variables/VECTOR3_EAST"
        },
        {
          "text": "VECTOR3_FORWARD",
          "link": "/stable/math/variables/VECTOR3_FORWARD"
        },
        {
          "text": "VECTOR3_HALF",
          "link": "/stable/math/variables/VECTOR3_HALF"
        },
        {
          "text": "VECTOR3_LEFT",
          "link": "/stable/math/variables/VECTOR3_LEFT"
        },
        {
          "text": "VECTOR3_NEGATIVE_ONE",
          "link": "/stable/math/variables/VECTOR3_NEGATIVE_ONE"
        },
        {
          "text": "VECTOR3_NORTH",
          "link": "/stable/math/variables/VECTOR3_NORTH"
        },
        {
          "text": "VECTOR3_ONE",
          "link": "/stable/math/variables/VECTOR3_ONE"
        },
        {
          "text": "VECTOR3_RIGHT",
          "link": "/stable/math/variables/VECTOR3_RIGHT"
        },
        {
          "text": "VECTOR3_SOUTH",
          "link": "/stable/math/variables/VECTOR3_SOUTH"
        },
        {
          "text": "VECTOR3_UP",
          "link": "/stable/math/variables/VECTOR3_UP"
        },
        {
          "text": "VECTOR3_WEST",
          "link": "/stable/math/variables/VECTOR3_WEST"
        },
        {
          "text": "VECTOR3_ZERO",
          "link": "/stable/math/variables/VECTOR3_ZERO"
        },
        {
          "text": "VECTORXZ_ZERO",
          "link": "/stable/math/variables/VECTORXZ_ZERO"
        }
      ]
    },
    {
      "text": "@minecraft/math@beta",
      "collapsed": true,
      "items": [
        {
          "text": "概述",
          "link": "/stable/math@beta/"
        },
        {
          "text": "AABBInvalidExtentError",
          "link": "/stable/math@beta/classes/AABBInvalidExtentError"
        },
        {
          "text": "AABBUtils",
          "link": "/stable/math@beta/classes/AABBUtils"
        },
        {
          "text": "Vector2Builder",
          "link": "/stable/math@beta/classes/Vector2Builder"
        },
        {
          "text": "Vector2Utils",
          "link": "/stable/math@beta/classes/Vector2Utils"
        },
        {
          "text": "Vector3Builder",
          "link": "/stable/math@beta/classes/Vector3Builder"
        },
        {
          "text": "Vector3Utils",
          "link": "/stable/math@beta/classes/Vector3Utils"
        },
        {
          "text": "VectorXZBuilder",
          "link": "/stable/math@beta/classes/VectorXZBuilder"
        },
        {
          "text": "VectorXZUtils",
          "link": "/stable/math@beta/classes/VectorXZUtils"
        },
        {
          "text": "clampNumber",
          "link": "/stable/math@beta/functions/clampNumber"
        },
        {
          "text": "Colors",
          "link": "/stable/math@beta/variables/Colors"
        },
        {
          "text": "VECTOR2_ZERO",
          "link": "/stable/math@beta/variables/VECTOR2_ZERO"
        },
        {
          "text": "VECTOR3_BACK",
          "link": "/stable/math@beta/variables/VECTOR3_BACK"
        },
        {
          "text": "VECTOR3_DOWN",
          "link": "/stable/math@beta/variables/VECTOR3_DOWN"
        },
        {
          "text": "VECTOR3_EAST",
          "link": "/stable/math@beta/variables/VECTOR3_EAST"
        },
        {
          "text": "VECTOR3_FORWARD",
          "link": "/stable/math@beta/variables/VECTOR3_FORWARD"
        },
        {
          "text": "VECTOR3_HALF",
          "link": "/stable/math@beta/variables/VECTOR3_HALF"
        },
        {
          "text": "VECTOR3_LEFT",
          "link": "/stable/math@beta/variables/VECTOR3_LEFT"
        },
        {
          "text": "VECTOR3_NEGATIVE_ONE",
          "link": "/stable/math@beta/variables/VECTOR3_NEGATIVE_ONE"
        },
        {
          "text": "VECTOR3_NORTH",
          "link": "/stable/math@beta/variables/VECTOR3_NORTH"
        },
        {
          "text": "VECTOR3_ONE",
          "link": "/stable/math@beta/variables/VECTOR3_ONE"
        },
        {
          "text": "VECTOR3_RIGHT",
          "link": "/stable/math@beta/variables/VECTOR3_RIGHT"
        },
        {
          "text": "VECTOR3_SOUTH",
          "link": "/stable/math@beta/variables/VECTOR3_SOUTH"
        },
        {
          "text": "VECTOR3_UP",
          "link": "/stable/math@beta/variables/VECTOR3_UP"
        },
        {
          "text": "VECTOR3_WEST",
          "link": "/stable/math@beta/variables/VECTOR3_WEST"
        },
        {
          "text": "VECTOR3_ZERO",
          "link": "/stable/math@beta/variables/VECTOR3_ZERO"
        },
        {
          "text": "VECTORXZ_ZERO",
          "link": "/stable/math@beta/variables/VECTORXZ_ZERO"
        }
      ]
    }
  ],
  "/preview/": [
    {
      "text": "版本主页",
      "link": "/preview/"
    },
    {
      "text": "@minecraft/math",
      "collapsed": true,
      "items": [
        {
          "text": "概述",
          "link": "/preview/math/"
        },
        {
          "text": "AABBInvalidExtentError",
          "link": "/preview/math/classes/AABBInvalidExtentError"
        },
        {
          "text": "AABBUtils",
          "link": "/preview/math/classes/AABBUtils"
        },
        {
          "text": "Vector2Builder",
          "link": "/preview/math/classes/Vector2Builder"
        },
        {
          "text": "Vector2Utils",
          "link": "/preview/math/classes/Vector2Utils"
        },
        {
          "text": "Vector3Builder",
          "link": "/preview/math/classes/Vector3Builder"
        },
        {
          "text": "Vector3Utils",
          "link": "/preview/math/classes/Vector3Utils"
        },
        {
          "text": "VectorXZBuilder",
          "link": "/preview/math/classes/VectorXZBuilder"
        },
        {
          "text": "VectorXZUtils",
          "link": "/preview/math/classes/VectorXZUtils"
        },
        {
          "text": "clampNumber",
          "link": "/preview/math/functions/clampNumber"
        },
        {
          "text": "Colors",
          "link": "/preview/math/variables/Colors"
        },
        {
          "text": "VECTOR2_ZERO",
          "link": "/preview/math/variables/VECTOR2_ZERO"
        },
        {
          "text": "VECTOR3_BACK",
          "link": "/preview/math/variables/VECTOR3_BACK"
        },
        {
          "text": "VECTOR3_DOWN",
          "link": "/preview/math/variables/VECTOR3_DOWN"
        },
        {
          "text": "VECTOR3_EAST",
          "link": "/preview/math/variables/VECTOR3_EAST"
        },
        {
          "text": "VECTOR3_FORWARD",
          "link": "/preview/math/variables/VECTOR3_FORWARD"
        },
        {
          "text": "VECTOR3_HALF",
          "link": "/preview/math/variables/VECTOR3_HALF"
        },
        {
          "text": "VECTOR3_LEFT",
          "link": "/preview/math/variables/VECTOR3_LEFT"
        },
        {
          "text": "VECTOR3_NEGATIVE_ONE",
          "link": "/preview/math/variables/VECTOR3_NEGATIVE_ONE"
        },
        {
          "text": "VECTOR3_NORTH",
          "link": "/preview/math/variables/VECTOR3_NORTH"
        },
        {
          "text": "VECTOR3_ONE",
          "link": "/preview/math/variables/VECTOR3_ONE"
        },
        {
          "text": "VECTOR3_RIGHT",
          "link": "/preview/math/variables/VECTOR3_RIGHT"
        },
        {
          "text": "VECTOR3_SOUTH",
          "link": "/preview/math/variables/VECTOR3_SOUTH"
        },
        {
          "text": "VECTOR3_UP",
          "link": "/preview/math/variables/VECTOR3_UP"
        },
        {
          "text": "VECTOR3_WEST",
          "link": "/preview/math/variables/VECTOR3_WEST"
        },
        {
          "text": "VECTOR3_ZERO",
          "link": "/preview/math/variables/VECTOR3_ZERO"
        },
        {
          "text": "VECTORXZ_ZERO",
          "link": "/preview/math/variables/VECTORXZ_ZERO"
        }
      ]
    },
    {
      "text": "@minecraft/math@beta",
      "collapsed": true,
      "items": [
        {
          "text": "概述",
          "link": "/preview/math@beta/"
        },
        {
          "text": "AABBInvalidExtentError",
          "link": "/preview/math@beta/classes/AABBInvalidExtentError"
        },
        {
          "text": "AABBUtils",
          "link": "/preview/math@beta/classes/AABBUtils"
        },
        {
          "text": "Vector2Builder",
          "link": "/preview/math@beta/classes/Vector2Builder"
        },
        {
          "text": "Vector2Utils",
          "link": "/preview/math@beta/classes/Vector2Utils"
        },
        {
          "text": "Vector3Builder",
          "link": "/preview/math@beta/classes/Vector3Builder"
        },
        {
          "text": "Vector3Utils",
          "link": "/preview/math@beta/classes/Vector3Utils"
        },
        {
          "text": "VectorXZBuilder",
          "link": "/preview/math@beta/classes/VectorXZBuilder"
        },
        {
          "text": "VectorXZUtils",
          "link": "/preview/math@beta/classes/VectorXZUtils"
        },
        {
          "text": "clampNumber",
          "link": "/preview/math@beta/functions/clampNumber"
        },
        {
          "text": "Colors",
          "link": "/preview/math@beta/variables/Colors"
        },
        {
          "text": "VECTOR2_ZERO",
          "link": "/preview/math@beta/variables/VECTOR2_ZERO"
        },
        {
          "text": "VECTOR3_BACK",
          "link": "/preview/math@beta/variables/VECTOR3_BACK"
        },
        {
          "text": "VECTOR3_DOWN",
          "link": "/preview/math@beta/variables/VECTOR3_DOWN"
        },
        {
          "text": "VECTOR3_EAST",
          "link": "/preview/math@beta/variables/VECTOR3_EAST"
        },
        {
          "text": "VECTOR3_FORWARD",
          "link": "/preview/math@beta/variables/VECTOR3_FORWARD"
        },
        {
          "text": "VECTOR3_HALF",
          "link": "/preview/math@beta/variables/VECTOR3_HALF"
        },
        {
          "text": "VECTOR3_LEFT",
          "link": "/preview/math@beta/variables/VECTOR3_LEFT"
        },
        {
          "text": "VECTOR3_NEGATIVE_ONE",
          "link": "/preview/math@beta/variables/VECTOR3_NEGATIVE_ONE"
        },
        {
          "text": "VECTOR3_NORTH",
          "link": "/preview/math@beta/variables/VECTOR3_NORTH"
        },
        {
          "text": "VECTOR3_ONE",
          "link": "/preview/math@beta/variables/VECTOR3_ONE"
        },
        {
          "text": "VECTOR3_RIGHT",
          "link": "/preview/math@beta/variables/VECTOR3_RIGHT"
        },
        {
          "text": "VECTOR3_SOUTH",
          "link": "/preview/math@beta/variables/VECTOR3_SOUTH"
        },
        {
          "text": "VECTOR3_UP",
          "link": "/preview/math@beta/variables/VECTOR3_UP"
        },
        {
          "text": "VECTOR3_WEST",
          "link": "/preview/math@beta/variables/VECTOR3_WEST"
        },
        {
          "text": "VECTOR3_ZERO",
          "link": "/preview/math@beta/variables/VECTOR3_ZERO"
        },
        {
          "text": "VECTORXZ_ZERO",
          "link": "/preview/math@beta/variables/VECTORXZ_ZERO"
        }
      ]
    }
  ]
},
    outline: { level: [2, 3] },
    search: { provider: 'local' },
    docFooter: { prev: false, next: false },
  },
})
