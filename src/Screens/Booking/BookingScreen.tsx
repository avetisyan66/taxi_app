import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, PermissionsAndroid, TouchableOpacity, View } from 'react-native';
import { InitialRegion, YaMap } from 'react-native-yamap';
import { useFocusEffect } from '@react-navigation/native';
import Geolocation from '@react-native-community/geolocation';
//components
import BottomSheet from '../../Global/Components/CustomBottomSheet/BottomSheet';
import AddressSelectionBtmSheet from './Components/AddressSelectionBtmSheet';
import AddMoreLocationBtmSheet from './Components/AddMoreLocationBtmSheet';
import SelectPayment from '../SelectPayment/SelectPayment';
import SearchingBox from '../CancelOrder/Components/SearchingBox';
import NoAvailableCars from '../NoAvailableCars/NoAvailableCars';
import CancelOrder from '../CancelOrder/CancelOrder';
import StopsList from '../StopsList/StopsList';
import AddSelection from '../AddSelection/AddSelection';
import InitialScreen from './InitialScreen/InitialScreen';
import CancelFullScreen from '../CancelFullScreen/CancelFullScreen';
import DriverArrave from '../DriverArrive/DriverArrave';
import NotifyTopBox from '../DriverArrive/Components/NotifyTopBox';
import Location from '../Map/Components/Location';
import Feedback from '../Feedback/Feedback';
import CustomDrawerContent, { IDrawerRef } from '../../Navigation/Drawer/Drawer';
import UserInitialLocButton from './Components/UserInitialLocButton';
import Confirm from '../ConfirmCancel/Confirm';
//styles
import { BookingStyles } from './Styles/BookingStyles';
//data
import { initialReg } from './MockData/initialRegion';
//icons
import { CloseX } from '../../Global/Icons/CloseX';
import Menu from '../../Global/Icons/Menu';
import LeftArrow from '../../Global/Icons/LeftArrow';
//mock data
import { mockDataVisaCards } from '../SelectPayment/MockData/mockDataVisaCards';
import { initialReason } from '../CancelFullScreen/MockData/cancelReasons';
//interfaces
import { Address } from '../StopsList/Interfaces/Address';
//constants
import { IS_PLATFORM_ANDROID, WINDOW_HEIGHT } from '../../Global/Constants/constants';

