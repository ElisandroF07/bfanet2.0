import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import dashboardPreview from '@/assets/images/dashboard-preview.png'

export function HeaderComponent() {
    return (
        <header className="w-full h-[600px] lg:flex-[1] pb-5 px-2 md:px-5">
            <div className="w-full flex flex-col items-center justify-center pt-24">
                <h1 style={{letterSpacing: '-0.8px'}} className="text-[2rem] md:text-[4rem] text-neutral-900 text-center font-extrabold">Salve tempo e <br /> dinheiro no <span>BFA NET</span></h1>
                <p className="text-center text-neutral-900 text-[1rem] mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit. Sapiente fugiat nulla ipsum magni.</p>
                <Link href={'#'} className="mt-6 w-[250px] py-3 rounded-full bg-[#ea580c22] font-bold antialiased text-[0.93rem] text-orange-600 flex items-center justify-center relative">Registre-se <span className='bg-orange-600 rounded-full p-2 absolute left-1 text-white'><ArrowRight size={22}/></span></Link>
                <div  className="w-[85%] flex-[1] mt-[100px] p-[10px] rounded-[26px] bg-white border border-orange-100">
                    <div className="w-full h-full p-[10px] rounded-[18px] bg-orange-50 border border-orange-100">
                        <Image src={dashboardPreview} alt="dashboard preview" className="w-full h-full rounded-[12px] border border-neutral-100"/>
                    </div>
                </div>
            </div>
        </header>
    )
}