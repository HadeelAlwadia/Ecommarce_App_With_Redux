import React from 'react';
import {useSelector} from "react-redux";
import ToDoListClassComponent from "../Components/ToDoListClassComponent";
import {useNavigate} from "react-router";

export default function Home() {
    const navigate=useNavigate()

     
        const{list:{list, isLoading, error}}=useSelector(state=>state);
    
        return (
            <>
    
              
    
                {/** Class component with redux*/}
                <ToDoListClassComponent/>
                
                {error?
                    <div>{error}</div>
                    :
                    <>
                        {isLoading ?
                            <span>Loading...</span> :
                            list.map(item =>
                                <div
    
                                    className={'item'} key={item.id}
                                     onClick={()=>navigate(`/${item.id}`)}>
                                    {item.title}
                                </div
                                    >)
                        }
    
                    </>
                }
    
            </>
        );
    }