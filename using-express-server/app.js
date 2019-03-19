const express=require('express');
const graphqlHTTP=require('express-graphql');
const {buildSchema}=require('graphql');
const fakeData=require('./fakeDB');

const schema=buildSchema(`
type Query{
    name: [String],
    age: Int,
    city: String
}
`);   //making our query
var root={
    name: ()=>{
            let names=fakeData.user.filter(element=>element.name);
            return fakeData.user;
           
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