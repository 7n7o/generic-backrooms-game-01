import Roact from "@rbxts/roact";
import { useState, withHooks } from "@rbxts/roact-hooked";
import { useAppStore, useAppDispatch, useAppSelector } from "client/ui/hooks/rodux-hooks";
import { UserInputService, Players } from "@rbxts/services";
import TopBar from "./TopBar";
import { setMenuShown } from "client/ui/store/actions/generics.action";

function OptionsMenu() {
    const dispatch = useAppDispatch();
    const isShown = useAppSelector((state) => state.generics.menuShown) as boolean;

    UserInputService.InputBegan.Connect((input) => {
        if (input.KeyCode === Enum.KeyCode.Escape) {
            dispatch(setMenuShown(true));
        }
    });

    return (
        <frame
        AnchorPoint={new Vector2(.5,.5)} Position={new UDim2(.5,0,.5,0)} Size={new UDim2(0, 225, 0, 320)} Visible={isShown} Active={isShown}>
                <uilistlayout Padding={new UDim(0, 5)} /> 
                <TopBar dispatch={dispatch}/>       
                <Options />
        </frame>
    )
}

export default withHooks(OptionsMenu)