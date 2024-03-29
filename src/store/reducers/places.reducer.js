import {ADD_PLACE, LOAD_PLACES, REMOVE_PLACES} from "../actions/places.action"

import Place from "../../models/Place"

const initialState = {
places: []
}

const PlacesReducer = (state = initialState, action) => {
    switch(action.type){
    case ADD_PLACE:
        const newPlace = new Place(
            action.payload.id.toString(), 
            action.payload.title, 
            action.payload.image)
        return {
            ...state, places: state.places.concat(newPlace)
        }
    case LOAD_PLACES:
        return {
            ...state,
            places: action.places.map(item => new Place(
                item.id.toString(),
                item.title,
                item.image
            ))
        }
      
        default:
            return state
    }
}

export default PlacesReducer