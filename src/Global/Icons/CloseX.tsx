import { Path, Svg } from "react-native-svg";

interface ICloseX {
    width: number,
    height: number,
    bg?: string,
};

export const CloseX = ({ width, height, bg = '#3E4958' }: ICloseX) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 10 10" fill="none" >
            <Path d="M4.15256 5.00008L0.52583 1.37403C0.29152 1.13976 0.29152 0.75994 0.52583 0.525675C0.760139 0.291409 1.14003 0.291409 1.37434 0.525675L5.00107 4.15173L8.62586 0.527612C8.86017 0.293347 9.24006 0.293347 9.47437 0.527612C9.70868 0.761878 9.70868 1.1417 9.47437 1.37596L5.84958 5.00008L9.47416 8.62399C9.70847 8.85825 9.70847 9.23808 9.47416 9.47234C9.23985 9.70661 8.85996 9.70661 8.62565 9.47234L5.00107 5.84843L1.37454 9.47428C1.14024 9.70854 0.760345 9.70854 0.526036 9.47428C0.291727 9.24001 0.291727 8.86019 0.526036 8.62593L4.15256 5.00008Z" fill={bg} />
        </Svg>
    )
};