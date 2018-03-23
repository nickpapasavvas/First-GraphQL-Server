const graphql = require('graphql');
const _ = require('lodash')

const {
GraphQLObjectType,
GraphQLString,
GraphQLInt,
GraphQLSchema

} = graphql

const users =[
  {id:"1", firstName:"Samantha", age: 28},
  {id: "2", firstName: "Bill", age: 40}
]


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
      args: { id: {type: GraphQLString}},
      resolve(parentValue, args){
        return users.find(user=>user.id === args.id)

      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
