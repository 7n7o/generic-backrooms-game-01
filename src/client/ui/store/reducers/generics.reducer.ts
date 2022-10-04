import Rodux from "@rbxts/rodux";
import { GenericsState } from "../models/generics.model";
import { GenericAction } from "../actions/generics.action";

const defaultState: GenericsState = {
    menuShown: false,
};

export const generics = Rodux.createReducer<GenericsState, GenericAction>(defaultState, {
    "generics/setMenuShown": (state, action) => {
        return {
            ...state,
            menuShown: action.menuShown,
        };
    }
});