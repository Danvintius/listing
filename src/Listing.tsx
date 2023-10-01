import list from './App'

export function Listing(props: any) {
    let list = props;
    return (
       <div>
        Список: 
        {props}
       </div> 
    )
}