import Roact from "@rbxts/roact";
import { Dispatch, SetStateAction } from "@rbxts/roact-hooked";
import { Action } from "@rbxts/rodux";
import { setMenuShown } from "client/ui/store/actions/generics.action";

interface Props {
    dispatch: Dispatch<Action<string>>;
}

function TopBar({dispatch}:Props) {
    return (
        <frame Size={new UDim2(1, 0, 0, 30)} BackgroundColor3={Color3.fromRGB(0,0,0)} BorderSizePixel={0}>
            <uilistlayout Padding={new UDim(0, 5)} FillDirection={Enum.FillDirection.Horizontal} HorizontalAlignment={Enum.HorizontalAlignment.Right} />
            <textbutton Modal={true} Text="X" Size={new UDim2(0, 30, 0, 30)} TextScaled={true} TextColor3={Color3.fromRGB(255,255,255)} BackgroundColor3={Color3.fromRGB(0,0,0)} BorderSizePixel={0} Event={{
                MouseButton1Click: () => {
                    dispatch(setMenuShown(false));
                }
            }} />
        </frame>
    )
}

export default TopBar