# User Dashboard and Video Management React App

This is a React web application that allows users to manage their user profile, view their recent videos, and manage collaborators. The app uses libraries such as @mui/material for the UI kit, iconsax-react for Figma icons, and styled-components for styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Installation

To get started with this project, follow these steps:

- Clone the repository to your local machine:

```sh
git clone https://github.com/Ameendarwan/Video-Management.git
```

- Navigate to the project directory:

```sh
 cd ameen-frontend-challenge
```

- Install the project dependencies:

```sh
  npm install
```

### Usage

- After installing the dependencies, you can start the development server by running:

```sh
  npm start
```

- The application should now be running at http://localhost:3000. You can access it through your web browser.

### Features

- User Profile Overview
- Displays the user's name and email.
- Includes a profile picture of the user.
- Retrieves user profile information from predefined data.
- Recent Videos Section
- Implements a section to show the user's recently created videos.
- Includes a thumbnail, title, and creation date for each video.
- Provides options to add new collaborators via a demonstration form

### Folder Structure

- The project folder structure is organized as follows:
  ```
  ├── public/ - Public assets and HTML template.
  └── src/ - Contains the application source code./
    ├── assets/ - Assets such as images, fonts, or any non-component files.
    ├── components/ - React components for different sections of the app.
    ├── containers/ - Page components that represent different views or routes.
    ├── routes/ - Routing configuration and components.
    ├── styles/ - Styled-components styles.
    ├── theme/ - Theme configuration files.
    ├── utils/ - Utility functions or helper modules.
    ├── App.js - Contain Application routes.
    ├── index.js - Main application component.
  ├── package.json - Project dependencies and scripts.
  └── README.md - This readme file.
  ```

### Technologies Used

- React
- @mui/material
- iconsax-react
- styled-components
