import './style.css' 
import { changeTheme } from "../my-portfolio/components/Navbar/Navbar.js";
import { linkPage } from "../my-portfolio/utils/linkPage.js";
import { Navbar } from "../my-portfolio/components/Navbar/Navbar.js";
import { Footer } from "../my-portfolio/components/Footer/Footer.js";
import { Home } from "../my-portfolio/pages/Home/Home.js";
import { Projects } from "../my-portfolio/pages/Projects/Projects.js";
import { Divider } from "../my-portfolio/components/Divider/Divider.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());