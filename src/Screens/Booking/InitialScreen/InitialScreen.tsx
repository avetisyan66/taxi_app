import { ScrollView } from "react-native-gesture-handler";
import { memo } from "react";
import { View } from "react-native";
//styles
import { BookingStyles } from "../Styles/BookingStyles";
//components
import LocationWrapper from "../Components/LocationWrapper";
import ButtonsWrapper from "../Components/ButtonsWrapper";
import CarSelectBox from "../Components/CarSelectBox";
import CustomButton from "../../../Global/Components/CustomButton/CustomButton";
//interfaces
import { Address } from "../../StopsList/Interfaces/Address";
//mock data
import { mockDataPrices } from "../MockData/mockDataPrices";

interface IInitial {
    currentLocation: string,
    handleOpenBottomSheet: Function,
    selectedAddresses: Address[],
    setIsAddLocationClicked: Function,
    hideInitialBox: Function,
    selectedIndex: number,
    setSelectedIndex: Function,
    hideInitialShowCancel: Function,
    visiblePaymentBtmBox: Function,
    selectedCard: string
};

function InitialScreen({
    currentLocation,
    handleOpenBottomSheet,
    selectedAddresses,
    setIsAddLocationClicked,
    hideInitialBox,
    selectedIndex,
    setSelectedIndex,
    hideInitialShowCancel,
    visiblePaymentBtmBox,
    selectedCard
}: IInitial) {

    return (
        <View
            style={BookingStyles.bottomSheetContainer}
        >
            <LocationWrapper
                currentLocation={currentLocation}
                handleOpenBottomSheet={handleOpenBottomSheet}
                selectedAddresses={selectedAddresses}
                setIsAddLocationClicked={setIsAddLocationClicked}
                hideInitialBox={hideInitialBox}
            />
            <View style={BookingStyles.horizontalSelectionWrapper}>
                <ScrollView
                    style={BookingStyles.fullHeightWidth}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {mockDataPrices.map((CarInfo, index) => (
                        <CarSelectBox
                            CarStatus={CarInfo.CarStatus}
                            RoadPrice={CarInfo.RoadPrice}
                            RoadDuration={CarInfo.RoadDuration}
                            CarImage={CarInfo.CarImage}
                            key={index}
                            isSelected={selectedIndex === index}
                            onSelect={() => setSelectedIndex(index)}
                        />
                    ))}
                </ScrollView>
            </View>
            <ButtonsWrapper
                visiblePaymentBtmBox={visiblePaymentBtmBox}
                selectedCard={selectedCard}
            />
            <CustomButton
                onClick={hideInitialShowCancel}
                title={'Order'}
            />
        </View>
    )
};

export default memo(InitialScreen);