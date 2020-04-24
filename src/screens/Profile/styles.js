import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FFFFFF",
        height: 250,
        marginTop: 10,
    },
    container: {
        backgroundColor: "#F2F2F2"
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 30
    },
    name: {
        marginBottom: 100,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 175,
        fontSize: 28,
        color: "#333333"
    },
    body: {
        marginTop: 15,
        backgroundColor: "#FFFFFF",
    },
    phone: {
        fontSize: 15,
        color: "grey",
        marginLeft: 30,
        marginTop: 25,
    },
    phoneinfo: {
        fontSize: 17.5,
        marginLeft: 30,
    },
    email: {
        fontSize: 15,
        color: "grey",
        marginLeft: 30,
        marginTop: 20
    },
    emailinfo: {
        fontSize: 18,
        marginLeft: 30,
    },
    city: {
        fontSize: 15,
        color: "grey",
        marginLeft: 30,
        marginTop: 20,
    },
    cityinfo: {
        fontSize: 18,
        marginLeft: 30,
        marginBottom: 28,
    },
    buttonContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#5d9184",
        color: "white"

    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 125,
    },
    buttonText: {
      color:"white"
    }

});

export default styles;
