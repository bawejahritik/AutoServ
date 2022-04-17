# Sprint 2

# Front-end

## Accomplishments

### Integrated back-end with front-end

<p><em>Appointment form sends details of service scheduled by user to server.</em></p>

### Service Tracking
<p><em>Tracking page shows service details and Progress bar created to track status of service.</em><p>
<p><em><img src="https://user-images.githubusercontent.com/42437530/163660685-f22aef28-a24d-43ac-8e0b-0761aa3249d7.png"></em></p>

### Successful Appointment Response
<p><em>User gets response for successful appointment booking. User also receives 'Tracking ID' for scheduled appointment.</em></p>
<p><img src="https://user-images.githubusercontent.com/42437530/163661051-7a359a5e-9e79-48a9-8d89-ad814a6b0237.png"></p>

### Service Component
<p><em>Service component shows details of services offered. Book Now button navigates to Schedule component allowing user to book prefered service after learning about what all is offered in that service.</em></p>
<p><em><img src="https://user-images.githubusercontent.com/42437530/163660772-c2b66238-9c08-4e81-a265-e03654f7c2a3.png"></em></p>

### Reschedule and Cancel Buttons
<p><em>Reschedule and Cancel Buttons on Service Tracking component route to respective components for rescheduling and canceling scheduled service.</em></p>
<p><em><img src="https://user-images.githubusercontent.com/42437530/163660985-21c410ff-1f91-4286-a9bc-7de2a6aff306.png"></em></p>
  
 # Back-end
 
 # API 1: Inserting a new client in the clientdetails Table
## POST Request

This API takes in the signup details of the users, stores them in the database, and returns back a tracking ID Unique for every user.

## URL: http://localhost:8080/stars

### Sample request Body:
![WhatsApp Image 2022-03-04 at 9 36 04 PM](https://user-images.githubusercontent.com/42436978/156865317-13bd07aa-3e82-46d8-874a-cca2e7ddafbd.jpeg)
### Sample Response Body:
![WhatsApp Image 2022-03-04 at 9 36 32 PM](https://user-images.githubusercontent.com/42436978/156865341-f2218f3e-d866-410b-a020-af3ea3a1da64.jpeg)

# API 2: Fetching an existing client in the clientdetails table 
## GET Request

This API takes in the tracking ID of a user and returns back the user details.

## URL: http://localhost:8080/getClient?trackingID=654052185

### Sample Query Params:
![image](https://user-images.githubusercontent.com/53797247/163731186-d5a21287-6520-441e-8f99-9d19bca71be0.png)

### Sample Response Body:
![image](https://user-images.githubusercontent.com/53797247/163731232-7df550e5-b2d8-4666-85a3-4a895a837813.png)

