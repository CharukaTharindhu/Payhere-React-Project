import React, {useState} from 'react';

function Payments () {

  return(
    <div>
      <form method="post" action="https://sandbox.payhere.lk/pay/checkout">   
        <input type="hidden" name="merchant_id" value="1218469"/>
        <input type="hidden" name="notify_url" value="https://dev.api.ictjobs.app/payment"/> 
        <input type="hidden" name="return_url" value="https://payhere-payment-gateway.web.app/success"/>
        <input type="hidden" name="cancel_url" value="https://payhere-payment-gateway.web.app/cancel"/>
        
         
        <br/><br/>Item Details<br/>
        <input type="text" name="order_id" value="610a66e93fe05c4a74822649"/>
        <input type="text" name="custom_1" value="" />
        <input type="text" name="items" value="Door bell wireless"/><br/>
        <input type="text" name="currency" value="LKR"/>
        <input type="text" name="amount" value="1000"/>  
        <br/><br/>Customer Details<br/>
        <input type="text" name="first_name" value="Charuka"/>
        <input type="text" name="last_name" value="Perera"/><br/>
        <input type="text" name="email" value="Charuka@gmail.com"/>
        <input type="text" name="phone" value="0771234567"/><br/>
        <input type="text" name="address" value="No.1, Galle Road"/>
        <input type="text" name="city" value="Colombo"/>
        <input type="hidden" name="country" value="Sri Lanka"/><br/><br/> 
        <input type="submit" value="Buy Now"/>   
      </form> 

    </div>

    
  )
  
}

export default Payments;