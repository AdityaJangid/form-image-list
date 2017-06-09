## Form Image List 

It is a react-native based apk which contains a Form, List view and Image Slides.

## Generating the Signed apk.
To generate the Signed apk use to following steps :-
####  Generate React Native bundle:

    1. react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ 

#### Generate a Signed APK file from Android Studio.

1. Open your project in the Android Studio.
2. Go to Build option in the menu bar
3. Click on "Generate Signed Apk" form the drop down menu
4. Click on Create New and follow the instruction 

####  Install Signed APK File to USB device:

    1. adb install -r <path_to_signed_apk> 

### Deploying Mongodb and Nodejs on amazon ubuntu EC2 instance.
#### Launch an ubuntu EC2 instance and perform following steps to deploy mongodb.

 - Always make sure you add a custom inbound rule in your security group on port 3000 to get request from anywhere on your ubuntu instance.
 - ssh the ubuntu instance using the .pem file
 

    ```ssh -i <path of .pem file> ubuntu@<public ip of instance>```

 -  Step 1 - Importing the Public Key
 
 ```sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927```
 
 

 -  Step 2 - Create source list file MongoDB
 
	``` echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list```

 - Step 3 - Update the repository
 
	```sudo apt-get update```

 - Step 4 - Install MongoDB
 
 ```sudo apt-get install -y mongodb-org```

 - Step 5 - Start the daemon
 ```sudo systemctl start mongod
    sudo systemctl enable mongod ```

### If you got any error like "Failed global initialization: BadValue Invalid or no user locale set. Please ensure LANG and/or LC_* environment variables are set correctly." then add the following to your ~/.bashrc file 

    export LC_ALL=en_US.UTF-8
    export LANG=en_US.UTF-8
    export LANGUAGE=en_US.UTF-8
    

### Now you have mongodb installed and running.
### Now we have to install node and start the server.
#### To install node follow to give steps. :-

   NVM (Node Version Manager) is a pretty great way to install Node.js and allows you to easily switch versions if required. To install NVM just run this command
   

    $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
NVM add some code to your .bashrc so you need to source your .bashrc

    source ~/.bashrc
Now install node using NVM

    nvm install <latest version number>
Check if node installed or not.

    node --version
And by this node is installed and you need to fetch the repository from github to start node server.
to get the repository you need to install git.

    sudo apt install git git-core
Now clone the repository using the command.

    git clone https://github.com/AdityaJangid/Backend-form-image-list.git
After this go in the Backend-form-image-list directory install the dependencies and start node server.

    npm install 
    npm start 
Now you will see a success message in your server. If not follow the above steps again correctly.
Now you can save data and access it any time on the android application.







