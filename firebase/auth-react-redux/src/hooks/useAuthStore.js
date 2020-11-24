import { useSelector } from 'react-redux';

const useAuthStore = () => {
  const { user, error } = useSelector((state) => state.auth);
  const isAuthenticated = user.isAuthenticated;

  return {
    isAuthenticated,
    error
  };
};

export default useAuthStore;
