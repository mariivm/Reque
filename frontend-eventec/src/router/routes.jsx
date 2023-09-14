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
<<<<<<< HEAD
import Colaboradores from '../routes/Colaboradores/Colaboradores';
=======
import Propuestas from '../routes/Propuestas/Propuestas'
import EstadisticaEvento from '../routes/EstadisticasEvento/EstadisticaEvento';
// import FormEvento from '../routes/FormEvento/FormEvento';
>>>>>>> a50b2daa60822d71700cd94133823a06dfd935d4

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
      isPrivate: false,
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
    },
    {
      path: "/colaboradores",
      element: <Colaboradores />,
      isPrivate: true,
    },{
      path: "/verPropuestas",
      element: <Propuestas />,
      isPrivate: true
    },
    {
      path: "/estadisticaEvento",
      element: <EstadisticaEvento />,
      isPrivate: true
    }
]
export default routes