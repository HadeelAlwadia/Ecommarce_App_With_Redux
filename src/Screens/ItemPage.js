import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getItem}  from "../Redux/List/actions";
import * as action from '../Redux/List/actions';
import  Optinaldata from '../Optinaldata';

function ItemPage() {
    const {id}=useParams();
    const {isLoading, error, item}=useSelector(state => state.item)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getItem(id))
    },[dispatch, id])
    
    return (
        isLoading?
            <div>Loading...</div>:
           <>
           <div>{id} : {error?error:item.title}</div>
            <div>
                {Optinaldata.map((item)=>{
                    return(
                        <div>
                            <h2>item.title</h2>
                            <button  onClick={()=>dispatch(  action.addItemAction(item))}>  add</button>
                        </div>)
                    })
                  }
            </div>

            <button  onClick={()=>dispatch(action.delItem(id))}>delete</button>


            </>
            
    );
}

export default ItemPage;