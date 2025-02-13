# MovieSearch

# Instruction to setup

Clone the repository:
git clone git@github.com:tmoshole/MovieSearch.git
cd MovieSearch

# install dependencies
Run yarn instrall \ npm install  

# run the server
Run npx expo start

# install expo app
Download and install expo go app on a mobile device.
Instructions: https://docs.expo.dev/get-started/set-up-your-environment/

# Instructions to get your RAPIDAPI_KEY for the API
https://youtu.be/ytNyibPQFhw?si=HcbPKC_NHwMi3ZQd

Make sure the laptop and phone are connected to the same wifi.

# App structure
movie-app/
├── assets/
├── src/
│   ├── components/
│   │   ├── displayCard/
│   │   ├── movieDetails/
│   │   ├── search/
│   │   └── ErrorMessage.js
│   ├── screens/
│   │   ├── homeScreen/
│   │   └── movieDetailScreen/
│   ├── store/
│   │   ├── redux.js
│   │   └── movieReducer.js
│   ├── services/
│   │   └── api/
│   ├── navigation/
│   │   └── routes.js
│   └── utils/
├── App.js
├── app.json
└── package.json