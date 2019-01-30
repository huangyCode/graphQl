import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

const shopCartType = new GraphQLObjectType({
    name: 'shopCart',
    description: 'shopCart',
    fields: () => ({
        id: {
            type: GraphQLInt,
            description: "The shopCart's id"
        },
        uid: {
            type: GraphQLInt,
            description: "The shopCart's uid"
        },
        amount: {
            type: GraphQLInt,
            description: "The shopCart's amount"
        },
        goodsName: {
            type: GraphQLString,
            description: "The shopCart's name"
        },
        price: {
            type: GraphQLString,
            description: "The shopCart's price"
        },
        color: {
            type: GraphQLString,
            description: "TheshopCart's color"
        },
        size: {
            type: GraphQLString,
            description: "The shopCart's size"
        },
        goodsDesc: {
            type: GraphQLString,
            description: "The shopCart's Desc"
        },
        goodsType: {
            type: GraphQLString,
            description: "The shopCart'sType"
        },
        storeNum: {
            type: GraphQLInt,
            description: "The shopCart'sstoreNum"
        }
    }),
});

export default shopCartType;