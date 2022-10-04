import Rodux from "@rbxts/rodux";

export type GenericAction = Rodux.InferActionFromCreator<typeof setMenuShown>;

export const setMenuShown = Rodux.makeActionCreator("generics/setMenuShown", (menuShown: boolean) => ({
    menuShown
}));