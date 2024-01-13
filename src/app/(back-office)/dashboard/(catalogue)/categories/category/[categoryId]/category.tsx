import { deleteCategory } from '@/actions/deleteCategory'

import { FormDelete } from './form-delete'

type CategoryProps = {
  title: string
  id: string
}

export const Category = ({ title, id }: CategoryProps) => {
  const deleteCategoryWithId = deleteCategory.bind(null, id)
  return (
    <form
      action={deleteCategoryWithId}
      className="flex items-center justify-between gap-x-2"
    >
      <p>Category name:{title}</p>
      <FormDelete />
    </form>
  )
}
