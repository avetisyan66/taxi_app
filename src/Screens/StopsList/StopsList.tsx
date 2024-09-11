import { memo, useState, useEffect } from "react";
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';
import { View } from "react-native";
// styles
import { BookingStyles } from "../Booking/Styles/BookingStyles";
import { GlobalStyles } from "../../Global/Styles/GlobalStyles";
// interfaces
import { Address } from "./Interfaces/Address";
// components
import ListItem from "./Components/ListItem";
import CustomButton from "../../Global/Components/CustomButton/CustomButton";

interface IStopsList {
    currentLocation: string,
    selectedAddresses: Address[],
    hideStopsBtmBox: Function,
    setSelectedAddresses: Function,
    setCurrentLocation: Function
}

function StopsList({ currentLocation, selectedAddresses, hideStopsBtmBox }: IStopsList) {

    const initialAddresses = [{ index: 1, name: currentLocation, city: 'anything' }, ...selectedAddresses.map((address, index) => ({
        ...address,
        index: index + 2
    }))];

    const [orderedAddresses, setOrderedAddresses] = useState(initialAddresses);

    useEffect(() => {
        setOrderedAddresses(initialAddresses);
    }, [currentLocation, selectedAddresses]);

    function keyExtractor(item: { index: number; name: string; city: string; }) {
        return `${item.name}-${item.index}`;
    }

    function renderItem(info: DragListRenderItemInfo<{ 
        index: number, 
        name: string, 
        city: string 
    }>) {
        const { item, onDragStart, onDragEnd } = info;
    
        return (
            <ListItem
                index={item.index}
                name={item.name}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
            />
        );
    }

    async function onReordered(fromIndex: number, toIndex: number) {
        const copy = [...orderedAddresses]; 
        const removed = copy.splice(fromIndex, 1);

        copy.splice(toIndex, 0, removed[0]);
        setOrderedAddresses(copy);
    }

    return (
        <View style={[
            BookingStyles.bottomSheetContainer,
            BookingStyles.addressSelectionWrapper,
            GlobalStyles.fullHeight]}>

            <View style={GlobalStyles.flex}>
                <DragList
                    data={orderedAddresses}
                    keyExtractor={keyExtractor}
                    onReordered={onReordered}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                />
            </View>

            <CustomButton
                onClick={hideStopsBtmBox}
                title={'Done'}
            />
        </View>
    );
};

export default memo(StopsList);
