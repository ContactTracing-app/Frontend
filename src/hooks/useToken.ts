import useAuth from './useAuth';

const useToken = async () => {
  const auth = useAuth();

  if (auth.currentUser) {
    const token = await auth.currentUser.getIdToken();
    return token;
  }
  return null;
};

export default useToken;
