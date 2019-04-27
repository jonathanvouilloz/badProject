import {NavigationActions, StackActions} from "react-navigation";

export default StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })],
});
