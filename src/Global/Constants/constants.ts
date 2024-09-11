import { Dimensions, Platform } from "react-native";

export const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get("window");
export const IS_PLATFORM_IOS = Platform.OS === "ios";
export const IS_PLATFORM_ANDROID = Platform.OS === "android";