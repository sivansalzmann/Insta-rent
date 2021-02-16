import { createContext } from 'react';


export const UserContext = createContext({
    login: () => {},
    logout: () => {},
    userId: 0,
    setUserId: () =>{}
}); 