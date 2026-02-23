import todos1 from "../assets/projects/todos/todos1.png";
import swapi from "../assets/projects/swapi/swapi.png";
import booking1 from "../assets/projects/booking/booking1.png";
import booking2 from "../assets/projects/booking/booking2.png";
import vin1 from "../assets/projects/vin-decoder/vin1.png";

export const projects = [
  {
    id: "todo-app",
    title: "Todo App",
    short: "Task manager with Redux Toolkit",
    long: `A full-featured task management application built with React and Redux Saga. The app allows users to create, edit, complete, and delete tasks with a smooth and responsive UI.

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
    stack: ["React", "RTK", "Redux-Saga", "MUI", "Vitest"],
    screenshots: [booking1, booking2],
    demo: "https://booking-app-two-smoky.vercel.app/",
    github:
      "https://github.com/tanyagrr/booking-app",
  },
  {
    id: "vin-decoder",
    title: "VIN Decoder",
    short: "An app to decode vehicle identification numbers",
    long: `A VIN Decoder application built with React and Formik, allowing users to decode vehicle information by entering a 17-character VIN. The app validates user input, fetches vehicle data from an external API, and displays structured vehicle details in a clean and user-friendly layout. The application also stores recent searches locally, enabling users to quickly re-run previous VIN lookups.

          The UI focuses on simplicity and clarity, with conditional rendering to handle loading states, empty results, and error scenarios gracefully. The project includes unit and component tests written with Vitest and React Testing Library, covering validation logic, form submission behavior, and API interaction to ensure reliability and maintainability.
          `,
    stack: ["React", "Formik", "Redux Router", "Vitest"],
    screenshots: [vin1],
    demo: "https://vin-test-task.vercel.app/",
    github:
      "https://github.com/tanyagrr/vin-test-task",
  },
];