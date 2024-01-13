'use server'

import { revalidatePath } from 'next/cache'

import { db } from '@/lib/db'
import { createSafeAction } from '@/lib/create-safe-action'

import { InputType, ReturnType } from './types'
import { CreateCategory } from './schema'

const handler = async (data: InputType): Promise<ReturnType> => {
  // Authorization check when we have
  // const { userId} = auth();

  // if (!userId ) {
  //   return {
  //     error: "Unauthorized",
  //   };
  // }

  const { title } = data

  let category

  try {
    category = await db.category.create({
      data: {
        title,
      },
    })
  } catch (error) {
    return {
      error: 'Failed to create.',
    }
  }

  revalidatePath(`/category/${category.id}`)
  return { data: category }
}

export const createCategory = createSafeAction(CreateCategory, handler)
