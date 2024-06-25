import Particles from "react-tsparticles";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadBaseMover } from "tsparticles-move-base";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadImageShape } from "tsparticles-shape-image";
import image_html from './assets/particles/html.png'
import image_react from './assets/particles/react.png'
import image_js from './assets/particles/js.png'
import image_css from './assets/particles/css.png'
import image_helm from './assets/particles/helm.png'
import image_docker from './assets/particles/docker.png'
import image_aws from './assets/particles/aws.png'
import image_go from './assets/particles/go.png'
import image_k8s from './assets/particles/k8s.png'
import image_java from './assets/particles/java.png'
import image_grafana from './assets/particles/grafana.png'
import image_prom from './assets/particles/prom.png'
import image_sql from './assets/particles/sql.png'
import image_dynamo from './assets/particles/dynamo.png'

export default function ParticlesComponent() {
    async function particlesInit(engine) {
        await loadColorUpdater(engine);
        await loadCircleShape(engine);
        await loadBaseMover(engine);
        await loadSizeUpdater(engine);
        await loadOpacityUpdater(engine);
        await loadOutModesUpdater(engine);
        await loadImageShape(engine);
    }
    return (
        <Particles
            init={particlesInit}
            options={{
                "fullScreen": {
                "enable": true,
                "zIndex": 1
            },
            "background": {
                "color": {
                    "value": "#1f1f1f",
                },
            },
            "detectRetina": true,
            "fpsLimit": 60,
            "interactivity": {
                "events": {
                    "onClick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "onDiv": {
                        "elementId": "repulse-div",
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onHover": {
                        "enable": true,
                        "mode": "bubble",
                        "parallax": {
                            "enable": false,
                            "force": 60,
                            "smooth": 10
                        }
                    },
                    "resize": true
                },
                "modes": {
                    "bubble": {
                        "distance": 400,
                        "duration": 2,
                        "opacity": 0.8,
                        "size": 2,
                    },
                    "connect": {
                        "distance": 80,
                        "lineLinked": {
                            "opacity": 0.5
                        },
                        "radius": 60
                    },
                    "grab": {
                        "distance": 400,
                        "lineLinked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "quantity": 2
                    },
                    "remove": {
                        "quantity": 2
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    }
                }
            },
                particles: {
                    color: { value: "#ffffff" },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: { density: { enable: true, area: 800 }, value: 80 },
                    opacity: {
                        value: 0.9,
                    },
                    shape: {
                        type: "image",
                        image: [
                            {
                                src: image_prom,
                            },
                            {
                                src: image_react,
                            },
                            {
                                src: image_go,
                            },
                            {
                                src: image_docker,
                            },
                            {
                                src: image_helm,
                            },
                            {
                                src: image_grafana,
                            },
                        ],
                    },
                    size: {
                        value: { min: 10, max: 25 },
                    },
                    "color": {
                    "value": "#ffffff"
                    },
                    "lineLinked": {
                        "blink": false,
                        "color": "#000",
                        "consent": false,
                        "distance": 150,
                        "enable": false,
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "attract": {
                            "enable": false,
                            "rotate": {
                                "x": 600,
                                "y": 1200
                            }
                        },
                        "bounce": false,
                        "direction": "none",
                        "enable": true,
                        "outMode": "out",
                        "random": false,
                        "speed": 2,
                        "straight": false
                    },
                    "number": {
                        "density": {
                            "enable": true,
                            "area": 800
                        },
                        "limit": 20,
                        "value": 15,
                    },
                    "opacity": {
                        "animation": {
                            "enable": true,
                            "minimumValue": 0.2,
                            "speed": 1,
                            "sync": false
                        },
                        "random": true,
                        "value": 1
                    },
                    "rotate": {
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        },
                        "direction": "random",
                        "random": true,
                        "value": 0
                    },
                    "size": {
                        "animation": {
                            "enable": false,
                            "minimumValue": 0.1,
                            "speed": 40,
                            "sync": false
                        },
                        "random": false,
                        "value": 16
                    },
                    
                    "polygon": {
                        "draw": {
                            "enable": false,
                            "lineColor": "#ffffff",
                            "lineWidth": 0.5
                        },
                        "move": {
                            "radius": 10
                        },
                        "scale": 1,
                        "url": ""
                    },
                    "background": {
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover"
                    },
                },
            }}
        />
    )
}

            // "fullScreen": {
            //     "enable": true,
            //     "zIndex": 1
            // },
            // "background": {
            //     "color": {
            //         "value": "#1E2F97",
            //     },
            // },
            // "detectRetina": true,
            // "fpsLimit": 60,
            // "interactivity": {
            //     "events": {
            //         "onClick": {
            //             "enable": true,
            //             "mode": "push"
            //         },
            //         "onDiv": {
            //             "elementId": "repulse-div",
            //             "enable": false,
            //             "mode": "repulse"
            //         },
            //         "onHover": {
            //             "enable": true,
            //             "mode": "bubble",
            //             "parallax": {
            //                 "enable": false,
            //                 "force": 60,
            //                 "smooth": 10
            //             }
            //         },
            //         "resize": true
            //     },
            //     "modes": {
            //         "bubble": {
            //             "distance": 400,
            //             "duration": 2,
            //             "opacity": 0.8,
            //             "size": 2,
            //         },
            //         "connect": {
            //             "distance": 80,
            //             "lineLinked": {
            //                 "opacity": 0.5
            //             },
            //             "radius": 60
            //         },
            //         "grab": {
            //             "distance": 400,
            //             "lineLinked": {
            //                 "opacity": 1
            //             }
            //         },
            //         "push": {
            //             "quantity": 2
            //         },
            //         "remove": {
            //             "quantity": 2
            //         },
            //         "repulse": {
            //             "distance": 200,
            //             "duration": 0.4
            //         }
            //     }
            // },
            // particles: {
            //     "color": {
            //         "value": "#ffffff"
            //     },
            //     "lineLinked": {
            //         "blink": false,
            //         "color": "#000",
            //         "consent": false,
            //         "distance": 150,
            //         "enable": false,
            //         "opacity": 0.4,
            //         "width": 1
            //     },
            //     "move": {
            //         "attract": {
            //             "enable": false,
            //             "rotate": {
            //                 "x": 600,
            //                 "y": 1200
            //             }
            //         },
            //         "bounce": false,
            //         "direction": "none",
            //         "enable": true,
            //         "outMode": "out",
            //         "random": false,
            //         "speed": 2,
            //         "straight": false
            //     },
            //     "number": {
            //         "density": {
            //             "enable": true,
            //             "area": 800
            //         },
            //         "limit": 20,
            //         "value": 15,
            //     },
            //     "opacity": {
            //         "animation": {
            //             "enable": true,
            //             "minimumValue": 0.2,
            //             "speed": 1,
            //             "sync": false
            //         },
            //         "random": true,
            //         "value": 1
            //     },
            //     "rotate": {
            //         "animation": {
            //             "enable": true,
            //             "speed": 5,
            //             "sync": false
            //         },
            //         "direction": "random",
            //         "random": true,
            //         "value": 0
            //     },
            //     "size": {
            //         "animation": {
            //             "enable": false,
            //             "minimumValue": 0.1,
            //             "speed": 40,
            //             "sync": false
            //         },
            //         "random": false,
            //         "value": 16
            //     },
                
            //     "polygon": {
            //         "draw": {
            //             "enable": false,
            //             "lineColor": "#ffffff",
            //             "lineWidth": 0.5
            //         },
            //         "move": {
            //             "radius": 10
            //         },
            //         "scale": 1,
            //         "url": ""
            //     },
            //     "background": {
            //         "image": "",
            //         "position": "50% 50%",
            //         "repeat": "no-repeat",
            //         "size": "cover"
            //     }
            // },
            // detectRetina: true,