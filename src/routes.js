/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Settings from "views/examples/Settings";
import Text from "views/examples/Text";
import Image from "views/examples/Image";
import Elements from "views/examples/Elements";
import Subtitles from "views/examples/Subtitles";
var routes = [
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: Index,
  //   layout: "/admin",
  // },
  ///////////////////////////////
  {
    path: "/settings",
    name: "Settings",
    icon: "fas fa-cogs text-blue",
    component: Settings,
    layout: "/admin",
  },
  {
    path: "/text",
    name: "Text",
    icon: "far fa-file-alt text-orange",
    component: Text,
    layout: "/admin",
  },
  {
    path: "/image",
    name: "Image",
    icon: "far fa-image text-yellow",
    component: Image,
    layout: "/admin",
  },
  {
    path: "/elements",
    name: "Elements",
    icon: "fa fa-puzzle-piece text-red",
    component: Elements,
    layout: "/admin",
  },
  {
    path: "/subtitles",
    name: "Subtitles",
    icon: "fa fa-tasks text-info",
    component: Subtitles,
    layout: "/admin",
  },
  ////////////////////////////////////

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;
