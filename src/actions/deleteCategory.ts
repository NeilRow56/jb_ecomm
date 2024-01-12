'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function deleteCategory(id: string) {
  await db.category.delete({
    where: {
      id: id,
    },
  })
  revalidatePath('/dashboard/categories/category/1')
}
