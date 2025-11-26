import {FlatList, View, Text} from "react-native";
import SectionStyles from "../../../app/styles/home/expenses/SectionStyles";
import {Operation} from "../../../shared/ui/Operation";


export function Sections(props) {
    const data = [
        {
            date: "Today",
            operations: [{
                avatar: "man",
                accountName: "Matthew Billson",
                type: "Money Transfer",
                time: "12:08",
                date: "Jun 9",
                amount: "$56.19"
            }]
        },
        {
            date: "Yesterday",
            operations: [
                {
                    avatar: "starbucks",
                    accountName: "Starbucks",
                    type: "Food",
                    time: "19:21",
                    date: "Jun 8",
                    amount: "$122.47"
                },
                {
                    avatar: "netflix",
                    accountName: "Netflix",
                    type: "Entertainment",
                    time: "08:53",
                    date: "Jun 8",
                    amount: "$13.17"
                }
            ]
        },
        {
            date: "Yesterday",
            operations: [
                {
                    avatar: "starbucks",
                    accountName: "Starbucks",
                    type: "Food",
                    time: "19:21",
                    date: "Jun 8",
                    amount: "$122.47"
                },
                {
                    avatar: "netflix",
                    accountName: "Netflix",
                    type: "Entertainment",
                    time: "08:53",
                    date: "Jun 8",
                    amount: "$13.17"
                }
            ]
        }
    ];

    const renderItem = ({ item }) => (
        <View style={SectionStyles.day}>
            <Text style={SectionStyles.title}>{item.date}</Text>
            {item.operations.map((operation, index) => (
                <Operation
                    key={index}
                    data={operation}
                />
            ))}
        </View>
    );

    return (
        <View style={SectionStyles.flatContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={SectionStyles.listContainer}
                scrollEnabled={true}
            />
        </View>
    );
}
// margin bottom 24
