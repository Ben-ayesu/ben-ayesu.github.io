import {
  faJsSquare,
  faReact,
  faPython,
  faHtml5,
  faCss3Alt,
  faSass,
  faNodeJs,
  faJava,
  faGitAlt,
  faAndroid,
  faConfluence,
  faJira,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faToolbox,
  faPeopleGroup,
  faFileCode,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const getIconForSkill = (skillName: string) => {
  switch (skillName) {
    case "HTML":
      return faHtml5;
    case "CSS":
      return faCss3Alt;
    case "Sass":
      return faSass;
    case "JavaScript":
    case "Typescript":
      return faJsSquare;
    case "React JS":
      return faReact;
    case "Python":
      return faPython;
    case "Node.js":
      return faNodeJs;
    case "Java":
      return faJava;
    case "Kotlin":
    case "Google Generative AI":
    case "IntelliJ":
    case "Android Studio":
      return faFileCode;
    case "MySQL":
    case "RESTful APIs":
      return faDatabase;
    case "Jetpack Compose":
      return faAndroid;
    case "Git":
      return faGitAlt;
    case "Testing":
    case "Google Cloud":
      return faToolbox;
    case "Confluence":
      return faConfluence;
    case "Jira":
      return faJira;
    case "Agile":
      return faPeopleGroup;
    default:
      return faQuestionCircle;
  }
};

export default getIconForSkill;
