[Project Demo Link](https://weather-app-b8530.firebaseapp.com/)

# How to Build
Uses Gulp 4.x for build system. If you have Gulp 4.x installed globally, just **npm install** and then run gulp. Otherwise you can run **npm run gulp** to run gulp using an NPM script.

The default gulp task builds the project without minimizing JS and CSS, and using the react development build. This makes it faster build time and easier debugging (i.e., source maps actually work and React dev tools are available).

For production build, run the **gulp prod** task.

# Firefox Geolocation Bug
There seems to be a problem with how some recent versions of Firefox handle geolocation, even from an https connection.
There is some discussion of this problem [here](https://github.com/mdn/sprints/issues/1032).

For me the geolocation works on Chrome for both Windows and Mac, and in Firefox on Windows but not on Mac. 



