# AutoServ

<p align="center"><img src="https://github.com/bawejahritik/AutoServ/blob/main/front-end/src/assets/images/logo.jpeg"></p>
<p>AutoServ is a user-friendly Automobile Service Management system which provides efficient means to schedule, track, manage and renumerate for motor services.</p> 
<p>A user can schedule Interim, Full and Major vehicle servicing by providing their details and choosing preferred date. The user can request a pickup/dropff for their vehicle. AutoServ provides seamless payment for requesting pickup and drop service for vehicles using Stripe. The user can reschedule a service appointment to a different date and the user can cancel a scheduled appointment.</p>
<p>With AutoServ, clients can easily manage their service appointment bookings on the go.</p>

## Project Demo

https://user-images.githubusercontent.com/42437530/164353532-a7e4994e-651c-4bfb-b5bd-98218dcaccc9.mp4

## Cypress Test Video

https://user-images.githubusercontent.com/42437530/164365546-599fe64d-7c0b-4c7f-ba5e-73fff6df5b4b.mp4

## Backend Unit Test Video

https://user-images.githubusercontent.com/42437530/164364127-d3b0b3e1-7819-4ad2-a167-8ce13d08b371.mp4

## API Documentation

Project Wiki: <em>https://github.com/bawejahritik/AutoServ/wiki/APIs---Documentation</em>

## Project Board

Sprint wise projects: <em>https://github.com/bawejahritik/AutoServ/projects</em>

## Sprint 4 Deliverables

[Sprint 4](https://github.com/bawejahritik/AutoServ/blob/main/sprint4.md)


--------
### :car: Installation
```
//Project clone
git clone https://github.com/bawejahritik/AutoServ.git

//Install npm packages
npm install
npm start

//Set up backend
cd server
start server.exe

//Run frontend
cd front-end
ng serve --open
```

### :car: Running Tests
```

//Frontend cypress tests
npm install cypress
cd cypress
cypress run

//Backend unit tests
start test.bat
```

## :car: Contributors

| Name | GitHub ID |
|------|-----------|
| Hritik Baweja | bawejahritik |
| Raghav Soni | raghavsoni114 |
| Amisha Singhal | amisinghal |

<dl>
  <dt>FrontEnd</dt>
  <dd><em>
    <li>Raghav Soni</li>
    <li>Amisha Singhal</li>
  </dd>
  <dt>BackEnd</dt>
  <dd>
    <li>Hritik Baweja</li>
    </em>
  </dd>
</dl>
 
## :car: Tech Stack
<ul>
  <li>Frontend: Angular 11 (https://angular.io)</li>
  <li>Angular Material UI (https://material.angular.io/)</li>
  <li>Backend: Go (https://go.dev)</li>
  <li>ORM Library for Golang: GORM (https://gorm.io/)</li>
  <li>Request Handler: gorilla/mux (https://github.com/gorilla/mux)</li>
  <li>Testing:
    <ul>
      <li>Cypress (https://www.cypress.io/)</li>
      <li>Postman (https://www.postman.com/)</li>
      <li>Golang testing framework (https://pkg.go.dev/testing)</li>
    </ul>
  </li>
  <li>Database: SQLite (https://www.sqlite.org)</li>
</ul>

## Components

### :car: HomePage

<img src="https://github.com/bawejahritik/AutoServ/blob/main/Demo/Frontend_HomePage.gif?raw=true">

### :car: Service Scheduling

<img src="https://github.com/bawejahritik/AutoServ/blob/main/Demo/Frontend_ScheduleComponent_Demo.gif?raw=true">

### :car: Service Tracking

<img src="https://github.com/bawejahritik/AutoServ/blob/main/Demo/ServiceTracking.gif">

### :car: Service Rescheduling 

<img src="https://github.com/bawejahritik/AutoServ/blob/main/Demo/RescheduleComponent_Demo.gif">

### :car: Service Cancelation 

<img src="https://github.com/bawejahritik/AutoServ/blob/main/Demo/CancelComponent_Demo.gif">

### :car: Service Page

<img src="https://github.com/bawejahritik/AutoServ/blob/main/Demo/Frontend_ServicePage.png" height="348px" width="600px">

### :car: Login Page

<img src="https://github.com/bawejahritik/AutoServ/blob/main/Demo/LoginComponent_Demo.gif">

### :car: SignUp Page

<img src="https://github.com/bawejahritik/AutoServ/blob/main/Demo/SignUpComponent_Demo.gif">
