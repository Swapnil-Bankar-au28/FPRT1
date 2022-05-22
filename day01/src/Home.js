import React from 'react';
import Itemcard from './Itemcard';
import Data from './Data';
const Home = () => {
    // console.log(Data.produceData)

    return (
       <>
        <h1 className='text-center mt-4'style={{color:"skyblue" ,textDecoration: 'underline',}}>SHOPPING-CART</h1> 
        <section className='py-2 container d-flex align-items-center 'style={{backgroundColor:"lightgrey",width:"100%",height:"100%"}}>
            <div className='row justify-content-center'>
            {Data.produceData.map((item,index)=>{ 
                return( 
                    <Itemcard 
                        img = {item.img} 
                        title= {item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item}
                        key={index}  
                            
                    />

                )

            })}

               
            </div>
        </section>  
       </>
       );
};

export default Home;