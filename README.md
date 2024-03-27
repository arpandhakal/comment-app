
## Description

This project is a single-page commenting system developed using Typescript, Remix, Tailwind CSS, and React. The system allows users to view existing comments and post their own comments on the page. Also, it allows user to view their posted comments in the same page. It leverages Remix's loaders and actions for backend calls, ensuring efficient data retrieval and manipulation. The packages used in the project are tailwindcss and axios. User Authentication and Authorization is done so that for a user to post or view comments, they must have authorization key. For a user to access comment routes, they must sign in. 

## Features
1. View existing comments
2. Post new comments
3. Efficient backend calls using Remix's loaders and actions
4. View own posts
5. Authentication & Authorization

## Demo

https://github.com/arpandhakal/comment-app/assets/46821825/d35942a8-7d45-4e8c-92c2-481674746a6f


## Running the application on Docker 

1. Clone the repository : git clone
2. docker build -t .
3. docker run -p 3000:3000
4. Access the application

### Note
Please make sure you run the comment-app-backend project before using this project.

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

