# Farfeshny

Aim:<br>
•	Finding something to do After exhausting day Requires Finding a good Exercises to do so, if you let me Show you what I got in my website... I’m sure that you will Never feel exhausted.
You read all of this and haven't signed up till now?

Description:<br>
•	This website helps users to get something to do depends on what they are interested in.<br>
•	The website starts with home page which has the aim of the project and a small Robot in the right bottom part when the user clicks on it… a robot appear asks him to join us with new profile or login with his account.<br>
•	“AboutUS” page includes the creators of this website.<br>
•	“ContactUS” is a validated form that takes a feedback.<br>
•	“Login” and “Register” Pages helps the user to enter to his profile if he has one or he need to make a new one.<br>
•	“Profile” Page is a user profile which do many tasks:<br>
<ul>
  <li>Left bar includes the data of the current user.</li>
  <li>Right bar is a “To Do List” that manages the tasks to the user using (In Progress - Done) boxes to describe which tasks he has ended and which ones should end them.</li>
  <li>	Middle part includes the “Farfeshny” button which fires the robot process that helps the user to get videos about the interests of the current user.</li>
</ul>
•	“UpdateInfo” Page is a page that updates the current user Information.

Functional Requirements:<br>
•	We used to ask if the localstorage includes the key that includes of all users and if it isn’t exist, we set item with “allUsers” key.<br>
•	Every time the user tries to use register page, we get all the users in an array and after the user sign up, we push in the array the new user, then we set it again in the localstorage with the same key.<br>
•	When the user enter the login page we get all the users again to check if this user already exist or not.<br>
•	When the user enters his profile directly we create a session storage that store the current user to help us in the update info part.<br>
•	We also use the localstorage to store the index of the current user in case he updated his info to get the same index in the array (stored in LocalStorage) to replace it.<br>
•	Logout button used to remove item from the session storage.<br>
•	To Do List button creates a new element with dynamic id to help us get this element in the JS to transfer it in the done section, and the same in the transferring to done to help us to get him back into In Progress section.
