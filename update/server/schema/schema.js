const graphql = require('graphql');
const User = require('../models/user');
const Sleephour = require('../models/sleephour');
const _ = require('lodash');

const { 
    GraphQLObjectType, 
    GraphQLString,  
    GraphQLSchema,
    GraphQLID, 
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;

/*
var users = [
    { name: 'taixingbi',  github: 'https://github.com/taixingbi', id: '1'},
    { name: 'Sccot',  github: 'https://github.com/Sccot', id: '2'},
    { name: 'andrew',  github: 'https://github.com/andrew', id: '3'},
    { name: 'taylorotwell',  github: 'https://github.com/taylorotwell'},
    { name: 'egoist',  github: 'https://github.com/egoist', id: '5'},
];

var sleephours = [
    { date: '2018-10-04',  hour: 7.2, id: '1' },
    { date: '2018-10-05',  hour: 6.5, id: '2' },
    { date: '2018-10-06',  hour: 7.0, id: '3' },
    { date: '2018-10-07',  hour: 7, id: '4' },
    { date: '2018-10-08',  hour: 6.6, id: '5' },
    { date: '2018-10-09',  hour: 8.9, id: '6' },
    { date: '2018-10-10',  hour: 7, id: '7' },
];
*/


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        github: { type: GraphQLString },
    })
});

const SleephourType = new GraphQLObjectType({
    name: 'Sleephour',
    fields: ( ) => ({
        id: { type: GraphQLID },
        date: { type: GraphQLString },
        hour: { type: GraphQLFloat }
    })
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                github: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                let user = new User({
                    name: args.name,
                    github: args.github
                });
                return user.save();
            }
        },

        addSleephour: {
            type: SleephourType,
            args: {
                date: { type: new GraphQLNonNull(GraphQLString) },
                hour: { type: new GraphQLNonNull(GraphQLFloat) }
            },
            resolve(parent, args){
                let sleephour = new Sleephour({
                    date: args.date,
                    hour: args.hour
                });
                return sleephour.save();
            }
        }

    }
});



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                console.log("user ID:" + args.id + " was queried"); 
                // code to get data from db / other source
                //return _.find(users, { id: args.id });
                return User.findById(args.id);

            }
        },

        sleephour: {
            type: SleephourType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                console.log("sleephou ID:" + args.id + " was queried"); 
                // code to get data from db / other source
                //return _.find(sleephours, { id: args.id });
                return UsSleephour.findById(args.id);

            }
        },

        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                //return users; 
                return User.find({});
            }
        },

        sleephours: {
            type: new GraphQLList(SleephourType),
            resolve(parent, args){
                //return sleephours;
                return Sleephour.find({});
            }
        },

    }
});
 
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});