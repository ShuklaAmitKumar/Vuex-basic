import Vue from  'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        products: [
            {name:'Laptop', price:300},
            {name:'Mobile', price:200},
            {name:'Tel Phone', price:100},
            {name:'Watch', price:20},
            {name:'Mouse', price:40},
          ]
    },
    getters:{
        saleProducts:state=>{
            var saleProducts = state.products.map( product =>{
                return {
                    name:'**' + product.name + '**',
                    price: product.price/2
                }
            });
            return saleProducts;
        }
    }
})