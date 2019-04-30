import React from 'react';
import {
    View,
    ImageBackground,
    Animated,Easing,
    Dimensions
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import styles from './styles';
import Global from '../../globalUtils/Globals'
import {TextLoader} from 'react-native-indicator';


class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            springValue: new Animated.Value(0.95),
            fadeValue: new Animated.Value(0),
            progress: 0,
        };
        this.scaleValue = new Animated.Value(0)
    }

    componentDidMount() {
        this._loopAnimationUp();
        this.fadeAnimation();
    }

    _loopAnimationUp() {
        this.scaleValue.setValue(0);
        Animated.timing(this.scaleValue, {
            toValue: 1,
            duration: 1500,
            easing: Easing.linear
        }).start((o) => {
            if (o.finished) {
                this._loopAnimationDown();
            }
        });
    }

    _loopAnimationDown() {
        this.scaleValue.setValue(1);
        Animated.timing(this.scaleValue, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear
        }).start((o) => {
            if (o.finished) {
                this._loopAnimationUp();
            }
        });
    }


    progress() {
        let progress = 0;
        this.setState({ progress });
        setInterval(() => {
            progress += Math.random() / 5;
            if (progress > 1) {
                progress = 1;
            }
            this.setState({ progress });
        }, 500);
    }

    fadeAnimation = () => {
        Animated.timing(this.state.fadeValue, {
            toValue:1,
            duration:4000,
        }).start();
    };




    render() {

        const DeviceWidth = Dimensions.get('window').width;
        return (
            <ImageBackground style={styles.containerBackground}>
                <View style={styles.containerLogo}>

                   <Animated.Image
                        style={{width: DeviceWidth*0.98, height: DeviceWidth*0.98,opacity:this.state.fadeValue, transform:[{
                                translateX: this.scaleValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0]
                                })
                            },
                                {
                                    translateY: this.scaleValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 0]
                                    })
                                },
                                {
                                    scaleX: this.scaleValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.96]
                                    })
                                },
                                {
                                    scaleY: this.scaleValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [1, 0.96]
                                    })
                                }]}}
                        resizeMode='contain'
                        source={require('../../../assets/splash2.png')}
                    />
                    </View>
                <View style={styles.containerLoader}>
                    <TextLoader textStyle={styles.textLoader} text="Chargement des données" />
                    {/* <ProgressBar
                        color={Global.COLOR.gradient1}
                        borderColor={Global.COLOR.gradient1}
                        style={{width: DeviceWidth*0.60}}
                        progress={this.state.progress}
                    />*/}
                </View>
            </ImageBackground>
        );
    }
}

export default SplashScreen
