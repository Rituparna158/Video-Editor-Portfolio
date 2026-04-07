import Image from "next/image";
export default function Contact(){
    return (
        <section id = "contact" className="contact-section">
            
            <h2 className="contact-title">
                I AM READY TO CONSULT YOU
            </h2>

            <div className="common-line" />

            <div className="contact-form">

                <div className="contact-field">
                    <label>
                        My Name Is
                    </label>
                    <input
                    type="text"
                    placeholder="Name"
                
                    />
                </div>

                <div className="contact-field">
                    <label >
                        I Am Interested In
                    </label>
                    <input
                    type="text"
                    placeholder="Message"
                   
                    />
                </div>

                <button className="contact-btn">
                    SEND
                </button>
            </div>

            <div className="contact-info">
                <div className="flex items-center gap-2">
          <Image src="/Call.png" alt="phone" width={18} height={18} />
          <span>92 455 478 112</span>
        </div>
 
    
        <div className="flex items-center gap-2">
          <Image src="/Vector.png" alt="location" width={18} height={18} />
          <span>Defense Phase 3, Lahore Pakistan</span>
        </div>
 
        
        <div className="flex items-center gap-2">
          <Image src="/email-icon.png" alt="email" width={18} height={18} />
          <span>Videoeditor@gmail.com</span>
        </div>
 
                </div>
        </section>
    )
}