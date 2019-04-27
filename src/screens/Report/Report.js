import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Report extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Report</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Report
