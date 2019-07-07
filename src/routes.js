import { createSwitchNavigator, createAppContainer } from 'react-native';

import Login from './Pages/Login';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
    })
);

export default Routes;