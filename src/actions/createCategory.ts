'use server'

import { db } from '@/lib/db'
import { z } from 'zod'

import { revalidatePath } from 'next/cache'

const CreateCategory = z.object({
  title: z.string(),
})

export async function create(formData: FormData) {
  const { title } = CreateCategory.parse({
    title: formData.get('title'),
  })
  await db.category.create({
    data: {
      title,
    },
  })
  revalidatePath('/dashboard/categories/category/1')
}
