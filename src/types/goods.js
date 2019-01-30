import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql';

const goodsType = new GraphQLObjectType({
    name: 'goods',
    description: 'goods on sale',
    fields:() => ({
        id: {
            type: GraphQLInt,
            description: "The goods id"
        },
        goodsName: {
            type: GraphQLString,
            description: "The goods's name"
        },
        price: {
            type: GraphQLString,
            description: "The goods's price"
        },
        color: {
            type: GraphQLString,
            description: "The goods's color"
        },
        size: {
            type: GraphQLString,
            description: "The goods's size"
        },
        goodsDesc:{
            type: GraphQLString,
            description:  "The goods's Desc"
        },
        goodsType:{
            type: GraphQLString,
            description:  "The goods's Type"
        },
        storeNum:{
            type: GraphQLInt,
            description:  "The goods's storeNum"
        }
    }),
});

export default goodsType;