import { checkFilter } from "redux/filterSlice";
import { Label } from "./FindCont.styled";
import { useSelector, useDispatch } from 'react-redux';

export const FindCont = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter.filter)

    const changeFilter = (value) => {
    dispatch(checkFilter(value))
}

    return <Label htmlFor="findName">Find contacts by name
        <input type="text" id="findName" name="findName" onChange={evt => changeFilter(evt.target.value)} value={filter}/>
        </Label>
}