const fakeData=require('./fakeDB');
const resolvers={
    Query: {
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
        }
    },
    Mutation: {
        createUser: (root, {name,age,city}, context, info)=>{
            //console.log('name',name);
            let object={name,age,city};
            fakeData.user.push(object);
            return "user made";
        }
    }
}

module.exports=resolvers;