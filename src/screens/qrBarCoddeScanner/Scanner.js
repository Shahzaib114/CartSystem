import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useCameraDevice } from 'react-native-vision-camera'

const Scanner = () => {
    const device = useCameraDevice('back')
    const { hasPermission, requestPermission } = useCameraPermission()
    console.log('hasPermission', hasPermission)
    // console.log('requestPermission', requestPermission)

    if (device == null) {
        return (
            <View>
                <Text style={{ color: 'black' }}>
                    rhere is no camera device
                </Text>
            </View>
        )
    }
    return (
        <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
        />
    )
}
export default Scanner