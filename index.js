const cartitems=[
    {id:1,name:'NoteBook',price:100,quantity:5},//can change the quantity 
    {id:2,name:'sanitizer',price:250,quantity:11},
    {id:3,name:'Bag',price:1500,quantity:2},
]

let tot1,tot2,tot3,finaltot1,finaltot2,finaltot3,disc,checkout_tot,final_checkout_tot;
 
var item=cartitems.find(item=> item.id ==1);
 
if(item.quantity>3){
        
    tot1=item.price*item.quantity;
        
        if(tot1<500){
              
            finaltot1=tot1;
            
            console.log(`Total amound for ${item.quantity} ${item.name} is : ${finaltot1}`);
            console.log("If you purchase more than 5 you get discount");
          }
        
        else if(tot1>=500 && tot1 <=600){
        
            disc=.1*tot1;
            finaltot1=tot1-disc;
            console.log(`Total amound for ${item.quantity} ${item.name} is:${finaltot1}`);
        }
      
        else{

            finaltot1=tot1-60;
            console.log(`Total amound for ${item.quantity} ${item.name} is:${finaltot1}`);
        }
    
 }
 
 else{
   
    console.log(`${item.name} quantity must be more than 3`);
 
}

 var item2=cartitems.find(item2=> item2.id ==2);
 
      if(item2.quantity>10){

        tot2=item2.price*item2.quantity;
       


        if(tot2<3000){

            finaltot2=tot2;
            console.log(`Total amound for ${item2.quantity} ${item2.name} is : ${finaltot2}`);
            console.log("If you purchase more than 12 you can save 100 rupees");
        }
        else{
            
            finaltot2=tot2-100;
            console.log(`Total amound for ${item2.quantity} ${item2.name} is : ${finaltot2}`);
        }
        
    }
     else{

       console.log(`${item2.name} quantity must be more than 10`);
 
}

 var item3=cartitems.find(item3=> item3.id ==3);
 
       if(item3.quantity<=2){

           finaltot3=item3.price*item3.quantity;
           console.log(`Total amound for ${item3.quantity} ${item3.name} is : ${finaltot3}`);
     
         }
      else{

      console.log(`${item3.name} quantity must be less than 2`);

    }


   checkout_tot=finaltot1+finaltot2+finaltot3;
   
   if(checkout_tot>10000){
        
        final_checkout_tot=checkout_tot-123;
        console.log(`Total amound for  ${item.name},${item2.name} and ${item3.name}  is : ${final_checkout_tot}`);
    }
    else{
        final_checkout_tot=checkout_tot;
        console.log(`Total amound for  ${item.name},${item2.name} and ${item3.name}  is : ${final_checkout_tot}`);
    }


 