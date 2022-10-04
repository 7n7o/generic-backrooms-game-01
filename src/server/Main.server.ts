game.GetService("Players").PlayerAdded.Connect(plr => {
    plr.CameraMode = Enum.CameraMode.LockFirstPerson;
})