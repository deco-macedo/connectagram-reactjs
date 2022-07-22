import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

interface CommentProps {
    content: string;
    onDeleteComment: (commentToDelete: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className="mt-6 flex gap-4"> {/* .comment */}
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className="flex-1"> {/* .commentBox */}
            
            <div className="dark:bg-gray-600 bg-gray-200 rounded-[8px] p-4"> {/* .commentContent */}
                <header className="flex items-start justify-between">
                    <div> {/* .authorAndTime */}
                        <strong className="block text-sm leading-relaxed">Diego Fernandes</strong>
                        <time className="text-[0.75rem] leading-relaxed dark:text-gray-400" title="13 de julho às 18:42h" dateTime="2022-07-13 18:42:00">Cerca de 1h atrás</time>
                    </div>
                    <button
                        onClick={handleDeleteComment}
                        className="bg-transparent border-0 dark:text-gray-400 cursor-pointer rounded-[2px] hover:text-red-500" 
                        title="Deletar comentário">
                            <Trash size={24} />
                    </button>
                </header>

                <p className="mt-4 dark:text-gray-300">{content}</p>
            </div>

            <footer className="mt-4">
                <button 
                    onClick={handleLikeComment}
                    className="bg-transparent border-0 dark:text-gray-400 cursor-pointer flex items-center hover:text-green-500"
                    >
                        <ThumbsUp className="mr-2" />
                        Aplaudir <span className="before:py-0 before:px-1 before:content-['\2022'] rounded-[2px]">{likeCount}</span>
                </button>
            </footer>

            </div> 


        </div>
    )
}