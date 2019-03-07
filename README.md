### Pokemon Care Center
Pokemon Care Center is a full stack web app that allows a user to interact with a pokemon character matched to them. 

The app utilizes an ORM model, express server, handlebars html framework, and sequelize data storage. User validation is handled by passport and password hashing by b-crypt.


New users are directed to signup for the service by creating a user name (email) and password. Once the account is created,users are directed to a survey of questions. On completion of the survey, the user is matched with a pokemon character based on the values of their unique inputs. They are then taken to a page where they can interact with the character viw four action buttons. Every interection with the character changes the state of the associated variable in a database. When the user leaves the page and logs in again, the saved character states are loaded from the database, making the characters persistant. 

