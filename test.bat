cd server
timeout 3
go test -v -run TestGetNonExistentTrackingID
timeout 3
go test -v -run TestGetExistingTrackingID
timeout 3
go test -v -run TestGetNonExistentUsername
timeout 3
go test -v -run TestGetExistingUsername
timeout 3
go test -v -run TestIncorrectPassword
timeout 3
go test -v -run TestCreateAppointment
timeout 3
go test -v -run TestCreateUser
timeout 3
go test -v -run TestUpdateAppointment
timeout 3
go test -v -run TestDeleteAppointment
timeout 5