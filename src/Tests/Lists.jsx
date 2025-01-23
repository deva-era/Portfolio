import PropTypes from 'prop-types';

function Lists(props) {
    var catagory = props.name;
    var fruits = props.fruits;
    
    var list_fruits = fruits.map(fruits => <li key={fruits.id}>{fruits.Name}: &nbsp; <b>{fruits.cal }</b></li>)
    return (
        <>
        <div className="list_container">
            <h3>{catagory}</h3>
            <ol>{list_fruits}</ol>
                <p className="thanks">Thanks you!!!</p>
        </div>
        </>
    );
}
Lists.PropTypes = {
    name: PropTypes.string,
    fruits: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        Name: PropTypes.string,
        cal:PropTypes.number}))
}
Lists.defaultProps = {
    name: "Category:",
    fruits: []
}
export default Lists