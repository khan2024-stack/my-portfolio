import BasicLayout from "@/components/BasicLayout"
import { serviceStyle } from "@/components/myService/services-style"
import myServices from "../../portfolio-content/services-content"
import { ServicesSlider } from "@/components/myService/ServicesSlider"
import { Cards } from "@/components/myService/Cards"

export default function MyServices() {
    return (
        <BasicLayout>
            <div className={serviceStyle.servicesMainWrapper}>
                <div className={serviceStyle.serviceheader}>
                    <h1 className={serviceStyle.head1}>My Services</h1>
                    <p className={serviceStyle.serviceTitle}>
                        My tech stack and expertise in the digital world, where billions of users engage daily, will scale your product and accelerate growth
                    </p>
                </div>
                
                <div className={`${serviceStyle.serviceCards} hidden md:grid`}>
                    {myServices.map((service, index) => (
                        <Cards key={index} service={service} />
                    ))}
                </div>
                
                <div className="md:hidden w-full pb-10 md:px-4">
                    <ServicesSlider services={myServices} />
                </div>
            </div>
        </BasicLayout>
    )
}