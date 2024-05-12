import mongoose from "mongoose";


const introSchema = new mongoose.Schema(
  {
    welcomeText: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
});
const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
}); 
const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    require: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Intro = mongoose.model("Intro", introSchema);

const About = mongoose.model("About", aboutSchema);

const Experience = new mongoose.model("Experience", experienceSchema);

const Projects = mongoose.model("Projects ", projectsSchema);
const Contact = mongoose.model("Contact",contactSchema)

// const coursesSchema = new mongoose.Schema(
//     {
//         title:{
//             type:String,
//             required:true
//          } ,
//          description: {
//             type: String,
//             required: true
//          } ,
//          Image: {
//             type: String,
//             require:true
//          },
//          link:{
//             type: String,
//             required: true
//          }
//     }
// )

// const Courses = new mongoose.model("Courses" , coursesSchema)


export { Intro, About, Experience, Projects ,Contact};
