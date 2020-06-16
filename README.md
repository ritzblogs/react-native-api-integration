# react-native-api-integration

![demo](https://github.com/ritzblogs/react-native-api-integration/blob/master/apiintegration.jpg)  

## Install at local
Open Terminal, then type command:  
> git clone  https://github.com/ritzblogs/react-native-api-integration.git

Go to project folder :
> cd react-native-api-integration

Type following command :  
> npm install  

You must have ANDROID_HOME environtment variable, to check if you already have, type in your terminal :  
> echo $ANDROID_HOME  

Make sure you have already installed React Native globally by running this command :  
> sudo npm install -g react-native-cli

At this point, you should be able to run the project.
To run your project on your device/emulator at Debug configuration, type :
> npm run android-dev  

Or if you want to run at iOS simulator, run:  
> npm run ios-dev
 
If you have error message like `Execution failed for task ':app:dexDebug'.` run this on your terminal :  
> npm run android-clean


