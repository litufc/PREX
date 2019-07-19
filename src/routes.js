import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Menu from './Pages/Menu';
import Schedules from './Pages/Schedules';
import Options from './Pages/Options';

const Routes = createAppContainer(
    createSwitchNavigator({
        Menu,
        Schedules,
        Options,
    })
);

export default Routes;