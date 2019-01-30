import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLEnumType
} from 'graphql';

const userType = new GraphQLObjectType({
    name: 'user',
    description: 'user',
    fields: () => ({
        id: {
            type: GraphQLInt,
            description: "The user's id"
        },
        name: {
            type: GraphQLString,
            description: "The user's name"
        },
        sex: {
            type: new GraphQLEnumType({
                values: {
                    Boy:{value:1},
                    Girl:{value:0}
                }
            }),
            description: "The user's sex"
        },
        age: {
            type: GraphQLString,
            description: "user's age"
        },
        nickName: {
            type: GraphQLString,
            description: "The user's nickName"
        }
    }),
});

export default userType;