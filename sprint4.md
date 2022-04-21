# Sprint 4

# Front-end

## Accomplishments

### Reschedule Service Functionality
<p><em>User can enter Tracking ID to reschedule service appointment to new prefered date. New date for service appointment is also updated in server.</em><p>
<p><img src="https://user-images.githubusercontent.com/42437530/164335333-04c04ff3-27ce-49c4-9dde-d4bc972dee70.png"></p>
<p><img src="https://user-images.githubusercontent.com/42437530/164335693-35574b65-347d-4acf-986c-32f9d649a745.png"></p>

### Cancel Service Functionality
<p><em>User can enter Tracking ID to cancel a scheduled service appointment. Cancelation date and time for service appointment is also updated in server.</em></p>
<p><img src="https://user-images.githubusercontent.com/42437530/164335560-54c0cc82-dabe-454b-bc17-9ada2520931c.png"></p>
<p><img src="https://user-images.githubusercontent.com/42437530/164335622-d20dee7d-91ab-47b7-a33a-2b1352e387cc.png"></p>

### Login Component
<p><em>User can login using Username and Password, landing on UserPage component where user can schedule and track services. User can also jump to SignUp component to sign up if new user.</em><p>
<p><img src="https://user-images.githubusercontent.com/42437530/164335922-c33de26c-3a9d-472f-a99d-11f899981cba.png"></p>
<p><em>UserPage Component (Login Landing Page):</em></p>
<p><img src="https://user-images.githubusercontent.com/42437530/164335982-042511cf-a173-4624-af90-ebec82607d36.png"></p>

### SignUp Component
<p><em>New users can sign up into system by providing user details and setting Username and Password, allowing user login.</em></p>
<p><img src="https://user-images.githubusercontent.com/42437530/164336299-50dd3bc1-4cdb-4d23-b3a6-12a260d17b0f.png"></p>

### Cypress Testing

<p><em>Integration testing for frontend: https://github.com/bawejahritik/AutoServ/blob/main/Demo/Frontend_CypressTest.mp4</em></p>
  
# Back-end

# API 5: Registering a new user
## POST Request

This API takes in the user details of a new user and stores the user details in userdetails table

## URL: http://localhost:8080/registerUser

### Sample Request Body:
![image](https://user-images.githubusercontent.com/53797247/164340928-bbd0b91e-1a65-48c7-bb17-54ae0fb07d66.png)

### Sample Response Body: 
![image](https://user-images.githubusercontent.com/53797247/164341010-3960f8bb-bfb5-4bf3-98b4-b93778cef677.png)

# API 6: Checking a user
## GET Request

This API takes the firstname and the password of the user and checks it.

## URL: http://localhost:8080/checkUser?firstname=firstname&password=temp

### Sample Query Params:
![image](https://user-images.githubusercontent.com/53797247/164341204-155d7a30-d636-40a2-bcad-5a266de20dbc.png)

### Sample Response Body:
![image](https://user-images.githubusercontent.com/53797247/164341253-d4cb41e9-0e37-4cd0-8207-46ae73902b00.png)



