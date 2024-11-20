import prisma from '@/libs/prisma'
import React from 'react'

const CommentBox = async ({ anime_mal_id }) => {
    // const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

    return (
        <div className='grid grid-cols-4 gap-4 mb-4'>
            Comments 
        </div>
    )
}

export default CommentBox