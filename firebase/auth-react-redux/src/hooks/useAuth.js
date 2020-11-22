import { useSelector } from 'react-redux';

const useAuth = () => {
  const { user, error } = useSelector((state) => state.auth);
  const isAuthenticated = user.isAuthenticated;

  return {
    isAuthenticated,
    error
  };
};

export default useAuth;
