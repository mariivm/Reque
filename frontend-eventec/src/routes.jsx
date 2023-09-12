import Root from './routes/root';
import Principal from './routes/principal';
import Login from './routes/loginEstudiante';
import RegistroAso from './routes/registroAso';
import RegistroEstudiante from './routes/registroEstudiante';

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