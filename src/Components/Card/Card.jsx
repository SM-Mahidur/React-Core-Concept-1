import ChildrenExample from "./ChildrenExample";

const Card = (props) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center ">
                <h2 className="card-title text-red-400">{props.Name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?{props.title ? 'Title' : 'Not Found'}</p>
            </div>
            <figure><img className="w-full" src="https://i.ibb.co/bFHpwVk/download-1.jpg" alt="Shoes" /></figure>
            <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
            <ChildrenExample>
                <h3>Accept Data And Re Sending Data. |
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio quae ipsa excepturi nesciunt unde iste rerum mollitia voluptate deserunt.
                </h3>
            </ChildrenExample>
        </div>
        
    );
};

export default Card;