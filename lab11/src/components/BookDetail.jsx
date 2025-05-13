import { useParams } from "react-router";

export default function BookDetail() {
    const { id, title, author } = useParams();

    return (
        <div>
            <h4>BookDetail</h4>

            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Author: {author}</div>

        </div>

    )
}
