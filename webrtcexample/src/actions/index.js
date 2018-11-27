export const STATE_CHANGE = "STATE_CHANGE";

export function changeStateButton(currnetState){
	const action = {
		type : STATE_CHANGE,
		currnetState
	}
	return action;
}
