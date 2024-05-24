## **React and Node.js web application boilerplate.**

Created By **Tyler Cain**

After cloning this repository:

 1. type `npm init` in the parent directory 
 2. `npm install concurrently` in server terminal
 3. `npm ci` in client and server directory
 4.  add the following scriptto the package.json file:

    "scripts": {
    
    "start": "concurrently \"npm run server\" \"npm run client\"",
    
    }
