import { client } from '@/sanity/lib/client'
import { cache } from 'react'

export const getSpeakers = cache(async () => {
    return await client.fetch(`*[_type == "speaker"]`)
})