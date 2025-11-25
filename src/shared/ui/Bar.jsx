import {View} from "react-native";

export const Bar = (props) => {
    return (
        <View
            style={{
                backgroundColor: props.color,
                width: props.width,
                height: 8,
                borderRadius: 3,
            }}
        />
    );
}
