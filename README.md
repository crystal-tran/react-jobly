<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Jobly 💼 </h1>

  <p align="center">
    Centralize your job search experience with a user-friendly platform.
    <br />
    <br />
    <a href="https://jobly.crystaltran.dev/">View Demo</a>
    ·
    <a href="https://github.com/crystal-tran/express-jobly">Backend Repo</a>
    <br />
    <br />
     <p>username: <b>guest</b> | demo password: <b>password</b></p>
    <img src="https://github.com/crystal-tran/personal-portfolio-website/blob/main/static/media/jobly-demo-gif.gif" alt="jobly-demo">

   
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Learnings</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

  <h1 align="left">About the Project</h1>
<!--   <p align="left">
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
  </p> -->
Jobly is a full-stack application where users can register, manage their profile, browse and search hiring companies and jobs, as well as apply to jobs. This project was built in January 2024 during a 4-day sprint at <a href="https://github.com/rithmschool">Rithm School</a>. 
<br />
<br />
Application was built with a React frontend, Express backend, and Postgres database. Express backend implemented with test-driven development (TDD). Frontend and backend hosted on <a href="https://render.com/">Render</a> and database hosted on <a href="https://www.elephantsql.com/">ElephantSQL</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Learnings
Frontend:
- React component hierarchy design
- Separation of concerns between logic and UI displays
- React state and context management
- Token retrieval via localStorage
- Building protective routes via React Router
- Creating a helper API to centralize data requests

Backend:
- Authentication and authorization with middleware and JWT tokens
- Protection against SQL injection attacks via parameterized queries
- Designing RESTful APIs and database schemas
- Form validation with JSON schemas
- Test-driven development and coverage
- Bcrypt hashing


## Component Hierarchy Design
![Imgur Image](https://imgur.com/V657tUV.jpg)


### Built With

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![Fetch](https://img.shields.io/badge/-Fetch%20API-4285F4?logo=webcomponentsdotorg&logoColor=white&style=flat)
* ![ElephantSQL](https://img.shields.io/badge/-ElephantSQL-336791?logo=elephantsql&logoColor=white&style=flat)
* ![Render](https://img.shields.io/badge/-Render-333333?logo=render&logoColor=white&style=flat)
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED  -->

## Getting Started

To get a local copy up and running follow these steps.

1. Clone frontend and back repos
   ```sh
   git clone https://github.com/crystal-tran/react-jobly-frontend.git
   git clone https://github.com/crystal-tran/express-jobly-backend.git
   ```
2. Create and seed database
   ```sh
   createdb jobly
   cd express-jobly-backend
   psql jobly < jobly.sql
   ```
3. Install backend dependencies and run backend server
   ```sh
   cd express-jobly-backend
   npm install
   npm start
   ```
4. In a separate terminal, install frontend dependencies and run frontend server
   ```sh
   cd react-jobly-frontend
   npm install
   npm start
   ```
5. View on <a href="http://localhost:3000">http://localhost:3000</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Rithm School](https://github.com/rithmschool)
* [Nick Orsi](https://github.com/nickorsi) : Frontend Contributor
* [Veronica Ni](https://github.com/veronicani) : Backend Contributor
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Markdown-Badges](https://github.com/Ileriayo/markdown-badges)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

