import Image from "next/image";
import Link from "next/link";
import { getAllSacodeWeekend } from "@/lib/api";
export default async function Sacodeweekend() {
  const { data } = await getAllSacodeWeekend();

  return (
    <div>
      <section
        id="home"
        class="section welcome-area bg-inherit h-100vh overflow-hidden"
      >
        <div class="shapes-container">
          <div class="bg-shape"></div>
        </div>
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="welcome-intro">
              <h1 style={{ color: "#210a84" }}>
                <i class="fas fa-users"></i> <br /> SaCode's <br /> Weekend 2023
              </h1>
              <p class="my-4">
                Berdiskusi, membangun jaringan dan berkembang bersama <br />{" "}
                anggota komunitas. Belajar - Ciptakan - Bagikan.
              </p>
              <a href="#topik-2023" target="_blank" class="btn scroll">
                {" "}
                <i class="fas fa-book-open mr-1"></i>Topik & Speaker di Tahun
                2023
              </a>
            </div>
            <div class="col-12 col-md-5">
              <div
                // class="welcome-thumb"
                // data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <Image
                  src="/assets/img/avatar/sacode-illustration-janzen.png"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topik-2023" class="review-area ptb_100">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-10 col-lg-7">
              <div class="section-heading">
                <span class="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                  <i class="far fa-lightbulb text-primary mr-1"></i>
                  <span class="text-primary">Topik</span>
                  2023
                </span>
                <h2>SaCode's Weekend 2023</h2>
              </div>
            </div>
          </div>
          <div class="row">
            {data.map((item, index) => {
              if (item.status === "active") {
                return (
                  <div class="col-12 col-md-6 col-lg-4 mb-5 res-margin">
                    <div class="single-review card">
                      <div class="card-top p-4">
                        <Link href={`/komunitas/sacodeweekend/${item.id}`}>
                          <Image
                            src={`http://adminpanel.sacode.web.id/storage/sacodesweekends/${item.poster}`}
                            alt={data.topic}
                            width={500}
                            height={500}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
