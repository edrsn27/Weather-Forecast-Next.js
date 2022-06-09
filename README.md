# Weather-Forecast-Next.js
[DEMO](https://weather-forecast-next-3xupd5v9t-edrsn27.vercel.app/)

Next.js app  integrated with openweathermap API for weather forecasting.
## Installation

_Instructions on how to run the client._

1. Clone the repo via zip file or using the command line
   ```sh
   git clone https://github.com/edrsn27/Weather-Forecast-Next.js.git
   ```
2. Install NPM packages (root directory)
   ```sh
   npm install
   ```
3. Run the client
   ```sh
   npm run dev
   ```
## Requirements


1. ### Firebase Account
    1. How to create a [Firebase Account](https://www.youtube.com/watch?v=-3GkNz1lfCE).
    2. Click the </> Button![](https://firebasestorage.googleapis.com/v0/b/test-19849.appspot.com/o/getting-started.PNG?alt=media&token=11472fc1-69fd-4619-89d3-783cce7d17f3)
    3. Register App ![](https://firebasestorage.googleapis.com/v0/b/test-19849.appspot.com/o/register-app.PNG?alt=media&token=f045012a-54dd-4d5b-a106-731c3f19def8)
    4. Copy and paste `.env.example` and rename it as `.env`.Paste your firebase app configuration to `.env` ![](https://firebasestorage.googleapis.com/v0/b/test-19849.appspot.com/o/copy-app-configuration-variables.png?alt=media&token=0072b5d2-d923-48b4-b3f0-7746a903f63e) 

    `NEXT_PUBLIC_FIREBASE_API_KEY=`

    `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=`

    `NEXT_PUBLIC_FIREBASE_DATABASE_URL=`

    `NEXT_PUBLIC_FIREBASE_PROJECT_ID=`

    `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=`

    `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=`

    `NEXT_PUBLIC_FIREBASE_APP_ID= `
2. ### Enable Google and Github Authentication
    1.  ![](https://firebasestorage.googleapis.com/v0/b/test-19849.appspot.com/o/enable-google-and-github-authentication.PNG?alt=media&token=a80fcd86-ca9a-4e8a-9c14-293378667c83)
3. ### Enable Google Authentication ![](https://firebasestorage.googleapis.com/v0/b/test-19849.appspot.com/o/google-auth.PNG?alt=media&token=c024ca34-3f69-4083-91f8-9e21fc3d5f49)
4. ### Enable Github Authentication
    1. Goto your github account
    2. Settings -> Developer Settings
    3. Click New Github App 
    4. Fill all Required Fields
    5. Callback URL can be found here ![](https://firebasestorage.googleapis.com/v0/b/test-19849.appspot.com/o/github-call-back-url.PNG?alt=media&token=e5ec93d3-d1f2-4d1a-b4ce-b48b262731dc)

5. ### Create account in [openweathermap](https://home.openweathermap.org/users/sign_up)
    1. Paste your API in `.env` in variable `NEXT_PUBLIC_OPEN_WEATHER_MAP_API_KEY` 
    2. Assign value for `NEXT_PUBLIC_OPEN_WEATHER_MAP_API_URL` in `.env` for example `https://api.openweathermap.org/data/2.5/weather`


