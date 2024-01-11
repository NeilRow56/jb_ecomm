type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <h2 className=" text-2xl font-semibold text-slate-900 dark:text-slate-200">
      {title}
    </h2>
  )
}

export default Heading
