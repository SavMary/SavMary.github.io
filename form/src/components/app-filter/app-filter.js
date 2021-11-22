
import './app-filter.css';
const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Всі працівники' },
        { name: 'rise', label: 'На підвищення' },
        {name:'moreThen1000', label:'З/п більше 1000$'}
    ];
    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btn btn-light" : "btn btn-outline-light";
        return (
            <button className={`btn ${clazz}`}
            type="button"
                key={name}
            onClick={()=>props.onFilterSelect(name)}>
            {label}
        </button>
        )

    })
    return (
        <div className="btn-group">
{buttons}
            {/* < button className = "btn btn-outline-light"
            type = "button" >
                На підвищення 
                </button>
            < button className = "btn btn-outline-light"
            type = "button" >
                З/п більше 1000$
                </button> */}
        </div>
    )
}
export default AppFilter;