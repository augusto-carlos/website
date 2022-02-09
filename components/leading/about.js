import Container from '../container';
import Image from 'next/image';
import imgPath from '../../public/assets/images/me.jpg';
export default function About() {
  return (
    <Container>
      <div id="about" className="flex items-center justify-around min-h-screen">
        <picture className="avatar">
          <Image src={imgPath} alt="Augusto da Silva" />
        </picture>
        <section>
          <h4 className="text-subtitle inline-block">About me</h4>
          <p>
            Hello, my name is Augusto Carlos da Silva, I'm a software developer,
            computer science student and a technology enthusiast around the
            programming universe with a focus on the web. My current choice of
            tools and languages is trending toward Dart, Typescript and Elixir.
            In addition to programming, I really like music and martial arts.
          </p>
        </section>
      </div>
    </Container>
  );
}
