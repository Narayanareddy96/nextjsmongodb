import Button from '@/components/button/Button';
import Image from 'next/image';
import Mainpage from 'public/assets/mainpage.jpg';

export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-bold">Venkat</h2>
            <p className="mt-4 text-lg flex-wrap">
              11+ years of strong experience in designing, implementing and
              testing Full Scale WEB Applications across various platforms.
              Extensive experience as a Full stack developer in developing web
              applications based on
              Python,PHP,JavaScript,GoogleAppsScript,ReactJS,
              VueJS,AngularJS,NodeJS,ExpressJS,SQL,HTML5,CSS,j
              Query,AJAX,JSON,XML,BootstrapMySQL,MongoDB,Next JS, GraphQL,
              Prisma, TypeORM, GraphQL Yoga, Apollo Client, SASS.
            </p>
            <Button title="see my work" href="/about" />
          </div>
          <div className="flex-1">
            <Image
              src={Mainpage}
              alt="Image"
              priority={true}
              unoptimized={true}
              className="w-full h-auto rounded-lg shadow-md"
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
}
