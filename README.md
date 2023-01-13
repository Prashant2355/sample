# Title of the project :- Student Enrollment Form

# Description of the project :-
A form is created and it stores data to the **SCHOOL-DB** database.
The form has the following input fields - **{Roll-No, Full-Name, Class, Birth-Date, Address, Enrollment-Date}** where **Roll-No** field is the ***primary*** key. The form also has three control buttons **[Save]**, **[Update]**, **[Reset]** at the bottom of the form.
**[Save]** button is used to store the data in the database.
**[Update]** button is used to modify the data in the database.
**[Reset]** button is used to take the page in the default mode.
On page load or any control button click, an empty form is displayed where only the first field i.e. **Roll-No** field is enabled while all other fields and the three control buttons are disabled.
The cursor is in the **Roll-No** field and user is allowed to enter data in this field.

If the value of the **Roll-No** field not exists in the database-
  a)  All other fields including **[Save]** and **[Reset]** button is enabled and the cursor moves to the next field i.e. **Full-Name** field.
  b)  The user has to enter data in all the fields otherwise an alert will be raised.
  c)  After filling all the details, user has to click the **[Save]** button in order to store the data in the database.
  d)  After clicking **[Save]** button, the form goes to default mode i.e. the form is empty and the **Roll-No** field is enabled while all other fields and buttons   
      are disabled.
  
If the value of the **Roll-No** field exists in the database-
  a)  All other fields including **[Update]** and **[Reset]** button is enabled while **Roll-No** field is disabled and the cursor moves to the next field i.e. **Full-       Name** field.
  b)  The value of all fields is displayed which is corresponding to the data of **Roll-No** field just entered.
  b)  The user can modify the value of any fields.
  c)  After the modification, user has to click the **[Update]** button in order to replace the modified data with the original data corresponding to the value of 
      **Roll-No** field in the database.
  d)  After clicking **[Update]** button, the form goes to default mode i.e. the form is empty and the **Roll-No** field is enabled while all other fields and buttons 
      are disabled. 
  
 # Benefits of using JsonPowerDB :-
  a) It minimizes the development cost.
  b) It minimizes time to the market.
  c) It minimizes the complexity of interoperability of different applications.
  d) It maximizes data processing performance.
  e) JPDB is technology futuristic as it:-
       i) Fills gap from database to big-data.
       ii) Pluggable with new algorithms.
       iii) Pluggable and user defined API.
  f) It minimizes total cost of ownership.
  
 # Release History (release of your JsonPowerDB related code on Github) :-
   The code of this project was released on Github on 12th Jan 2023. 
  
  
