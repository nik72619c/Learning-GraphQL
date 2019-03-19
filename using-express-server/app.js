const express=require('express');
const graphqlHTTP=require('express-graphql');
const {buildSchema}=require('graphql');

const schema=buildSchema(`
type Query{
    name: String,
    age: Int
}
`);   //making our query
var root={
    name: ()=>{

    },
    age: ()=>{

    }
}
var app=express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
    
}));
app.listen(1234, ()=>{
    console.log('server running at port 1234');
});