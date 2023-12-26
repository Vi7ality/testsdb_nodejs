### Commands:

- `npm start` &mdash; server start in production;
- `npm run start:dev` &mdash; server start in development;
- `npm run lint` &mdash; start code checkout by eslint, is required before every pull request;
- `npm lint:fix` &mdash; eslint checkout with automatical simple bag fix.

## Routes:
Main URL: https://testsdb-api.onrender.com/api
- /auth/register - PUT, register new user;
- /auth/login - PUT, login user and get token;
- /auth/current - GET, get email of current user;
- /auth/logout - PUT, logout and disable current token;

Token is required:
- /tests - GET all tests, that assigned to the current user;
- /tests/:id - GET test with id;
- /tests/completed - PATCH completed test.

## Test 
To get assigned "tests" to user use autorisation details:
- email: test@test.co
- password: test123
