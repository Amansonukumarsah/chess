import React from 'react'
import './Chess/Chesss.css'
import { useState } from 'react'
import { useEffect } from 'react'
const Chessboard = () => {
    const [data,setdata]=useState()
    const [btn,setbtn]=useState([])
    const [chess,setchess]=useState([])
    
    
const black={
  width:'100px',
  height:'100px',
  backgroundColor:'black',
  color:'white'
}

const white ={
    width:'100px',
    height:'100px',
    backgroundColor:'white'
}

const chessbox={
    width:100*data,
    display:'flex',
    flexWrap:'wrap',
    margineTop:'20px',
    boxShadow:'0px 10px 10px rgb(0,0,0,0,1)'
}

    const ches=()=>{
       let arr=[]
        for(var i=0;i<data;i++)
        {
            let arr1=[]
            for(var j=0;j<data;j++)
            {
                if((j+i)%2==0)
                {
                    arr1.push(<div style={white}></div>)
                }
                else{
                    arr1.push(<div style={black}></div>)
                }
            }
            arr.push(arr1)
        }

        setchess(arr)
    }


    // useEffect(()=>{
    //     // calculator(500)
    //     calculator(500,0.50)

    // })

    // function calculator(price,rate=0.20)
    // {
    //    var offer_price=price+rate
    //    console.log('offer:'+offer_price)
    // }


useEffect(()=>{
    ches()  
})
  return (
    <>
     <div className="chess">
        <div>
        <h1>CHESS BOARD</h1>
        <input type="number" onChange={(e)=>setdata(e.target.value)}/>
        {/* <button  className='btn'>Submit</button> */}
        </div>
        <section style={chessbox}>
            {chess}
        </section>
     </div>
    </>
  )
}

export default Chessboard;