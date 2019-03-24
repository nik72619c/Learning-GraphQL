const {makeExecutableSchema}=require('graphql-tools');
const resolvers=require('./resolvers');
const typeDefs=`
type Query{
    id: ID
    name(city: String): [String],
    age: [Int],
    city: String
}

type Mutation {
    createUser(name: String!, age: Int!, city: String!): String
}
`;

module.exports=makeExecutableSchema({
    typeDefs,
    resolvers
});