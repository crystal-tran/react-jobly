<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Jobly 💼 </h1>

  <p align="center">
    Centralize your job search experience with a user-friendly platform, bringing all the jobs together in one convenient place.
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
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
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

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Rithm School](https://github.com/rithmschool)
* [Nick Orsi](https://github.com/nickorsi) : Frontend Contributor
* [Veronica Ni](https://github.com/veronicani) : Backend Contributor
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Markdown-Badges](https://github.com/Ileriayo/markdown-badges)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

