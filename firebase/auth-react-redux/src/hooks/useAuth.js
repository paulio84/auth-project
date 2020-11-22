import { useSelector } from 'react-redux';

const useAuth = () => {
  const { user, error } = useSelector((state) => state.auth);
  const isAuthenticated = user && Object.keys(user).length > 0;

  return {
    isAuthenticated,
    error
  };
};

export default useAuth;
