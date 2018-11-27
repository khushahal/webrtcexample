import  {STATE_CHANGE} from '../actions/index';

export default function buttonState(state = 'primary' , action){

	switch(action.type){
		case STATE_CHANGE:
    let color = action.currnetState === 'primary' ? 'secondary' : 'primary'
		return color;

		default:
		return state;

	}
}
