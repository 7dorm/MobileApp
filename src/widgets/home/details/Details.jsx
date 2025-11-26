import {View, Text, FlatList, Dimensions} from "react-native";
import DetailsStyles from "../../../app/styles/home/details/DetailsStyles";
import {Card} from "../../../entities/card/Card";
import {AddCard} from "../../../entities/card/AddCard";


const width = Dimensions.get("window").width;

export function Details(){
    const cards = [
        {type: "Debit"},
        {type: "Virtual"},
        {type: "Add"}
    ]

    const renderCards = ({item}) => {
        if (item.type === 'Add'){
            return <AddCard/>
        }
        return <Card type={item.type}/>
    }

    return (
        <View style={[{width}, DetailsStyles.container]}>
            <FlatList
                horizontal
                snapToInterval={150}
                decelerationRate="fast"
                data={cards}
                renderItem={renderCards}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={DetailsStyles.contentContainer}
            />
        </View>
    );
}
