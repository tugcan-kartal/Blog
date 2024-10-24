import mongoose,{Document,Model} from "mongoose";

export interface IPost extends Document{
    title: string;
    desc: string;
    img: string;
    content: string;
    username: string;
}

const postSchema=new mongoose.Schema<IPost>(
    {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

const Post: Model<IPost>=mongoose.models.Post || mongoose.model<IPost>("Post",postSchema);

export default Post;