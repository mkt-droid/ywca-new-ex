'use client'
import InnerBanner from "@/components/partials/InnerBanner";
import styles from '@/styles/MessagePresident.module.css';

const MessagePresident = () => {
    return (
        <>
            {/* <InnerBanner
                images={["/images/president-banner.jpg"]}
                breadcrumb={[
                    { label: "About Us", link: "/about" },
                    { label: "Message from President", link: "/message-from-president" },
                ]}
            /> */}

            <section className={styles.page}>

                {/* <div className={styles.bgText}>
                    MESSAGE
                </div> */}

                <div className="container">

                    {/* Hero */}
                    <div className={styles.hero}>

                        <div className={styles.heroContent}>

                            

          <div className={styles.sectionHeading} style={{marginBottom:30}}>
            <h2>
              <span className={styles.highlight}> Message from</span> President
            </h2>
          </div>
     

                            {/* <h1 className={styles.heading}>
                               President
                            </h1> */}

                            {/* <div className={styles.line}></div> */}

                            <p className={styles.heroText}>
                             The YWCA of Delhi remains steadfast in its mission to empower women and girls, creating a just,
inclusive society where every individual can thrive regardless of caste, creed, race, or economic
background. 
                            </p>
                             <div className={styles.quoteSection} style={{marginTop:30}}>

                        <div className={styles.quoteMark}>
                            “
                        </div>

                        <p className={styles.quoteText}>
                           Through our Women’s Training Institute, Working Women’s Hostels, Shelter Homes, and development programmes, we equip women with skills, safety, and support for a life of dignity and independence.
                        </p>
                          

                    </div>

                        </div>

                        <div className={styles.heroImage}>

                            <div className={styles.imageBorder}></div>

                            <img
                                src="/images/President.jpg"
                                alt="President"
                            />

                        </div>

                    </div>

                    {/* Quote */}
                   

                    <p className={styles.msgText} style={{marginBottom:15}}>
                               Our dedication to community development reaches beyond urban centers, with our comprehensive Ruraland Urban Development Initiatives (RDP & UDP) driving positive change. Our grassroots initiatives aim to transform the lives of girls and women by increasing access to vital resources, including healthcare, education, and protection, ultimately driving lasting positive change.</p>
 <p className={styles.msgText}>Guided by the Quadrennium Goals, we are committed to strengthening communities, building resilient
youth, and nurturing nature. Our ecumenical and interfaith efforts further our vision of unity, justice, andsocial change. Rooted in faith and service, the YWCA of Delhi is a space of transformation where voices
rise, talents bloom, and dreams take flight. Let us continue this journey together, building a future where every woman not only survives but truly thrives.
                            </p>

<div className={styles.quoteSection} style={{marginTop:40}}>

                        <div className={styles.quoteMark}>
                            “
                        </div>

                        <p className={styles.quoteText}>
                          Psalm 106:3 Blessed are those who act justly, who always do what is right.
                        </p>
                          

                    </div>
                    {/* Signature */}
                    <div className={styles.signature}>

                       

                        <h3>
                            Rhiya Varghese
                        </h3>

                        <span>
                            President — YWCA of Delhi
                        </span>

                    </div>

                </div>
            </section>
        </>
    );
};

export default MessagePresident;