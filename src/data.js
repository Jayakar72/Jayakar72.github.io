// Skills Icons
import clangIcon from "./images/skillsIcon/C_lang.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import isaacsIcon from "./images/skillsIcon/isaacsim.png"
import airplaneIcon from "./images/skillsIcon/airplane.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import googleScholarIcon from "./images/contactIcon/gscholar.png"


// Company icon
import TihanIcon from "./images/workPhotos/TIhanlogo.jpg"
import ARCIIcon from "./images/workPhotos/ARCI2.jpg"
import LvpeiIcon from "./images/workPhotos/lvpei.png"


// company image
import TihanImg from "./images/workPhotos/Tihan.png"
import SLMMachine from "./images/workPhotos/arcislm.webp"
import lvpei from "./images/workPhotos/lvpei.jpeg"

// School images
import KLLogo from "./images/school/KLUniversitylogo.png"
import NeuLogo from "./images/school/NEUlogo3.png"
import KLImg from "./images/school/KLUniversity1.jpg"
import NeuImg from "./images/school/NEUimage.jpg"


// Helper function for getting text in current language
export const getText = (textObj, language = 'en') => {
  // If it's already a string, return as-is (backward compatibility)
  if (typeof textObj === 'string') return textObj;
  
  // If it's an object with language keys, return the appropriate language
  if (textObj && typeof textObj === 'object') {
    return textObj[language] || textObj.en || textObj.zh || Object.values(textObj)[0] || '';
  }
  
  // Fallback
  return textObj || '';
};

