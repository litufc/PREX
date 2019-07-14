import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Menu from './Pages/Menu';
import Agendamentos from './Pages/Agendamentos';

const Routes = createAppContainer(
    createSwitchNavigator({
        Menu,
        Agendamentos
    })
);

export default Routes;