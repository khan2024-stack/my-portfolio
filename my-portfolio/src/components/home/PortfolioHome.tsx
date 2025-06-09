// PortfolioHome.tsx
import BasicLayout from "../BasicLayout";
import { homepage } from "./home-style";
import { introData, socialLinks } from "@/app/portfolio-content/home-content";
import { AiOutlineDownload } from "react-icons/ai";
import profileImg from "@/assets/profile.jpg";
import Image from "next/image";


function ActionBar() {
    return (
        <div className={homepage.actionBar.mainWrapper}>
            <a href="/cv.pdf">
                <button className={homepage.actionBar.button}>
                    Download CV
                    <AiOutlineDownload className="text-lg" />
                </button>
            </a>
            <div className={homepage.actionBar.socialIcons}>
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={homepage.actionBar.socialLink}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}

function IntroPage() {
    return (
        <div className={homepage.introSection.mainWrapper}>
            <h4 className={homepage.introSection.h4}>{introData.title}</h4>
            <h1 className={homepage.introSection.h3}>{introData.greeting}</h1>
            <h2 className={homepage.introSection.h2}>{introData.name}</h2>
            <p className={homepage.introSection.p}>
                {introData.description}
            </p>
            <ActionBar />
        </div>
    )
}

function ImageSection() {
    return (
        <div className={homepage.imageSection.imageWrapper}>
            <div className={homepage.imageSection.imageContainer}>
                <div className={homepage.imageSection.glow}></div>
                <div className={homepage.imageSection.imageCard}>
                    <Image
                        src={profileImg}
                        alt="Muhammad Sajjad"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default function PortfolioHome() {
    return (
        <BasicLayout>
            <div className={homepage.wrapper}>
                <div className={homepage.row}>
                    <div className={homepage.section.left}>
                        <IntroPage />
                    </div>
                    <div className={homepage.section.right}>
                        <ImageSection />
                    </div>
                </div>
            </div>
        </BasicLayout>
    );
}