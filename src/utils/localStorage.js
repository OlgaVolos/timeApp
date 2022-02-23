import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE = 'focusHistory';

export const setList = async (focusHistory) => {
    try {
        const jsonValue = JSON.stringify(focusHistory)
        await AsyncStorage.setItem(STORAGE, jsonValue)
    } catch (e) {
        console.log(e, 'error')
    }
}

export const getList = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log(e, 'error')
    }
}

// export const getList = async () => {
//   return await AsyncStorage.getItem(STORAGE);
// }
// export const setList = async (focusHistory) => {
//   await AsyncStorage.setItem(STORAGE, JSON.stringify(focusHistory));
// }

export const clearList = async () => {
    await AsyncStorage.clear();
}

