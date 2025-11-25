import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing,
} from 'react-native-reanimated';

export default function FogGradient({children, style, color, intensity = 1}) {
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withRepeat(
            withTiming(1.5, {
                duration: 18000 * intensity,
                easing: Easing.linear,
            }),
            -1,
            false
        );
    }, [intensity]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {translateX: (progress.value - 1) * 600},
            {translateY: (progress.value - 1) * 400},
        ],
    }));

    const w = style?.width || 340;
    const h = style?.height || 210;
    const br = style?.borderRadius || 20;

    return (
        <View style={[styles.container, {width: w, height: h, borderRadius: br}, style]}>
            <View
                pointerEvents="none"
                style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: color,
                }}
            />
            <Animated.View
                pointerEvents="none"
                style={[
                    StyleSheet.absoluteFill,
                    animatedStyle,
                    {left: -400, top: -500, opacity: 1},
                ]}
            >
                <LinearGradient
                    colors={[
                        'rgba(255,255,255,0)',
                        'rgba(255,255,255,0)',
                        'rgba(255,0,0,0.05)',
                        'rgba(0,0,0,0.25)',
                        'rgba(255,0,0,0.15)',
                        'rgba(255,255,0,0.04)',
                        'rgba(255,255,255,0)',
                        'rgba(255,255,255,0)',
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                    style={{width: 1000, height: 1000}}
                />
            </Animated.View>

            <Animated.View
                pointerEvents="none"
                style={[
                    StyleSheet.absoluteFill,
                    animatedStyle,
                    {left: 100, top: -400},
                ]}>
                <LinearGradient
                    colors={[
                        'rgba(255,255,255,0.00)',
                        'rgba(255,255,0,0.00)',
                        'rgba(255,0,0,0.08)',
                        'rgba(0,0,0,0.18)',
                        'rgba(255,0,0,0.08)',
                        'rgba(255,255,0,0.00)',
                        'rgba(255,255,255,0.00)',
                    ]}
                    start={{x: 3, y: 0.3}}
                    end={{x: 0.7, y: 0.7}}
                    style={{width: 1000, height: 1000}}
                />
            </Animated.View>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        backgroundColor: '#111111',
    },
});
