const particlesConfig = {
    fps_limit: 32,
    fullScreen: {enable: false},
    interactivity: {
      detect_on: "canvas",
      events: {
        onclick: { enable: true, mode: "push" },
        onhover: {
          enable: true,
          mode: "attract",
          parallax: { enable: false, force: 60, smooth: 10 }
        },
        resize: true
      },
      modes: {
        push: { quantity: 4 },
        attract: { distance: 200, duration: 0.4, factor: 12 }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      line_linked: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        attract: { enable: true, rotateX: 600, rotateY: 1200 },
        bounce: false,
        direction: "none",
        enable: true,
        out_mode: "out",
        random: false,
        speed: 2,
        straight: false
      },
      number: { density: { enable: true, value_area: 1000 }, value: 60 },
      opacity: {
        anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
        random: false,
        value: 0.5
      },
    //   shape: {
    //     // character: {
    //     //   fill: false,
    //     //   font: "Verdana",
    //     //   style: "",
    //     //   value: "*",
    //     //   weight: "400"
    //     // },
    //     // image: {
    //     //   height: 100,
    //     //   replace_color: true,
    //     //   src: "images/github.svg",
    //     //   width: 100
    //     // },
    //     polygon: { nb_sides: 5 },
    //     stroke: { color: "#000000", width: 0 },
    //     type: "circle"
    //   },
      size: {
        anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
        random: true,
        value: 5
      }
    },
    polygon: {
      draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
      move: { radius: 10 },
      scale: 1,
      type: "none",
      url: ""
    },
    retina_detect: true
  }


  export default particlesConfig


