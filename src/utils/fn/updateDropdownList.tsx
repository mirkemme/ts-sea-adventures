import { IDropdownList } from "../../interfaces/IDropdownList";

interface IParams {
  dropdownList: IDropdownList[];
  id: number;
  option?: string;
}

// ritorna l'array delle dropdown modificato in base a quello attualmente selezionato
export function updateDropdownList({ dropdownList, id, option }: IParams): IDropdownList[]{
  let updatedDropdownList = dropdownList.map((dropdown: IDropdownList) => {
    if (dropdown.id === id)
      return { ...dropdown, isOpen: !dropdown.isOpen, selectedOption: option };
    else return { ...dropdown, isOpen: false, selectedOption: "" };
  });
  return updatedDropdownList;
}
