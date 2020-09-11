# psicologia_3

colors #42a5f5 & #ec407a

tns resources generate icons /Users/jctovar/Desktop/psicologia/icon.png 
tns resources generate splashes /Users/jctovar/Desktop/psicologia/splash.png --background "#003363"

remember DEVELOPMENT_TEAM = jctovar@gmail.com;


///////////////////////////////////////////////
Add dependency in APP/platform/android/app/build.gradle file:

in whre say implementations

implementation "com.android.support:multidex:1.0.3" (line 386)

In build.gradle's defaultConfig section add:

multiDexEnabled true (line 260 aprox)
###

npm install nativescript-set-version --save-dev
npm run setVersion 0.7

