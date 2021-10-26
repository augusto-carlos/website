import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Meta from '../components/meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <NavBar />
        <main className="pt-40">{children}</main>
      </div>
      <Footer />
    </>
  );
}
