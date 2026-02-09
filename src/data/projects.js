import todos1 from "../assets/projects/todos/todos1.png";
import swapi from "../assets/projects/swapi/swapi.png";
import booking1 from "../assets/projects/booking/booking1.png"
import booking2 from "../assets/projects/booking/booking2.png"

export const projects = [
  {
    id: "todo-app",
    title: "Todo App",
    short: "Task manager with Redux Toolkit",
    long: `A full-featured task management application built with React and Redux Saga.The app allows users to create, edit, complete, and delete tasks with a smoothand responsive UI.

          State management is handled using Redux, while Redux Saga is used to manage asynchronous logic and side effects, ensuring a clear separation between UI and business logic. The project demonstrates practical use of scalable state architecture, clean component structure, and predictable data flow.
          `,
    stack: ["React", "Redux Toolkit", "Redux-Saga"],
    screenshots: [todos1],
    demo: "https://todo-app-with-redux-saga.vercel.app/",
    github:
      "https://github.com/tanyagrr/frontend-pro-homework/tree/main/homework31",
  },
  {
    id: "swapi",
    title: "SWAPI Viewer",
    short: "Star Wars API explorer",
    long: `An interactive application for exploring data from the Star Wars API (SWAPI), built with React and Redux Thunk. Users can browse and view detailed information about characters fetched from a public REST API.

          Redux Thunk is used to handle asynchronous API requests and manage loading and error states. This project focuses on API integration, async data handling, and building a responsive UI that reacts to changing application state.
          `,
    stack: ["React", "REST API", "Redux-Thunk"],
    screenshots: [swapi],
    demo: "https://swapi-with-redux-thunk.vercel.app/",
    github:
      "https://github.com/tanyagrr/frontend-pro-homework/tree/main/homework30",
  },
  {
    id: "booking",
    title: "Booking App",
    short: "An app to browse and book hotels",
    long: `A booking application built with React, Redux Toolkit, and Redux Saga, allowing users to search for hotels by destination, choose travel dates, and view available accommodations. The app features a structured search flow with form validation and URL-based navigation.

          Formik is used to manage form state and validation, while Redux Saga handles asynchronous API requests and side effects such as fetching destinations and filtering hotels. The user interface is built with Material UI, focusing on a clean layout and responsive design. The project also includes unit tests written with Vitest, helping to practice testing component behavior and async logic.
          `,
    stack: ["React", "Redux Toolkit", "Redux-Saga", "MUI", "Vitest"],
    screenshots: [booking1, booking2],
    demo: "https://booking-app-two-smoky.vercel.app/",
    github:
      "https://github.com/tanyagrr/booking-app",
  },
];