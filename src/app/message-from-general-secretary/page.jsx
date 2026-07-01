'use client'
import InnerBanner from "@/components/partials/InnerBanner";
import styles from '@/styles/MessagePresident.module.css';

const MessageGeneralSecretary = () => {
    return (
        <>
            <section className={styles.page}>
                <div className="container">
                    {/* Hero */}
                    <div className={styles.hero}>
                        <div className={styles.heroContent}>
                            <div className={styles.sectionHeading} style={{marginBottom:30}}>
                                <h2>
                                    <span className={styles.highlight}> General Secretary</span> Message
                                </h2>
                            </div>

                            <p className={styles.heroText}>
                                As I reflect on the journey of the past year, I feel humbled for the work we have done, for the impact we have made, for the collective growth and resilience we have built, smiles we have brought to many faces and the blessings of the Almighty we have received. The year 2024 – 2025, with all its achievements, learning and challenges has deepened our conviction that empowerment, when rooted in faith and collective action, has the power to transform lives and communities.
                            </p>
                            <div className={styles.quoteSection} style={{marginTop:30}}>
                                <div className={styles.quoteMark}>
                                    “
                                </div>
                                <p className={styles.quoteText}>
                                    Remaining steadfast to our commitment to gender equality and social inclusion, we carried forward our mission through the three pillars of Strengthening Communities, Building Youth, and Nurturing Nature.
                                </p>
                            </div>
                        </div>

                        <div className={styles.heroImage}>
                            <div className={styles.imageBorder}></div>
                            <img
                                src="/images/board-member-thumb.jpg"
                                alt="General Secretary"
                            />
                        </div>
                    </div>

                    <p className={styles.msgText} style={{marginBottom:15}}>
                        Our Community Resource Centres continue to thrive as non-judgmental, safe spaces where women come together to claim their rights, access entitlements, skilling and livelihood opportunities, strengthen their agency and resilience. In the three Shelter Homes, women in distress and unimaginable situations of violence have found safety, solidarity, healing and pathways to reintegrate. Women survivors of violence, abandonment, and trafficking were supported with dignity and compassion.
                    </p>
                    
                    <p className={styles.msgText} style={{marginBottom:15}}>
                        Youth empowerment remained a cornerstone. Hundreds of young people were equipped with employable skill training, industry-linked skills, and life orientation—preparing them for taking up leadership and being responsible citizens. Initiatives addressing career exploration, financial literacy sessions, life skill education, gender equality, sexual and reproductive health rights have enabled them to envision futures shaped by resilience and responsibility. Through these efforts, many first-generation learners and earners began rewriting the narratives of their lives differently.
                    </p>
                    
                    <p className={styles.msgText} style={{marginBottom:15}}>
                        We have dived deeper and made more conscious efforts in strengthening our efforts towards sustainability and care for the nature. While the Eco-Justice Lab has enabled youth to lead sustainable practices, and The ReHome Store became a symbol of dignity and mindful consumption. These were part of a wider effort where communities embraced composting, recycling, and eco-entrepreneurship.
                    </p>

                    <p className={styles.msgText} style={{marginBottom:15}}>
                        This journey was not without challenges. Managing human resource and financial difficulties have led us towards navigating and finding new ways of collective work and system strengthening. Each challenge became an opportunity to strengthen our systems, invest in our staff, and remain faithful to the vision entrusted to us. We learned once again that resilience lies in community, teamwork, and God’s grace.
                    </p>

                    <p className={styles.msgText}>
                        I extend my sincere gratitude to the President, the Board of Management, the Committees, members, staff, partners, and well-wishers for their unwavering dedication and support. The YWCA of Delhi will continue to stand alongside women, children, and youth, enabling them to rise with dignity, lead with courage, and live with equality.
                    </p>
                    
                    <p className={styles.msgText} style={{marginTop:15, fontWeight:'bold'}}>
                        The legacy continues.
                    </p>

                    {/* Signature */}
                    <div className={styles.signature} style={{marginTop: 40}}>
                        <h3>
                            Pragya Mohanty
                        </h3>
                        <span>
                            General Secretary — YWCA of Delhi
                        </span>
                    </div>

                </div>
            </section>
        </>
    );
};

export default MessageGeneralSecretary;
