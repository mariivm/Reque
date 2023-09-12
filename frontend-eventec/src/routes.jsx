import Root from './routes/Root';
import Principal from './routes/Principal/Principal';
import Login from './routes/LoginEstudiante';
import RegistroAso from './routes/RegistroAso';
import RegistroEstudiante from './routes/RegistroEstudiante';

const routes = 
[
    {
      path: "/",
      element: <Root />
    },
    {
      path: "/calendar",
      element: <Principal />
    },
    {
      path: "/loginEstudiante",
      element: <Login />,
    },
    {
      path: "/registroAso",
      element: <RegistroAso />,
    },
    {
      path: "/registroEstudiante",
      element: <RegistroEstudiante />,
    },
]
export default routes