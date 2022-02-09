import Container from '../container';
import { FiSmartphone, FiMonitor } from 'react-icons/fi';

export default function Services() {
  return (
    <Container>
      <div
        id="services"
        className="flex flex-wrap items-center justify-around min-h-screen"
      >
        <div className="widget">
          <FiMonitor />
          <span className="text-subtitle" translate="no">
            Frontend
          </span>
          <p className="mb-1">
            Web development using ReactJS and other frontend technologies to
            build responsive and optimized web applications.
          </p>
        </div>

        <div className="widget">
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
