import React, {
  useEffect,
  useState,
  createContext,
  useMemo,
} from 'react';

const UserContext = createContext();

function UserProvider(props) {
  const [userName, setUserName] = useState('');
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  useEffect(() => {
    const user = localStorage.getItem('userName');
    if (user) {
      setUserName(user);
    }
  }, []);

  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <UserContext.Provider
      value={value}
    >
      { children }
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
