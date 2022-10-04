import App from "client/ui/App";
import Roact from "@rbxts/roact";
import Make from "@rbxts/make";
import { StoreProvider } from "@rbxts/roact-rodux-hooked";
import { WaitForChildOfClass } from "shared/Common";
import { configureStore } from "client/ui/store/store";

const store = configureStore();

async function mount() {
    const holder = Make("ScreenGui", {
        Name: "App",
        ResetOnSpawn: false,
        IgnoreGuiInset: true
    });
    Roact.mount(<StoreProvider store={store}>
        <App />
    </StoreProvider>, holder, "App");
    return holder;
}

async function render(app: ScreenGui) {
    app.Parent = await WaitForChildOfClass(game.GetService("Players").LocalPlayer, "PlayerGui");
}

async function main() {
    const app = await mount();
    await render(app);
}

main().catch((err: string) => {
    warn("Main UI failed to load: "+err)
}).then(()=>{
    game.GetService("StarterGui").SetCoreGuiEnabled(Enum.CoreGuiType.All, false);
});