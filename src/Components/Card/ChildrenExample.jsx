
const ChildrenExample = (props) => {
    return (
        <div className="my-6 border-2 p-4">
            <h2>Children Data Sent</h2>

            <h5>
                {props.children}
            </h5>
            <button className="btn btn-primary my-4">Click Me Details</button>
        </div>
    );
};

export default ChildrenExample;