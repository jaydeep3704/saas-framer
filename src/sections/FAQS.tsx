"use client"

import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

export default function Faqs() {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <Tag>
                        FAQS
                    </Tag>
                </div>

                <h3 className="font-medium text-6xl mt-6 text-center max-w-xl mx-auto">
                    Questions? We've got {" "}
                    <span className="text-lime-400">answers</span>
                </h3>


                <div className="mt-16 flex flex-col gap-5 max-w-xl mx-auto">
                    {
                       
                        faqs.map((faq,index)=>{
                            let selectedIndex=0;
                           return (
                           <div className="p-4 bg-neutral-900 border border-white/10 rounded-2xl" key={index}>
                               {/* question */}
                                <div className="flex justify-between items-center font-semibold">{faq.question} 
                                    <span className={twMerge("text-lime-400 ",selectedIndex===index && "rotate-45")} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </span>
                                </div>
                                {/* answers */}
                                <div className={twMerge("mt-6 text-white/50",selectedIndex!==index && "hidden")} >
                                    {faq.answer}
                                </div>
                           </div>) 
                        })

                    }
                </div>

            </div>
        </section>
    )
}
