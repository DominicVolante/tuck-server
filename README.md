# Tuck (Server)

App Live at https://tuckit.vercel.app/

## Public Endpoints 

### Symptoms
- GET /entries
   - returns all symptoms previously added
- POST /entries
    - posts a new symptom entered by the user to the server
- PATCH /entries/:id
    - updates specified symptom with new details provided by the user
- DELETE /entries/:id
    - deletes specified symptom for the user


## Technology Used 
- NodeJS
- Express
- Knex
- PostgreSQL
- CORS 
- Helmet


Hosted on Heroku
