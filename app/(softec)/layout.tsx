import './css/flaticon.css';
import './css/magnific-popup.css';
import './css/main.css';
import './css/nice-select.css';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}