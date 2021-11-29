import React, { useState } from 'react'

export const cart = []

const CartOper = (oper,item = null)=>{
    if(oper == 1){
        //GetCarrinho
        return getCarrinho()
    }else if(oper == 2){
        addItem(item)
    }else if(oper == 3){
        delItem(item)
    }


    function getCarrinho(){
        return cart
    }
    function addItem(item){
        if(!cart.includes(item)){
            cart.push(item)
            //setCart([...cart,...item])
            console.log('ADICIONADO AO carrinho',cart)
        }
    }
    function delItem(item){
        if(cart.includes(item)){
            var i = cart.indexOf(item)
            cart.splice(i,1)
        }
    }
}

export default CartOper;