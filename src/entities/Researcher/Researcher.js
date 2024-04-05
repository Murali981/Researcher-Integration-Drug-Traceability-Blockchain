// import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// // core components
// import Navbar from "../../main_dashboard/components/Navbars/Navbar";
// import Sidebar from "../../main_dashboard/components/Sidebar/Sidebar.js";

// import styles from "../../main_dashboard/assets/jss/material-dashboard-react/layouts/adminStyle.js";
// import bgImage from "../../main_dashboard/assets/img/sidebar-2.jpg";
// import logo from "../../main_dashboard/assets/img/reactlogo.png";

// import Dashboard from "@material-ui/icons/Dashboard";
// import Person from "@material-ui/icons/Person";
// import LocationOn from "@material-ui/icons/LocationOn";
// // import AddItem from "@material-ui/icons/AddBox";
// import ViewItem from "@material-ui/icons/ViewList";
// import ViewTrans from "@material-ui/icons/Visibility";

// // import CreateMedicine from './CreateMedicine';
// // import RequestProduct from './RequestProduct';
// import DistributorReceiveProduct from "./DistributorReceiveProduct";
// import ViewResponses from "../Events/ViewResponses";
// // import ViewRequests from '../Events/ViewRequests';
// import RequestProductDistributor from "./RequestProduct";
// import DistributorViewReceivedMedicines from "./DistributorViewReceivedMedicines";
// import DistributorMedicineInfo from "./DistributorMedicineInfo";
// // import ViewTransactions from '../Transactions/ViewTransactions';
// import ViewRequests from "../Events/ViewRequests";
// import ViewTransactions from "../Transactions/ViewTransactions";

// import DistributorDashboard from "../../main_dashboard/views/Dashboard/Dashboard";
// import UserProfile from "../../main_dashboard/views/UserProfile/UserProfile";
// import Maps from "../../main_dashboard/views/Maps/Maps.js";

// // import routes from './ownerRoutes.js';

// let ps;

// const routes = [
//   {
//     path: "/request-product",
//     name: "Request Product",
//     icon: ViewItem,
//     component: RequestProductDistributor,
//     layout: "/distributor",
//   },
//   {
//     path: "/view-responses",
//     name: "View Response",
//     icon: ViewTrans,
//     component: ViewResponses,
//     layout: "/distributor",
//   },
//   {
//     path: "/receive-medicine",
//     name: "Receive Medicine",
//     icon: ViewTrans,
//     component: DistributorReceiveProduct,
//     layout: "/distributor",
//   },
//   {
//     path: "/view-medicines",
//     name: "View Medicines",
//     icon: ViewItem,
//     component: DistributorViewReceivedMedicines,
//     layout: "/distributor",
//   },
// ];

// const useStyles = makeStyles(styles);

// export default function Researcher({ ...rest }) {
//   const switchRoutes = (
//     <Switch>
//       {routes.map((prop, key) => {
//         if (prop.layout === "/distributor") {
//           return (
//             <Route
//               path={prop.layout + prop.path}
//               render={() => (
//                 <prop.component
//                   account={rest.account}
//                   supplyChain={rest.supplyChain}
//                   web3={rest.web3}
//                 />
//               )}
//               key={key}
//             />
//           );
//         }
//         return null;
//       })}

//       <Route
//         exact
//         path="/distributor/view-medicine/:id"
//         component={DistributorMedicineInfo}
//       />
//       <Route
//         exact
//         path="/distributor/view-request/:id"
//         component={ViewRequests}
//       />
//       <Route
//         exact
//         path="/distributor/view-transaction/:id"
//         component={ViewTransactions}
//       />
//       <Redirect from="/distributor" to="/distributor/dashboard" />
//     </Switch>
//   );
//   const classes = useStyles();
//   const mainPanel = React.createRef();

//   const [image, setImage] = React.useState(bgImage);
//   const [color, setColor] = React.useState("blue");
//   const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const handleImageClick = (image) => {
//     setImage(image);
//   };
//   const handleColorClick = (color) => {
//     setColor(color);
//   };
//   const handleFixedClick = () => {
//     if (fixedClasses === "dropdown") {
//       setFixedClasses("dropdown show");
//     } else {
//       setFixedClasses("dropdown");
//     }
//   };
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//   const getRoute = () => {
//     return window.location.pathname !== "/distributor/maps";
//   };
//   const resizeFunction = () => {
//     if (window.innerWidth >= 960) {
//       setMobileOpen(false);
//     }
//   };

//   React.useEffect(() => {
//     if (navigator.platform.indexOf("Win") > -1) {
//       ps = new PerfectScrollbar(mainPanel.current, {
//         suppressScrollX: true,
//         suppressScrollY: false,
//       });
//       document.body.style.overflow = "hidden";
//     }
//     window.addEventListener("resize", resizeFunction);

//     return function cleanup() {
//       if (navigator.platform.indexOf("Win") > -1) {
//         ps.destroy();
//       }
//       window.removeEventListener("resize", resizeFunction);
//     };
//   }, [mainPanel]);

