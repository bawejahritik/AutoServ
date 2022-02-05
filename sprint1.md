# Sprint 1

## User Stories
1.	As a user, I want to look back at my service purchase history and also have functionality to rebook or buy again.
2.	As a user, I want to get email notifications for my service updates
3.	As a user, i want an online payment method with multiple payment options
4.	As a user, I want to track my service progress and status.
5.	As a user, I want car pickup and drop facility
6.	As a user, I should be able to cancel a scheduled service appointment
7.	As a user, I should be able to reschedule an appointment
8.	As a user, i want to schedule a service(Appointment Booking)

## UI Design

### Appointment form
<img src="https://github.com/bawejahritik/AutoServ/blob/main/UI/Appointment%20Booking%20Form.png" style="width:600px;height:450px;">
  
### Homepage
<img src= "https://github.com/bawejahritik/AutoServ/blob/main/UI/HomePage_V2.png" style="width:600px;height:450px;">
 
### Tracking Page
<img src= "https://github.com/bawejahritik/AutoServ/blob/main/UI/Tracking.png" style="width:600px;height:450px;">

Link to Jamboard: https://jamboard.google.com/d/16C0-aCpWdahX1h78SHSJIZL9Dw5H1KbxJU_rImTVPSg/edit?usp=sharing

# Front-end

## Components

### Navigation Bar
<p><em>Angular material toolbar that acts as header and contains logo and material buttons - Home, Services, Schedule, Track, Contact Us, Login with routing to corresponding components</em><p>
<p><em><img src="https://user-images.githubusercontent.com/42437530/152621862-f2a88983-adf6-42cf-b772-f374b5ecc9b3.png" alt="Navbar"></em><p>

### Home Component
<p><em>Home button on navbar routes to Home component. Consists of LeftDisplay and Gallery components and acts as default route</em><p>
<p><em><img src="https://user-images.githubusercontent.com/42437530/152622955-ba67de4d-fddf-47e7-a1cd-90f45ef5c119.png" alt="HomePage"></em><p>

### LeftDisplay Component
<p><em>Displays heading, headline and two buttons - Schedule (Routes to Schedule component) and Track (Routes to Track component)</em><p>
<p><em><img src="https://user-images.githubusercontent.com/42437530/152623089-8efeaad3-de0a-4214-aef8-226ef064a2e0.png" alt="LeftDisplay" style="width:600px;height:450px;"></em><p>

### Gallery Component
<p><em>Gallery display carousel with timer based automatic slider</em><p>
<p><img src="https://user-images.githubusercontent.com/42437530/152623476-c86bb886-9f87-4365-a683-06e043cc9fc4.png" alt="gallery" style="width:600px;height:450px;"></p>

### Schedule Component
<p><em>Angular material form that takes input from user for fields - first name, last name, phone number, email, car registration number, service type and service date. Contains submit (to be configured in further sprints) and clear button. 
<p><img src="https://user-images.githubusercontent.com/42437530/152623775-4c76d481-a31d-4c6d-a136-1501a268b763.png" alt="appointment-form"></p>
  
 #Back-end
 
 ### Database Connection
 <p><em>SQLite connection was established. GORM as an ORM engine was used.
 <p><img src="https://user-images.githubusercontent.com/53797247/152624515-feb6e26a-4d47-419f-9c19-383908505f13.png" alt="db-conn"></p>
   
 ### Hardcoded entry into Database
 <p><em>hardcoded entry was made to confirm Create in Database is successful or not.
 <p><img src="https://user-images.githubusercontent.com/53797247/152624516-b900f975-8cd7-42be-be33-3d1a9d4ad860.png" alt="db_create"></p>
 <p><img src="https://user-images.githubusercontent.com/53797247/152624517-6956be3b-c139-4da7-86e4-febc1a33ae25.png" alt="db_entry"></p>
   
 ### User Entered entry into Database
 <p><em>entry was taken from the user (through CLI) and the entry was made to the database using Create.
 <p><img src="https://user-images.githubusercontent.com/53797247/152624518-de30520a-bd51-4b8c-98a1-6d30514a8be5.png" alt="db_cli"></p>
 <p><img src="https://user-images.githubusercontent.com/53797247/152624512-e7a922a5-9ac1-45fb-8900-9b5fec8220a0.png" alt="db_entry"></p>
 
 ### Entry to Database through POST
 <p><em> Using the POST method entry was made to the Database.
 <p><img src="https://user-images.githubusercontent.com/53797247/152624513-142d41f5-3833-4f6c-a397-9ecdbb6aeb6c.png" alt="db_post"></p>
 <p><img src="https://user-images.githubusercontent.com/53797247/152624514-bba92f58-c293-4bc6-81c4-85e329a8146c.png" alt="db_entry"></p>
 
    
 
  
