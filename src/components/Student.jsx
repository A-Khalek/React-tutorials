import PropsType from 'prop-types'

function Student(props){
    return(
        <>
            <div className="student-props">
                <p>Name : {props.name}</p>
                <p>Age : {props.age}{}</p>
                <p>Is Student : {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    );
} 

Student.PropsType = {
    name: PropsType.string,
    age: PropsType.number,
    isStudent: PropsType.bool,
}

Student.defaultProps = {
    name: "Gust",
    age: 2,
    isStudent: true,
}

export default Student