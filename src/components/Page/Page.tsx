import { Navigation } from '../Navigation/Navigation'

interface PageProps {
  children?: React.ReactNode
  title?: string
}

export const Page = ({ children, title }: PageProps) => {
  return (
    <div>
      <Navigation title={title}>
        <div style={{ width: '90%', margin: 'auto' }}>{children}</div>
      </Navigation>
    </div>
  )
}
