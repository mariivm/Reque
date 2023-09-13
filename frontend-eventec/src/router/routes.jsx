import Root from '../routes/Acceso/Root';
import Principal from '../routes/Principal/Principal';
import Login from '../routes/Acceso/LoginEstudiante';
import RegistroAso from '../routes/Acceso/RegistroAso';
import RegistroEstudiante from '../routes/Acceso/RegistroEstudiante';
import FormEvento from '../routes/FormEvento/FormEvento';
import EventosInscritos from '../routes/EventosInscritos/EventosInscritos';
import Feedback from '../routes/Feedback/Feedback';
import Foro from '../routes/Foro/Foro';
import FormActividad from '../routes/FormActividad/FormActividad';
import FormPropuesta from '../routes/FormPropuesta/FormPropuesta';
// import FormEvento from '../routes/FormEvento/FormEvento';

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
    {
      path: "/crearEvento",
      element: <FormEvento />,
      isPrivate: true,
    },
    {
      path: "/eventosInscritos",
      element: <EventosInscritos />,
      isPrivate: true,
    },
    {
      path: "/feedback",
      element: <Feedback />,
      isPrivate: true,
    },
    {
      path: "/foro",
      element: <Foro />,
      isPrivate: true,
    },
    {
      path: "/crearActividad",
      element: <FormActividad />,
      isPrivate: true,
    },
    {
      path: "/crearPropuesta",
      element: <FormPropuesta />,
      isPrivate: true,
    }
]
export default routes