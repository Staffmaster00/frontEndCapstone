# Crazy Craving

Crazy Craving lets you search a supported location via the Eatstreet API for local small town restaurants. You can search by zip codes, address or your particular craving to see if you can find an unique restaurant near you!

# Installing Core Technologies

## Visual Studio Code

[Visual Studio Code](https://code.visualstudio.com/download) is Microsoft's cross-platform editor that we'll be using during orientation for writing JavaScript and building Node applications. Make sure you add the [JavaScript extension](https://code.visualstudio.com/Docs/languages/javascript) immediately after installation completes.

## Install Node.js

https://nodejs.org/en/docs/guides/getting-started-guide/

  1. Click the above link to download Node.  
  https://nodejs.org/en/download/
  2. Make a directory for your app: mkdir HelloWorld
  3. Move to the newly created directory: cd HelloWorld
  4. Create a new file called app.js: 
  5. Paste in the code form the example link at the top of the instructions.
  6. Run the app: node app.js
  7. Navigate to http://localhost:8000/api/v1
  8. You should see your 'Hello World' message.

## Linux

### Install Node.js
  It is recommended that you install node via your package manager. The rest of the project is exactly the same as Windows and macOS.
  ## For Ubuntu or Debian Linux Users

```
sudo apt install nodejs
```
## For Fedora Linux Users (Redhat Linux Users: replace dnf with yum)

```
sudo dnf install nodejs
```

### Review Node Documentation

https://nodejs.org/en/docs/

## NPM

Going hand in hand with Nodejs is npm. This package manager allows us to install the needed third party support that empowers modern applications. You can use ```npm -v``` to check if you have it installed otherwise run ```npm install npm@latest -g``` to update to the latest version. While npm installs with node sometimes npm has a newer version than the one that installs with node.

Run npm install after you have npm to install needed third party dependencies.

# Running the Application

To run this front-end application use http-server. It should come included with npm however if it is not you can run ```npm install http-server```. Afterwards go to http://localhost:8080/ or http://127.0.0.1:8080/ to see the application. This application currently works locally. I'm working on a fix to get the firebase deployed version working. If anyone knows how firebase affects switching views please reach out to help!