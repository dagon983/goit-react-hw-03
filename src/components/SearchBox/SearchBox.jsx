import { useId } from "react";
import s from './SearchBox.module.css'

const SearchBox = ({ onChange, value }) => {
    const searchBoxId = useId();
  return (
    <div className={s.sectionWrapper}>
        <label htmlFor={searchBoxId}>Find contacts by name</label>
        <input type="text" name="searchBox" id={searchBoxId} onChange={e => onChange(e.target.value)} value={value}/>
    </div>
  )
}

export default SearchBox