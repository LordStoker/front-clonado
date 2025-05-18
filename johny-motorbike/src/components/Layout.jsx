import { useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Notification from './Notification'
import AuthModal from './AuthModal'

export default function Layout({ children }) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const { notification, showNotification } = useAppContext()
    return (
    <div className={isHomePage ? '' : 'pt-16'}>
      {children}
      
      {/* Notification component */}
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type}
          onClose={() => showNotification(null)}
        />
      )}
      
      {/* Modal de autenticación global */}
      <AuthModal />
    </div>
  )
}