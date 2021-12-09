# API Task manager application

Write down the necessary endpoints and executed status codes to meet the following requirement:

- Multiple Tasks shall be managed completely (create, read, update, delete)
- New users can register
- Existing users can manage or delete their account
- Tasks can be sorted in categories or columns (Kanban style)
- Tasks may be assigned to a single user
- Users can form teams
- Tasks may be linked to teams


# 1 - Management of Tasks

- New task - POST  /task => 201 (created)
- Edit Task (re-write) - PATCH or PUT /task => 200/201/204 (created/ok) No payload
- Erase Task - DELETE /task => 200(ok) No payload
- Read a Task - GET /task => 201(create)

# 2 - New User can Register

- Create new User(register)- POST  /newUser => 201(created)


# 3 - Existing Users can manage or delete their account

- Get user information - GET /users/:userID => 201(success)
- Manage account - PUT/PATCH /users/:userID 201 (success)
- Delete account - DELETE users/:userID 201(success)


# 4 - Tasks can be sorted in categories or columns

- Create category - POST /category => 201 (success)
- Retrieve the categories - GET /Categories/
- Retrieve specific category- GET /Categories/:categoryId
                            
- Move/create task into category - POST/PUT /categories/:categoryId (/House/clean bathroom) => 201(success)
- Delete category - DELETE /categories => 201(success)
- Delete category - DELETE /categories/:categoryId => 201(success)

# 5 - Assign Tasks to users

- POST/PUT /users/:UserId/categories/task

# 6 - Teams

- Create a team - POST /TeamName => 201(success)
- Add user to team - POST/PUT /TeamName/users/userId => 201(success)
- Delete user from Team - DELETE /TeamName/users/userId
- Delete Team - DELETE /TeamName

# 7 Task linked to Teams

- Move a task to a team - PUT /TeamName/tasks/taskId
- Create a task for a certain Team - POST /TeamName/tasks/taskId
- Delete task - Erase Task - DELETE /teamName/task/taskId => 200(ok)
- Retrieve all tasks for certain team - GET /teamName/tasks