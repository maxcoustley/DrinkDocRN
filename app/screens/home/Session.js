import React from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import {COLORS, ROUTES} from '../../constants';

function Session(props) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>Session!</Text>
        </View>
    );
}

export default Session;