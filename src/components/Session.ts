import React, { createContext } from 'react';

export interface AccountContextType{
    authenticate?: (Username: string, Password: string) => void;
    status?: boolean;
}

export const SessionContext = createContext<AccountContextType>({});

