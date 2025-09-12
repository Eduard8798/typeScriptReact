import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer.js";
import {fetchCustomers} from "./asyncAction/customers.js";

const App = () => {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)

    console.log(cash)

    const addCash = (cash) => {
        dispatch({type:"ADD_CASH",payload: cash})
    }
    const getCash = (cash) => {
        dispatch({type:"GET_CASH",payload: cash})
    }

    const addCustomer = (name) =>{
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {

        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className={'app'}>
            <div style={{fontSize: '3rem'}}>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>add cash</button>
                <button onClick={() => getCash(Number(prompt()))}>get cash</button>
                <button onClick={() => addCustomer(prompt())}>Add client</button>
                <button onClick={() => getCash(Number(prompt()))}>deleted client</button>
                <button onClick={() => dispatch(fetchCustomers())}>Get client of base</button>
            </div>
            <div style={{border: '1px solid black',padding: "10px",margin: '3px'}}>
                {customers.length > 0 ?
                <div>
                    {customers.map(customer=>
                    <div style={{border:'1px solid silver',padding:'4px',marginTop:'2px'}}
                    onClick={()=> removeCustomer(customer)}
                    >{customer.name}</div>
                    )}
                </div>
                    :
                    <div style={{fontSize: '3rem', marginTop:20}}>
Client not found
                    </div>
                }
            </div>
        </div>
    );
};

export default App;
