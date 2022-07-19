import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface Content {
    type: string,
    content: string,
}

interface PostProps {
    author: {
        avatarUrl: string,
        name: string,
        role: string,
      },
    content: Content[],
    publishedAt: Date,
}

export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState([
       'Post muito bacana, hein?' 
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d' de 'LLLL' às 'HH':'mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function HandleCreateNewComment(event: FormEvent) {
        event?.preventDefault()

       setComments([...comments, newCommentText]);
       setNewCommentText('');

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('Esse campo é obrigatório! :)')
    }

    function deleteComment(commentToDelete: string) {
        const commenstWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commenstWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className="dark:bg-gray-700 bg-gray-100 rounded-lg overflow-hidden p-10 last:mt-8"> {/* .post */}
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-4"> {/* .author */}
                    <Avatar src={author.avatarUrl} />
                    <div className="flex flex-col"> {/* .authorInfo */}
                        <strong className="dark:text-gray-100 leading-relaxed">{author.name}</strong>
                        <span className="text-sm dark:text-gray-400">{author.role}</span>
                    </div>
                </div>

                <time className="text-sm dark:text-gray-400" title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className="leading-relaxed dark:text-gray-300 mt-6"> {/* .content */}
               {content.map(item => {
                if (item.type === 'paragraph') {
                    return <p key={item.content} className="mt-4">{item.content}</p>;
                } else if (item.type === 'link') {
                    return <p key={item.content} className="mt-4"><a className="font-bold text-green-500 hover:text-green-300" href="#">{item.content}</a></p>;
                }
               })}
            </div>

            <form onSubmit={HandleCreateNewComment} className="w-full mt-6 pt-6 border-t-[1px] border-gray-600"> {/* .commentForm */}
                <strong className="leading-relaxed dark:text-gray-100">Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    className="w-full dark:bg-gray-900 bg-gray-200 resize-none h-24 p-4 rounded-[8px] dark:text-gray-100 text-gray-900 leading-normal mt-4"
                    value={newCommentText}
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <button 
                    className="py-3 px-6 mt-4 rounded-[8px] border-none bg-green-500 enabled:hover:bg-green-300 enabled:hover:transition-colors dark:text-white font-bold cursor-pointer disabled:opacity-[0.7] disabled:cursor-not-allowed disabled:hover:none"
                    type="submit"
                    disabled={isNewCommentEmpty}
                >
                    Publicar
                </button>
            </form>

            <div className="mt-8"> {/* .commentList */}
                {comments.map(comment => {
                   return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />)
                })}
            </div>
        </article>
    )
}