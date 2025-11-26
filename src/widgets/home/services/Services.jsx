import {View} from "react-native";
import {Button} from "../../../shared/ui/Button";
import ServicesStyles from "../../../app/styles/home/services/ServicesStyles";

import Travel from '../../../../assets/servicesIcons/travel.svg';
import Delivery from '../../../../assets/servicesIcons/delivery.svg';
import Present from '../../../../assets/servicesIcons/present.svg';
import Support from '../../../../assets/servicesIcons/customer-support.svg';

export function Services() {
    const elements = [
        {icon: Travel, label: "Travel"},
        {icon: Delivery, label: "Delivery"},
        {icon: Present, label: "Bonuses"},
        {icon: Support, label: "Support"}
    ]
    return (
        <View style={ServicesStyles.container}>
            {elements.map((item, index) => (
                <Button
                    key={index}
                    onClick={() => {}}
                    icon={item.icon}
                    label={item.label}
                    style={ServicesStyles}
                    mainColor={item.mainColor}
                    secondaryColor={item.secondaryColor}
                />
            ))}
        </View>
    );
}
