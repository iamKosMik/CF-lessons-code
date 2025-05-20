
type Props = {
    title : string;
    description : string;
}

const ArrowFunctionalComponentWithProps = ({title, description} : Props) => {
    return (
        <>
            <h1 className="text-center mt-12 text-xl font-bold">This {title}</h1>
            <p className="text-center mt-12 text-xl">{description}</p>;
        </>
    )
}

export default ArrowFunctionalComponentWithProps;
