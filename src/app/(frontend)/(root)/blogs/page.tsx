import { getPayload, PaginatedDocs } from 'payload'
import { BlogsRoot } from '@/app/(frontend)/(root)/blogs/_components/root'
import configPromise from '@payload-config'
import { Post } from '@/payload-types'

export default async function page() {
  const payload = await getPayload({ config: configPromise })

  const blogs: PaginatedDocs<Post> = await payload.find({
    collection: 'posts',
    depth: 1,
    overrideAccess: false,
    limit: 999,
  })

  return <BlogsRoot blogs={blogs.docs} />
}
