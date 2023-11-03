import { CardData, Port } from "../utils/types/typeCard";
import { IDropdownGroup } from "./IDropdownGroup";
import { IDropdownList } from "./IDropdownList";

export interface ICardProps {
    data: CardData,
}
export interface IDataProps {
    data: CardData[],
}

export interface IButtonProps {
    handleClick: () => void,
    label: string,
    isReservationAvailable?: boolean,
    count?: number,
}
 
export interface ICardListProps {
    data: CardData[];
    isButtonVisible?: boolean;
}

export interface IGroupShowProps {
    data: CardData[];
    portList: Port[];
}

export interface IHeroProps {
    title: string,
    subtitle?: string,
}

export interface IDialogProps {
    isDialogOpen: boolean,
    label: string,
}
 
export interface IDropdownSelectProps {
    options: IDropdownGroup,
    handleChange: ({}) => void,
    dropdown: IDropdownList,
    dropdownList: IDropdownList[],
    setDropdownList: ({}) => void,
}