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
          en: 'Collected various testing datasets as per ISO - 21448 (Safety of the intended functionality) for the SUZUKI autonomous vehicle, and tested on the current autonomous stack in the test bed.',
        },
        {
          en: 'Set up simulations for the environment testing, like sandstorm, snowfall, debris falling, animal jumping, etc. Observed the bottlenecks and implemented a whole new pipeline of detecting the unknown objects (Dynamic object detection) in python & ROS.  ',
        },
        {
          en: 'Decreased the unknown unsafe scenarios to the known safe scenarios by rigorous testing. Worked on pure pursuit control algorithm for fine-tuning the vehicle in taking safer and smoother turns in simulation(Python / Matlab) and autonomous campus vehicles using CAN-based hacking.',
        },
        {
          en: 'Worked on improving the accuracy of the GNSS(IMU) to centimeter level using NTRIP-based correction through Ublox-uconnect/Pygpsclient(opensource) .',
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
          en: "Developed a deep learning based defect detection system for detecting porosity & cracks using (GAN - python) in the additive manufacturing material as they are getting manufactured, which reduces the cost of reprinting and the metal powder.",
        },
        {
          en: "Maintaining the SLM machine and learnt additive manufacturing software, changing the metal-alloy powder, and setting up custom parameters like laser speed, distance, and power to print a defect-free material and testing on stress and global results.",
        },
        {
          en: "Worked in laser processing lab as an intern, in collaboration with the Centre for high energy systems & sciences (CHESS) in developing high-energy laser beam using TRUMPF TruTops Mark software.",
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
          en: "Built a quality assessment framework using Python, OpenCV to  detect blur, corneal reflections, completeness of eye, and other bad qualities to reduce the cost of saving false data and aids in immediate recapturing.",
        },
        {
          en: "Researched on various corneal images and image processing approaches like Blur maps, Gaussian blur, Wavelet transforms (Haar), Transformers, contours, edge, and corner,s etc. ",
        },
        {
          en: "Built custom models to deal with every quality issue, standard SVM with feature fusion to detect blur/ focus, and custom attention ViT for detecting any reflections inside the cornea and for illumination, a custom CNN with HSV saturation logic. All of these models are trained, tested, and validated in Docker. ",
        },
        {
          en: "Drafted an ophthalmology paper, and this work is a continuation of the paper Next-Generation Teleophthalmology. The current research is done on Tier 2 & 3, and the envisaged solution for end-to-end quality assessment is updated."
        },
        ],
      buttons: [
      {
        text: { en: "Know more"},
        url: "https://arxiv.org/pdf/2402.07118"
      }
    ],
   
      workImg:
        lvpei,
    },

  ],

// About Section --------------
aboutParaOne: {
  en: "I am a robotics engineer with expertise in autonomous systems, specialized in high-fidelity simulation and scenario development to improve real-world autonomous robotic testing and deployment. I am particularly passionate about reinforcement learning and imitation learning, exploring control strategies that enable safer, more human-like interactions.",
},
aboutParaTwo: {
  en: "I earned my Bachelor's degree in Artificial Intelligence, currently pursuing a Master's in Robotics at Northeastern University. I also conducted most of my study on traditional AI-DL-based computer vision research projects, and on autonomous robots at the training, testing, and deployment level."
},
aboutParaThree: {
  en: "When I'm not building robots, you can find me building rockets, stargazing, or exploring new cuisines around the city.",
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
        text: { en: "Read Mor"},
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
    media: "nuaero",
    type: 'video',
    title: {
      en: "Aerospace (Rocketry)",
    },
    subtitle: {
      en: "My first model rocket! Hope it doesn't go upside down."
    },
    description: {
      en: "Joined the NUAero club - airframe design team, and designed custom fins for our rocket and eBay using SolidWorks, design and simulation in OpenRocket ",
    },
    buttons: []
  },
  {
    media: "astronomy",
    type: 'video',
    title: {
      en: "Amaeture astronomer",
    },
    subtitle: {
      en: "\"Oh! A comet just passed make a wish fast!! (^^)\"",
    },
    description: {
      en: "Murphy's law doesn't mean that something bad will happen. It means that whatever can happen, will happen",
      
    },
    buttons: []
  }
],


  skills: [
    {
      img: clangIcon,
      para:
        "C, C++, CUDA",
    },
    {
      img: codeIcon,
      para:
        "Python, MATLAB",
    },
    {
      img: RPIIcon,
      para:
        "Arduino, Raspberry Pi, ESP8266, ORIN",
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
        "Isaac Sim, Carla sim",
    },
    {
      img: airplaneIcon,
      para:
        "Rocket design, Model rocketry, Rocket framework",
    },
    
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: {
  en: "Let's chat about robots!",
},
  social: [

    { img: githubIcon, 
      url: "https://github.com/Jayakar72"
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/sai-jayakar-vanam-582310225/",
    },

  ],

  // End Contact Section ---------------
}

export default siteData;
