'user client';

const PropertyPage = ({params}) => { // we can use searchParams aslo
    return ( <div>Property Page {params.id}</div> );//searchParams.name
}
export default PropertyPage;