const BookingScreen = (root: any) => {
  const map = useRef<YaMap>(null);
  const navigation = root.navigation;
  const drawerRef = useRef<IDrawerRef>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAddressBottomSheet, setShowAddressBottomSheet] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('Washington St, 5800');
  const [whereToLocation, setWhereToLocation] = useState('');
  const [showAddSelection, setShowAddSelection] = useState(false);
  const [selectedAddresses, setSelectedAddresses] = useState<Address[]>([]);
  const [tempSelectedAddress, setTempSelectedAddress] = useState<Address | null>(null);
  const [isAddLocationClicked, setIsAddLocationClicked] = useState(false);
  const [showStopsBtmBox, setShowStopsBtmBox] = useState(false);
  const [showInitialBtmBox, setShowInitialBtmBox] = useState(true);
  const [showPaymentBtmBox, setShowPaymentBtmBox] = useState(false);
  const [selectedCard, setSelectedCard] = useState(mockDataVisaCards[0].cardNumbers);
  const [showCancelBtmButton, setShowCancelBtmButton] = useState(false);
  const [showConfirmCancelBtmButton, setShowConfirmCancelBtmButton] = useState(false);
  // Whenever you want to show no available cars box do this -> setShowNoAvailableCarsBtmBox(true); 
  const [showNoAvailableCarsBtmBox, setShowNoAvailableCarsBtmBox] = useState(false);
  const [showReasonCancelScreen, setShowReasonCancelScreen] = useState(false);
  const [selectedReason, setSelectedReason] = useState(initialReason);
  const [showDriverArriving, setShowDriverArriving] = useState(false);
  const [showDriverArrived, setShowDriverArrived] = useState(false);
  const [showOnTrip, setShowOnTrip] = useState(false);
  const [initialRegion, setInitialRegion] = useState<InitialRegion>(initialReg);
  const [showFeedback, setShowFeedback] = useState(false);
  const animationValue = useRef(new Animated.Value(0)).current;
  const [starsAmount, setStarsAmount] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    cleanInterior: false,
    comfortableRide: false,
    politeDriver: false,
  });
  const [tipSelectedOption, setTipSelectedOption] = useState<null | number>(null);

  const showButtonsBorders = (showAddSelection || showPaymentBtmBox || showCancelBtmButton || showConfirmCancelBtmButton || showNoAvailableCarsBtmBox);

  useFocusEffect(
    useCallback(() => {
      if (drawerRef.current && drawerRef.current.isDrawerOpened()) {
        drawerRef.current?.closeDrawer();
      }
    }, [])
  );

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animationValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
        Animated.timing(animationValue, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [animationValue]);

  const innerCircleSize = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 100],
  });

  const outerCircleSize = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 200],
  });

  useEffect(() => {
    if (map.current) {
      map.current.setCenter({
        lon: initialRegion.lon,
        lat: showCancelBtmButton ? initialRegion.lat : initialRegion.lat - 0.002,
        zoom: initialRegion.zoom,
      });
    }
  }, [initialRegion, showCancelBtmButton]);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (IS_PLATFORM_ANDROID) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This app needs to access your location',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
            buttonNeutral: 'Ask Me Later',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
          return;
        }
      }
      getCurrentLocation();
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setInitialRegion({
            lat: latitude,
            lon: longitude,
            zoom: 16,
          });
        },
        (error) => console.log(error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (showReasonCancelScreen) {
      return;
    };

    if (showCancelBtmButton) {
      const timer = setTimeout(() => {
        setShowCancelBtmButton(false);
        setShowDriverArriving(true);
      }, 4000);

      // Cleanup the timeout if the component unmounts or showCancelBtmButton changes
      return () => clearTimeout(timer);
    }
  }, [showCancelBtmButton, showReasonCancelScreen]);

  useEffect(() => {
    if (showReasonCancelScreen) {
      return;
    }
    if (showDriverArriving) {
      const timer = setTimeout(() => {
        setShowDriverArriving(false);
        setShowDriverArrived(true);
      }, 4000);
      return () => clearTimeout(timer);
    };
  }, [showDriverArriving, showReasonCancelScreen]);

  useEffect(() => {
    if (showDriverArrived) {
      setTimeout(() => {
        setShowDriverArrived(false);
        setShowOnTrip(true);
      }, 4000);
    };
  }, [showDriverArrived]);

  useEffect(() => {
    if (showOnTrip) {
      setTimeout(() => {
        setShowOnTrip(false);
        setShowFeedback(true);
      }, 4000);
    };
  }, [showOnTrip]);

  const handleCardSelect = (cardNumbers: string) => {
    setSelectedCard(cardNumbers);
  };

  const handleSelectReason = (reason: string) => {
    setSelectedReason(reason);
  };

  const handleOpenBottomSheet = () => {
    setShowAddressBottomSheet(true);
    setShowInitialBtmBox(false);
  };

  const hideArrivingShowCancelReason = () => {
    setShowDriverArriving(false);
    setShowReasonCancelScreen(true);
  };

  const handleCloseBottomSheet = () => {
    setShowAddressBottomSheet(false);
    setShowInitialBtmBox(true);
  };

  const handleCloseAddMoreLocationBtnSheet = () => {
    setIsAddLocationClicked(false);
  };

  const handleTopLeftIcon = () => {
    if (showAddressBottomSheet || isAddLocationClicked || showPaymentBtmBox || showStopsBtmBox) {
      return <LeftArrow />;
    } else if (showAddSelection || showCancelBtmButton) {
      return <CloseX
        width={18}
        height={18}
      />;
    } else {
      return <Menu />;
    }
  };

  const handleTopLeftIconClick = () => {
    if (showPaymentBtmBox) {
      hidePaymentBtmBox();
    } else if (showStopsBtmBox) {
      hideStopsBtmBox();
    } else if (showAddSelection) {
      hideAddSelection();
    } else if (showCancelBtmButton) {
      hideCancelBtmBox();
    } else {
      drawerOpen();
    };
  };

  const hidePaymentBtmBox = () => {
    setShowPaymentBtmBox(false);
    setShowInitialBtmBox(true);
  };

  const hideStopsBtmBox = () => {
    setShowStopsBtmBox(false);
    setShowInitialBtmBox(true);
  };

  const hideAddSelection = () => {
    setShowAddSelection(false);
    setShowInitialBtmBox(true);
  };

  const hideInitialBox = () => {
    setShowInitialBtmBox(false);
    setShowStopsBtmBox(true);
  }

  const hideInitialShowCancel = () => {
    setShowInitialBtmBox(false);
    setShowCancelBtmButton(true);
  }

  const hideCancelBtmBox = () => {
    setShowCancelBtmButton(false);
    setShowConfirmCancelBtmButton(true);
  };

  const hideConfirmShowReason = () => {
    setShowConfirmCancelBtmButton(false);
    setShowReasonCancelScreen(true);
  };

  const hideConfirmContinueCancel = () => {
    setShowConfirmCancelBtmButton(false);
    setShowCancelBtmButton(true);
  };

  const hideCancelFullScreen = () => {
    setShowReasonCancelScreen(false);
    setShowInitialBtmBox(true);
  };

  const hideFeedbackShowInitial = () => {
    setShowFeedback(false);
    setShowInitialBtmBox(true);
  };

  const chooseInitialLocation = (location: Address) => {
    setTempSelectedAddress(
      {
        name: location.name,
        city: location.city
      });
    setShowAddressBottomSheet(false);
    setShowAddSelection(true);
  };

  const handleStarPress = (rating: any) => {
    setStarsAmount(rating);
  };

  const drawerOpen = () => {
    if (drawerRef.current) {
      drawerRef.current.openDrawer();
    }
  };

  const handleMultibleBtmBoxHeight = () => {
    if (showAddSelection) {
      return 185;
    } else if (showAddressBottomSheet) {
      return 0;
    } else if (showCancelBtmButton) {
      return 105;
    } else if (showConfirmCancelBtmButton) {
      return 163;
    } else if (showInitialBtmBox) {
      return 370;
    } else if (showNoAvailableCarsBtmBox) {
      return 163;
    } else if (showPaymentBtmBox) {
      return 380;
    } else if (showReasonCancelScreen || showFeedback) {
      return WINDOW_HEIGHT;
    } else if (showDriverArriving || showDriverArrived) {
      return 200;
    } else if (showOnTrip) {
      return 230;
    } else {
      const initialBoxHeight = 40;
      const itemHeight = 40;
      const buttonHeight = 60;
      const bottomSpacing = 30;
      const totalHeight = (initialBoxHeight + (selectedAddresses.length + 1) * itemHeight + buttonHeight) + bottomSpacing;
      return totalHeight;
    };
  };

  const visiblePaymentBtmBox = () => {
    setShowAddSelection(false);
    setShowInitialBtmBox(false);
    setShowStopsBtmBox(false);
    setShowPaymentBtmBox(true);
  };

  const confirmSelection = () => {
    setShowAddSelection(false);
    setShowInitialBtmBox(true);
    if (tempSelectedAddress) {
      setSelectedAddresses([
        ...selectedAddresses,
        tempSelectedAddress
      ]);
    }
    setTempSelectedAddress(null);
  };

  return (
    <View style={BookingStyles.container}>
      <View style={BookingStyles.mapAndBottomWrapper}>
        <View style={BookingStyles.mapAndBottomWrapper}>
          <YaMap
            ref={map}
            style={BookingStyles.container}
            showUserPosition={true}
            followUser={true}
            initialRegion={initialRegion}
            tiltGesturesEnabled={true}
            userLocationIcon={!showCancelBtmButton ? require('./Assets/loc.png') : undefined}
            userLocationIconScale={showCancelBtmButton ? 0 : 1}
          />
        </View>
        <Location
          showCancelBtmButton={showCancelBtmButton}
          showAddSelection={showAddSelection}
          innerCircleSize={innerCircleSize}
          outerCircleSize={outerCircleSize}
        />
        <TouchableOpacity
          style={[
            BookingStyles.shadowStyle,
            BookingStyles.closeTopIconWrapper]}
          onPress={() => handleTopLeftIconClick()}>
          {handleTopLeftIcon()}
        </TouchableOpacity>

        {(showPaymentBtmBox || showCancelBtmButton)
          ? null
          : <UserInitialLocButton
            handleMultibleBtmBoxHeight={handleMultibleBtmBoxHeight}
          />}

        {showCancelBtmButton
          && <SearchingBox />}

        {showDriverArrived
          && <NotifyTopBox />}
      </View>

      <View style={[
        BookingStyles.whiteClosedWrapper,
        BookingStyles.customBottomMore,
        BookingStyles.shadowStyle, {
          height: handleMultibleBtmBoxHeight(),
          borderTopLeftRadius: showButtonsBorders ? 24 : 0,
          borderTopRightRadius: (showButtonsBorders || showDriverArriving || showDriverArrived || showOnTrip) ? 24 : 0
        }]}>
        {showNoAvailableCarsBtmBox
          && <NoAvailableCars />}

        {showFeedback && (
          <Feedback
            setSelectedOptions={setSelectedOptions}
            selectedOptions={selectedOptions}
            drawerOpen={drawerOpen}
            handleStarPress={handleStarPress}
            starsAmount={starsAmount}
            setTipSelectedOption={setTipSelectedOption}
            tipSelectedOption={tipSelectedOption}
            hideFeedback={hideFeedbackShowInitial}
          />
        )}

        {showStopsBtmBox && (
          <StopsList
            currentLocation={currentLocation}
            selectedAddresses={selectedAddresses}
            hideStopsBtmBox={hideStopsBtmBox}
            setSelectedAddresses={setSelectedAddresses}
            setCurrentLocation={setCurrentLocation}
          />
        )}

        {showCancelBtmButton
          && <CancelOrder
            onClickCancel={hideCancelBtmBox}
          />}

        {showConfirmCancelBtmButton
          && <Confirm
            hideConfirmShowReason={hideConfirmShowReason}
            hideConfirmContinueCancel={hideConfirmContinueCancel}
            title={'Are you sure you want to cancel this order?'}
            option1={'No'}
            option2={'Yes'}
          />}

        {showPaymentBtmBox
          && <SelectPayment
            selectedCard={selectedCard}
            handleCardSelect={handleCardSelect}
            hidePaymentBtmBox={hidePaymentBtmBox}
          />}

        {showAddSelection
          && <AddSelection
            name={tempSelectedAddress?.name}
            confirmSelection={confirmSelection}
          />}

        {showReasonCancelScreen
          && <CancelFullScreen
            hideCancelFullScreen={hideCancelFullScreen}
            selectedReason={selectedReason}
            handleSelectReason={handleSelectReason}
          />}

        {(showDriverArriving || showDriverArrived || showOnTrip)
          && <DriverArrave
            hideArrivingShowCancelReason={hideArrivingShowCancelReason}
            showDriverArriving={showDriverArriving}
            showDriverArrived={showDriverArrived}
          />}

        {showInitialBtmBox
          && <InitialScreen
            currentLocation={currentLocation}
            handleOpenBottomSheet={handleOpenBottomSheet}
            selectedAddresses={selectedAddresses}
            setIsAddLocationClicked={setIsAddLocationClicked}
            hideInitialBox={hideInitialBox}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            hideInitialShowCancel={hideInitialShowCancel}
            visiblePaymentBtmBox={visiblePaymentBtmBox}
            selectedCard={selectedCard}
          />}

        {showAddressBottomSheet &&
          <BottomSheet
            show={showAddressBottomSheet}
            heightPer={0.8}
            onDismiss={() => handleCloseBottomSheet()}
            childComponent={
              <AddressSelectionBtmSheet
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation}
                whereToLocation={whereToLocation}
                setWhereToLocation={setWhereToLocation}
                chooseInitialLocation={chooseInitialLocation}
              />}
          />}
        {isAddLocationClicked &&
          <BottomSheet
            show={isAddLocationClicked}
            heightPer={0.8}
            onDismiss={() => handleCloseAddMoreLocationBtnSheet()}
            childComponent={
              <AddMoreLocationBtmSheet
                whereToLocation={whereToLocation}
                setWhereToLocation={setWhereToLocation}
                setShowAddressBottomSheet={setIsAddLocationClicked}
                selectedAddresses={selectedAddresses}
                setSelectedAddresses={setSelectedAddresses}
              />}
          />}
      </View>
      <CustomDrawerContent
        ref={drawerRef}
        navigation={navigation}
      />
    </View>
  );
};

export default BookingScreen;
