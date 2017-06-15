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

