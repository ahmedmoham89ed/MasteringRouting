import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';

interface Iprops{
    isAllowed:boolean;
    redirect:string;
    children:ReactNode;
    data?:unknown;
}
const ProductAuth = ({isAllowed,redirect,children,data}:Iprops) => {
    
    if(!isAllowed){
        return(<Navigate to={redirect} replace state={data} />);
    }
    return children;
}

export default ProductAuth