# Manage: Fleet Management System

Manage is a Fleet Management System designed to help fleet managers efficiently manage their vehicle fleet. It provides features for tracking vehicles, scheduling maintenance tasks, providing an overview of the entire fleet, and more.

![Image of Dashboard](https://github.com/timmywimmy95/ECommerce/blob/main/fleet_management/public/readme/Screenshot%202023-05-11%20at%205.50.33%20PM.png?raw=true)

## Technologies Used

- **Next.js**: Next.js is a React framework that allows for server-side rendering, routing, and building static websites. It provides a fast and efficient development experience for building modern web applications.

- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework that offers a set of pre-defined utility classes. It allows for rapid UI development by composing and applying these classes directly in HTML markup.

- **PostgreSQL**: PostgreSQL is a powerful open-source relational database management system. It is used to store and manage the data related to the fleet, including vehicle information, maintenance records, and user details.

- **NextAuth.js**: NextAuth.js is an authentication library for Next.js applications. It provides a simple and flexible way to handle user authentication, including features like login, registration, and session management.

- **Fetch API**: A modern browser API for making HTTP requests. I utilized the Fetch API to communicate with the backend server, retrieving and sending data asynchronously. This allowed for seamless integration between the frontend and backend components of the fleet management system.

- **Chart.js**: Chart.js is a JavaScript library for creating interactive and customizable charts. It is utilized in this project to generate visual reports and data visualizations based on the fleet data.

## Approach Taken
In developing **Manage**, I took an iterative approach to ensure the successful implementation of the desired features and functionality. 

The journey began with exploring **Next.js**, a powerful React framework that offers server-side rendering and an efficient development experience. This choice allowed me to build a performant and dynamic web application that meets the needs of a fleet management service.

One of the crucial aspects of any web application is user authentication and authorization. To address the user authentication and authorisation features, I integrated **NextAuth.js**, a popular authentication library for Next.js applications. With NextAuth.js, I was able to implement secure login and registration functionalities, ensuring that only authorized users can access the fleet management system.

To store and manage the fleet data, I opted for **PostgreSQL**, a robust and reliable open-source relational database management system. This decision allowed me to create the necessary tables for users, vehicles, and servicing records, facilitating efficient data storage and retrieval.

Building on the backend infrastructure, I proceeded to develop the necessary routes for users, vehicles, and servicing operations. This involved handling *CRUD* (Create, Read, Update, Delete) operations, allowing users to add, view, edit, and delete relevant data. By designing and implementing these routes, I established a solid foundation for managing the fleet-related information.

Moving to the frontend, I focused on creating an intuitive and visually appealing user interface. I started by developing the dashboard, which provides users with an overview of key metrics, such as vehicle status, upcoming service dates, and cost analysis.

Additionally, I designed vehicle cards and service cards to display detailed information and enable users to interact with the data effectively.

As the project progressed, I dedicated time to implement the landing page, ensuring a captivating and informative introduction to the fleet management system. 

Finally, I conducted thorough testing and debugging, addressing minor issues and improving the overall user experience.

Throughout the development process, I maintained a flexible and agile approach, regularly refining and enhancing the features based on research and user testing. By adopting this iterative methodology, I aimed to deliver a robust and user-friendly fleet management solution that meets the needs of businesses in efficiently managing their vehicle fleets.

## Further Improvements
In the future, one of the key improvements for the Manage project would be to **scale it to support multiple businesses**. Currently, the system is designed for a single business's utility, but there is a need to expand its capabilities to accommodate multiple businesses accessing the platform. This would involve implementing a **multi-tenant approach**, where businesses can have their own dedicated spaces within the application. 

Additionally, the user roles and access control would need to be revised to provide granular permissions for each business and its respective users. 

This feature would make Manage a versatile and scalable product that is capable of serving the needs of various businesses in the fleet management industry.

## User Stories & Wire Frame
For detailed user stories and wireframes, please refer to the following link: [User Stories and Wireframes](https://www.figma.com/file/agDESxy969nZ2a4DxcmcIv/PROJECT-4-WIRE-FRAME?type=whiteboard&node-id=0%3A1&t=7MGbRV8Xsw1dMGUR-1), **created using Figma**. It will provide a comprehensive overview of the envisioned features and design of the Manage project, allowing for a better understanding of the project's scope and functionality.
## Installation

1. **Clone the repository** on
    [Github](https://github.com/timmywimmy95/ECommerce)

2. **Install dependencies** by running ```npm install```.
3. **Configure the database** connection in the ```.env``` file.
4. **Run the development** server using ```npm run dev```.
5. **Access the application** in your browser at ```http://localhost:3000```.

Feel free to explore the codebase and customize the application to suit your specific fleet management needs.


