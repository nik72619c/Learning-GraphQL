const {graphql,buildSchema}=require('graphql');

const schema=buildSchema(`
type Query{
    name : String,
    gender: String
}
`);

var root={
    name: ()=>{
        return "nikhil sharma"
    },
    gender:()=>{
        return "male"
    }
}

graphql(schema,
    `{
        name,
    gender
     }`, root).then(response=>console.log(response)).catch(err=>console.log(err));
