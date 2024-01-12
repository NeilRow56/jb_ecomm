import { create } from '@/actions/createCategory'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { Category } from './category'

const CategoryIdPage = async () => {
  const categories = await db.category.findMany()
  return (
    <div className="flex  h-screen flex-col  items-center justify-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-slate-800">
      <form action={create}>
        <input
          className="rounded-lg border border-gray-200 p-2"
          id="title"
          name="title"
          required
          placeholder="Enter a category title"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      <div className="space-y-2 rounded-lg border-2 border-gray-300 p-2 text-orange-400">
        {categories.map((category) => (
          <Category key={category.id} id={category.id} title={category.title} />
        ))}
      </div>
    </div>
  )
}

export default CategoryIdPage
