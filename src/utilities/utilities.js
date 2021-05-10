import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from 'react-native';

import { Dimensions, StatusBar } from 'react-native';

export const Width = Dimensions.get("window").width;
export const Height = Dimensions.get("window").height;

export const StatusBarHeight = StatusBar.currentHeight;

export { images } from './images';

export { colors } from './colors';

export const currency = '\u20B9';

export const getFetch = async (fetchURL, headerType) => {
    // var Example_Token = await AsyncStorage.getItem('Example_Token');   // Token
    console.log("URL---------->", fetchURL);
    let headers = null;
    if (headerType === 'withoutAuth') {
        headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    } else {
        headers = {
            // 'Authorization': `JWT ${Example_Token}`
        };
    }

    const fetchCall = await fetch(fetchURL, {
        method: "GET",
        headers: headers,
    })
    console.log("Header---------->", fetchCall);

    if (fetchCall.status == 401 || fetchCall.status == 403) {
        Alert.alert('Login to verify your account');
        return;
    } else if (fetchCall.status == 503) {
        Alert.alert('Sorry', 'Service temporarily unavailable, Try again later.');
    } else if (fetchCall.status == 500 || fetchCall.status == 404 || fetchCall.status == 405 || fetchCall.status == 406) {
        Alert.alert('Sorry', 'Something went wrong please try again.');
    } else if (fetchCall.status == 415) {
        Alert.alert('Sorry', 'Unsupported media format.');
    } else if (fetchCall.status == 429) {
        Alert.alert('Sorry', 'Too many request, Try after some time.');
    } else if (fetchCall.status == 502) {
        Alert.alert('Sorry', 'Service temporarily unavailable Please try later.');
    } else if (fetchCall.status === 200) {
        const responseData = await fetchCall.json();
        return responseData;
    } else {
        Alert.alert("Try Again", "Something went wrong!")
    }
}

export const postFetch = async (fetchURL, fetchBodydata, dataType, auth, method) => {
    // var Example_Token = await AsyncStorage.getItem('Example_Token');  
    console.log("FetchBody--------->", fetchBodydata);
    console.log("FetchURL---------->", fetchURL);
    let headers = null;
    let fetchData = null;

    if (dataType === "form") {
        if (auth === 'withoutAuth') {
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        } else {
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                // 'Authorization': `JWT ${Example_Token}`
            }
        }
        fetchData = fetchBodydata
    } else {
        if (auth === 'withoutAuth') {
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        } else {
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${takaTakUser_Token}`
            }
        }
        fetchData = JSON.stringify(fetchBodydata)
    }
    console.log("Headers---------->", headers);
    console.log("Fetch---------->", fetchData);
    const fetchCall = await fetch(fetchURL, {
        method: method === "PUT" ? "PUT" : method === "PATCH" ? "PATCH" : "POST",
        headers: headers,
        body: fetchData
    })
    console.log("Header---------->", fetchCall);
    if (fetchCall.status == 401 || fetchCall.status == 403) {
        Alert.alert('Login to verify your account');
        return;
    } else if (fetchCall.status == 503) {
        Alert.alert('Sorry', 'Service temporarily unavailable, Try again later.');
    } else if (fetchCall.status == 500 || fetchCall.status == 404 || fetchCall.status == 405 || fetchCall.status == 406) {
        Alert.alert('Sorry', 'Something went wrong please try again.');
    } else if (fetchCall.status == 415) {
        Alert.alert('Sorry', 'Unsupported media format.');
    } else if (fetchCall.status == 429) {
        Alert.alert('Sorry', 'Too many request, Try after some time.');
    } else if (fetchCall.status == 502) {
        Alert.alert('Sorry', 'Service temporarily unavailable Please try later.');
    } else if (fetchCall.status === 200) {
        const responseData = await fetchCall.json();
        return responseData;
    } else {
        Alert.alert("Try Again", "Something went wrong!");
    }
}