import { IDropdownGroup } from "../../interfaces/IDropdownGroup"

export const dropdownGroup: IDropdownGroup = {
  name: "groupList",
  id: "groupList",
  options: [
    {
      id: 0,
      label: "Mostra tutti",
      value: "mostra tutti",
    },
    {
      id: 1,
      label: "Mostra per porto di partenza",
      value: "mostra per porto di partenza",
    },
  ],
};
