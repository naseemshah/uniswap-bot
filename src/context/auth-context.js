import React from 'react';

export default React.createContext({
    token: null,
    username: null,
    settings:null,
    login: (token, username ) => {},
    logout: () => {}
});