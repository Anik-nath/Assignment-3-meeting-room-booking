# Meeting-room-booking-system

[Live URL](.....upcoming.....)

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
  - [Admin Features](#admin-features)
  - [User Features](#user-features)
  - [Validation and Error Handling](#validation-and-error-handling)
  - [Security Features](#security-features)
  - [Additional Features](#additional-features)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
- [All Routes](#all-routes)

## About the Project

The goal of this project is to create a web application that will make it easier for co-working space administrators and users to handle meeting room reservations.

## Features

### Admin Features

- **Room Management**: Create, update, delete rooms with details (name, number, floor, capacity, price, amenities)
- **Slot Management**: Create, update, delete time slots (date, start time, end time) for rooms.
- **Booking Management:**: View, update, cancel all bookings.
- **User Management**: View, create, update, delete user profiles and manage roles.

### User Features

- **Booking Creation**:
  - Browse rooms and view available slots.
  - Create bookings by selecting time slots and rooms.
  - Auto-calculate total amount based on slots.
- **Booking Management**: View, update, cancel user bookings.

### Validation and Error Handling

- **Validation**: : Ensure non-overlapping slots, valid room details, and user inputs.
- **Error Handling**: Provide informative error messages for conflicts and validation issues.

### Security Features

- **Authentication**: User login, registration, token-based session management.
- **Authorization**: Role-based access control for admin/user actions.

### Additional Features

- **Feature 1**: Booking confirmations, updates, cancellations
- **Feature 2**: Efficient database operations
- **Feature 3**: Handle increasing users, rooms, slots, and bookings efficiently

- Additional features as necessary.

## Technology Stack

- **Backend**:

  - Node.js
  - Express
  - Mongoose
  - TypeScript

- **Database**:

  - MongoDB

- **Authentication**:

  - JSON Web Tokens (JWT)

- **Development & Testing**:

  - Postman

- **Utilities**:

  - http-status
  - zod

- **Development Environment**:
  - Visual Studio Code (VS Code)

## How to run this project in your local machine

1. **Clone the repository**

   ```
   git clone https://github.com/Anik-nath/Assignment-3-meeting-room-booking
   cd repository
   ```

2. **Install dependencies**
   ```
   npm install
   ```
3. **Set up environment variables**
   - Make .env file in src directory
   - Edit the .env file.
   - Example:
   ```
   PORT=5000
   DATABASEURL=[your mongodb connectiong url here]
   ```
   - Ensure MongoDB is running locally
4. **Run**
   ```
   npm run start:dev
   ```
5. **Show live**
   copy and paste this link in browser or you can use postman
   ```
   http://localhost:5000/
   ```
6. **All routes to show**
   - /api/auth/signup
   - /api/auth/login
   - /api/rooms (for create rooms and fetch all rooms)
   - /api/rooms/:id (Fetch specific booking data , Delete and update)
   - /api/slots
   - /api/slots/availability
   - /api/slots/availability?date=2024-06-15&roomId=60d9c4e4f3b4b544b8b8d1c5
   - /api/bookings (give booking and fetch all bookings)
   - /api/my-bookings
   - /api/bookings/:id (for update and delete)
