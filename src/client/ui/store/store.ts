import Rodux from "@rbxts/rodux";
import { generics } from "./reducers/generics.reducer";
import { options } from "./reducers/options.reducer";

export type RootReducer = typeof rootReducer;
export type RootStore = Rodux.Store<RootState, Rodux.Action>;
export type RootState = ReturnType<RootReducer>;

const rootReducer = Rodux.combineReducers({
    options: options,
    generics: generics,
});

export function configureStore() {
    return new Rodux.Store(rootReducer);
}