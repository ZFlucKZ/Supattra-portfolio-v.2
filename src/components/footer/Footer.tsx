// Next
import Image from "next/image";
import Link from "next/link";

// MUI
import { Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <section
      id="#footer"
      className="bg-[url('/assets/static/images/homepage/bg-footer.png')] bg-cover bg-no-repeat px-6 py-10 md:px-10 md:py-[26px] lg:px-[60px] lg:py-12 xl:px-[100px] xl:py-[60px] "
    >
      <div className="xl:m-auto xl:max-w-[1240px]">
        <div className="mb-5 flex justify-between">
          <div>
            <Link href="#">
              <div className="max-w-[60px] md:max-w-[70px] lg:md:max-w-[80px] xl:max-w-[120px]">
                <Image
                  alt="Supattra Chansawad logo"
                  src="/assets/static/logo/Web-logo-White.svg"
                  width={60}
                  height={60}
                  layout="responsive"
                />
              </div>
            </Link>

            <Typography variant="body2" className="my-2 text-white-10 md:my-5">
              supattra.chansawad@gmail.com
            </Typography>

            <div className="flex gap-2">
              <Link
                href="https://www.linkedin.com/in/supattra-chansawad/"
                target="_blank"
              >
                <Image
                  alt="Supattra Chansawad - Linkedin"
                  src="/assets/static/images/homepage/linkedin-white.png"
                  width={28}
                  height={28}
                  layout="responsive"
                  className="transition-all duration-[400] hover:opacity-80 lg:min-w-[32px] xl:min-w-[40px]"
                />
              </Link>
              <Link
                href="https://www.behance.net/supattrchansaw"
                target="_blank"
              >
                <Image
                  alt="Supattra Chansawad - Behance"
                  src="/assets/static/images/homepage/behance-white.png"
                  width={28}
                  height={28}
                  layout="responsive"
                  className="transition-all duration-[400] hover:opacity-80 lg:min-w-[32px] xl:min-w-[40px]"
                />
              </Link>
            </div>
          </div>
          <div>
            <Typography
              variant="subtitle1"
              className="mb-2 text-white-10 md:mb-3"
            >
              CASE STUDY
            </Typography>
            <Link href="/replica" className="decoration-white-10">
              <Typography variant="body2" className="mb-2 text-white-10">
                Replica
              </Typography>
            </Link>
            <Link href="/co-working" className="decoration-white-10">
              <Typography variant="body2" className="mb-2 text-white-10">
                Co.
              </Typography>
            </Link>
            <Link href="/warmlight" className="decoration-white-10">
              <Typography variant="body2" className="text-white-10">
                Warmlight
              </Typography>
            </Link>
          </div>
        </div>
        <Divider className="mb-1 border-grey-20" />
        <Typography variant="body2" className="text-body-2 text-white-10">
          © Supattra 2023 All rights reserved
        </Typography>
      </div>
    </section>
  );
}
