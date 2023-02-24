import React, { createContext } from 'react';

export interface AccountContextType{
    authenticate: (Username: string, Password: string) => void;
    getSession: ()=> void;
    logout: () => void;
    status: boolean;
}

export const SessionContext = createContext<AccountContextType>({
    authenticate: ()=> undefined,
    getSession: ()=> undefined,
    logout: ()=> undefined,
    status: false,
});

