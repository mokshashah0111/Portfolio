import { useContent } from '../contexts/ContentContext'

export default function CmsBanner() {
  const { loading, error, cmsEnabled } = useContent()
  if (!cmsEnabled || (!loading && !error)) return null

  return (
    <div
      className="border-b border-amber-200 bg-amber-50 px-4 py-1.5 text-center text-xs text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-200"
      role="status"
    >
      {loading && 'Loading content from Sanity…'}
      {error && !loading && `Sanity unavailable (${error}). Showing bundled copy.`}
    </div>
  )
}
