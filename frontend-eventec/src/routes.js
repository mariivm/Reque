import Root from './routes/root';
import Principal from './routes/principal';
//import Login from './routes/login';

export default  [
    {
      path: "/",
      element: <Root />
    },
    {
      path: "/calendar",
      element: <Principal />
    }
    // {
    //   path: "./routes/login",
    //   element: <Login />,
    // },
  ]