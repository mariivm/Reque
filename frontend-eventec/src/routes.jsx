import Root from './routes/Acceso/Root';
import Principal from './routes/Principal/Principal';
import Login from './routes/Acceso/LoginEstudiante';
import RegistroAso from './routes/Acceso/RegistroAso';
import RegistroEstudiante from './routes/Acceso/RegistroEstudiante';

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