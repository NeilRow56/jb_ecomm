type CategoryProps = {
  title: string
  id: string
}

export const Category = ({ title, id }: CategoryProps) => {
  return (
    <form className="flex items-center gap-x-2">
      <p className="flex w-full">Board name: &nbsp;{title}</p>
    </form>
  )
}
