
"use client";
import BasicLayout from "@/components/BasicLayout"
import { serviceStyle } from "@/components/myService/services-style"
import myServices from "../../portfolio-content/services-content"
import { Cards } from "@/components/myService/Cards"
import PageHeader from "@/components/pagesHeader/PageHeader"
import { Slider } from "@/components/shared/ReusableSlider"

export default function MyServices() {
    return (
        <BasicLayout>
            <div className={serviceStyle.servicesMainWrapper}>
                {/* page header */}
                <PageHeader page="myServices" />
                <div className={`${serviceStyle.serviceCards} hidden md:grid`}>
                    {myServices.map((service, index) => (
                        <Cards key={index} service={service} />
                    ))}
                </div>

                <div className="lg:hidden w-full">
                    <Slider
                        items={myServices}
                        renderItem={(service, index) => <Cards key={index} service={service} />}
                    />
                </div>
            </div>
        </BasicLayout>
    )
}