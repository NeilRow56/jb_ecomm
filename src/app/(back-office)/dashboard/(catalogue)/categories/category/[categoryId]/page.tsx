import { Separator } from '@/components/ui/separator'
import Info from '../../../_components/Info'
import CategoryList from '../../../_components/CategoryList'
import { Suspense } from 'react'

const CategoryIdPage = async () => {
  return (
    <div className="mb-20 mt-24 w-full bg-slate-200">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<CategoryList.Skeleton />}>
          <CategoryList />
        </Suspense>
      </div>
    </div>
  )
}

export default CategoryIdPage
