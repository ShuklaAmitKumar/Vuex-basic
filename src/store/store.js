import Vue from  'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export const store = new Vuex.Store({
    strict: true, // use strict true so that you can't use mutations directly
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
    },
    mutations:{
        reducePrice:(state,payload) =>{
            state.products.forEach(product =>{
                product.price -= payload;
            })
        }
    },
    actions:{
        reducePrice: (context,payload) => {
            setTimeout(function(){
                // calling mutations
                context.commit('reducePrice',payload);
            },2000);
        }
    }
})