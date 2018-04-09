To start the server run npm start and visit http://localhost:4000/graphql

To start the json-server that will fake the API server
run --> npm run json:server and visit localhost:3000/users to see the data being served.

HTTP methods in a classical RESTfull routing.

 URL          Method      Operation

/posts        POST        Create a new Post        
/posts        GET         Fetch all posts
/posts/14     GET         Fetch post 14
/posts/15     PUT         Update post 15
/posts/18     DELETE      Delete post 18

The problems that GraphQl attempts to solve are the following:

1. When we have havily nested relationships deciding on a url schema is difficult.
2. In such scenarios we also need to make too many http requests to get all the data.
3. Overfetching data 

The schema.js file describes how our data look like. What properties each object
has and how each object is related to each other.

Done video 14, the axios installation is to be done.