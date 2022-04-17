# Sprint 3

# Front-end

## Accomplishments

### Service Tracking Functionality
<p><em>User can enter Tracking ID to see service details and status of service. Entered Tracking ID gets details for that service entry from server and displays.</em><p>
<p><img src="https://user-images.githubusercontent.com/42437530/163661240-1a68b834-08f2-4453-bc9d-87905f6a8b55.png"></p>
<p><img src="https://user-images.githubusercontent.com/42437530/163661294-0cd54f0e-5cb3-4bce-b5cd-22e1a48d0a2d.png"></p>

### Vehicle Pickup and Drop 
<p><em>User can request vehicle pickup and drop in Service Tracking component by paying a fee. Payment gateway used is Stripe. Choosing to pay for the service opens a Stripe dialog allowing to make payment.</em></p>
<p><img src="https://user-images.githubusercontent.com/42437530/163661373-3e34da4e-a4ab-43b7-883c-45e5e351a4b9.png"></p>
<p><img src="https://user-images.githubusercontent.com/42437530/163661437-0d384b42-d706-4bee-a97d-2e1757b5d89b.png"></p>

### Cypress Testing

<p><em>Front-end unit testing for appointment form and service component functionalities.</em></p>
  
# Back-end

# API 3: Cancelling a scheduled appointment
## DELETE Request

This API takes in the tracking ID of a user and deletes the appointment.

## URL: http://localhost:8080/deleteClient?trackingID=4567446831

### Sample Query Params:
![image](https://user-images.githubusercontent.com/53797247/163731350-01e92f0d-c78a-4c95-b29b-833966e108bf.png)

### Sample Response Body:
![image](https://user-images.githubusercontent.com/53797247/163731379-4daf8f36-ba9c-4876-b07a-0734a6d6e11f.png)

# API 4: Updating a scheduled appointment
## PUT Request

This API takes in the tracking ID and a new appointment date and updates in clientdetails table

## URL: http://localhost:8080/updateClient?trackingID=4567446831&appointmentDate=11thNovemeber

### Sample Request Body:
![image](https://user-images.githubusercontent.com/53797247/163731528-e6c8790a-8801-4ff7-89a7-968d66bffea2.png)

### Sample Response Body:
![image](https://user-images.githubusercontent.com/53797247/163731614-428e50e8-06e5-49f4-888c-2edf9ac0b749.png)


