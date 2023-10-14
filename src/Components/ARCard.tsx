type propsType ={
    arr:string[]
    }
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    
    export default function ARListingCard (props:propsType){
        return<>
            <div className="card mx-auto" style={{width: "20rem"}}>
                <ul className="list-group list-group-flush">
               {
                props.arr.map((x,i)=>
                
                <li className="list-group-item text-danger" key={i}>{x}</li>
                )
               }
                </ul>
            </div>
        </>
    }