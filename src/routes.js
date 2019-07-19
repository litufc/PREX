import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Menu from './Pages/Menu';
import Agendamentos from './Pages/Agendamentos';
import Options from './Pages/Options';

const Routes = createAppContainer(
    createSwitchNavigator({
        Menu,
        Agendamentos,
        Options,
    })
);

export default Routes;