// {
//     fullScreen: {enable:true},
//     background: {
//       color: {
//         value: "",
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events:{
//           onClick:{
//             enable: false,
//             mode: 'push',
//           },
//           onHover: {
//             enable: true,
//             mode: 'repulse',
//           },
//           resize: true,
//         },
//         modes: {
//           push: {
//             quantity: 90
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: '#e68e2e',
//         },
//         links: {
//           color: '#f5d393',
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1
//         },
//         collisions: {
//           enable: true,
//         },
//         move: {
//           directions: 'none',
//           enable: true,
//           outModes: {
//             default: 'bounce'
//           },
//           random: false,
//           speed: 1,
//           straight: false
//         },
//         number: {
//           density: {
//             enable: true,
//             area: 800
//           },
//           value: 80
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: 'circle'
//         },
//         size: {
//           value: {min: 1, max: 5},
//         },
//       },
//       detectRetina: true,
//     }
//   }




// {
//     "autoPlay": true,
//     "background": {
//       "color": {
//         "value": "#000"
//       },
//       "image": "",
//       "position": "",
//       "repeat": "",
//       "size": "",
//       "opacity": 1
//     },
//     "backgroundMask": {
//       "composite": "destination-out",
//       "cover": {
//         "color": {
//           "value": "#fff"
//         },
//         "opacity": 1
//       },
//       "enable": false
//     },
//     "defaultThemes": {},
//     "delay": 0,
//     "fullScreen": {
//       "enable": true,
//       "zIndex": -1
//     },
//     "detectRetina": true,
//     "duration": 0,
//     "fpsLimit": 120,
//     "interactivity": {
//       "detectsOn": "window",
//       "events": {
//         "onClick": {
//           "enable": false,
//           "mode": []
//         },
//         "onDiv": {
//           "selectors": [],
//           "enable": false,
//           "mode": [],
//           "type": "circle"
//         },
//         "onHover": {
//           "enable": true,
//           "mode": "trail",
//           "parallax": {
//             "enable": false,
//             "force": 2,
//             "smooth": 10
//           }
//         },
//         "resize": {
//           "delay": 0.5,
//           "enable": true
//         }
//       },
//       "modes": {
//         "trail": {
//           "delay": 0.005,
//           "pauseOnStop": true,
//           "quantity": 5,
//           "particles": {
//             "color": {
//               "value": "#ff0000",
//               "animation": {
//                 "enable": true,
//                 "speed": 400,
//                 "sync": true
//               }
//             },
//             "collisions": {
//               "enable": false
//             },
//             "links": {
//               "enable": false
//             },
//             "move": {
//               "outModes": {
//                 "default": "destroy"
//               },
//               "speed": 2
//             },
//             "size": {
//               "value": 5,
//               "animation": {
//                 "enable": true,
//                 "speed": 5,
//                 "minimumValue": 1,
//                 "sync": true,
//                 "startValue": "min",
//                 "destroy": "max"
//               }
//             }
//           }
//         },
//         "attract": {
//           "distance": 200,
//           "duration": 0.4,
//           "easing": "ease-out-quad",
//           "factor": 1,
//           "maxSpeed": 50,
//           "speed": 1
//         },
//         "bounce": {
//           "distance": 200
//         },
//         "bubble": {
//           "distance": 200,
//           "duration": 0.4,
//           "mix": false,
//           "divs": {
//             "distance": 200,
//             "duration": 0.4,
//             "mix": false,
//             "selectors": []
//           }
//         },
//         "connect": {
//           "distance": 80,
//           "links": {
//             "opacity": 0.5
//           },
//           "radius": 60
//         },
//         "grab": {
//           "distance": 100,
//           "links": {
//             "blink": false,
//             "consent": false,
//             "opacity": 1
//           }
//         },
//         "push": {
//           "default": true,
//           "groups": [],
//           "quantity": 4
//         },
//         "remove": {
//           "quantity": 2
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4,
//           "factor": 100,
//           "speed": 1,
//           "maxSpeed": 50,
//           "easing": "ease-out-quad",
//           "divs": {
//             "distance": 200,
//             "duration": 0.4,
//             "factor": 100,
//             "speed": 1,
//             "maxSpeed": 50,
//             "easing": "ease-out-quad",
//             "selectors": []
//           }
//         },
//         "slow": {
//           "factor": 3,
//           "radius": 200
//         },
//         "light": {
//           "area": {
//             "gradient": {
//               "start": {
//                 "value": "#ffffff"
//               },
//               "stop": {
//                 "value": "#000000"
//               }
//             },
//             "radius": 1000
//           },
//           "shadow": {
//             "color": {
//               "value": "#000000"
//             },
//             "length": 2000
//           }
//         }
//       }
//     },
//     "manualParticles": [],
//     "particles": {
//       "bounce": {
//         "horizontal": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0.1
//           },
//           "value": 1
//         },
//         "vertical": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0.1
//           },
//           "value": 1
//         }
//       },
//       "collisions": {
//         "absorb": {
//           "speed": 2
//         },
//         "bounce": {
//           "horizontal": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0.1
//             },
//             "value": 1
//           },
//           "vertical": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0.1
//             },
//             "value": 1
//           }
//         },
//         "enable": false,
//         "maxSpeed": 50,
//         "mode": "bounce",
//         "overlap": {
//           "enable": true,
//           "retries": 0
//         }
//       },
//       "color": {
//         "value": "#ff0000",
//         "animation": {
//           "h": {
//             "count": 0,
//             "enable": true,
//             "offset": 0,
//             "speed": 50,
//             "delay": 0,
//             "decay": 0,
//             "sync": false
//           },
//           "s": {
//             "count": 0,
//             "enable": false,
//             "offset": 0,
//             "speed": 1,
//             "delay": 0,
//             "decay": 0,
//             "sync": true
//           },
//           "l": {
//             "count": 0,
//             "enable": false,
//             "offset": 0,
//             "speed": 1,
//             "delay": 0,
//             "decay": 0,
//             "sync": true
//           }
//         }
//       },
//       "groups": {},
//       "move": {
//         "angle": {
//           "offset": 0,
//           "value": 90
//         },
//         "attract": {
//           "distance": 200,
//           "enable": false,
//           "rotate": {
//             "x": 3000,
//             "y": 3000
//           }
//         },
//         "center": {
//           "x": 50,
//           "y": 50,
//           "mode": "percent",
//           "radius": 0
//         },
//         "decay": 0,
//         "distance": {},
//         "direction": "none",
//         "drift": 0,
//         "enable": true,
//         "gravity": {
//           "acceleration": 9.81,
//           "enable": false,
//           "inverse": false,
//           "maxSpeed": 50
//         },
//         "path": {
//           "clamp": true,
//           "delay": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0
//             },
//             "value": 0
//           },
//           "enable": false,
//           "options": {}
//         },
//         "outModes": {
//           "default": "out",
//           "bottom": "out",
//           "left": "out",
//           "right": "out",
//           "top": "out"
//         },
//         "random": false,
//         "size": false,
//         "speed": 2,
//         "spin": {
//           "acceleration": 0,
//           "enable": false
//         },
//         "straight": false,
//         "trail": {
//           "enable": false,
//           "length": 10,
//           "fill": {}
//         },
//         "vibrate": false,
//         "warp": false
//       },
//       "number": {
//         "density": {
//           "enable": true,
//           "width": 1920,
//           "height": 1080
//         },
//         "limit": 0,
//         "value": 100
//       },
//       "opacity": {
//         "random": {
//           "enable": true,
//           "minimumValue": 0.3
//         },
//         "value": {
//           "min": 0.3,
//           "max": 0.8
//         },
//         "animation": {
//           "count": 0,
//           "enable": true,
//           "speed": 0.5,
//           "decay": 0,
//           "delay": 0,
//           "sync": false,
//           "mode": "auto",
//           "startValue": "random",
//           "destroy": "none",
//           "minimumValue": 0.3
//         }
//       },
//       "reduceDuplicates": false,
//       "shadow": {
//         "blur": 0,
//         "color": {
//           "value": "#000"
//         },
//         "enable": false,
//         "offset": {
//           "x": 0,
//           "y": 0
//         }
//       },
//       "shape": {
//         "close": true,
//         "fill": true,
//         "options": {},
//         "type": "circle"
//       },
//       "size": {
//         "random": {
//           "enable": true,
//           "minimumValue": 1
//         },
//         "value": {
//           "min": 1,
//           "max": 3
//         },
//         "animation": {
//           "count": 0,
//           "enable": true,
//           "speed": 3,
//           "decay": 0,
//           "delay": 0,
//           "sync": false,
//           "mode": "auto",
//           "startValue": "random",
//           "destroy": "none",
//           "minimumValue": 1
//         }
//       },
//       "stroke": {
//         "width": 0
//       },
//       "zIndex": {
//         "random": {
//           "enable": false,
//           "minimumValue": 0
//         },
//         "value": 0,
//         "opacityRate": 1,
//         "sizeRate": 1,
//         "velocityRate": 1
//       },
//       "destroy": {
//         "bounds": {},
//         "mode": "none",
//         "split": {
//           "count": 1,
//           "factor": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0
//             },
//             "value": 3
//           },
//           "rate": {
//             "random": {
//               "enable": false,
//               "minimumValue": 0
//             },
//             "value": {
//               "min": 4,
//               "max": 9
//             }
//           },
//           "sizeOffset": true,
//           "particles": {}
//         }
//       },
//       "roll": {
//         "darken": {
//           "enable": false,
//           "value": 0
//         },
//         "enable": false,
//         "enlighten": {
//           "enable": false,
//           "value": 0
//         },
//         "mode": "vertical",
//         "speed": 25
//       },
//       "tilt": {
//         "random": {
//           "enable": false,
//           "minimumValue": 0
//         },
//         "value": 0,
//         "animation": {
//           "enable": false,
//           "speed": 0,
//           "decay": 0,
//           "sync": false
//         },
//         "direction": "clockwise",
//         "enable": false
//       },
//       "twinkle": {
//         "lines": {
//           "enable": false,
//           "frequency": 0.05,
//           "opacity": 1
//         },
//         "particles": {
//           "enable": false,
//           "frequency": 0.05,
//           "opacity": 1
//         }
//       },
//       "wobble": {
//         "distance": 5,
//         "enable": false,
//         "speed": {
//           "angle": 50,
//           "move": 10
//         }
//       },
//       "life": {
//         "count": 0,
//         "delay": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0
//           },
//           "value": 0,
//           "sync": false
//         },
//         "duration": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0.0001
//           },
//           "value": 0,
//           "sync": false
//         }
//       },
//       "rotate": {
//         "random": {
//           "enable": false,
//           "minimumValue": 0
//         },
//         "value": 0,
//         "animation": {
//           "enable": false,
//           "speed": 0,
//           "decay": 0,
//           "sync": false
//         },
//         "direction": "clockwise",
//         "path": false
//       },
//       "orbit": {
//         "animation": {
//           "count": 0,
//           "enable": false,
//           "speed": 1,
//           "decay": 0,
//           "delay": 0,
//           "sync": false
//         },
//         "enable": false,
//         "opacity": 1,
//         "rotation": {
//           "random": {
//             "enable": false,
//             "minimumValue": 0
//           },
//           "value": 45
//         },
//         "width": 1
//       },
//       "links": {
//         "blink": false,
//         "color": {
//           "value": "random"
//         },
//         "consent": false,
//         "distance": 100,
//         "enable": true,
//         "frequency": 1,
//         "opacity": 1,
//         "shadow": {
//           "blur": 5,
//           "color": {
//             "value": "#000"
//           },
//           "enable": false
//         },
//         "triangles": {
//           "enable": false,
//           "frequency": 1
//         },
//         "width": 1,
//         "warp": false
//       },
//       "repulse": {
//         "random": {
//           "enable": false,
//           "minimumValue": 0
//         },
//         "value": 0,
//         "enabled": false,
//         "distance": 1,
//         "duration": 1,
//         "factor": 1,
//         "speed": 1
//       }
//     },
//     "pauseOnBlur": true,
//     "pauseOnOutsideViewport": true,
//     "responsive": [],
//     "smooth": false,
//     "style": {},
//     "themes": [],
//     "zLayers": 100,
//     "emitters": [],
//     "motion": {
//       "disable": false,
//       "reduce": {
//         "factor": 4,
//         "value": true
//       }
//     }
//   }