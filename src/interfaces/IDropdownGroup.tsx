export interface Option {
    id: number,
    label: string,
    value: string,
}

export interface IDropdownGroup {
    name: string,
    id: string,
    options: Option[],
}