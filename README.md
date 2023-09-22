# PawFinder-BE

## This project is the third milestone project for the NCSU software development program. The Pawfinder project was created by Vincent, Casey, Finnegan and Mayna.

### This is the BackEnd of the application.

### This is a full stack application which allows users of PawFinder to create new pet adoption profiles for both cats and dogs, read the adoption listings, update the adoption listings, and delete them. It also allows users to explore the website with a navbar, view our current Foster Pawrents and view an About page with PawFinder's Mission. Lastly, if users wish to be considered in the placement of the pet, there is an adoption submission form that users can be submit. 

---
### To install:

Clone from the repo and install npm will install require dependencies:
```npm install```

---
### To run the backend:

* Note Node.js must be installed for application to run [Node JS](https://nodejs.org/en/download/)

From the root directory run:
``` npm run dev ```

This will execute the script and output the following: 
```
> Pawfinder@1.0.0 dev
> npx nodemon index.js

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`  
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
listening on port 8080
DB connected
  ```

---
### To run the frontend: 

* Note Node.js must be installed for application to run [Node JS](https://nodejs.org/en/download/)

From the root directory run:
``` npm start ```

This will execute the script and output the following: 
```
Compiled successfully!

You can now view pet-adoption-safe-haven-frontend in the browser.  

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.1.12:3000     

Note that the development build is not optimized.
To create a production build, use npm run build. 

webpack compiled successfully
  ```

---
### Project Design Goals:

* Create the PetFinder Home/landing page where a user may choose to browse available Pets to adopt
* Create the create new pet page to add a new dog or cat that's available to adopt
* Create a read page for EACH dog and cat that's available to adopt
* Create an update function to update existing adoption listings and adoptee status
* Create a delete function to remove cats and dogs that have been adopted or added in error 
* Create an Adoption Submission Form for users to submit to Pawfinder if they are interested in adoption
* Create an About Pawfinder page including the PawFinder mission statement
* Style pages to have consistent format that is visually appealing
* Application Deployment