import AsyncStorage from "@react-native-async-storage/async-storage";

const getRole = async () => {
    const role = await AsyncStorage.getItem("accountType");
    return role;
};

export const getUser = async () => {
    const user = await AsyncStorage.getItem('currentUser');
    const parsed = JSON.parse(user);
    return parsed
}

export default getRole;