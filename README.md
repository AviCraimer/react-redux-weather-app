[Project Demo Link](https://weather-app-b8530.firebaseapp.com/)

# How to Build
Uses Gulp 4.x for build system. If you have Gulp 4.x installed globally, just **npm install** and then run gulp. Otherwise you can run **npm run gulp** to run gulp using an NPM script.

The default gulp task builds the project without minimizing JS and CSS, and using the react development build. This makes it faster build time and easier debugging (i.e., source maps actually work and React dev tools are available).

For production build, run the **gulp prod** task.

# Firefox Geolocation Bug
There seems to be a problem with how some recent versions of Firefox handle geolocation, even from an https connection.
There is some discussion of this problem [here](https://github.com/mdn/sprints/issues/1032).

In testing, the geolocation works on Firefox for Windows, Android, and iOS, it throws an error on Mac desktop Firefox. 

Works in Chrome across the board. 




