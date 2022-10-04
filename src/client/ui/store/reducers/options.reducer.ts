import Rodux from "@rbxts/rodux";
import { OptionsState } from "../models/options.model";
import { OptionsAction } from "../actions/options.action";

const defaultState: OptionsState = {
    appearance: {
        cursorColor: Color3.fromRGB(48,0,158)
    },
};

export const options = Rodux.createReducer<OptionsState, OptionsAction>(defaultState, {
    "options/setMouseColor": (state, action) => {
        return {
            ...state,
            appearance: {
                ...state.appearance,
                cursorColor: action.cursorColor,
            },
        };
    }
});