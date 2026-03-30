import PasswordGenerator from "./Password";
import ProductMap from "../Learning/Day2/Products/ProductView";
import Day2 from "../Learning/Day2/Day2";

import MovieBooking from "../Learning/Day3/MovieView";
import ClassComponetStateComponent from "../Learning/Day4/Day4";
import UseState from "../Learning/Day5/UseState";
import UseStateExample from "../Learning/Day6/day6";
import UseEffect from "../Learning/Day7/day7";
import TernaryOperator from "../Learning/Day8/Day8";
import StudentProps from "../Learning/Day2/Student";
import Home from "../Home/Home";
import Day9 from "../Learning/HOC/Day9";
import Todo from "../Projects/Todo/TodoIndex";
import Api from "../Learning/Api/Api";
import Mounting from "../Learning/ReactLifeCycle/LifeCycle";
export const routingdata = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
    description: "",
    nav: true,
    navName: "Home",
  },
  {
    path: "/passwordgenerator",
    name: "Password Generator",
    element: <PasswordGenerator />,
    description: "",
    nav: false,
  },
  {
    path: "/studentprop",
    name: "Studdent Props",
    element: <StudentProps />,
    description: "",
    nav: false,
  },
  {
    path: "/productmap",
    name: "Product Map ",
    element: <ProductMap />,
    description: "",
    nav: true,
    navName: "Product View",
  },
  {
    path: "/moviebooking",
    name: "Movie Booking",
    element: <MovieBooking />,
    description: "",
    nav: true,
    navName: "Movie Booking",
  },
  {
    path: "/daytwo",
    name: "Class Component State Componet",
    element: <Day2 />,
    description: "",
    nav: true,
    navName: "Day 2",
  },
  {
    path: "/classcomponentstatecomponent",
    name: "Class Component State Componet",
    element: <ClassComponetStateComponent />,
    description: "",
    nav: true,
    navName: "Day 4",
  },
  {
    path: "/usestate",
    name: "Use State",
    element: <UseState />,
    description: "",
    nav: true,
    navName: "Day 5",
  },
  {
    path: "/usestateexample",
    name: "Use State Example",
    element: <UseStateExample />,
    description: "",
    nav: true,
    navName: "Day 6",
  },
  {
    path: "/useeffect",
    name: "Use Effect Example",
    element: <UseEffect />,
    description: "",
    nav: true,
    navName: "Day 7",
  },
  {
    path: "/ternaryoperator",
    name: "Ternary  Operator",
    element: <TernaryOperator />,
    description: "",
    nav: true,
    navName: "Day 8",
  },
  {
    path: "/day9",
    name: "Ternary  Operator",
    element: <Day9 />,
    description: "",
    nav: true,
    navName: "Day 9",
  },
  {
    path: "/todo",
    name: "TO DO",
    element: <Todo />,
    description: "",
    nav: true,
    navName: "Todo",
  },
  {
    path: "/api",
    name: "Api",
    element: <Api />,
    description: "",
    nav: true,
    navName: "Api Calling ",
  },
  {
    path: "/mounting",
    name: "Mounting ",
    element: <Mounting />,
    description: "",
    nav: true,
    navName: "Mounting ",
  },
];
