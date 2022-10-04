import Roact from "@rbxts/roact"
import Cursor from "./views/Cursor"
import OptionsMenu from "./views/OptionsMenu"

function App() {
    return [
        <Cursor />,
        <OptionsMenu />
    ]
}

export default function() {
    return Roact.createFragment(App())
}
