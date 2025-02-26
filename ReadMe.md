# Teach Me

My project is focused on developing a user-friendly website that connects students with experienced teachers for personalized subject tutoring. The platform will make it easy for students to find qualified teachers who can help them with specific subjects they are interested in. Whether it's math, science, language, or any other subject, the platform will match students with the right teachers who can provide one-on-one guidance and support. The goal is to create a convenient and effective way for students to receive personalized help and enhance their learning experience.

## Features

-Advanced Filtering: Students can easily find teachers by applying multiple filters based on preferences and factors such as subject, availability,location, and expertise.

-Booking, Reviews, and Ratings: Students can book teachers, leave reviews, and provide ratings to help others make informed choices.

-Teacher Registration and Service Provision: Teachers can register, create profiles, and offer their services, managing availability and rates for different teaching formats.

## Coming soon

Real-time Communication: The platform will facilitate seamless communication between students and teachers through a built-in messaging system. This feature enables students to ask questions, seek clarification, and receive timely feedback from their teachers. It promotes interactive and effective learning interactions.

## Demo

<img width="153" alt="image" src="https://github.com/aiamakhruka/TeachMe-Server/assets/111688154/6228a3ce-719a-495e-8e10-91fb94b01555">
<img width="229" alt="image" src="https://github.com/aiamakhruka/TeachMe-Server/assets/111688154/a4ba2070-27f0-4615-832d-941330148abb">

<img width="232" alt="image" src="https://github.com/aiamakhruka/TeachMe-Server/assets/111688154/af617318-4eb8-48f3-b653-52e30ac6e980">

<img width="231" alt="image" src="https://github.com/aiamakhruka/TeachMe-Server/assets/111688154/a980e054-a003-4f96-97b2-d8e5a6db89e5">

<img width="176" alt="image" src="https://github.com/aiamakhruka/TeachMe-Server/assets/111688154/813acc11-89c3-406f-9ff9-b3ecc8069b36">

<img width="960" alt="image" src="https://github.com/aiamakhruka/TeachMe-Server/assets/111688154/f952261a-3a64-48a1-9f90-6cb7edc5d739">

# Installation

Follow these steps to run a local instance of Ribbon:  
(You'll need node, npm, and MySQL already installed.)

1. Clone or download this repo.

#### Set up the backend

2. Create a new database in MySQL called `ribbon`.
3. Install server dependencies:

   Run `npm install` from inside the server directory.

   ```bash
   $ cd server
   $ npm install
   ```

4. Run migrations
   ```bash
   $ npm run migrate
   ```
5. Run seeds
   ```bash
   $ npm run seed
   ```
6. Set environment variables:

   Rename `.env_sample` to `.env` and change placeholder values with your own.

   ```shell
   PORT=<PORT_NUMER>
   JWT_SECRET=<SECRET KEY>
   DB_HOST=<HOST ADDRESS>
   DB_USER=<YOUR DB USERNAME>
   DB_PSWD=<YOUR DB PASSWORD>
   ```

7. Start the server:
   ```bash
   $ node index.js
   ```

#### Set up the frontend

8. Install client dependencies:

   Run `npm install` from inside the client directory.

   ```bash
   $ cd ../client
   $ npm install
   ```

9. Set environment variables:

   Rename `.env_sample` to `.env` and change the placeholder value to the port you set for the server.

   ```shell
   REACT_APP_API_URL=http://localhost:<PORT SET IN /server/.env>
   ```

10. Start the React app:
    ```bash
    $ npm start
    ```
