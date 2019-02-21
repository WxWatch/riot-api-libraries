Mobile Apps
===========

Client-side calls are blocked because there is no way to make them without exposing your API key to users. You will need to setup a backend server that can make API calls while keeping your API key secure. If you want to quickly setup a proxy server, you can create some functions with AWS Lambda or use Kernel (https://github.com/meraki-analytics/kernel).

If your project is only intended for personal usage, you can modify your browser settings to disable CORS (the mechanism which blocks you from making client-side calls). However, you will not be allowed to publish your site if you do this. More info about disabling CORS can be found here: https://www.thepolyglotdeveloper.com/2014/08/bypass-cors-errors-testing-apis-locally/

You can create a mobile app that uses the API, but you'll need to create a webpage to explain the app, and a server to proxy your API calls. The website should contain enough information so that Rioters can evaluate your project (to ensure it isn't breaking any rules) without actually downloading it. You'll also need to setup a server to make your API calls from. You cannot securely store your API key in a distributed app, so your app will need to communicate with a server, which will in turn communicate with the API.
