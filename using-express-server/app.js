const express=require('express');
const graphqlHTTP=require('express-graphql');
const {buildSchema}=require('graphql');
const fakeData=require('./fakeDB');

const schema=buildSchema(`
type Query{
    name: [String],
    age: [Int],
    city: String
}

type Mutation {
    createUser(name: String!, age: Int!, city: String!): String
}
`);   //making our query
var root={
    name: ()=>{
        let names=[];
            for(let i=0;i<fakeData.user.length;i++){
                names.push(fakeData.user[i].name);
            }
            return names;
    },
    age: ()=>{
        let ages=[];
            for(let i=0;i<fakeData.user.length;i++){
                ages.push(fakeData.user[i].age);
            }
            return ages;
    },
    createUser: ({name,age,city})=>{
        //console.log('name',name);
        let object={name,age,city};
        fakeData.user.push(object);
        return "user made";
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