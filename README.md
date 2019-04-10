# How to Build
Uses Gulp 4.x for build system. If you have Gulp 4.x installed globally, just **npm install** and then run gulp. Otherwise you can run **npm run gulp** to run gulp using an NPM script.

The default gulp task builds the project without minimizing JS and CSS, and using the react development build. This makes it faster turn around time, and easier debugging (i.e., source maps actually work and React dev tools are available).

For production build, run the **gulp prod** task.

# Browser Security Issues with Geolocation
The geolocation seems to be blocked in some browsers when running from local host, it should work on all modern browsers when it is deployed to a HTTPS url. It works from local host for me in Chrome on both Mac and Windows, and in Firefox on Windows but not on Mac. 
