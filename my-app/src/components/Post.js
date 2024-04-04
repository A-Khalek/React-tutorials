import {useParams } from 'react-router-dom';

export default function Post(){
   const {category, subcategory} = useParams();
    return(
        <>
            <div>This is {category} - {subcategory}</div>
        </>
    );
}