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
      en: "Pose guided trajectory prediction using 3D human shape estimation",
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
    media: "ebike",
    type: 'video',
    title: {
      en: "Autonomous E-Bike",
    },
    subtitle: {
      en: "AutoBike!",
    },
    description: {
      en: "In this project, we developed an ADAS level 2 Fully Autonomous E-Bike, where I developed PPC, GNSS, sensor fusion stack, and integrated the brain for the bike, i.e., ORIN/ Raspberry Pi 4. ",
    },
    buttons: [
      {
        text: { en: "Read more" },
        url: "https://github.com/Jayakar72/Autonomous-E-Bike"
      }
    ]
  },
  {
    media: "robot",
    type: 'video',
    title: {
      en: "UR3 (6 DOF) Robot arm - 3D simulation",
    
    },
    subtitle: {
      en: "A simple 3D simulation of UR3 robot's workspace and its pose",
    },
    description: {
      en: "A 6-degree-of-freedom UR3 collaborative robot is used to represent the end-effectors, calculating the robot's DH parameters, Forward kinematics, and Inverse kinematics. Simulating a simple 3D task and workspace of the robots' reachable areas. Designed an interactive robot mover and trajectory follower."
    },
    buttons: [
      {
        text: { en: "Read more"},
        url: "https://github.com/Jayakar72/UR3-Robot-Manipulation-in-3D-space"
      }
    ]
  },
  {
    media: "nurover",
    type: 'video',
    title: {
      en: "Mars rover Autonomous team",
      
    },
    subtitle: {
      en: "NURover club - Building Mars rover to compete in NASA | university rover challenge | canadian international rover challenge",
    },
    description: {
      en: "Building the autonomous stack of the rover team, working on integrating dual EKF and sensor fusion. Robust navigation through wastelands, aiding in building a base station and GNSS based ntrip correction to the rover."
    },
    buttons:[]
  },
  {
    media: "selfdriving",
    type: 'video',
    title: {
      en: "Self Driving 101",
    },
    subtitle: {
      en: "This is a capstone project made for tutorials of self-driving 101 in simulation for the freshmen - OOPS & DL courses",
    },
    description: {
      en: "This project was made to help juniors understand self-driving cars and the sensor integration in simulation (Carla / Gazibo). We developed a basic drive, line follower, and waypoint/data collection code(starter) in Python to foster students' skills in self driving field and encourage them to approach this and solve complex problems in autonomous navigation."
    },
    buttons: [
      {
        text: { en: "Read more" },
        url: "https://github.com/Jayakar72/Self-driving-101"
      },
    ]
  },
  {
    media: "mpc",
    type: 'video',
    title: {
      en: "MPC control + Dynamic object detection."
    },
    subtitle: {
      en: "This work is a research project on an MPC controller with Dynamic object detection",
    },
    description: {
      en: "Developed MPC control for campus shuttle for smoother navigation and following, which controls the roll, pitch, and yaw (Steering) of the vehicle and also the acceleration of the vehicle in every scenario (simple Turns and sharp turns). We also develop a novel Dynamic object detection using lidar. We collected pretrained vehicle and object 3D point cloud data, then aligned consecutive LiDAR scans to remove ego-motion and compared voxel occupancy across frames to isolate points that change over time, clustering and tracking these regions to identify dynamic objects.",
    },
    buttons: [
      {
        text: { en: "Cannot publish the work due to NDA ;)"}
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
