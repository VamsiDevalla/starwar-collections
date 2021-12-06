local run: 
```Shell
docker-compose -f docker-compose-local.yml  up
```

prod build: 
```
docker-compose up
```

remove all:

```Shell
docker container rm -f $(docker container ls -qa)
docker image rm -f $(docker image ls -q)
docker volume rm -f $(docker volume ls -q)
```

when install new npm package
```
yarn add $YOUR_NEW_NPM_MODULE

# remove the image where the new module is installed
docker image rm -f $Image_Name

# rebuild, while making sure it doesn't use the internal cache 
docker-compose build --no-cache
docker-compose up
```

Task Overview

You will develop a small application in JavaScript with two parts – a front end and a backend.  The backend will assume that two users can authenticate (Josh and Justin).  The backend will expose an API to retrieve information about each user's Star Wars collection.

We don't expect a full application with authentication, full security, etc.  But we do want to see a basic front end running, a basic server running, the communication between front end and backend, and then have a discussion where you explain how you would secure it or change it if it was a production level application.

Part 1: Server

Use Express to start up a local server.

Code the server with NodeJS.  You can use straight JavaScript or TypeScript.

Expose an endpoint called getMyStarWarsCollection.

Return the results in JSON showing everything in the user's Star Wars collection.

When Josh calls the API, Josh’s data should be returned.

When Justin calls the API, Justin's data should be returned.

Don't worry about implementing authentication or tokens or anything (feel free to fake that part for this demo), however please be prepared to discuss how you would implement a fully secure system with authentication if this was a production level application.

You don't need to hook this up to a database (feel free to return hard coded data), but please be prepared to discuss how you would hook this to a database if it was a production level application.

Be prepared to discuss how you would secure the database user id and password if this was a production level application.

Part 2: Front End

Create an Angular front end.

Demonstrate some basic HTML/CSS in this page.

Call the getMy StarWarsCollection API on your server.

When the results are returned, iterate through them and display them on the page.  Don't just show the JSON return object – we would like to see you iterate through the results and display them in separate lines in the interface.
