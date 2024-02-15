import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element }) => {
  const user = useSelector((state) => state.auth.userInfo?.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Element />;
};

export default PrivateRoute