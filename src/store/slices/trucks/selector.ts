import { useSelector } from "react-redux";
import { RootState } from '../../'

export const useTrucksSelector = () => useSelector((state: RootState) => state.data);