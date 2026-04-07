type T = {name: string, role: string, text: string}

const data: T[] = [
    { name: 'MARCUS', role: 'Co Founder',text: 'Perfect Communication And Exceptional Skills.This Guy Is King'},
    { name: 'PETER', role: 'Manager',text: 'Did a Great Job. Understood All The Requirements'},
    { name: 'JANE', role: 'CEO',text: 'Jimmy Was Wonderful To Work With. Will Definitely Hire Him Again'},
]
export default function Testimonials(){
    return(
        <section id="testimonials" className="py-16 text-center">
            <h2 className="text-3xl font-bold tracking-widest">TESTIMONIALS</h2>

            <div className="common-line" />

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-10">
                {data.map((t,i)=>(
                    <div
                    key={i}
                    className=" p-6
                    w-full sm:w-[260px]
                    bg-gradient-to-b from-purple-600 to-purple-900
                    flex flex-col justify-center items-center
                    min-h-[220px]
                    transition duration-300 hover:scale-105
                                "
                    >
                        <h3 className="text-lg font-bold tracking-wide">
                            {t.name}
                        </h3>

                        <p className="text-sm mt-1 opacity-80">{t.role}</p>

                        <p className="text-sm mt-4 leading-relaxed opacity-90">
                            {t.text}
                        </p>

                    </div>
                ))}
            </div>
        </section>
    )

}