import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql';


import userType from './types/user';
import goodsType from './types/goods';
import shopCartType from './types/shopCart'

const fetch = require("./fetch");

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: new GraphQLList(userType),
                resolve: async () => {
                    let list = await fetch.get('/user/list');
                    return list.data
                }
            },
            userDetail: {
                type: userType,
                args: {
                    uid: {
                        type: new GraphQLNonNull(GraphQLInt),
                    }
                },
                resolve: async (Object, {uid}) => {
                    let list = await fetch.get('/user/detail', {id: uid});
                    return list.data
                }
            },
            goods: {
                type: new GraphQLList(goodsType),
                args: {
                    page: {
                        type: new GraphQLNonNull(GraphQLInt),
                    },
                    size: {
                        type: new GraphQLNonNull(GraphQLInt),
                    }
                },
                resolve: async (Object, {page, size}) => {
                    let list = await fetch.post('/goods/list',{page, size});
                    return list.data
                }
            },
            goodsDetail: {
                type: goodsType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLInt),
                    }
                },
                resolve: async (Object, {id}) => {
                    let list = await fetch.get('/goods/detail', {id});
                    return list.data
                }
            },
            shopCart: {
                type: new GraphQLList(shopCartType),
                args: {
                    uid: {
                        type: new GraphQLNonNull(GraphQLInt),
                    }
                },
                resolve: async (object, {uid}) => {
                    console.log(uid);
                    let list = await fetch.get('/shopCart/list', {uid});
                    return list.data
                }
            }
        }
    })
});

export default schema;
