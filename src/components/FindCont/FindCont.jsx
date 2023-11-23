import { Label } from "./FindCont.styled";

export const FindCont = ({ onFilter, filterValue }) => {
    return <Label htmlFor="findName">Find contacts by name
        <input type="text" id="findName" name="findName" onChange={evt => onFilter(evt.target.value)} value={filterValue}/>
        </Label>
}