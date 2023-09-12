import Root from '../routes/Root';
import Principal from '../routes/Principal/Principal';
import Login from '../routes/LoginEstudiante';
import RegistroAso from '../routes/RegistroAso';
import RegistroEstudiante from '../routes/RegistroEstudiante';

const routes = 
[
    {
      path: "/",
      element: <Root />,
      isPrivate: false,
    },
    {
      path: "/calendar",
      element: <Principal />,
      isPrivate: true,
    },
    {
      path: "/loginEstudiante",
      element: <Login />,
      isPrivate: false,
    },
    {
      path: "/registroAso",
      element: <RegistroAso />,
      isPrivate: false,
    },
    {
      path: "/registroEstudiante",
      element: <RegistroEstudiante />,
      isPrivate: false,
    },
]
export default routes