const siteData = {

 
  name: {
    en: "Sai Jayakar Vanam",
  },
 
  headerParagraph: {
    en: "I am a robotics engineer passionate about bringing autonomous and instinct-driven robots to life."
  },

  // Navigation labels
  nav: {
    home: { en: "Home"},
    work: { en: "Work"},
    projects: { en: "Projects"},
    contact: { en: "Contact"},
    resume: { en: "Resume"}
  },

  // Section titles  
  sections: {
    about: { en: "About"},
    education: { en: "Education"},
    internships: { en: "Internships"},
    projects: { en: "Projects"},
    skills: { en: "Skills"},
    contact: { en: "Contact"}
  },

  // Button text translations
  buttons: {
    explore: { en: "Explore"},
    readMore: { en: "Read More"},
    close: { en: "Close"}
  },

  contactEmail: "vanam.sai@northeastern.edu",

  education: [
    {
      title: {
        en: "K L University, IN",
      },
      para: {
        en: "Bachelor of Technology in AI & Data Science, with Distinction."
      },
      imageSrc: KLLogo,
      workImg: KLImg,
      url: "https://uwaterloo.ca/mechanical-mechatronics-engineering/",
      description: [
        {
          en: "GPA: 3.6, specialized in robotics, artificial intelligence, Computer vision, and Deep learning",
        },
        {
          en: "Clubs: GLUG(GNU / Linux user gorup)",
        },
      ],
    },
    {
      title: {
        en: "Northeastern University, Boston, MA",
      },
      para: {
        en: "Master of Science in Robotics/ mechatronics",
      },
      imageSrc: NeuLogo,
      workImg: NeuImg,
      url: "https://www.northeastern.edu/",
      description: [
        {
          en: "Classes focus on classical control theories and reinforcement learning for mobile robots",
        },
        {
          en: "Classes: ME 5250 Robot Mechanics and Control, EECE 5550 Mobile Robotics, CS 5180 Reinforcement Learning and Sequential Decision Making, EECE 5554 Robot Sensing and Navigation",
        },
        {
          en: "Clubs: NURover(Autonomous rover team), NUAerospace(Rocketry framework design), NUAstronomy(stargazing and astrophotographer)",

        },
      ],
    },
  ],

  projects: [
    {
      title: {
        en: "TiHAN( SUZUKI MNC)",
      }, 
      position: {
        en: "Autonomous Vehicle Test Engineer - SUZUKI",
      },
      para: {
        en: "Developed SOTIF ISO - 21448 test scenarios/environment for SUZUKI autonomous vehicle",
      },      
      imageSrc:
        TihanIcon,
      
      url: "/work/tihan/",

      date: "07/2024 - 12/2024 ",

      description: [
        {
          en: 'Designed "Semi LightTest" feature for controlling 19 unique light groups across 4 controllers in C, displayed at the Tesla Semi Delivery Event by Elon Musk',
        },
        {
          en: 'Set up simulations for the Semi Truck lighting controllers in Python and created Software In a Loop tests using Python, drafted "Semi Light Test" specs on Polarion',
        },
        {
          en: 'Brought up lighting fault detection and lighting alerts for Tesla Semi headlamps, rear lights, and trailer lights using C via CAN network',
        },
        {
          en: 'Created self-tests for checking Semi\'s mirror, latch, steering wheel, and horn and fixed various firmware bugs for Model S/X lighting in C',
        }
      ],

      workImg:
        TihanImg,
    },
    {
      title: {
        en: "ARCI",
      }, 
      position: {
        en: "SLM Machine Engineer - (Additive Manufacturing)",
      },
      para: {
        en: "Developed an advanced Deep learning algorithm for 3d printed materials produced by SLM",
      },
      imageSrc:
        ARCIIcon,
   
      url: "/work/arci/",
      
      date: "05/2024 - 06/2024 ",

      description: [
        {
          en: "Developed Quadruped extension for unitree A1 robots on Isaac Sim using Python, connected quadruped gait controlers to the quadruped model, and created ROS, ROS2, and Visual Inertial Odometry examples for Isaac Sim.",
        },
        {
          en: "Created Isaac Sensor extension for simulating physic based sensors such as the contact sensor and IMU sensors using C++ and Python, written USD schema for the sensors, enabling visualization and modification of sensor parameters during runtime from the GUI",
        },
        {
          en: "Drafted user manual and extension documentations using Sphinx, and created unit tests for the quadruped and Isaac sensor extension.",
        }
      ],
      
      workImg:
        SLMMachine,
    },

    {
      title: {
        en: "L.V.P Eye Institute",
      }, 
      position: {
        en: "R/D Project staff",
      },
      para: {
        en: "Building Grab-I, an AI-based quality assessment checker for teleophthalmology/teleconsultancy",
      },
      
      imageSrc:
        LvpeiIcon,    
     
      url: "/work/lvpei/",

      date: "01/2025 - 08/2025 ",

      description: [
        {
          en: "Built display testing pipeline using C++ OpenCV to detect discoloration, misalignment, dead pixels, and poor connections, capable of detecting alignment offsets of 0.5mm and dead pixels under 0.2mm",
        },
        {
          en: "Prototyped LCD tests using Convolutional Neural Network and TensorFlow with 98% accuracy, won Best Internal Impact Award",
        },
        {
          en: "Gathered requirements, designed, and developed customer firmware flash and label printer software for the smart thermostats using C++/CLI and .NET framework, logging results using MongoDB, printing labels using ZPL",
        },
        {
          en: "Drafted documentation and deployed customer firmware flash and label printer software at Wistron factory for Design Validation Test, projected to flash 80000+ units per month in full production",
        }
      ],
   
      workImg:
        lvpei,
    },

  ],

// About Section --------------
aboutParaOne: {
  en: "I am a robotics engineer with expertise in simulation development, narrowing the sim-to-real gap by creation of high-fidelity virtual environments to accelerate robotic testing and deployment. I am particularly passionate about reinforcement learning and imitation learning, exploring control strategies that enable safer, more human-like interactions.",
},
aboutParaTwo: {
  en: "I earned my Bachelor's degree in Mechatronics Engineering from the University of Waterloo. I also conducted human-robot interaction research at the Active Robotics Interaction Lab under Dr. Yue Hu, with a publication on IEEE Robotics and Automation Letters.",
},
aboutParaThree: {
  en: "When I'm not building robots, you can find me hiking, playing my clarinet and accordion, or exploring new cuisines around the city.",
},


// Projects Carousel Items
projectsCarouselItems: [
  {
    media: "trajpred",
    type: 'video',
    title: {
      en: "Trajectory Prediction (2025)",
    },
    subtitle: {
      en: "Pose guided trajectory prediction uisng 3D human shape estimation",
    },
    description: {
      en: "In this project, I developed a multimodal pose-guided trajectory prediction net which predicts the future trajectory of pedestrians and their intention, aids in autonomous navigation, avoiding collisions",
    },
    buttons: [
      {
        text: { en: "Read More"},
        url: "https://github.com/Jayakar72/Pose-Guided-Trajectory-Prediction-Network-PGTP-Net.git"
      }
    ]
  },
  {
    media: "watoImage",
    type: 'image',
    title: {
      en: "Watonomous",
      zh: "Watonomous"
    },
    subtitle: {
      en: "Bolty!",
      zh: "Bolty!"
    },
    description: {
      en: "Watonomous is a University of Waterloo design team that turns a chevy bolt to a level 4 autonomous vehicle. At Watonomous, I worked on local planning for the vehicle, particularly with the MPC controller and gained valuable experience with ROS.",
      zh: "Watonomous是滑铁卢大学的自动驾驶设计团队,目标是将雪佛兰Bolt改造成四级自动驾驶车辆。在Watonomous,我负责车辆的局部规划(local planning),特别是MPC控制器,并积累了宝贵的ROS经验。"
    },
    buttons: [
      {
        text: { en: "Read more", zh: "了解更多" },
        url: "https://www.watonomous.ca/"
      }
    ]
  },
  {
    media: "capstoneVideo",
    type: 'video',
    title: {
      en: "Capstone Project (2023)",
      zh: "毕业设计项目 (2023)"
    },
    subtitle: {
      en: "Multi-robot exploration and SLAM in a simulated warehouse",
      zh: "虚拟仓库中的多机器人探索和SLAM任务"
    },
    description: {
      en: "Multi-robot SLAM system for exploring and mapping a 80000 sqft virtual warehouse.",
      zh: "用于探索和绘制7500平米的虚拟仓库平面图的多机器人SLAM系统原型。"
    },
    buttons: [
      {
        text: { en: "Read more", zh: "了解更多" },
        url: "https://github.com/FireScopeRobotics"
      }
    ]
  },
  {
    media: "webappImg",
    type: 'image',
    title: {
      en: "Webapp Hackathon Projects",
      zh: "网络应用黑客马拉松项目"
    },
    subtitle: {
      en: "Best Use of Google Cloud Award (Purrtector, NWHacks 2021)",
      zh: "谷歌云最佳使用奖 (Purrtector, NWHacks 2021)"
    },
    description: {
      en: "Intelibatch (left) is a webapp for displaying and predicting COVID19 cases across North America using React (front end), Flask (back end), and Tensorflow (prediction) to compute the optimal batch size for repeated testing. Purrtector (right) is a chrome extension for encouraging planet positive behaviors by rewarding users with digital pets using React and Flask.",
      zh: "Intelibatch(左)是一个使用React(前端)、Flask(后端)和Tensorflow(预测)显示和预测北美COVID19病例的网络应用,用于计算重复测试的最佳批次大小。Purrtector(右)是一个谷歌Chrome浏览器扩展,通过使用React和Flask奖励用户数字宠物来鼓励环保行为。"
    },
    buttons: [
      {
        text: { en: "Intelibatch", zh: "Intelibatch" },
        url: "https://devpost.com/software/pool-sampler"
      },
      {
        text: { en: "Purrtector", zh: "Purrtector" },
        url: "https://devpost.com/software/purrtech"
      }
    ]
  },
  {
    media: "wearableImg",
    type: 'image',
    title: {
      en: "Wearable Hackathon Projects",
      zh: "可穿戴设备黑客马拉松项目"
    },
    subtitle: {
      en: "1st Place (VisionSense, MakeUofT 2019)",
      zh: "第一名 (VisionSense, MakeUofT 2019)"
    },
    description: {
      en: "VisionSense (left) is an IoT outfit to haptically guide users with visual impairments/obstructions while monitoring their environment. Nightlight (right) is a wearable that allows bike users to signal turns at night via motion-sensing technologies which will activate turn lights.",
      zh: "VisionSense(左)是一套物联网设备,通过触觉引导视觉障碍用户,同时监控环境。Nightlight(右)是一款可穿戴设备,允许骑行者通过运动感应技术在夜间发出转向信号,激活转向灯。"
    },
    buttons: [
      {
        text: { en: "VisionSense", zh: "VisionSense" },
        url: "https://devpost.com/software/visionsense"
      },
      {
        text: { en: "NightLight", zh: "NightLight" },
        url: "https://devpost.com/software/team-18-go-team"
      }
    ]
  },
  {
    media: "mte380Img",
    type: 'image',
    title: {
      en: "BOFA, the Line Follower Robot",
      zh: "BOFA,循线机器人"
    },
    subtitle: {
      en: "2nd highest competition mark",
      zh: "竞赛第二名"
    },
    description: {
      en: "Lead the mechanical design for a line following robot using SolidWorks, drafted Bill of Material, and oversee software, mechanical, and electrical developments as project manager",
      zh: "使用SolidWorks领导循线机器人的机械设计,制定物料清单,作为项目经理监督软件、机械和电气开发进度"
    },
    buttons: [
      {
        text: { en: "Read More", zh: "了解更多" },
        url: "https://github.com/B-O-F-A"
      }
    ]
  },
  {
    media: "hisecurityImage",
    type: 'image',
    title: {
      en: "HiSecurity!",
      zh: "HiSecurity!"
    },
    subtitle: {
      en: "Hack the north, 2019",
      zh: "Hack the north, 2019"
    },
    description: {
      en: "This camera system which utilizes machine vision (OpenCV and Sktlearn) to physically track and identify faces using the stepper motors onboard. The handy ui also enables users to track the system remotely and in real time.",
      zh: "这个摄像头系统利用机器视觉(OpenCV和Sklearn)通过板载步进电机物理跟踪和识别人脸。便捷的用户界面还允许用户远程实时跟踪系统。"
    },
    buttons: [
      {
        text: { en: "Read More", zh: "了解更多" },
        url: "https://devpost.com/software/acs-htn2019"
      }
    ]
  },
  {
    media: "vexImg",
    type: 'image',
    title: {
      en: "VEX Robotics",
      zh: "VEX机器人竞赛"
    },
    subtitle: {
      en: "Finalists, Alberta Provincial Championship 2017 and 2018",
      zh: "阿尔伯塔省机器人锦标赛决赛圈 (2017和2018年)"
    },
    description: {
      en: "Over the three years, we explored various robotics systems such as holonomic drives, reverse double four bar lifts, and even learned C programming and programed PID controllers from scratch in a team of three.",
      zh: "在三年中,我们三人团队探索了各种机器人系统,如全向驱动、反向双四杆举升机构,并且学习了C编程并从零开始编程PID控制器。"
    },
    buttons: [
      {
        text: { en: "Read More", zh: "了解更多" },
        url: "https://globalnews.ca/video/3355924/sir-winston-churchill-students-head-to-vex-robotics-world-championship/"
      }
    ]
  },
  {
    media: "pilotImg",
    type: 'image',
    title: {
      en: "Pilot",
      zh: "飞行员"
    },
    subtitle: {
      en: "\"Oh! I slipped the surly bonds of earth and danced the skies on bright yellow wings.\"",
      zh: "\"大鹏一日同风起，扶摇直上九万里。\" - 李白"
    },
    description: {
      en: "I finally touched the sky when I earned my glider pilot license in 2016 and private pilot license in 2017. This was an breathtaking experiences that inspires me to build robotics airplanes to this date.",
      zh: "当我在2016年获得滑翔机执照和2017年获得飞机执照时,我终于划破天际。"
    },
    buttons: []
  }
],


  skills: [
    {
      img: clangIcon,
      para:
        "C, C++, C#, CUDA",
    },
    {
      img: codeIcon,
      para:
        "Python, MATLAB, R",
    },
    {
      img: RPIIcon,
      para:
        "Arduino, Raspberry Pi, ESP8266",
    },
    {
      img: openCVIcon,
      para:
        "OpenCV, Tensorflow, Pytorch",
    },
    {
      img: SolidworksIcon,
      para:
        "Solidworks, AutoCAD, Blender",
    },
    {
      img: rosIcon,
      para:
        "ROS, ROS2, Gazebo",
    },
    {
      img: isaacsIcon,
      para:
        "Isaac Sim, Isaac Lab",
    },
    {
      img: airplaneIcon,
      para:
        "Private Pilot, Glider Pilot License",
    },
    
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: {
  en: "Let's chat about robots!",
  zh: "一起聊聊机器人吧！"
},
  social: [

    { img: githubIcon, 
      url: "https://github.com/stevenf7"
    },
    {
      img: googleScholarIcon,
      url: "https://scholar.google.com/citations?hl=en&user=0YSkT7UAAAAJ",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/stevenfeng7/",
    },

  ],

  // End Contact Section ---------------
}

export default siteData;
