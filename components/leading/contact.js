import Container from '../container';
export default function Contact() {
  return (
    <Container>
      <div
        id="contact"
        className="grid grid-cols-4 place-items-center min-h-screen"
      >
        <section className="col-span-2">
          <h4 className="text-center">Get in touch</h4>
          <form>
            <label htmlFor="name" className="pb-1 text">
              Name
            </label>
            <input type="text" name="name" class="block" />
            <label htmlFor="email" className="pb-1 text">
              E-mail
            </label>
            <input type="email" name="email" class="block" />
            <button type="submit"></button>
          </form>
        </section>
      </div>
    </Container>
  );
}
