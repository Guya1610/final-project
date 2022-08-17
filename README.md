# final-project


REQUIREMENTS ---------------------------------------------------------------------------------------------------------------
two .env files are required to make website work :



--> add /backend/.env
> get MongoDB Api credential: [https://account.mongodb.com/]

> get Amadeux Api credential: [https://developers.amadeus.com/self-service/category/covid-19-and-travel-safety/api-doc/travel-restrictions?s_kwcid=AL!10969!3!558841376826!p!!g!!travel%20restrictions%20api]
 
 
  MONGO_URI= 
  AMADEUS_API_KEY=""
  AMADEUS_API_SECRET=""

--> add /frontend/.env:

get Firebase Api credential: [https://firebase.google.com/]

REACT_APP_FIREBASE_API_KEY = ""
REACT_APP_FIREBASE_AUTH_DOMAIN = ""
REACT_APP_FIREBASE_DATABASE_URL = ""
REACT_APP_FIREBASE_PROJECT_ID = ""
REACT_APP_FIREBASE_STORAGE_BUCKET = ""
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = ""
REACT_APP_FIREBASE_APP_ID = ""

Start Project -------------------------------------------------------------------------------------------------------------
Launch commands project:
cd frontend && npm i && npm run start

cd backend && npm i && npm run start:server


COMPONENTS-----------------------------------------------------------------------------------------------------------------

On the main page: 

  - News banner with covid case 24H
  - Link to Search destination
  - Usefull link in footer

Map component: 
  - Display global data
  - Futur version display data for a city
  
Dashboard component:
  -Display restrictions data with chart and summary
  
Profile component:
  - Display basic informations and saved destination restrictions
  
Login component:
  - ONLY Login with Google work
  
  
  
-- KNOW THE LIMITATION --
  
  ---- Amadeus limit 200 requests with one account ----
  
  








