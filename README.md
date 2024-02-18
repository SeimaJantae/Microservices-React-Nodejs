# Microservices ReactJS NodeJS: Posts and comments single page app
- To create a single-page app with a post creation form, a list of all posts, a comment form, and a list of all comments
- Implement posts service for creating posts and get a list of all posts.
- Implement comments service for creating comments and get a list of all comments
- Establish a connection between post and comment services using post ID
- Store posts and comments data locally

# Testing
```bash
# Install dependencies posts service
npm i
# Start posts service at localhost port 8000
npm start

# Install dependencies comments service
npm i
# Start comments service at localhost port 8001
npm start

# Run client
npm run dev
