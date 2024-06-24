import { changeTheme } from "./components/Navbar/Navbar.js";
import { linkPage } from "./utils/linkPage.js";
import { Navbar } from "./components/Navbar/Navbar.js";
import { Footer } from "./components/Footer/Footer.js";
import { Home } from "./pages/Home/Home.js";
import { Projects } from "./pages/Projects/Projects.js";
import { Divider } from "./components/Divider/Divider.js";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());