//   return (
//     <div className={classes.wrapper}>
//       <Sidebar
//         routes={routes}
//         logoText={"Distributor"}
//         logo={logo}
//         image={image}
//         handleDrawerToggle={handleDrawerToggle}
//         open={mobileOpen}
//         color={color}
//         {...rest}
//       />
//       <div className={classes.mainPanel} ref={mainPanel}>
//         <Navbar
//           routes={routes}
//           handleDrawerToggle={handleDrawerToggle}
//           {...rest}
//         />

//         {getRoute() ? (
//           <div className={classes.content}>
//             <div className={classes.container}>{switchRoutes}</div>
//           </div>
//         ) : (
//           <div className={classes.map}>{switchRoutes}</div>
//         )}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "../../main_dashboard/components/Navbars/Navbar";
import Sidebar from "../../main_dashboard/components/Sidebar/Sidebar.js";

import styles from "../../main_dashboard/assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "../../main_dashboard/assets/img/sidebar-2.jpg";
import logo from "../../main_dashboard/assets/img/reactlogo.png";

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import ViewItem from "@material-ui/icons/ViewList";
import ViewTrans from "@material-ui/icons/Visibility";

// import ViewReceivedMedicine from "./ViewReceivedMedicine";
// import WholesalerReceiveProduct from "./ReceiveProduct";
// import RequestProductWholesaler from "./RequestProduct";
// import TransferMedicine from "./TransferMedicine";
// import ViewResponses from "../Events/ViewResponses";
// import WholesalerMedicineInfo from "./WholesalerMedicineInfo";

// import ViewRequests from "../Events/ViewRequests";
import ViewTransactions from "../Transactions/ViewTransactions";

// import WholesalerDashboard from "../../main_dashboard/views/Dashboard/Dashboard";
// import UserProfile from "../../main_dashboard/views/UserProfile/UserProfile";
// import Maps from "../../main_dashboard/views/Maps/Maps.js";

import GetPatientSideEffects from "./GetPatientSideEffects.js";

import GetManufacturerLogs from "./GetManufacturerLogs.js";

import GetDistributorLogs from "./GetDistributorLogs.js";

import FetchResult from "./FetchResult.js";

import SubmitDrugRecall from "./SubmitDrugRecall.js";

import GetUniqueKey from "./GetUniqueKey.js";

// import ViewMedicines from "./ViewMedicines.js";

// import routes from './ownerRoutes.js';

let ps;

const routes = [
  {
    path: "/get-side-effects",
    name: "Get Side Effects",
    icon: ViewItem,
    component: GetPatientSideEffects,
    layout: "/researcher",
  },
  {
    path: "/get-manufacturer-logs",
    name: "Get Manufacturer logs",
    icon: ViewItem,
    component: GetManufacturerLogs,
    layout: "/researcher",
  },
  {
    path: "/get-distributor-logs",
    name: "Get Distributor logs",
    icon: ViewItem,
    component: GetDistributorLogs,
    layout: "/researcher",
  },
  {
    path: "/fetch-result",
    name: "Fetch Result logs",
    icon: ViewItem,
    component: FetchResult,
    layout: "/researcher",
  },
  {
    path: "/submit-drug-recall",
    name: "Submit drug recall",
    icon: ViewItem,
    component: SubmitDrugRecall,
    layout: "/researcher",
  },
  {
    path: "/get-unique-key",
    name: "Get unique key",
    icon: ViewItem,
    component: GetUniqueKey,
    layout: "/researcher",
  },
  // {
  //   path: "/view-medicines",
  //   name: "View Medicines",
  //   icon: ViewItem,
  //   component: ViewMedicines,
  //   layout: "/researcher",
  // },
];

const useStyles = makeStyles(styles);

export default function Researcher({ ...rest }) {
  console.log("hello");
  const switchRoutes = (
    <Switch>
      {routes.map((prop, key) => {
        if (prop.layout === "/researcher") {
          return (
            <Route
              path={prop.layout + prop.path}
              render={() => (
                <prop.component
                  account={rest.account}
                  supplyChain={rest.supplyChain}
                  web3={rest.web3}
                />
              )}
              key={key}
            />
          );
        }
        return null;
      })}
      {/* <Route
        exact
        path="/researcher/view-medicine/:id"
        component={MedicineInfo}
      /> */}
      {/* <Route
        exact
        path="/wholesaler/view-medicine/:id"
        component={WholesalerMedicineInfo}
      />
      <Route
        exact
        path="/wholesaler/view-request/:id"
        component={ViewRequests}
      />
      <Route
        exact
        path="/wholesaler/view-transaction/:id"
        component={ViewTransactions}
      /> */}
      {/* <Redirect from="/researcher" to="/researcher/dashboard" /> */}
    </Switch>
  );
  const classes = useStyles();
  const mainPanel = React.createRef();

  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (image) => {
    setImage(image);
  };
  const handleColorClick = (color) => {
    setColor(color);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/patient/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText={"Researcher"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />

        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
      </div>
    </div>
  );
}
