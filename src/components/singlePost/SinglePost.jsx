import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePOstwrapper">
                <img src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91224.jpg&fm=jpg"
                    alt=""
                    className="sinlePostImg"
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>xyz</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, eligendi. Modi recusandae quo quas? Dignissimos quis neque doloribus labore facere itaque veniam, nemo cupiditate rem repellat ut non, iusto tempora vero nobis nisi commodi omnis quas pariatur. Placeat itaque corporis, beatae facilis consectetur temporibus eius blanditiis voluptatum ipsam perferendis obcaecati harum animi nihil impedit amet nostrum nesciunt officiis a, omnis ducimus suscipit alias? At, nobis! Incidunt iste laboriosam ipsam autem laudantium voluptatum rerum, et illum consequuntur quasi perspiciatis ratione vitae soluta placeat velit quibusdam nobis officiis odit labore molestiae, deserunt harum perferendis magni! Accusantium aperiam magnam veritatis eos, quia dolorum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, eligendi. Modi recusandae quo quas? Dignissimos quis neque doloribus labore facere itaque veniam, nemo cupiditate rem repellat ut non, iusto tempora vero nobis nisi commodi omnis quas pariatur. Placeat itaque corporis, beatae facilis consectetur temporibus eius blanditiis voluptatum ipsam perferendis obcaecati harum animi nihil impedit amet nostrum nesciunt officiis a, omnis ducimus suscipit alias? At, nobis! Incidunt iste laboriosam ipsam autem laudantium voluptatum rerum, et illum consequuntur quasi perspiciatis ratione vitae soluta placeat velit quibusdam nobis officiis odit labore molestiae, deserunt harum perferendis magni! Accusantium aperiam magnam veritatis eos, quia dolorum.
                </p>
            </div>
        </div>
    )
}
