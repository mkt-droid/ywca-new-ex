"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function HopeSlider() {
  const hopeCards = [
    {
      id: 1,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-1.jpg',
      title: 'A new leaf of life',
      desc: 'A 25year old woman got admitted in Maatritav Chhaya Shelter home, Jahangir Puri by P.S Roop Nagar. She was 5 months pregnant when she came to our center...',
      fullDesc: 'A 25year old woman got admitted in Maatritav Chhaya Shelter home, Jahangir Puri by P.S Roop Nagar. She was 5 months pregnant when she came to our center. She was an active case of substance abuse. She had self-harm tendency and withdrawal symptoms at the time of time of admission. She also had severe psychiatric symptoms as well which include difficulty in sleep,excessive mood swings, loss of interest, severe anxiety and so on.\nDuring her stay at shelter home it was observed that she kept on hitting her womb in aggression as she did not getting tobacco. There was language barrier as well in this case as she didn’t speak and understand Hindi language. She spoke her native language and hence communication was limited. Regular counseling session was rendered to her and communication was done through non-verbal gestures. After few months of her stay, her psychiatric symptoms as well as self harm tendency declined gradually. Proper medical and psychological intervention was provided to her and she delivered a baby boy on 16/01/2022. Both the baby and the mother were safe & healthy after the delivery. As there was language barrier in this case, our search for tracing her family couldn’t work well and our efforts were went into vain for a while. After regular interaction and counseling sessions, we got a clue that she might hails from Nepal or Bihar and we approached KIN India organization for seeking help regarding her rehabilitation. Thereafter, with the efforts, coordination and continuous support of Nepal Embassy and KIN India Organization we traced her family and we came to know that she belongs from Nepal and not from Bihar which she was saying earlier that she might be from Bihar but she was unable to mention her whereabouts. Thereafter, she along with her baby was successfully discharged and handover to KIN India staff for her repatriation to Nepal on 28/06/2023. Later on, she will be reunite with her family after reaching NEPAL.'
    },
    {
      id: 2,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-2.jpg',
      title: 'A home away from home',
      desc: 'A 19-year-old girl experienced acute emotional trauma and distress after being abandoned by her boyfriend upon disclosing her pregnancy. Her situation worsened...',
      fullDesc: 'A 19-year-old girl experienced acute emotional trauma and distress after being abandoned by her boyfriend upon disclosing her pregnancy. Her situation worsened when she attempted to share the news with her family, resulting in a severe emotional breakdown. Feeling hopeless and overwhelmed, she reached out to a women’s helpline counselor for support. With the counselor’s assistance, she was brought to Maatritva Chhaya Shelter Home for care and protection.\nDuring her stay, she was provided with regular and intensive individual counseling sessions to help her cope with emotional distress. At the same time, she received appropriate antenatal medical care to ensure the health and well-being of both mother and child. Family counseling sessions were also conducted for her parents to foster understanding, acceptance, and emotional healing.\nAfter giving birth to a healthy baby boy, and considering her circumstances as an unwed mother, she made the difficult but voluntary decision to surrender the child for adoption through the Child Welfare Committee (CWC). Though emotionally challenging, the decision was driven by her vulnerable situation and the lack of family and social support to raise the child.\nShe was eventually reunited with her family. Her stay at Maatritva Chhaya was marked by holistic emotional, medical, and social support, which played a critical role in her recovery and reintegration into her family and community.'
    },
    {
      id: 3,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-3.jpg',
      title: 'Uganda diaries',
      desc: 'A 21year old young woman was brought to Shelter home for care and support. She belongs from Uganda and arrived to India the very first time...',
      fullDesc: 'A 21year old young woman was brought to Shelter home for care and support. She belongs from Uganda and arrived to India the very first time. She belongs from Lower middle class family and her father passed away when she was too young. She was staying with her mother and 06 siblings in Uganda. She was a hair stylist by profession and helped her family financially as much as she can.\nOne fine day, some lady in Uganda enticed her to go to India and made false promise of giving better employment with good pay. Upon arrival to India, she was forced into prostitution somewhere in Punjab. Later on, she was rescued from that miserable place with the help of an organization which is working for rescuing the victims of Human Trafficking and brought to Shelter Home. She is the survivor of human trafficking and forced sexual assault.\nIn the initial days of her stay at shelter home, she kept herself isolate from other residents and staff because of her past traumatic history & nationally and found it difficult to communicate with other residents because of the language barrier. Hence, regular counseling sessions and interactive group sessions were taken to make her feel comfortable. Gradually, she coped up with the situation and found out ways to communicate with fellow residents and easily interacted with staff members too. Later on, medical assistance and treatment was also provided to her during her stay at shelter home for her irregular menstrual cycle and other medical issues. She actively participated in Independence Day Celebration and other vocational activities at the shelter home as well. She stayed at shelter home for duration of 02months and was handed over to the concerned officials for her successful repatriation to her country Uganda.'
    },
    {
      id: 4,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-4.jpg',
      title: 'Emotional trauma relived',
      desc: 'A 22 year old, 5 months pregnant young girl from Chhattisgarh was brought to MC shelter home, Sarai Rohilla by police. After 2days of admission it was came to know...',
      fullDesc: 'A 22 year old, 5 months pregnant young girl from Chhattisgarh was brought to MC shelter home, Sarai Rohilla by police. After 2days of admission it was came to know that she had maggots(insects) in her private parts and she had severe physical pain in it. The extent of pain was that high that she couldn’t even sleep, sit or stand straight. She was crying in pain which made other residents and staff so emotional after seeing her in pain. Her mental status examination was also not appropriate as per her age. Later on we came to know that she had took psychiatric treatment as well earlier before coming to shelter home. She was in physical as well as in emotional pain since the day she became pregnant. During her stay in the shelter home, she was provided with intensive nursing care for her maggots’ treatment, alongside medical care was provided for her pregnancy and constant psychological counseling were also rendered for her emotional pain. She was also encouraged to engage in vocational activities to divert her mind from her emotional and physical pain. Gradually her physical pain improved and she started sharing about her family details and after the continuous efforts and regular coordination between the staff and the police, her family was traced. After having a conversation with her family we came to know that she had ‘run away tendency’ and escaped from home quite a number of times and was staying roadside in different states.'
    },
    {
      id: 5,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-5.jpg',
      title: 'Story of triumph',
      desc: 'It’s a story of tolerance of a 54years old woman, hails from UP who got married 30years ago and belongs from a very humble and supportive family...',
      fullDesc: 'It’s a story of tolerance of a 54years old woman, hails from UP who got married 30years ago and belongs from a very humble and supportive family. She is a very kind-hearted lady who dedicated her whole married life for her in-laws. However destiny was not in her favour at all. She suffered a lot of verbal abuse and inappropriate behavior from her FIL for a period of 20-25years. But her limit of tolerance comes to an end when her FIL tried to touch her inappropriately on a dark night due to some family conflict. That was the night she decided to end her life and escaped her house with thousands of mixed emotions and thoughts in her mind. She started walking on railway track without food and water till miles until she was rescued by police and placed in RKAK shelter home.\nIn the beginning, she didn’t utter a single word about herself and what mental trauma she faced inside her family. She was provided with regular counseling session to gain her trust and build trust worthy relationship with the staff. After 3days of her stay in shelter, she cried out loud in tears and vent out her 25years of struggle with teared eyes throughout. That sharing of her inner self was the turning point in her life. Her emotions and feelings were acknowledged in a professional way and she was provided with safe space where she can feel free to be herself without any boundaries and pressure. She realized her own capabilities and strengths during her stay in shelter home. She turned out to be a confident and independent woman from the helpless one for her future life.'
    },
    {
      id: 6,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-6.jpg',
      title: 'Shining bright',
      desc: 'It is a story of a 32year old young woman who has spent all her childhood in poverty yet managed to study in those circumstances on self earned finances...',
      fullDesc: 'It is a story of a 32year old young woman who has spent all her childhood in poverty yet managed to study in those circumstances on self earned finances. She got married and gave birth to a baby girl after 15months of her marriage. She was a victim of severe Domestic Violence including physical, verbal and sexual assault since after 6months of marriage. Her husband’s mental condition was also not being disclosed by the-in-laws before marriage and with the passage of time his condition become worse and he started torturing her wife in any way he can whether physically, emotionally or sexually. She on the other hand, had some bright plans for future and her determination towards her planned goals encouraged her to break the silence and to do something for self. She ran away from her house and landed in RKAK shelter home. During her stay at shelter home, she found herself free and independent. She shared her struggle and challenges she faced at home with shelter staff and felt very relaxed. She received proper guidance and support from shelter staff and after assessing her capabilities and interest she was offered a respected Job and joined the said job. She is now living a happy and independent life without the fear of her husband and completely overcome her past trauma as well.'
    },
    {
      id: 7,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-7.jpg',
      title: 'A fresh breeze of life',
      desc: 'In early December 2024, a 21year old was admitted to the Maatritva Chhaya Shelter Home in Sarai Rohilla through Adarsh Nagar police station...',
      fullDesc: 'In early December 2024, a 21year old was admitted to the Maatritva Chhaya Shelter Home in Sarai Rohilla through Adarsh Nagar police station. As an unwed mother, She was placed in institutional care because her family was bound with streriotypes and stigma and denied to provide the necessary medical support during her pregnancy. While there was a preliminary understanding that the baby would be placed for adoption after birth, the situation shifted dramatically following the delivery of a baby girl on December 15, 2024. She exercised her maternal right to keep her daughter, a decision that has led to a total breakdown in communication with her family, who currently refuse to accept both mother and child into their home.\nThe case is further complicated by a critical medical crisis that Soni was battling with Tuberculosis (TB). Her health has not shown the expected improvement under the current medical course, and the congregate living environment of a shelter home is ill-suited for the specialized care and recovery her condition demands. Despite repeated counseling efforts to bridge the gap between the lady and her family, no mutual agreement for reunification has been reached.\nAfter several family counseling sessions and individual counseling sessions rendered to the lady, she remained still to keep her baby with herself and a mutual consent was made between the two families of marrying the couple. Afterwhich, a legal marriage took place and the lady was successfully handover to her family along with her baby girl and reunited with her in-laws later.'
    },
    {
      id: 8,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-8.jpg',
      title: 'A brighter tomorrow',
      desc: 'A 37 years old woman was placed in Maatritav Chhaya Shelter Home through Sabzi Mandi Police Station. At the time of admission, she was four months pregnant...',
      fullDesc: 'A 37 years old woman was placed in Maatritav Chhaya Shelter Home through Sabzi Mandi Police Station. At the time of admission, she was four months pregnant and did not furnish any details regarding her family background or residence. After admission, her medical check-up (ANC) was done, and she was provided with a safe environment, food, and regular care. She delivered a baby boy at Hospital. The baby was very weak at the time of birth, but with intensive care and attention from the staff, his health improved gradually. Considering lady’s mental health condition, her treatment was continued at IBHAS (Institute of Human Behaviour and Allied Sciences) where she was prescribed a need of regular psychiatric medication. Her counseling was conducted along with medications, which brought gradual positive changes in her behavior and thinking. Later on, when she was diagnosed with Hepatitis, her treatment was carried from another Hospital. These consistent efforts brought steady improvement in both her physical and mental health conditions. The institution also made continuous efforts to trace her family. Punjab Police and the village Sarpanch assisted in this process. After much effort, her family was finally located. The family revealed that she had been missing for the past 10-11 years and had been suffering from mental illness for many years. However, when the family met her again, they were very happy to see her condition had improved significantly. She was already a mother to four children, and due to her mental instability and dependency on medication, it was not possible for her to raise the newborn baby. Therefore, to secure the child’s future, the baby was surrendered for adoption under the care of CWC ensuring his upbringing and education in a safe healthy environment. On 26th August, she was discharged from Maatritav Chhaya shelter home and reunited with her beloved family after 11years. It was such a great milestone for all of us.'
    },
    {
      id: 9,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-9.jpg',
      title: 'The survivor',
      desc: 'A 26year old young woman came to MaatritavChhaya Shelter Home, Sarai Rohilla through BOSCO-UNHCR. She was 6months pregnant when she arrived in our center...',
      fullDesc: 'A 26year old young woman came to MaatritavChhaya Shelter Home, Sarai Rohilla through BOSCO-UNHCR. She was 6months pregnant when she arrived in our center and was HIV positive. She was a survivor of sexual assault. Her both parents passed away when she was very young and since then her uncle was taking care of her. She came to Delhi in 2011 for the first time and since then was working as a domestic helper at different location. During her stay at shelter home, counseling session were provided to her to make her adapt to the shelter home environment as she was having difficulty in communicating because of language barrier. Complete medical intervention, wholesome nutritious food and empathetic environment was provided to her for the well-being of the mother and her baby. She was also encouraged to do some sort of light vocational activities just to divert her mind from her past trauma. She did really well in that too. She delivered a baby boy and both the mother and the child were healthy after the delivery. Before and after her delivery, regular counseling session were rendered to her regarding maintaining her health and personal hygiene. She was also counseled for postpartum symptoms of delivery as she has undergone a caesarian section delivery. She was then transferred to other organization after 5months of her delivery and was discharged from our shelter home on 8/12/22 along with her 5months old baby boy. She was very happy and satisfied with our services and the way we provided care to her in her difficult times. She was also entitled to pension scheme for HIV patients before leaving from shelter home with the continuous efforts and discussion held between the UNHCR and shelter staff which was such a relief to her in her difficult time.'
    },
    {
      id: 10,
      image: '/images/shelter-homes/Case-study-thumbnails/Case-study-10.jpg',
      title: 'Dignity regained',
      desc: 'At the tender age of twenty-two, Soni’s life was violently suffered in Uttar Pradesh. A survivor of relentless domestic abuse, she faced her darkest moment...',
      fullDesc: 'At the tender age of twenty-two, Soni’s life was violently suffered in Uttar Pradesh. A survivor of relentless domestic abuse, she faced her darkest moment when her husband, after a severe assault, threw her and her two toddler daughters out of their home. Terrified and stripped of her dignity, Soni boarded a train with no destination in mind, desperate only to escape the emotional and physical pain. When she stepped onto the platform in Delhi the next morning, she was destitute and lost, but fate intervened in the form of the One Stop Center team, who guided her from the chaos of the streets to the safety of the Maatritav Chhaya Shelter Home.\nWithin the walls of the shelter, Soni began the slow process of healing. Her immediate anxiety was quelled as her younger daughter received urgent medical care for a painful skin condition, allowing Soni to finally breathe with relief. Surrounded by compassion, she channeled her resilience into learning new skills, mastering the art of stitching clothes, knitting sweaters, and crafting intricate Rakhis and bangles. These vocational activities were not just tasks; they were acts of rebuilding her self-worth, proving that she was capable and talented despite the way she had been treated.\nAs she regained her strength, Soni made a courageous choice during her counseling sessions: she wanted to give her family one last chance. Respecting her dignity, the Center In-charge utilized digital tools and the assistance of the District Mahila Police Station to track down her husband in Uttar Pradesh. The center didn’t just facilitate a return; they ensured a transformation, providing the husband with rigorous telephonic counseling to address his violent behavior. When he arrived at the shelter, he found a changed woman, and after a successful intervention, Soni and her daughters were reunited with him, leaving the shelter not as victims, but as a family given a renewed hope for a peaceful future.'
    }
  ];

  // We add the original banner as the first slide, so it's not lost
  const slides = [
    {
      id: 'banner',
      isBanner: true,
      image: '/images/fund-raising/small-help.png',
      tagline: 'SUPPORT A CAUSE',
      title: 'Help a Woman Find Safety, Dignity and Hope',
      desc: 'Behind every shelter home is a woman rebuilding her life. Your contribution can help provide safety, care and support to women survivors of violence as they begin their journey towards a better future.'
    },
    ...hopeCards.map(c => ({
      ...c,
      isBanner: false,
      tagline: 'BRINGING HOPE TO LIVES'
    }))
  ];

  const [selectedCard, setSelectedCard] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCard]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.causeBannerSection}>
      <div className="container">
        <div className={styles.sliderContainer}>
          {/* Navigation Arrows for Carousel */}
          <button className={styles.sliderArrowLeft} onClick={scrollLeft}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className={styles.sliderArrowRight} onClick={scrollRight}>
            <i className="bi bi-chevron-right"></i>
          </button>

          {/* Carousel Track */}
          <div 
            ref={sliderRef}
            className={styles.hopeCardsRow}
            style={{ 
              display: 'flex', 
              overflowX: 'auto', 
              scrollSnapType: 'x mandatory', 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              gap: '0'
            }}
          >
          {slides.map((slide, idx) => (
            <div key={slide.id} style={{ flex: '0 0 100%', scrollSnapAlign: 'start', padding: '0 5px' }}>
              <div className={styles.causeBannerCard} style={{ margin: '0' }}>
                <div className={styles.causeBannerBgWrapper}>
                  <img src={slide.image} alt={slide.title} />
                </div>

                <div className={`row w-100 g-0 align-items-center ${styles.causeContentWrapper}`}>
                  <div className="col-lg-6 p-4 p-md-5">
                    <span className={styles.causeLabelHeader}>{slide.tagline}</span>
                    <h2 className={styles.causeTitleHeader}>{slide.title}</h2>
                    <p className={styles.causeDesc}>{slide.fullDesc || slide.desc}</p>
                    
                    <div className="mt-4 d-flex flex-nowrap gap-3" style={{ whiteSpace: 'nowrap' }}>
                      {!slide.isBanner && (
                        <button className={styles.outlinePurpleBtn} onClick={() => setSelectedCard(slide)}>
                          READ MORE
                        </button>
                      )}
                      <Link href="/fund-raising-publicity/support-a-cause" className={styles.outlinePurpleBtn}>
                        SUPPORT THIS CAUSE
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className={styles.modalOverlay} onClick={() => setSelectedCard(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setSelectedCard(null)}>
              <i className="bi bi-x-lg"></i>
            </button>
            <div className={styles.modalBody}>
              <div className={styles.modalImageWrapper}>
                <img src={selectedCard.image} alt={selectedCard.title} />
              </div>
              <div className={styles.modalTextContent}>
                <h2 className={styles.modalTitle}>{selectedCard.title}</h2>
                <p className={styles.modalDesc}>{selectedCard.fullDesc || selectedCard.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
