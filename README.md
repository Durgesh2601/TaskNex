# TaskNex Project

TaskNex is a simple task management application with a frontend and backend built using Next.js and Node.js with MongoDB as the database.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
  - [Backend Configuration](#backend-configuration)
  - [Frontend Configuration](#frontend-configuration)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tasknex.git

   ```

2. Navigate to the project folder:

   ```bash
   cd tasknex

   ```

3. Install dependencies for both frontend and backend:

```bash
# Install backend dependencies
cd tasknex-backend
npm install

# Install frontend dependencies
cd ../tasknex-frontend
npm install

```

### Project Structure

The project is structured into two main folders:

`tasknex-backend`: Contains the backend code built with Node.js and Express.
`tasknex-frontend`: Contains the frontend code built with React.js and AntDesign.

### Configuration

#### Backend Configuration

1. Create a .env file in the tasknex-backend folder.

2. Add the following configurations to the .env file:

```PORT=3001
MONGODB_URI=mongodb://localhost:27017/tasknex
```
(Adjust the PORT and MONGODB_URI values as needed)

### Running the Application

1. Start the backend server:

# From the tasknex-backend folder
npm start

(This will start the backend server on the specified port)

2. Start the frontend development server:

```# From the tasknex-frontend folder
npm run dev
```

(This will start the frontend development server. Open your browser and navigate to http://localhost:3000 to access the application)

And all set!!