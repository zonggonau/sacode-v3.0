import Image from "next/image";
import Link from "next/link";
import { getSacodeWeekendById } from "@/lib/api";

export default async function page({ params }) {
  const { data } = await getSacodeWeekendById(params.slug);
  console.log(data.topic);
  return (
    <div>
      <section
        id="home"
        className="section welcome-area bg-inherit h-100vh overflow-hidden"
      >
        <div className="shapes-container">
          <div className="bg-shape"></div>
        </div>
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12 col-md-7">
              <div className="welcome-intro">
                <h1 style={{ color: "#201a84" }}>SaCode Weekend</h1>
                <h3 className="text-dark my-2 text-capitalize">
                  <i className="fas fa-laptop-code mr-2"></i> {data.topic}
                </h3>

                <p className="my-4">{data.about}</p>
                <Link href="#mengapa-penting" className="btn scroll">
                  <i className="fas fa-book-open mr-2"></i> Daftar Sekarang
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div
                className="welcome-thumb"
                // data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <Image
                  src={`http://adminpanel.sacode.web.id/storage/sacodesweekends/${data.profile_picture}`}
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
