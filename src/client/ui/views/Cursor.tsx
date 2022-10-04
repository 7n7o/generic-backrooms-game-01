import Roact from "@rbxts/roact";
import { useAppSelector, useAppStore } from "client/ui/hooks/rodux-hooks";
import { withHooks } from "@rbxts/roact-hooked";
import {UserInputService} from "@rbxts/services";

function Cursor() {
    const [shouldShow, cursorColor] = useAppSelector((state) => [!(state.generics.menuShown as boolean), state.options.appearance.cursorColor]);
    UserInputService.MouseIconEnabled = !(shouldShow as boolean);
    return (
        <frame ZIndex={-4} Size={new UDim2(0, 5, 0, 5)} BackgroundColor3={cursorColor} AnchorPoint={new Vector2(.5,.5)} Position={new UDim2(.5, 0, .5, 0)} Visible={shouldShow}>
            <uicorner CornerRadius={new UDim(0, 2.5)} />
            <uistroke Color={Color3.fromRGB(0,0,0)} Thickness={1} />
        </frame>
    )
}

export default withHooks(Cursor)