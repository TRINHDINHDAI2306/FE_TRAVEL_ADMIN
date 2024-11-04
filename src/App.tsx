import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { AppProvider } from '@/components/common/AppProvider.tsx'
import { ErrorFallback } from '@/components/common/ErrorFallback.tsx'
import { PageTransition } from '@/components/common/PageTransition.tsx'
import router from '@/routes'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <HelmetProvider>
        <AppProvider>
          <PageTransition>
            <RouterProvider router={router} />
          </PageTransition>
        </AppProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App
