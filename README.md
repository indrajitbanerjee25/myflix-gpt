## Disclaimer:

- This project is for educational purposes only.
- It is not affiliated with, endorsed by, sponsored by,
- or associated with Netflix. All trademarks and logos belong to their respective owners.

## Note

- Some files, such as firebase.js and constant.js, are intentionally excluded from this repository because they contain sensitive API keys and configuration details.

- During development, these files were removed after GitHub/Firebase flagged the exposed credentials.
- They will be managed securely using environment variables (.env) and appropriate configuration before the final deployment.

- If you want to run this project locally, create your own Firebase project and TMDB API key,
- then configure the required environment variables.

# myflix-gpt

- Create reactapp
- Configure Tailwind css
- Header component created
- Log in form
- Sign up form
- Form validation
- useRef hooks
- Firebase setup
- Deploy our aap to production
- Create signup user account in FireBase
- Implement sign in user API
- Created Redux store with UserSlice
- update profile
- Sign up Display name and profile URL bug fix
- If user is not login and tyr to go via url its redirect to login page and vice-versa
- Unsubscribe to the onAuthStateChange call back
- Change the Hardcoded value in constant file
- Register TMDB API and create an app and get access token
- get Data from TMDB now playing movies List
- use customhooks nowplaying movies
- create movie slice
- Planning for main and secondery container
- fetch data for trailer video
- update store with trailer video data
- embadeed you tube video and make it auto paly and mute
- added tailwind css for looking

# Features

- Login/Sign Up
  - Sign In / Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists × N
- MyFlixGPT
  - Search Bar
  - Movie Suggestions
