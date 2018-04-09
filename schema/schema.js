const graphql = require('graphql');
const axios = require("axios");

const {
GraphQLObjectType,
GraphQLString,
GraphQLInt,
GraphQLSchema

} = graphql

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt}
  }
})


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: {type: GraphQLString}}, //given an id graphQL will return a User
      resolve(parentValue, args){ // The resolve function is where I query the db for a result. parentValue can be ignored 
        return axios.get(`http://localhost:3000/users/${args.id}`)
        .then(response=> response.data);

      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
