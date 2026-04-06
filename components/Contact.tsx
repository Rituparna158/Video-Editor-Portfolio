export default function Contact(){
    return (
        <section className="contact-section">
            
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
                <span>92 455 478 112</span>
                <span> Defense Phase 3, Lahore Pakistan</span>
                <span>Videoeditor@gmail.com</span>
                </div>
        </section>
    )
}