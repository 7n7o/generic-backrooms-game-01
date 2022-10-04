import Rodux from "@rbxts/rodux";

export type OptionsAction = Rodux.InferActionFromCreator<typeof setMouseColor>;

export const setMouseColor = Rodux.makeActionCreator("options/setMouseColor", (cursorColor: Color3) => ({
    cursorColor
}))