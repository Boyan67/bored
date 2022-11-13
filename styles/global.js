import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 1,
        backgroundColor: "#fff",
        marginBottom: 7
    },
    container: {
        flex: 1,
        padding: 25,
        paddingBottom: 10,
    },
    text: {
        color: "#333",
        fontWeight: "bold",
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
    },
});
