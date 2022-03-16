import Container from '../container';
import { FiSmartphone, FiMonitor } from 'react-icons/fi';

export default function Services() {
  return (
    <Container>
      <div
        id="services"
        className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 min-h-screen"
      >
        <div className="widget p-4 text-center">
          <FiMonitor />
          <span className="text-subtitle" translate="no">
            Frontend
          </span>
          <p className="mb-1">
            Web development using ReactJS and other frontend technologies to
            build responsive and optimized web applications.
          </p>
        </div>

        <div className="widget p-4 text-center">
          <FiSmartphone />
          <span className="text-subtitle" translate="no">
            Mobile
          </span>
          <p className="mb-1">
            Mobile development(Android/iOS) using Flutter to create clean and
            performatic cross-platform applications.
          </p>
        </div>
      </div>
    </Container>
  );
}
