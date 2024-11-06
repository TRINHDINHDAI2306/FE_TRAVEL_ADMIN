export const CustomizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    {label}
    {required && <span className='text-red pl-0.5'>*</span>}
  </>
)
