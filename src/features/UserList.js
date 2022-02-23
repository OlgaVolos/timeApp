import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View} from "react-native";

const UserList = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]); //тут будуть зберігатися списки юзерів
    const [page, setPage] = useState(1); //для пагінації
    const [refresh, setRefresh] = useState(false); //для оновлення списків

    const makeRequest = () => {
        const url = `https://randomuser.me/api/?seed=1&page=${page}&results=20`;
        setLoading(true);

        fetch(url).then((value) => value.json()).then((value) => {
            setLoading(false);
            setRefresh(false)
            setData(page === 1 ? value.results : [...data, ...value.results])
        }).catch((err) => {
            setLoading(false)
        })
    }   //1

    useEffect(() => {
        makeRequest()
    }, []); //3

    useEffect(() => {
        makeRequest()
    }, [page]) //слідкуватиме за сторінками і буде догружати сторінки //6

    const handleLoadMore = () => {
        setPage(page + 1) //буде додавати сторінки
    }; // 5

    const handleRefresh = () => {
        setPage(1);
        setRefresh(true)// лише для однієї сторінки
    }; //4

    const renderFooter = () => {
        if (!loading) return null

        return (
            <View style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: "#8532a8"
            }}>
                <ActivityIndicator animating size="large"/>

            </View>
        )
    }; //7

    const renderItem = ({item}) => {
        return (
            <View style={styles.renderItem}>
                <Image style={styles.logo}
                       source={{uri: item.picture.large}}/>
                <Text style={styles.itemTxt}>
                    {item.name.first} {item.name.last}
                </Text>
            </View>
        )
    }; //2


    return <View style={styles.container}>
        {!!data.length && (<FlatList
            data={data}
            renderItem={renderItem}
            onRefresh={handleRefresh}
            refreshing={refresh}
            keyExtractor={(item) => item.email}
            onEndReached={handleLoadMore}
            ListFooterComponent={renderFooter}
            onEndReachedThreshold={0.5} //щоб бачити футер

        />)}
    </View>
};


export default UserList;

let styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        height: 70,
        width: 70
    },
    renderItem: {
        width: '100%',
        marginBottom: 10,
        padding: 15,
        backgroundColor: "#32a0a8",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    itemTxt: {
        fontSize: 24,
        color: '#000'
    }
});
