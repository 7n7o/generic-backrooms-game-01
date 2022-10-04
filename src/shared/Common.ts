export function WaitForChildOfClass(parent: Instance, className: keyof Instances, timeout?: number): Promise<Instance> {
	return new Promise((resolve, reject) => {
		const child = parent.FindFirstChildOfClass(className);
		if (child) {
			resolve(child);
		} else {
			const connection = parent.ChildAdded.Connect((child) => {
				if (child.IsA(className)) {
					connection.Disconnect();
					resolve(child);
				}
			});
		}
	}).timeout(timeout === undefined ? math.huge : timeout as unknown as number) as Promise<Instance>;
}